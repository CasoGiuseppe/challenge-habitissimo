<template>
  <article
    :class="[
      'article',
      arrow ? `article--hasArrow-${arrow.direction}`:null
    ]">
      <h3
        v-if="category"
        class="article__category">
        <transition
          mode="out-in"
          name="change-move">
            <span
              :key="category">
              {{category}}
            </span>
        </transition>
      </h3>
      <h2
        v-if="$slots.title"
        class="article__title"
        v-html="$slots.title[0].text">
      </h2>
      <p
        v-if="$slots.description"
        class="article__description"
        v-html="$slots.description[0].text">
      </p>
      <div
        v-if="$slots.extra"
        class="article__extra"
        v-html="$slots.extra[0].text">
      </div>
      <div
        v-if="$slots.action"
        class="article__action">
        <slot name="action" />
      </div>
  </article>
</template>

<script>
export default {
  name: 'Article',

  props: {
    category: {
      type: String,
    },

    arrow: {
      type: Object,
    },
  },
};
</script>

<style lang='scss' scoped src= './Article.scss'></style>
