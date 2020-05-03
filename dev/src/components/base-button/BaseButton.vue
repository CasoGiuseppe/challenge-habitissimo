<template>
  <button
    :class="[
      'base-button',
      isSecondary ? 'base-button--isSecondary' : null,
      isLight ? 'base-button--isLight' : null,
      isFullsize ? 'base-button--isFullsize' : null,
      isReplaced && isReplaced.state ? 'base-button--isReplaced' : null,
    ]"
    :style="{
      'min-width' : hasMinWidth ? `${hasMinWidth}` : null,
    }"
    :disabled="isDisabled"
    @click="handleClickState">
    <span class="base-button__label"><slot /></span>
    <span
      v-if="isReplaced && isReplaced.state"
      class="base-button__icon">
      <BaseIcon
        :name="isReplaced.icon"
        size="small"
        :color="isReplaced.color"/>
    </span>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',

  components: {
    BaseIcon: () => import(/* webpackChunkName: "BaseIcon" */ '@/components/base-icon/BaseIcon'),
  },

  methods: {
    handleClickState(e) {
      this.$emit('click', e);
    },
  },

  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },

    isSecondary: {
      type: Boolean,
      default: false,
    },

    isFullsize: {
      type: Boolean,
      default: false,
    },

    isLight: {
      type: Boolean,
      default: false,
    },

    hasMinWidth: {
      type: String,
    },

    isReplaced: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang='scss' scoped src= './BaseButton.scss'></style>
