<template>
  <nav
    :class="[
      'navigation',
      isMenuActive ? 'navigation--isMenuActive' : null,
      isFooter ? 'navigation--isFooter' : 'navigation--isHeader',
    ]">
    <!-- hamburger menu trigger -->
    <button
      v-if="!isFooter"
      class="navigation__mobile-trigger"
      @click="isMenuActive = !isMenuActive">
      <span></span>
    </button>

    <!-- router links navigation -->
    <ul class="navigation__routers">
      <li
        v-for="(category, index) of getAllCategories"
        :key="category.slug"
        class="navigation__router"
        :style="{
          'transitionDelay' : `${index * .1}s`
        }">
        <NavigationRouterLink
          :link="category.data.slug"
          :step="getActiveState(category.data.slug)[0].component">
          <template>
            {{category.data.name}}
          </template>
        </NavigationRouterLink>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Nav',

  components: {
    NavigationRouterLink: () => import(/* webpackChunkName: "NavigationRouterLink" */ '@/components/navigation-router-link/NavigationRouterLink'),
  },

  computed: {
    ...mapGetters('categories', [
      'getAllCategories',
      'getActiveState',
    ]),
  },

  data() {
    return {
      isMenuActive: false,
    };
  },

  methods: {
    getCategoryStep(category) {
      return this.getActiveState(category);
    },
  },

  props: {
    isFooter: {
      type: Boolean,
      default: false,
    },
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
