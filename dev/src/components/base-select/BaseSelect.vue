<template>
  <div
    :class="[
      'base-select',
      onActive ? 'base-select--isActive' : null,
      Object.prototype.hasOwnProperty.call(this.isValidate, 'state') && !isValidate.state
        ? 'base-select--isInvalid'
        : null,
      Object.prototype.hasOwnProperty.call(this.isValidate, 'state') && isValidate.state
        ? 'base-select--isValid'
        : null,
      isLoading ? 'base-select--isLoading' : null,
    ]">
    <label
      class="base-select__label"
      :for="id">
      <select
        class="base-select__field"
        :id="id"
        :disabled="isDisabled"
        :value="value"
        @focus="handleActiveState"
        @change="handleChangeState"
        @input="handleInputState">
        <option
          v-if="placeholder"
          :value='null'>
          {{placeholder}}
        </option>
        <option
          v-for="option of options"
          :key="option.id"
          :value="option.value"
          :selected="option.value === current">
          {{option.label}}
        </option>
      </select>

      <!-- UI validation icon -->
      <transition
        mode="out-in"
        name="change-validation">
          <span
            class="base-select__validation-icon"
            v-if="Object.prototype.hasOwnProperty.call(this.isValidate, 'state')"
            :key="isValidate.state">
          </span>
      </transition>
    </label>

    <!-- required label -->
    <span
      class="base-select__required-label"
      v-if="isRequired.state">
        {{isRequired.label}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'BaseSelect',

  data() {
    return {
      onActive: false,
      current: this.isCurrent,
    };
  },

  methods: {
    handleInputState(e) {
      this.$emit('input', e.target.value);
    },

    handleChangeState(e) {
      this.$emit('change', e.target.value);
    },

    handleActiveState() {
      this.onActive = true;
      delete this.isValidate.state;
    },
  },

  props: {
    id: {
      type: String,
      default: 'test',
    },

    placeholder: {
      type: String,
    },

    value: {
      type: String,
    },

    options: {
      type: Array,
      required: true,
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

    isCurrent: {
      type: String,
      default: 'placeholder',
    },

    isDisabled: {
      type: Boolean,
      default: false,
    },

    isLoading: {
      type: Boolean,
      default: false,
    },
  },

  watch: {
    isCurrent() {
      this.current = this.isCurrent;
    },
  },
};
</script>

<style lang='scss' scoped src= './BaseSelect.scss'></style>
