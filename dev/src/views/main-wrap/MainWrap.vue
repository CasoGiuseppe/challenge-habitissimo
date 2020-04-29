<template>
  <div>
    <!--
      @param id {string}
      @param type {string}
      @param placeholder {string}
      @param isRequired {object}
      @param isValidate {object}
      @emit @input
    -->
    <BaseInput
      id="name"
      placeholder="name"
      :isRequired="{ state: true, label: 'requerido' }"
      :isValidate="{ state: true }"/>

    <!--
      @param id {string}
      @param placeholder {string}
      @param rows {number}
      @param isRequired {object}
      @param isValidate {object}
      @emit @input
    -->
    <BaseTextarea
      id="description"
      placeholder="description"
      :isRequired="{ state: true, label: 'requerido' }"
      :isValidate="{ state: true }"/>

    <!--
      @param id {string}
      @param isRequired {object}
      @param isValidate {object}
      @param options {array}
      @emit @change
    -->
    <BaseSelect
      id="select"
      :isRequired="{ state: true, label: 'requerido' }"
      :isValidate="{ state: true }"
      :options="[
        {id: 1, label: 'option1', value: '1'},
        {id: 2, label: 'option2', value: '2'},
        {id: 3, label: 'option3', value: '3'}
      ]"/>

      <!--
        @param id {string}
        @param isDisabled {boolean}
        @slot {all}
        @emit @click
      -->
      <BaseButton>
        <template>
          link
        </template>
      </BaseButton>
      <!--
        @param circle {object}
        @param value {number}
      -->
      <BaseProgress/>
  </div>
</template>

<script>
export default {
  name: 'MainWrap',

  components: {
    BaseInput: () => import(/* webpackChunkName: "BaseInput" */ '@/components/base-input/BaseInput'),
    BaseTextarea: () => import(/* webpackChunkName: "BaseTextarea" */ '@/components/base-textarea/BaseTextarea'),
    BaseSelect: () => import(/* webpackChunkName: "BaseSelect" */ '@/components/base-select/BaseSelect'),
    BaseButton: () => import(/* webpackChunkName: "BaseButton" */ '@/components/base-button/BaseButton'),
    BaseProgress: () => import(/* webpackChunkName: "BaseProgress" */ '@/components/base-progress/BaseProgress'),
  },
};
</script>
