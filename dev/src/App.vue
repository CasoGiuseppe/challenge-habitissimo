<template>
    <main
      id="app"
      :class="[
        isBlocked ? 'isBlocked' : null,
        !loaded && !uikit? 'isLoading' : null,
      ]">
        <template v-if="loaded || uikit">
          <router-view
            id="header"
            name = "header"
            :mode = "$route.name"
            :isPageOnTop = "isPageOnTop"/>
          <router-view
            id="main"
            @loaded="loaded = true"/>
          <router-view
            name="footer" />
        </template>
    </main>
</template>
<script>
export default {
  name: 'app',

  computed: {
    loaded() {
      return this.$store.state.categories.funnel.loaded;
    },

    uikit() {
      return this.$route.name === 'uikit';
    },
  },

  data() {
    return {
      isPageOnTop: true,
      isBlocked: false,
    };
  },

  methods: {
    // detect scroll position
    //  and set state
    handleScroll(e) {
      const winYScroll = window.scrollY;
      this.isPageOnTop = !(winYScroll >= 50);
    },
  },

  created() {
    // recive event to block window
    this.$eventHub.$on('blocked', (value) => { this.isBlocked = value; });
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
