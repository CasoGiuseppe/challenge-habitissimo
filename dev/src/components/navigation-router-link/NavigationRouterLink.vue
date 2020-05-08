<template>
  <router-link
    :class="[
      'navigation-router-link',
      $route.params.category === link ? 'navigation-router-link--is-active' : null,
    ]"
    :to="{ name: 'budget', params: { category: link, step: step }}"
    @mouseover.native="isHover = !isHover"
    @blur="isHover = !isHover">
    <transition
      mode="out-in"
      name="change-move">
        <span
          :key="link"
          class="navigation-router-link__label">
            <slot />
        </span>
    </transition>
  </router-link>
</template>

<script>
export default {
  name: 'NavigationRouterLink',

  data() {
    return {
      isHover: false,
    };
  },

  props: {
    link: {
      type: String,
      require: true,
    },

    step: {
      type: String,
      require: true,
    },
  },
};
</script>

<style lang='scss' scoped src= './NavigationRouterLink.scss'></style>
