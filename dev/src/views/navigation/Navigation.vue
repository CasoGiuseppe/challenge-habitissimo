<template>
  <nav
    :class="[
      'navigation',
      isMenuActive ? 'navigation--isMenuActive' : null,
      isFooter ? 'navigation--isFooter' : 'navigation--isHeader',
      isScrolled ? 'navigation--isScrolled' : null,
    ]">
    <!--
      UI hamburger menu trigger
      active only on mobile device
    -->
    <button
      v-if="!isFooter"
      class="navigation__mobile-trigger"
      @click="isMenuActive = !isMenuActive">
      <span></span>
    </button>
    <!-- ** -->

    <!-- UI router links navigation -->
    <ul class="navigation__routers">
      <li
        v-for="(category, key, index) in getAllCategories"
        :key="category.slug"
        class="navigation__router"
        :style="{ 'transitionDelay' : `${index * .1}s`}"
      >
        <NavigationRouterLink
          :link="category.data.slug"
          :step="getCompletedState(category.data.slug).length > 0
                ? getCompletedState(category.data.slug)[getCompletedState(category.data.slug).length - 1].component
                : constants.DEFAULTSTEP"
          @click.native="gotoForm">
          <template>
            {{category.data.name}}
          </template>
        </NavigationRouterLink>
      </li>
    </ul>
    <!-- ** -->
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';
import { Constants } from '@/constants.js';
import VueScrollTo from 'vue-scrollto';

export default {
  name: 'Nav',

  components: {
    NavigationRouterLink: () => import(/* webpackChunkName: "NavigationRouterLink" */ '@/components/navigation-router-link/NavigationRouterLink'),
  },

  computed: {
    ...mapGetters('categories', [
      'getAllCategories',
      'getActiveState',
      'getCompletedState',
    ]),
  },

  data() {
    return {
      isMenuActive: false,
      constants: Constants,
    };
  },

  methods: {
    gotoForm() {
      const offset = document.querySelector('#header').offsetHeight;
      VueScrollTo.scrollTo('#main', 800, {
         easing: 'ease-out',
         offset: offset * -1,
      });
    },
  },

  props: {
    isFooter: {
      type: Boolean,
      default: false,
    },

    isScrolled: {
      type: Boolean,
      default: false,
    },
  },

  watch: {
    // check route change
    // to set actiive menu item
    $route(to, from) {
      this.isMenuActive = false;
    },

    // on menu open state
    // send emit to block
    // wrap scroll
    isMenuActive() {
      this.$eventHub.$emit('blocked', this.isMenuActive);
    },
  },
};
</script>

<style lang='scss' scoped src= './Navigation.scss'></style>
