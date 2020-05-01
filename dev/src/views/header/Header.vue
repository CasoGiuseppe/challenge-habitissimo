<template>
  <header
    :class="[
      'header',
      isPageOnTop === false ? 'header--isScrolled' : null,
    ]">
    <div class="
      grid
      grid--isFluid">
      <div class="
        header__wrap
        grid__row
        grid__row--isWrap">

        <!-- logo place -->
        <h2 class="
          header__logo
          grid__col-xs-8
          grid__col-md-6">
            <figure>
              <img
                src="@/assets/images/elements/logo.webp"
                alt="habitissimo - Reformas y Servicios para el Hogar">
            </figure>
        </h2>

        <!-- aside for login/registration -->
        <LoginBox class="
          grid__col-xs-2
          grid__col-md-6
          grid__col--end">
          <template #payoff>
            {{$t(`message.header.payoff`)}}
          </template>
          <template #registration>
            <BaseButton
              isFullsize
              isReplaced>
                <template>
                  {{$t(`message.buttons.login`)}}
                </template>
            </BaseButton>
          </template>
          <template #login>
            <BaseButton
            isFullsize
            isLight
            isReplaced>
              <template>
                {{$t(`message.buttons.register`)}}
              </template>
          </BaseButton>
          </template>
        </LoginBox>

        <Navigation
          class="grid__col-xs-2
          grid__col-md-12"/>

        <!-- main navigation with categories -->
        <!-- <div class="
          header__main-navigation
          grid__col-xs-2
          grid__col-md-12">
          <Navigation />
        </div> -->
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
    LoginBox: () => import(/* webpackChunkName: "LoginBox" */ '@/components/login-box/LoginBox'),
  },
};
</script>

<style lang='scss' scoped src= './Header.scss'></style>
