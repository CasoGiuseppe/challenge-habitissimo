<template>
  <button
    :class="[
      'base-button',
      isSecondary ? 'base-button--isSecondary' : null,
      isFullsize ? 'base-button--isFullsize' : null,
    ]"
    :disabled="isDisabled"
    @click="handleClickState">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',

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
  },

  methods: {
    handleClickState(e) {
      this.$emit('click', e);
    },
  },
};
</script>

<style lang='scss' scoped src= './BaseButton.scss'></style>
