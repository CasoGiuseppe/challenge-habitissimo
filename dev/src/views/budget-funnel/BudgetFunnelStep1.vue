<template>
  <aside class="budget-funnel__step">
    <!--
      UI description user info
      required,
      minLenght: 10
    -->
    <BaseTextarea
      id="description"
      v-model.trim="$v.form.description.$model"
      :placeholder="$t(`message.form.fields.descriptionTextArea.placeholder`)"
      :isRequired="{ state: true, label: $t(`message.form.required`) }"
      :isValidate="validateField('description')"
    >
      <template #title>
        {{$t(`message.form.fields.descriptionTextArea.title`) }}
      </template>
    </BaseTextarea>
    <!-- ** -->

    <!--
      UI time user choise
      not required,
    -->
    <BaseSelect
      id="time"
      v-model.trim="$v.form.time.$model"
      :placeholder="$t(`message.form.fields.timeSelect.placeholder`)"
      :options="times"
    />
    <!-- ** -->
  </aside>
</template>

<script>
import {
  required,
  minLength,
  email,
} from 'vuelidate/lib/validators';
import { Constants } from '@/assets/utilities/constants';

export default {
  name: 'BudgetFunnelStep1',

  components: {
    BaseTextarea: () => import(/* webpackChunkName: "BaseTextArea" */ '@/components/base-textarea/BaseTextarea'),
    BaseSelect: () => import(/* webpackChunkName: "BaseSelect" */ '@/components/base-select/BaseSelect'),
  },

  computed: {
    // watch form valida parameter
    formValid() {
      return this.$v.form.$invalid;
    },

    // event on change
    // field content
    modelChange() {
      return Object.keys(this.form).map((node) => {
        return { [node]: this.$v.form[node].$model };
      });
    },
  },

  data() {
    return {
      times: [
        { id: 1, label: `${this.$t('message.form.fields.timeSelect.options.first')}`, value: '1' },
        { id: 2, label: `${this.$t('message.form.fields.timeSelect.options.second')}`, value: '2' },
        { id: 3, label: `${this.$t('message.form.fields.timeSelect.options.third')}`, value: '3' },
      ],

      form: {
        description: '',
        time: '',
      },
    };
  },

  methods: {
    validateField(field) {
      return this.$v.form[field].$dirty ? { state: !this.$v.form[field].$error } : {};
    },

    // Fill field if
    // have init values
    fillFields() {
      if (this.fields && this.fields.length > 0) {
        for (let node of this.fields) {
          this.form[Object.keys(node)] = Object.values(node)[0];
        }
      }
    },
  },

  props: {
    fields: {
      type: Array,
      default: () => [],
    },
  },

  validations: {
    form: {
      description: {
        required,
        minLength: minLength(Constants.VALIDATION_MIN_TEXTAREA),
      },
      time: {},
    },
  },

  watch: {
    formValid(newValue) {
      this.$emit('validate', { valid: !newValue });
    },

    modelChange(newValue) {
      this.$emit('changeModel', newValue);
    },
  },

  mounted() {
    this.$emit('mounted');
    this.fillFields();
  },
};
</script>

<style lang='scss' scoped src= './BudgetFunnel.scss'></style>
