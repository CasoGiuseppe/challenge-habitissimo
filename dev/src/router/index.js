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
    },
    children: [
      {
        path: '/ask-for-budget/:category?/:step?/',
        name: 'budget',
        components: {
          article: () => import(/* webpackChunkName: "BaseArticle" */ '@/components/base-article/BaseArticle.vue'),
          form: () => import(/* webpackChunkName: "BudgetForm" */ '@/views/budget-form/BudgetForm.vue'),
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
