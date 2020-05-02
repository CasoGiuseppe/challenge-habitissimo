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
          grid__col-md-4
          grid__col-xxl-3">
          banner
        </div>

        <!-- UI features -->
        <div class="
          main-wrap__UI-features
          grid__col-xs-12
          grid__col-md-8
          grid__col-xxl-3">
          <ul class=
            "main-wrap__UI-features__list
            grid__row">
            <li
              v-for="feature in features"
              :key="feature.name"
              :class="[
                'grid__col-xs-6',
                `grid__col-sm-${12 / features.length}`
              ]">
              <Feature
                :hasIcon="feature.icon ? ICONS[feature.icon] : null">
                <template #title>
                  {{$t(`message.features.${feature.name}.title`)}}
                </template>
                <template #description>
                  {{$t(`message.features.${feature.name}.label`)}}
                </template>
                <template #action>
                  <BaseButton
                    isFullsize>
                    {{$t(`message.features.${feature.name}.action`)}}
                  </BaseButton>
                </template>
              </Feature>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import icons from '@/assets/utilities/icons';

export default {
  name: 'MainWrap',

  components: {
    BaseButton: () => import(/* webpackChunkName: "BaseButton" */ '@/components/base-button/BaseButton'),
    Feature: () => import(/* webpackChunkName: "Feature" */ '@/components/feature/Feature'),
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
      ICONS: icons,
    };
  },

  watch: {
    $route(to, from) {
      this.category = to.params.category;
    },
  },

  created() {
    const categoryParam = this.$route.params.category;
    this.category = categoryParam || null;
  },
};
</script>
<style lang='scss' scoped src= './MainWrap.scss'></style>
