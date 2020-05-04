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
            <LastsQuote
              :category="category ? category : null"
              :quotes="quotes"
              :isLoading="loadingNewContent"
              @change="witnessBycategory">
              <template #title>
                {{$t(`message.lastsQuote.title`)}}
              </template>
              <template #description>
                {{$t(`message.lastsQuote.description`)}}
              </template>
              <template #modeTitle>
                {{$t(`message.lastsQuote.moreTitle`)}}
              </template>
              <template #moreDescription>
                {{$t(`message.lastsQuote.description`)}}
              </template>
            </LastsQuote>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Budgets } from '@/services/http/Budgets';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'RouterModuleMiddle',

  components: {
    LastsQuote: () => import(/* webpackChunkName: "LastsQuote" */ '@/views/lasts-quote/LastsQuote'),
  },

  computed: {
    ...mapGetters({
      getAllQuotes: 'quotes/getAllQuotes',
    }),

    loadingNewContent() {
      return this.isLoading;
    },

    quotes() {
      return this.getAllQuotes;
    },
  },

  data() {
    return {
      isLoading: false,
    };
  },

  methods: {
    ...mapActions('quotes', {
      fillQuotes: 'fillQuotes',
    }),

    async witnessBycategory(value) {
      this.isLoading = true;
      const res = await Budgets.getBudgets({ category: value || this.category });
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
      this.witnessBycategory();
    },
  },

  mounted() {
    this.witnessBycategory();
  },
};
</script>

<style lang='scss' scoped src= './RouterModule.scss'></style>
