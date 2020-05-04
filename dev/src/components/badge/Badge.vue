<template>
    <article
      :class="[
        'badge',
        isLoading ? 'badge--isLoading' : null,
      ]">
        <h2
          v-if="$slots.title"
          class="badge__title">
          <slot name="title" />
        </h2>
      <h3
        v-if="$slots.subtitle"
        class="badge__subtitle">
        <slot name="subtitle" />
      </h3>
      <p
        v-if="$slots.message"
        class="badge__message">
        <slot name="message" />
      </p>
    </article>
</template>

<script>
export default {
  name: 'Badge',

  props: {
    id: {
      type: String,
    },

    isLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang='scss' scoped src= './Badge.scss'></style>
