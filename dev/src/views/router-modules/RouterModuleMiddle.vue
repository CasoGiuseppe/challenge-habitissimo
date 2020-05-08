<template>
  <section class="router-module">
    <div class="grid">
      <div class="
          grid__row
          grid__row--isWrap">

          <!-- UI lasts quote -->
          <div class="
            router-module__c-lasts-quote
            grid__col-xs-12">
            <DistributorContent :category="categoryLabel || null">
              <template #title>
                {{$t(`message.lastsQuote.title`)}}
              </template>
              <template #description>
                {{$t(`message.lastsQuote.description`)}}
              </template>
              <template #moreTitle>
                {{$t(`message.lastsQuote.moreTitle`)}}
              </template>
              <template #moreDescription>
                {{$t(`message.lastsQuote.description`)}}
              </template>
              <template #action>
                <BaseSelect
                  v-model="current"
                  id="categories"
                  :isCurrent="category"
                  :isDisabled="isLoading"
                  :isLoading="isLoading"
                  :options="categories.filter((node) => node.value !== 'others')"
                  @change="quotesBycategory"
                />
              </template>
              <template #main>
                <li
                  v-for="(quote,index) of quotes"
                  :key="index"
                  class="
                    grid__col-xs-12
                    grid__col-lg-6">
                    <Badge
                      :id="quote.id"
                      :isLoading="loadingNewContent">
                      <template #title>
                        {{quote.title}}
                      </template>
                      <template #subtitle>
                        {{quote.subtitle}}
                      </template>
                      <template #message>
                        {{quote.message}}
                      </template>
                    </Badge>
                  </li>
              </template>
            </DistributorContent>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Quotes } from '@/services/http/Quotes';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'RouterModuleMiddle',

  components: {
    DistributorContent: () => import(/* webpackChunkName: "DistributorContent" */ '@/views/distributor-content/DistributorContent'),
    BaseSelect: () => import(/* webpackChunkName: "BaseSelect" */ '@/components/base-select/BaseSelect'),
    Badge: () => import(/* webpackChunkName: "Badge" */ '@/components/badge/Badge'),
  },

  computed: {
    ...mapGetters({
      getAllQuotes: 'quotes/getAllQuotes',
      getAllCategories: 'categories/getAllCategories',
      getSelectedCategories: 'categories/getSelectedCategories',
    }),

    categories() {
      return Object.keys(this.getAllCategories).map((category, index) => (
        {
          id: index,
          label: this.getAllCategories[category].data.name,
          value: this.getAllCategories[category].data.slug,
        }
      ));
    },

    loadingNewContent() {
      return this.isLoading;
    },

    quotes() {
      return this.getAllQuotes;
    },

    categoryLabel() {
      return this.getSelectedCategories(this.category).data.name;
    },
  },

  data() {
    return {
      isLoading: false,
      current: this.category,
    };
  },

  methods: {
    ...mapActions('quotes', {
      fillQuotes: 'fillQuotes',
    }),

    async quotesBycategory(value) {
      this.isLoading = true;
      this.current = value || this.category;
      const res = await Quotes.getQuotesByID({ category: this.current });
      this.fillQuotes(res.witness.map((element, index) => (
        {
          id: `${res.category}_${index}`,
          title: element.title,
          subtitle: element.subtitle,
          message: element.message,
        }
      )));
      this.isLoading = false;
    },
  },

  props: {
    category: {
      type: String,
    },
  },

  watch: {
    category() {
      this.quotesBycategory();
    },
  },

  mounted() {
    this.quotesBycategory();
  },
};
</script>

<style lang='scss' scoped src= './RouterModule.scss'></style>
