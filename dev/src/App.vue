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
      isBlocked: false,
    };
  },

  methods: {
    handleScroll() {
      const winYScroll = window.scrollY;
      this.isPageOnTop = !window.matchMedia('(max-width: 600px)').matches ? (winYScroll >= 0 && winYScroll < 50) || winYScroll < 0 : null;
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
