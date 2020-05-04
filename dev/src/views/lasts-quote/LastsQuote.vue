<template>
  <aside class="
    lasts-quote
    grid">
    <div class="
      grid__row
      grid__row--isWrap
      grid__row--align-top">
      <div class="
        lasts-quote__intro
        grid__col-xs-12
        grid__col-lg-5
        grid__col-lg-offset-right-1
        grid__col--column
        grid__col--align-start">
        <!-- UI current category -->
        <h3
          v-if="current"
          class="lasts-quote__category">
          <transition
            mode="out-in"
            name="change-move">
              <span
                :key="current">
                {{$t(`message.categories.${current}.label`)}}
              </span>
          </transition>
        </h3>

        <!-- UI title and description -->
        <h2
          v-if="$slots.title"
          class="lasts-quote__title"
          v-html="$slots.title[0].text">
        </h2>

        <p
          v-if="$slots.description"
          class="lasts-quote__description"
          v-html="$slots.description[0].text">
        </p>

        <!-- UI select to change diplayed witness -->
        <div class="lasts-quote__more">
          <h3
            v-if="$slots.modeTitle"
            class="lasts-quote__more-title"
            v-html="$slots.modeTitle[0].text">
          </h3>
          <p
            v-if="$slots.moreDescription"
            class="lasts-quote__more-description"
            v-html="$slots.moreDescription[0].text">
          </p>
          <BaseSelect
            id="select"
            :options="categories.filter((node) => node.value !== 'others')"
            :isCurrent="current"
            :isDisabled="isLoading"
            :isLoading="isLoading"
            @change="changeCategory"/>
        </div>
      </div>

      <div class="
        grid__col-xs-12
        grid__col-lg-6">
          <ul class="
            lasts-quote__list
            grid__row
            grid__row--isWrap">
            <li
              v-for="(quote,index) of quotes"
              :key="index"
              class="
                grid__col-xs-12
                grid__col-sm-6">
                <Badge
                  :id="quote.id"
                  :isLoading="isLoading">
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
          </ul>
      </div>
    </div>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'LastsQuote',

  components: {
    Badge: () => import(/* webpackChunkName: "Badge" */ '@/components/badge/Badge'),
    BaseSelect: () => import(/* webpackChunkName: "BaseSelect" */ '@/components/base-select/BaseSelect'),
  },

  computed: {
    ...mapGetters({
      getAllCategories: 'categories/getAllCategories',
    }),

    categories() {
      return this.getAllCategories.map((category, index) => (
        {
          id: index,
          label: this.$t(`message.categories.${category.route}.label`),
          value: category.route,
        }
      ));
    },
  },

  data() {
    return {
      current: this.category,
    };
  },

  methods: {
    changeCategory(e) {
      this.$emit('change', e);
      this.current = e;
    },
  },

  props: {
    category: {
      type: String,
    },

    quotes: {
      type: Array,
    },

    isLoading: {
      type: Boolean,
      default: false,
    },
  },

  watch: {
    category() {
      this.current = this.category;
    },
  },
};
</script>

<style lang='scss' scoped src= './LastsQuote.scss'></style>
