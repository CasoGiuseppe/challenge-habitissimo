<template>
  <div>
    <!--
      @param id {string}
      @param type {string}
      @param placeholder {string}
      @param isRequired {object}
      @param isValidate {object}
      @emit handleInput
    -->
    <BaseInput
      id="field"
      placeholder="name"
      :isRequired="{ state: true, label: 'requerido' }"
      :isValidate="{ state: false }"/>

    <!--
      @param id {string}
      @param placeholder {string}
      @param rows {number}
      @param isRequired {object}
      @param isValidate {object}
      @emit handleInput
    -->
    <BaseTextarea
      id="field"
      placeholder="description"
      :isRequired="{ state: true, label: 'requerido' }"
      :isValidate="{ state: true }"/>
  </div>
</template>

<script>
export default {
  name: 'MainWrap',

  components: {
    BaseInput: () => import(/* webpackChunkName: "BaseInput" */ '@/components/base-input/BaseInput'),
    BaseTextarea: () => import(/* webpackChunkName: "BaseTextarea" */ '@/components/base-textarea/BaseTextarea'),
  },
};
</script>
