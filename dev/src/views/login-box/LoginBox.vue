<template>
  <aside class="login-box">
    <ul
      :class="[
        'login-box__UI-elements',
        isInColumns ? 'login-box__UI-elements--isInColumns' : null
      ]">
      <li
        v-if="$slots.payoff"
        class="login-box__UI-elements-payoff">
        <slot name="payoff" />
      </li>
      <li
        v-if="$slots.registration"
        class="login-box__UI-elements-registration">
        <slot name="registration" />
      </li>
      <li
        v-if="$slots.login"
        class="login-box__UI-elements-login">
        <slot name="login" />
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'LoginBox',

  props: {
    isInColumns: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang='scss' scoped src= './LoginBox.scss'></style>
