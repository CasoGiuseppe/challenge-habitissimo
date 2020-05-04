<template>
    <article
      :class="[
        'badge',
        isLoading ? 'badge--isLoading' : null,
        isLight ? 'badge--isLight' : null,
        arrow ? `badge--hasArrow-${arrow.direction}`:null,
        $slots.image ? 'badge--hasImage' : null,
      ]">
      <span
        v-if="$slots.image"
        class="badge__image">
        <slot name="image" />
      </span>
      <transition
        mode="out-in"
        name="change-move">
          <h2
            v-if="$slots.title"
            :key="id"
            class="badge__title">
            <slot name="title" />
          </h2>
      </transition>
      <transition
        mode="out-in"
        name="change-move">
        <h3
          v-if="$slots.subtitle"
          :key="id"
          class="badge__subtitle">
          <slot name="subtitle" />
        </h3>
      </transition>
      <transition
        mode="out-in"
        name="change-move">
        <h4
          v-if="$slots.date"
          :key="id"
          class="badge__date">
          <slot name="date" />
        </h4>
      </transition>
      <transition
        mode="out-in"
        name="change-fade">
        <p
          v-if="$slots.message"
          :key="id"
          class="badge__message">
          <slot name="message" />
        </p>
      </transition>
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

    isLight: {
      type: Boolean,
      default: false,
    },

    arrow: {
      type: Object,
    },
  },
};
</script>

<style lang='scss' scoped src= './Badge.scss'></style>
