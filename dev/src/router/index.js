import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    name: 'index',
    redirect: { name: 'budget' },
    components: {
      header: () => import(/* webpackChunkName: "header" */ '@/views/header/Header.vue'),
      default: () => import(/* webpackChunkName: "mainWrap" */ '@/views/main-wrap/MainWrap.vue'),
    },
    children: [
      {
        path: '/ask-for-dudget/:category?/:step?/',
        name: 'budget',
        components: {
          article: () => import(/* webpackChunkName: "base-article" */ '@/components/base-article/BaseArticle.vue'),
          // form: () => import(/* webpackChunkName: "form" */ '@/views/form-wrap/FormWrap.vue'),
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
