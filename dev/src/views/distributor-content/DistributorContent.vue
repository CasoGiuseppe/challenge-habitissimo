<template>
  <aside :class="[
    'distributor-content',
    isRTL ? 'distributor-content--isRTL' : null,
    isLight ? 'distributor-content--isLight' : null,
    'grid'
  ]">
    <div class="
      grid__row
      grid__row--isWrap
      grid__row--align-top">
      <div :class="[
        'distributor-content__intro',
        'grid__col-xs-12',
        'grid__col-md-5',
        !isRTL ? 'grid__col-md-5' : 'grid__col-md-6',
        !isRTL ? 'grid__col-md-offset-right-1' : null,
        'grid__col--column',
        'grid__col--align-start'
      ]">
        <!-- UI current category -->
        <h3
          v-if="category"
          class="distributor-content__category">
          <transition
            mode="out-in"
            name="change-move">
              <span :key="category">
                {{category}}
              </span>
          </transition>
        </h3>
        <!-- ** -->

        <!-- UI title and description -->
        <h2
          v-if="$slots.title"
          class="distributor-content__title"
          v-html="$slots.title[0].text">
        </h2>

        <p
          v-if="$slots.description"
          class="distributor-content__description"
          v-html="$slots.description[0].text">
        </p>
        <!-- ** -->

        <!-- UI more info -->
        <h3
          v-if="$slots.moreTitle"
          class="distributor-content__added-title"
          v-html="$slots.moreTitle[0].text">
        </h3>
        <p
          v-if="$slots.moreDescription"
          class="distributor-content__added-description"
          v-html="$slots.moreDescription[0].text">
        </p>
        <template
          class="distributor-content__added-action"
          v-if="$slots.action">
          <slot name="action" />
        </template>
      </div>
      <!-- ** -->

      <!--
        UI put here
        main content
      -->
      <div :class="[
        'distributor-content__main',
        'grid__col-xs-12',
        isRTL ? 'grid__col-md-5' : 'grid__col-md-6',
        isRTL ? 'grid__col-md-offset-right-1' : null,
      ]">
          <ul
            v-if="$slots.main"
            class="
              grid__row
              grid__row--isWrap">
            <slot name="main" />
          </ul>
      </div>
      <!-- ** -->
    </div>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'DistributorContent',

  props: {
    category: {
      type: String,
    },

    isRTL: {
      type: Boolean,
      default: false,
    },

    isLight: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang='scss' scoped src= './DistributorContent.scss'></style>
