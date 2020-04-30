<template>
  <nav
    :class="[
      'navigation',
      isMenuActive ? 'navigation--isMenuActive' : null
    ]">
    <!-- hamburger menu trigger -->
    <button
      class="navigation__mobile-trigger"
      @click="isMenuActive = !isMenuActive">
      <span></span>
    </button>

    <ul class="navigation__routers">
      <li class="navigation__router">1</li>
      <li class="navigation__router">2</li>
      <li class="navigation__router">3</li>
      <li class="navigation__router">4</li>
      <li class="navigation__router">5</li>
      <li class="navigation__router">6</li>
      <li class="navigation__router">7</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav',

  data() {
    return {
      isMenuActive: false,
    };
  },
};
</script>

<style lang='scss' scoped src= './Navigation.scss'></style>
