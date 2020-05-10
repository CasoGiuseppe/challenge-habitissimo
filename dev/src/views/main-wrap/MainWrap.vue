<template>
  <section class="main-wrap">
    <!--
      UI top section
      Views/component:
      1) form
      2) article
      3) banner
      4) features
    -->
    <div class="main-wrap__s-top">
      <router-view
        name="modulesTop"
        :category="category"/>
    </div>
    <!-- ** -->

    <!--
      UI middle section
      Views/component:
      1) budget witness
      2) happy user witness
    -->
    <div class="main-wrap__s-middle">
      <router-view
        name="modulesMiddle"
        :category="category"/>
    </div>
    <!-- ** -->

    <!--
      UI bottom section
      Views/component:
      1) happy user comments
    -->
    <div class="main-wrap__s-bottom">
      <router-view name="modulesBottom"/>
    </div>
    <!-- ** -->
  </section>
</template>

<script>
import { Categories } from '@/services/http/Categories';
import { Constants } from '@/constants.js';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'MainWrap',

  data() {
    return {
      category: null,
      categories: [],
    };
  },

  watch: {
    // check route change
    // to set new category value
    $route(to, from) {
      this.category = to.params.category;
    },
  },

  created() {
    const categoryParam = this.$route.params.category;
    this.category = categoryParam || null;
  },
};
</script>
<style lang='scss' scoped src= './MainWrap.scss'></style>
