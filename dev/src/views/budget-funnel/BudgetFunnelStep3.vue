<template>
  <aside class="budget-funnel__step">
    <BaseInput
      id="name"
      v-model.trim="$v.form.name.$model"
      :placeholder="$t(`message.form.fields.nameInput.placeholder`)"
      :isRequired="{ state: true, label: $t(`message.form.required`) }"
      :isValidate="validateField('name')"
    />

    <BaseInput
      id="email"
      type="email"
      v-model.trim="$v.form.email.$model"
      :placeholder="$t(`message.form.fields.mailInput.placeholder`)"
      :isRequired="{ state: true, label: $t(`message.form.required`) }"
      :isValidate="validateField('email')"
    />

    <BaseInput
      id="phone"
      type="number"
      v-model.trim="$v.form.phone.$model"
      :placeholder="$t(`message.form.fields.phoneInput.placeholder`)"
      :isRequired="{ state: true, label: $t(`message.form.required`) }"
      :isValidate="validateField('phone')"
    />

  </aside>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import {
  required,
  minLength,
  email,
} from 'vuelidate/lib/validators';
import { Constants } from '@/constants.js';
import { notAllowedMail } from '@/helpers/validators';

export default {
  name: 'BudgetFunnelStep3',

  components: {
    BaseInput: () => import(/* webpackChunkName: "BaseInput" */ '@/components/base-input/BaseInput'),
  },

  computed: {
    // watch form valid parameter
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
      form: {
        name: '',
        email: '',
        phone: '',
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
      this.current = this.form.category;
    },
  },

  props: {
    fields: {
      type: Array,
    },
  },

  validations: {
    form: {
      name: {
        required,
        minLength: minLength(Constants.VALIDATION_MIN_TEXT),
      },
      email: {
        required,
        email,
        notAllowedMail: notAllowedMail(Constants.VALIDATION_NOT_ALLOWED_MAIL),
      },
      phone: {
        required,
        minLength: minLength(Constants.VALIDATION_MIN_PHONE),
      },
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
