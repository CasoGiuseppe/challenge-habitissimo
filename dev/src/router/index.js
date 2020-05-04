import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    name: 'index',
    redirect: { name: 'budget' },
    components: {
      header: () => import(/* webpackChunkName: "Header" */ '@/views/header/Header.vue'),
      default: () => import(/* webpackChunkName: "MainWrap" */ '@/views/main-wrap/MainWrap.vue'),
      footer: () => import(/* webpackChunkName: "Footer" */ '@/views/footer/Footer.vue'),
    },
    children: [
      {
        path: '/ask-for-budget/:category?/:step?/',
        name: 'budget',
        components: {
          modulesTop: () => import(/* webpackChunkName: "RouterModuleTop" */ '@/views/router-modules/RouterModuleTop'),
          modulesMiddle: () => import(/* webpackChunkName: "RouterModuleMiddle" */ '@/views/router-modules/RouterModuleMiddle'),
          modulesBottom: () => import(/* webpackChunkName: "RouterModuleBottom" */ '@/views/router-modules/RouterModuleBottom'),
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'navigation-router-link--is-active',
  base: process.env.BASE_URL,
  routes,
});

export default router;
