<template>
  <aside class="budget-funnel__completed">
    <!--
      UI completed
      funnel message
    -->
    <p
      class="budget-funnel__description"
      v-html="$t(`message.form.descriptioncomple`, {category: current})">
    </p>
    <!-- ** -->
  </aside>
</template>

<script>
export default {
  name: 'BudgetFunnelCompleted',

  props: {
    current: {
      type: String,
    },
  },
};
</script>

<style lang='scss' scoped src= './BudgetFunnel.scss'></style>
