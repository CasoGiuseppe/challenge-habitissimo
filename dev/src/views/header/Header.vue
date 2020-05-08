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

        <!-- UI logo place -->
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

        <!-- UI login/registration place -->
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
              :isReplaced="{
                state: true,
                icon: svg.user,
                color: 'light'
              }">
                <template>
                  {{$t(`message.buttons.login`)}}
                </template>
            </BaseButton>
          </template>
          <template #login>
            <BaseButton
            isFullsize
            isLight
            :isReplaced="{
              state: true,
              icon: svg.registration,
              color: 'primary'
            }">
              <template>
                {{$t(`message.buttons.register`)}}
              </template>
          </BaseButton>
          </template>
        </LoginBox>

        <!-- UI navigation place -->
        <Navigation class="
          grid__col-xs-2
          grid__col-md-12"/>
      </div>
    </div>
  </header>
</template>

<script>
import icons from '@/assets/utilities/icons';

export default {
  name: 'Header',

  components: {
    BaseButton: () => import(/* webpackChunkName: "BaseButton" */ '@/components/base-button/BaseButton'),
    Navigation: () => import(/* webpackChunkName: "Navigation" */ '@/views/navigation/Navigation'),
    LoginBox: () => import(/* webpackChunkName: "LoginBox" */ '@/components/login-box/LoginBox'),
  },

  data() {
    return {
      svg: icons,
    };
  },

  props: {
    isPageOnTop: {
      type: Boolean,
    },
  },
};
</script>

<style lang='scss' scoped src= './Header.scss'></style>
