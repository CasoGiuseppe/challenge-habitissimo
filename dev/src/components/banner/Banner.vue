<template>
  <aside
    :class="[
      'banner',
      isSecondary ? 'banner--isSecondary' : null
    ]">
    <ul
      class="banner__wrap">
      <li
        v-if="hasIcon">
        <BaseIcon
          :name="hasIcon"
          :size=" !mobileDevice ? 'xxlarge' : 'xlarge'"
          color="light"/>
      </li>
      <li>
        <h3
          class="banner__title"
          v-if="$slots.title"
          v-html="$slots.title[0].text">
        </h3>
        <p
          class="banner__text"
          v-if="$slots.description"
          v-html="$slots.description[0].text">
        </p>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'Banner',

  components: {
    BaseIcon: () => import(/* webpackChunkName: "BaseIcon" */ '@/components/base-icon/BaseIcon'),
  },

  computed: {
    mobileDevice() {
      return window.matchMedia('(max-width: 600px)').matches;
    },
  },

  props: {
    isSecondary: {
      type: Boolean,
    },

    hasIcon: {
      type: String,
    },
  },
};
</script>

<style lang='scss' scoped src= './Banner.scss'></style>
