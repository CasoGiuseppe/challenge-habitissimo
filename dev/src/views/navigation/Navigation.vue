<template>
  <nav
    :class="[
      'navigation',
      isMenuActive ? 'navigation--isMenuActive' : null
    ]">
    <!-- hamburger menu trigger -->
    <button
      class="navigation__mobile-trigger"
      @click="isMenuActive = !isMenuActive">
      <span></span>
    </button>

    <!-- router links navigation -->
    <ul class="navigation__routers">
      <li
        v-for="(category, index) of getAllCategories"
        :key="category.route"
        class="navigation__router"
        :style="{
          'transitionDelay' : `${index * .1}s`
        }">
        <NavigationRouterLink
          :link="category.route"/>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Nav',

  data() {
    return {
      isMenuActive: false,
    };
  },

  components: {
    NavigationRouterLink: () => import(/* webpackChunkName: "NavigationRouterLink" */ '@/components/navigation-router-link/NavigationRouterLink'),
  },

  computed: {
    ...mapGetters({
      getAllCategories: 'categories/getAllCategories',
      getSelectedCategories: 'categories/getSelectedCategories',
    }),
  },

  watch: {
    $route(to, from) {
      this.isMenuActive = false;
    },

    isMenuActive() {
      this.$eventHub.$emit('blocked', this.isMenuActive);
    },
  },
};
</script>

<style lang='scss' scoped src= './Navigation.scss'></style>
