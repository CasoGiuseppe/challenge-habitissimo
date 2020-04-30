<template>
  <main id="app">
    <router-view
      name = "header"
      :mode = "$route.name"
      :isPageOnTop = "isPageOnTop"/>
      <br><br>
    <router-view/>
  </main>
</template>
<script>
export default {
  name: 'app',

  data() {
    return {
      isPageOnTop: true,
    };
  },

  methods: {
    handleScroll() {
      const winYScroll = window.scrollY;
      this.isPageOnTop = !window.matchMedia('(max-width: 600px)').matches ? (winYScroll >= 0 && winYScroll < 50) || winYScroll < 0 : null;
    },
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },

  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style lang="scss" src="@/styles/index.scss" />
