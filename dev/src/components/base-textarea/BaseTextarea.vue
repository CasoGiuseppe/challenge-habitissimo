<template>
  <div
    :class="[
      'base-textarea',
      onActive ? 'base-textarea--isActive' : null,
      Object.prototype.hasOwnProperty.call(this.isValidate, 'state') && !isValidate.state
        ? 'base-textarea--isInvalid'
        : null,
      Object.prototype.hasOwnProperty.call(this.isValidate, 'state') && isValidate.state
        ? 'base-textarea--isValid'
        : null,
    ]">
    <textarea
      class="base-textarea__field"
      :id="id"
      :placeholder="placeholder"
      :rows="rows"
      :required="isRequired.state"
      @focus="handleActiveState"
      @blur="handleActiveState"
      @input="handleInput"/>

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
  </div>
</template>

<script>
export default {
  name: 'BaseTextarea',

  data() {
    return {
      onActive: false,
    };
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

  methods: {
    handleInput(e) {
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
};
</script>

<style lang='scss' scoped src= './BaseTextarea.scss'></style>
