<template>
    <main
      id="app"
      :class="[
        isBlocked ? 'isBlocked' : null,
        categories.length === 0 ? 'isLoading' : null,
      ]">
        <template v-if="categories.length > 0">
          <router-view
            name = "header"
            :mode = "$route.name"
            :isPageOnTop = "isPageOnTop"/>
          <router-view/>
          <router-view
            name="footer" />
        </template>
    </main>
</template>
<script>
import { Categories } from '@/services/http/Categories';
import { mapActions, mapGetters } from 'vuex';
import { Constants } from '@/constants.js';
import { LocalStorage } from '@/services/storage/localStorage';

export default {
  name: 'app',

  data() {
    return {
      isPageOnTop: true,
      isBlocked: false,
      categories: [],
    };
  },

  computed: {
    ...mapGetters('categories', [
      'getAllCategories',
      'getActiveState',
    ]),
  },

  methods: {
    ...mapActions('categories', [
      'fillLocalCategories',
      'changeCompletedState',
      'changeActiveState',
    ]),

    handleScroll(e) {
      const winYScroll = window.scrollY;
      this.isPageOnTop = !(winYScroll >= 50);
    },

    async fillLocalStorageCategories() {
      this.categories = await Categories.getAllCategories();
      for (let node of this.categories.map((category, index) => ({ id: index, name: category.name, slug: category.slug }))) {
        this.fillLocalCategories(node);
      }

      // this.$router.push({ name: 'budget', params: { category: Object.keys(this.getAllCategories)[0], step: 'Step1' } });

      this.handleLocalStorage();
    },

    handleLocalStorage() {
      // first route link
      // get values form localstorage if exist
      const storage = JSON.parse(localStorage.getItem(Constants.LOCALSTORAGE));
      const localstorageExist = storage && storage.values;
      let path = Object.keys(this.getAllCategories)[0];
      let step = Constants.DEFAULTSTEP;


      if (LocalStorage.exist()) {
        const { category, datas } = LocalStorage.exist();

        // set router params with localstorage
        path = category[0].name;
        step = datas[datas.length - 1].name;

        // set init state of active item
        this.changeActiveState({
          category: path,
          direction: 'next',
        });
      }

      this.$router.push({ name: 'budget', params: { category: path, step } });
    },
  },

  created() {
    this.$eventHub.$on('blocked', (value) => {
      this.isBlocked = value;
    });
    this.fillLocalStorageCategories();
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },

  beforeDestroy() {
    this.$eventHub.$off('blocked');
  },

  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style lang="scss" src="@/styles/index.scss" />
