<template>
  <section class="main-wrap">
    <div class="grid">
      <!-- UI form + additional info -->
      <div class="
        grid__row
        grid__row--isWrap">
        <div class="
          main-wrap__UI-form
          grid__col-xs-12
          grid__col-md-8
          grid__col-xxl-9">

          <!-- view for user form -->
          <router-view
            name="form"
            :current="category">
          </router-view>

        </div>
        <div class="
          main-wrap__UI-info
          grid__col-xs-12
          grid__col-md-4
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
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainWrap',

  components: {
    BaseButton: () => import(/* webpackChunkName: "BaseButton" */ '@/components/base-button/BaseButton'),
  },

  data() {
    return {
      category: null,
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
