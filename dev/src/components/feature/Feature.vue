<template>
  <article
    :class="[
      'feature',
      hasIcon ? 'feature--hasIcon' : null
    ]">
    <h3 class="feature__title"
      v-if="$slots.title">
       <span
        v-if="hasIcon"
        class="feature__icon">
        <BaseIcon
          :name="hasIcon"
          size="small"
          color="light"/>
      </span>
      <span v-html="$slots.title[0].text"></span>
    </h3>
    <p
      class="feature__text"
      v-if="$slots.description"
      v-html="$slots.description[0].text">
    </p>
    <div
      class="feature__action"
      v-if="$slots.action">
      <slot name="action" />
    </div>
  </article>
</template>

<script>
export default {
  name: 'Feature',

  components: {
    BaseIcon: () => import(/* webpackChunkName: "BaseIcon" */ '@/components/base-icon/BaseIcon'),
  },

  props: {
    hasIcon: {
      type: String,
    },
  },
};
</script>

<style lang='scss' scoped src= './Feature.scss'></style>
