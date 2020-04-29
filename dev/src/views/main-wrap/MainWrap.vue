<template>
  <!--
    @param id {string}
    @param type {string}
    @param isRequired {object}
    @param isValidate {object}
    @emit handleInput
   -->
  <BaseInput
    id="field"
    placeholder="name"
    :isRequired="{ state: true, label: 'requerido' }"
    :isValidate="{ state: true }"/>
</template>

<script>
export default {
  name: 'MainWrap',

  components: {
    BaseInput: () => import(/* webpackChunkName: "BaseInput" */ '@/components/base-input/BaseInput'),
  },
};
</script>
