<template>
  <section class="main-wrap">
    <div class="grid">
      <div class="
        grid__row
        grid__row--isWrap">
        <!-- UI form -->
        <div class="
          main-wrap__UI-form
          grid__col-xs-12
          grid__col-md-7
          grid__col-lg-8
          grid__col-xxl-9">

          <!-- view for user form -->
          <router-view
            name="form"
            :current="category">
          </router-view>
        </div>

        <!-- UI additional info -->
        <div class="
          main-wrap__UI-info
          grid__col-xs-12
          grid__col-md-5
          grid__col-lg-4
          grid__col-xxl-3">

          <!-- view for user additional information -->
          <router-view
            name="article"
            :category="category ? $t(`message.categories.${category}.label`) : null"
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
          </router-view>

        </div>

        <!-- UI banner -->
        <div class="
          main-wrap__UI-banner
          grid__col-xs-12
          grid__col-sm-12
          grid__col-md-6
          grid__col-lg-5
          grid__col-xxl-7">
          <Banner
            :hasIcon="svg.shield"
            isSecondary>
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
          main-wrap__UI-features
          grid__col-xs-12
          grid__col-sm-12
          grid__col-md-6
          grid__col-lg-7
          grid__col-xxl-5">
          <ul class=
            "main-wrap__UI-features__list
            grid__row
            grid__row--isWrap">
            <li
              class="
                main-wrap__UI-features__list-header
                grid__col-xs-12">
                <h3
                  class="main-wrap__UI-features__list-header__title">
                  {{ $t(`message.features.title`) }}
                  <transition
                    mode="out-in"
                    name="change-move">
                      <span
                        class="main-wrap__UI-features__list-header__category"
                        :key="category">
                        {{ $t(`message.categories.${category}.label`) }}
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
                  <Feature
                    :hasIcon="feature.icon ? svg[feature.icon] : null"
                    :key="`${category}_${feature.name}`"
                    :style="{
                      'transitionDelay' : `${index * .1}s`
                    }">
                    <template #title>
                      {{$t(`message.features.list.${feature.name}.title`)}}
                    </template>
                    <template #description>
                      {{$t(`message.features.list.${feature.name}.label`)}}
                    </template>
                    <template #action>
                      <BaseButton
                        isFullsize>
                        {{$t(`message.features.list.${feature.name}.action`)}}
                      </BaseButton>
                    </template>
                  </Feature>
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
import { Budgets } from '@/services/http/Budgets';

export default {
  name: 'MainWrap',

  components: {
    BaseButton: () => import(/* webpackChunkName: "BaseButton" */ '@/components/base-button/BaseButton'),
    Feature: () => import(/* webpackChunkName: "Feature" */ '@/components/feature/Feature'),
    Banner: () => import(/* webpackChunkName: "Banner" */ '@/components/banner/Banner'),
  },

  computed: {
    features() {
      return [
        {
          name: 'gratis',
          icon: 'gratis',
        },
        {
          name: 'saveTime',
          icon: 'time',
        },
        {
          name: 'saveMoney',
          icon: 'money',
        },
        {
          name: 'findBest',
          icon: 'award',
        },
      ];
    },
  },

  data() {
    return {
      category: null,
      svg: icons,
      BUDGETS: Budgets,
    };
  },

  watch: {
    $route(to, from) {
      this.category = to.params.category;
    },
  },

  methods: {
    async getAllBudgets() {
      const res = await this.BUDGETS.getBudgets({ id: 3 });
    },
  },

  created() {
    const categoryParam = this.$route.params.category;
    this.category = categoryParam || null;
    this.getAllBudgets();
  },
};
</script>
<style lang='scss' scoped src= './MainWrap.scss'></style>
