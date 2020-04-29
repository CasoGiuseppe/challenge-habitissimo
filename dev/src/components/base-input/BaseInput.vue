<template>
  <div class="base-input">
    <label
      :class="[
        'base-input__label',
        onActive ? 'base-input__label--isActive' : null,
        Object.prototype.hasOwnProperty.call(this.isValidate, 'state') && !isValidate.state
          ? 'base-input__label--isInvalid'
          : null,
        Object.prototype.hasOwnProperty.call(this.isValidate, 'state') && isValidate.state
          ? 'base-input__label--isValid'
          : null,
      ]"
      :for="id"
      :data-placeholder="placeholder">
      <input
        class="base-input__field"
        :type="type"
        :id="id"
        :required="isRequired.state"
        @focus="handleActiveState"
        @blur="handleActiveState"
        @input="handleInput"/>
      <!-- UI validation icon -->
      <transition
        mode="out-in"
        name="change-validation">
          <span
            class="base-input__validation-icon"
            v-if="Object.prototype.hasOwnProperty.call(this.isValidate, 'state')"
            :key="isValidate.state">
          </span>
      </transition>
    </label>

    <!-- required label -->
    <span
      class="base-input__required-label"
      v-if="isRequired.state">
        {{isRequired.label}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  data() {
    return {
      onFocus: false,
      onActive: false,
    };
  },

  props: {
    type: {
      type: String,
      default: 'text',
    },

    id: {
      type: String,
      default: 'test',
    },

    placeholder: {
      type: String,
      default: 'placeholder',
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

<style lang='scss' scoped src= './BaseInput.scss'></style>
