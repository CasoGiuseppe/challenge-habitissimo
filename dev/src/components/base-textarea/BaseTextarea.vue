<template>
  <label
    :class="[
      'base-textarea',
      onActive ? 'base-textarea--isActive' : null,
      Object.prototype.hasOwnProperty.call(this.isValidate, 'state') && !isValidate.state
        ? 'base-textarea--isInvalid'
        : null,
      Object.prototype.hasOwnProperty.call(this.isValidate, 'state') && isValidate.state
        ? 'base-textarea--isValid'
        : null,
    ]"
    :for="id">
    <h3
      v-if="$slots.title"
      class="base-textarea__title">
      <slot name="title" />
    </h3>
    <textarea
      class="base-textarea__field"
      :id="id"
      :placeholder="placeholder"
      :rows="rows"
      :required="isRequired.state"
      :value="value"
      @focus="handleActiveState"
      @blur="handleActiveState"
      @input="handleInputState"/>

    <!-- UI validation icon -->
    <transition
      mode="out-in"
      name="change-validation">
        <span
          class="base-textarea__validation-icon"
          v-if="Object.prototype.hasOwnProperty.call(this.isValidate, 'state')"
          :key="isValidate.state">
        </span>
    </transition>

    <!-- required label -->
    <span
      class="base-textarea__required-label"
      v-if="isRequired.state">
        {{isRequired.label}}
    </span>
  </label>
</template>

<script>
export default {
  name: 'BaseTextarea',

  data() {
    return {
      onActive: false,
    };
  },

  methods: {
    handleInputState(e) {
      this.$emit('input', e.target.value);
    },

    handleActiveState(e) {
      const { type } = e;

      if (type === 'blur') {
        this.onActive = e.target.value !== '';
      } else {
        this.onActive = true;
        delete this.isValidate.state;
      }
    },
  },

  props: {
    id: {
      type: String,
      default: 'test',
    },

    placeholder: {
      type: String,
      default: 'placeholder',
    },

    rows: {
      type: Number,
      default: 5,
    },

    value: {
      type: String,
    },

    isRequired: {
      type: Object,
      default() {
        return {
          state: false,
          label: 'required',
        };
      },
    },

    isValidate: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang='scss' scoped src= './BaseTextarea.scss'></style>
