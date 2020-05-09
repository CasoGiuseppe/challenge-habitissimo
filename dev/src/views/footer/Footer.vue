<template>
  <footer class="footer">
    <router-link
      class="footer-router-link"
      :to="{ name: 'budget' }">
      &copy; {{$t(`message.company`)}}
    </router-link>
    <div class="grid">
      <div class="grid__row">
        <!-- UI footer navigation -->
        <Navigation
          isFooter
          class="grid__col-xs-12"/>
        <!-- ** -->
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'Footer',

  components: {
    Navigation: () => import(/* webpackChunkName: "Navigation" */ '@/views/navigation/Navigation'),
  },
};
</script>

<style lang='scss' scoped src= './Footer.scss'></style>
