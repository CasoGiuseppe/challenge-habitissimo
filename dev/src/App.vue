<template>
    <main
      id="app"
      :class="[
        isBlocked ? 'isBlocked' : null,
        categories.length === 0 ? 'isLoading' : null,
      ]">
        <template v-if="categories.length > 0">
          <router-view
            id="header"
            name = "header"
            :mode = "$route.name"
            :isPageOnTop = "isPageOnTop"/>
          <router-view id="main"/>
          <router-view
            name="footer" />
        </template>
    </main>
</template>
<script>
import { Categories } from '@/services/http/Categories';
import { mapActions, mapGetters } from 'vuex';
import { Constants } from '@/constants.js';

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
    ]),
  },

  methods: {
    ...mapActions('categories', [
      'fillLocalCategories',
      'changeCompletedState',
      'changeActiveState',
    ]),

    // detect scroll position
    //  and set state
    handleScroll(e) {
      const winYScroll = window.scrollY;
      this.isPageOnTop = !(winYScroll >= 50);
    },

    // callback from api REST categories
    async fillLocalStorageCategories() {
      this.categories = await Categories.getAllCategories();
      for (let node of this.categories.map((category, index) => ({ id: index, name: category.name, slug: category.slug }))) {
        this.fillLocalCategories(node);
      }

      // default valuet to route path
      let path = Object.keys(this.getAllCategories)[0];
      let step = Constants.DEFAULTSTEP;

      this.$router.push({ name: 'budget', params: { category: path, step } });
    },
  },

  created() {
    // recive event to block window
    this.$eventHub.$on('blocked', (value) => {
      this.isBlocked = value;
    });

    // fill local store with
    // api REST
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
