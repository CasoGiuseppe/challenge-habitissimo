<template>
  <aside class="budget-funnel__step">
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

    <BaseSelect
      id="time"
      v-model.trim="$v.form.time.$model"
      :placeholder="$t(`message.form.fields.timeSelect.placeholder`)"
      :options="times"
    />
  </aside>
</template>

<script>
import {
  required,
  minLength,
  email,
} from 'vuelidate/lib/validators';

export default {
  name: 'BudgetFunnelStep1',

  components: {
    BaseTextarea: () => import(/* webpackChunkName: "BaseTextArea" */ '@/components/base-textarea/BaseTextarea'),
    BaseSelect: () => import(/* webpackChunkName: "BaseSelect" */ '@/components/base-select/BaseSelect'),
  },

  computed: {
    formValid() {
      return this.$v.form.$invalid;
    },

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

    fillFields() {
      if (this.fields.length > 0) {
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
