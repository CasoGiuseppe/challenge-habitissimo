<template>
  <header
    :class="[
      'header',
      isPageOnTop === false ? 'header--isScrolled' : null,
    ]">
    <div class="grid">
      <div class="
        grid__row
        grid__row--isWrap">

        <!-- logo place -->
        <h1 class="
          header__logo
          grid__col-xs-7
          grid__col-md-4
          grid__col-lg-6">
            <figure>
              <img
                src="@/assets/images/elements/logo.webp"
                alt="habitissimo - Reformas y Servicios para el Hogar">
            </figure>
        </h1>

        <!-- registration cta -->
        <aside class="
          header__register-payoff
          grid__col-xs-3
          grid__col-md-8
          grid__col-lg-6">
          <ul class="grid__row">
            <li class="
                grid__col-xs-8
                grid__col-md-8
                grid__col--end
                hidden-sm-down">
                  <transition
                    mode="out-in"
                    name="change-fade">
                      <span v-if="isPageOnTop">
                        ¿Eres un autónomo o tienes una empresa y quieres conseguir más clientes?
                      </span>
                  </transition>
              </li>
            <li class="
              grid__col-xs-4
              grid__col-md-4">
              <BaseButton
                isSecondary
                isFullsize>
                  <template>
                    Registrate
                  </template>
              </BaseButton>
            </li>
          </ul>
        </aside>

        <!-- main navigation with categories -->
        <div class="
          header__main-navigation
          grid__col-xs-2
          grid__col-md-12">
          <Navigation />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',

  props: {
    isPageOnTop: {
      type: Boolean,
    },
  },

  components: {
    BaseButton: () => import(/* webpackChunkName: "BaseButton" */ '@/components/base-button/BaseButton'),
    Navigation: () => import(/* webpackChunkName: "Navigation" */ '@/views/navigation/Navigation'),
  },
};
</script>

<style lang='scss' scoped src= './Header.scss'></style>
