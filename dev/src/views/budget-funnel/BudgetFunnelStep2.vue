<template>
  <aside class="budget-funnel__step">
    <BaseSelect
      id="category"
      v-model.trim="$v.form.category.$model"
      :placeholder="$t(`message.form.fields.categorySelect.placeholder`)"
      :options="categories"
      :isRequired="{ state: true, label: $t(`message.form.required`) }"
      :isValidate="validateField('category')"
      @change="(e) => { this.current = e }"
    />

    <BaseSelect
      id="subcategory"
      v-model.trim="$v.form.subcategory.$model"
      :placeholder="$t(`message.form.fields.subcategorySelect.placeholder`)"
      :options="subcategories"
      :isRequired="{ state: true, label: $t(`message.form.required`) }"
      :isValidate="validateField('subcategory')"
      :isDisabled="subcategories.length === 0 || loadingSubcategory"
      :isLoading="loadingSubcategory"
      :isCurrent="$v.form.subcategory.$model"
    />

    <BaseSelect
      id="price"
      v-model.trim="$v.form.price.$model"
      :placeholder="$t(`message.form.fields.priceSelect.placeholder`)"
      :options="prices"
    />
  </aside>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { required } from 'vuelidate/lib/validators';
import { Categories } from '@/services/http/Categories';

export default {
  name: 'BudgetFunnelStep2',

  components: {
    BaseSelect: () => import(/* webpackChunkName: "BaseSelect" */ '@/components/base-select/BaseSelect'),
  },

  computed: {
    ...mapGetters('categories', [
      'getAllCategories',
    ]),

    // return object to
    // categories select options
    categories() {
      return Object.keys(this.getAllCategories).map((category, index) => (
        {
          id: index,
          label: this.getAllCategories[category].data.name,
          value: this.getAllCategories[category].data.slug,
        }
      ));
    },

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
      current: '',
      subcategories: [],
      loadingSubcategory: false,
      prices: [
        { id: 1, label: `${this.$t('message.form.fields.priceSelect.options.first')}`, value: '1' },
        { id: 2, label: `${this.$t('message.form.fields.priceSelect.options.second')}`, value: '2' },
        { id: 3, label: `${this.$t('message.form.fields.priceSelect.options.third')}`, value: '3' },
      ],
      form: {
        category: '',
        subcategory: '',
        price: '',
      },
    };
  },

  methods: {
    validateField(field) {
      return this.$v.form[field].$dirty ? { state: !this.$v.form[field].$error } : {};
    },

    async getSubcategories(e) {
      if (e) {
        const res = await Categories.getCategoryByID({ category: e });
      }
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
      category: { required },
      subcategory: {
        required,
      },
      price: {},
    },
  },

  watch: {
    formValid(newValue) {
      this.$emit('validate', { valid: !newValue });
    },

    // load subcategories
    // to fill select
    async current(newvalue, oldvalue) {
      this.$v.form.subcategory.$reset();
      if (newvalue) {
        this.loadingSubcategory = !this.loadingSubcategory;
        const res = await Categories.getCategoryByID({ category: newvalue });
        this.subcategories = res.children.map((child) => (
          {
            id: child.slug,
            label: child.name,
            value: child.slug,
          }));
        this.loadingSubcategory = !this.loadingSubcategory;
      } else {
        this.subcategories = [];
      }
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
