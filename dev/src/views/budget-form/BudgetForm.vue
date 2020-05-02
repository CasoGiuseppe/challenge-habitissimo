<template>
  <section class="budget-form">
    <aside class="budget-form__circle-progress">

      <!-- UI visual progress -->
      <BaseProgress
        :circle="{
          width: 200,
          height: 200,
          stroke: '#fff',
          strokeWidth: 20,
          color: '#fff'
        }"
        :value="currentStepValue"/>
    </aside>

    <div class="budget-form__user-fields">
      {{current}}
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'BudgetForm',

  components: {
    BaseProgress: () => import(/* webpackChunkName: "BaseProgress" */ '@/components/base-progress/BaseProgress'),
  },

  computed: {
    ...mapGetters({
      getNextStep: 'categories/getNextStep',
    }),

    currentStepValue() {
      return this.progress.value;
    },
  },

  data() {
    return {
      progress: {
        value: 10,
      },
    };
  },

  props: {
    current: {
      type: String,
    },
  },

  watch: {
    current() {
      this.progress.value += 10;
      console.log(this.getNextStep(this.current));
    },
  },
};
</script>

<style lang='scss' scoped src= './BudgetForm.scss'></style>
