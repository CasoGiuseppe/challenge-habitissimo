<template>
  <header class="header">
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
              ¿Eres un autónomo o tienes una empresa y quieres conseguir más clientes?
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
        <nav class="
          header__main-navigation
          grid__col-xs-2
          grid__col-md-12">
          nav
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',

  components: {
    BaseButton: () => import(/* webpackChunkName: "BaseButton" */ '@/components/base-button/BaseButton'),
  },
};
</script>

<style lang='scss' scoped src= './Header.scss'></style>
