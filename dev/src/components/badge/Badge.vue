<template>
    <article
      :class="[
        'badge',
        isLoading ? 'badge--isLoading' : null,
        isLight ? 'badge--isLight' : null,
        hasIcon ? 'badge--hasIcon' : null,
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
        :name="isAnimated ? 'change-fade' : null">
        <div
          class="badge__enter-key"
          :key="id">
          <h2
            v-if="$slots.title"
            class="badge__title">
            <span
              v-if="hasIcon"
              class="badge__icon">
              <BaseIcon
                :name="hasIcon"
                size="small"
                color="light"/>
            </span>
            <span v-html="$slots.title[0].text"></span>
          </h2>

          <h3
            v-if="$slots.subtitle"
            class="badge__subtitle"
            v-html="$slots.subtitle[0].text">
          </h3>

          <h4
            v-if="$slots.date"
            class="badge__date"
            v-html="$slots.date[0].text">
          </h4>

          <p
            v-if="$slots.message"
            class="badge__message"
            v-html="$slots.message[0].text">
          </p>

          <div
            v-if="$slots.action"
            class="badge__action">
            <slot name="action" />
          </div>
        </div>
      </transition>
    </article>
</template>

<script>
export default {
  name: 'Badge',

  components: {
    BaseIcon: () => import(/* webpackChunkName: "BaseIcon" */ '@/components/base-icon/BaseIcon'),
  },

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

    hasIcon: {
      type: String,
    },

    isAnimated: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang='scss' scoped src= './Badge.scss'></style>
