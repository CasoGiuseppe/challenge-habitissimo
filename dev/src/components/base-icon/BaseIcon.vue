<template>
  <svg
    :class="[
      'base-icon',
      size ? `base-icon--is-${size}` : null,
      color ? `base-icon--is-${color}` : null,
    ]"
    viewBox="0 0 24 24">
    <path :d="name" />
  </svg>
</template>

<script>

export default {
  name: 'BaseIcon',

  props: {
    name: String,
    size: String,
    color: String,
  },
};
</script>

<style lang='scss' scoped src= './BaseIcon.scss'></style>
