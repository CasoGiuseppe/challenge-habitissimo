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
        v-model="current"
        class="base-select__field"
        :id="id"
        :disabled="isDisabled"
        @focus="handleActiveState"
        @change="handleChangeState">
        <option
          v-if="placeholder">
          {{placeholder}}
        </option>
        <option
          v-for="option of options"
          :key="option.id"
          :value="option.value">
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
