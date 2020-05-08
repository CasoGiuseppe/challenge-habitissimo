<template>
  <section class="router-module">
    <div class="grid">
      <div class="
        grid__row
        grid__row--isWrap">

        <!-- UI form -->
        <div class="
          router-module__c-form
          grid__col-xs-12
          grid__col-lg-8
          grid__col-xxl-9">
          <BudgetFunnel :current="category" />
        </div>

        <!-- UI additional info -->
        <div class="
          router-module__c-info
          grid__col-xs-12
          grid__col-lg-4
          grid__col-xxl-3">
          <BaseArticle
            :category="categoryLabel || null"
            :arrow= "{ direction: 'left' }">
            <template #title>
              {{$t(`message.article.title`)}}
            </template>
            <template #description>
              {{$t(`message.article.description`)}}
            </template>
            <template #extra>
              {{$t(`message.article.extra`)}}
            </template>
            <template #action>
              <BaseButton
                hasMinWidth="50%">
                <template>
                  {{$t(`message.buttons.register`)}}
                </template>
              </BaseButton>
            </template>
          </BaseArticle>
        </div>

        <!-- UI banner -->
        <div class="
          router-module__c-banner
          grid__col-xs-12
          grid__col-sm-12
          grid__col-md-6
          grid__col-lg-5
          grid__col-xxl-7">
          <Banner :hasIcon="svg.shield">
            <template #title>
              {{$t(`message.banner.title`)}}
            </template>
            <template #description>
              {{$t(`message.banner.description`)}}
            </template>
          </Banner>
        </div>

        <!-- UI features -->
        <div class="
          router-module__c-features
          grid__col-xs-12
          grid__col-sm-12
          grid__col-md-6
          grid__col-lg-7
          grid__col-xxl-5">
          <ul class=
            "router-module__c-features__list
            grid__row
            grid__row--isWrap">
            <li
              class="
                router-module__c-features__header
                grid__col-xs-12">
                <h3
                  class="router-module__c-features__title">
                  {{ $t(`message.features.title`) }}
                  <transition
                    mode="out-in"
                    name="change-move">
                      <span
                        class="router-module__c-features__category"
                        :key="category">
                        {{ categoryLabel }}
                      </span>
                  </transition>
                </h3>
            </li>
            <li
              v-for="(feature, index) in features"
              :key="feature.name"
              :class="[
                'grid__col-xs-6',
                `grid__col-xl-${12 / features.length}`,
              ]">
              <transition
                mode="out-in"
                name="change-move">
                <Badge
                  isLight
                  :key="`${category}_${feature.name}`"
                  :hasIcon="feature.icon ? svg[feature.icon] : null"
                  :style="{
                    'transitionDelay' : `${index * .1}s`
                  }">
                  <template
                    :id="index"
                    #title>
                    {{$t(`message.features.list.${feature.name}.title`)}}
                  </template>
                  <template #message>
                    {{$t(`message.features.list.${feature.name}.label`)}}
                  </template>
                  <template #action>
                    <BaseButton
                      isFullsize>
                      {{$t(`message.features.list.${feature.name}.action`)}}
                    </BaseButton>
                  </template>
                </Badge>
              </transition>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import icons from '@/assets/utilities/icons';
import { mapGetters } from 'vuex';

export default {
  name: 'RouterModuleTop',

  components: {
    BaseButton: () => import(/* webpackChunkName: "BaseButton" */ '@/components/base-button/BaseButton'),
    Badge: () => import(/* webpackChunkName: "Badge" */ '@/components/badge/Badge'),
    BaseArticle: () => import(/* webpackChunkName: "BaseArticle" */ '@/components/base-article/BaseArticle.vue'),
    BudgetFunnel: () => import(/* webpackChunkName: "BudgetFunnel" */ '@/views/budget-funnel/BudgetFunnel.vue'),
    Banner: () => import(/* webpackChunkName: "Banner" */ '@/components/banner/Banner'),
  },

  computed: {
    ...mapGetters('categories', [
      'getAllCategories',
      'getSelectedCategories',
    ]),

    features() {
      return this.getSelectedCategories(this.category).features;
    },

    categoryLabel() {
      return this.getSelectedCategories(this.category).data.name;
    },
  },

  data() {
    return {
      svg: icons,
    };
  },

  props: {
    category: {
      type: String,
    },
  },
};
</script>

<style lang='scss' scoped src= './RouterModule.scss'></style>
