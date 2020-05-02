<template>
  <main
    id="app"
    :class="[
      isBlocked ? 'isBlocked' : null,
    ]">
    <router-view
      name = "header"
      :mode = "$route.name"
      :isPageOnTop = "isPageOnTop"/>
    <router-view/>
  </main>
</template>
<script>
export default {
  name: 'app',

  data() {
    return {
      isPageOnTop: true,
      isBlocked: false,
    };
  },

  methods: {
    handleScroll(e) {
      const winYScroll = window.scrollY;
      this.isPageOnTop = !window.matchMedia('(max-width: 600px)').matches ? !(winYScroll >= 50) : null;
    },
  },

  created() {
    this.$eventHub.$on('blocked', (value) => {
      this.isBlocked = value;
    });
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
