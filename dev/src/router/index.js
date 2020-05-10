import Vue from 'vue';
import VueRouter from 'vue-router';
import { Categories } from '@/services/http/Categories';
import { Constants } from '@/constants.js';
import store from '../store';

// catch dupliacated navigation error
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    name: 'index',
    redirect: {
        name: 'budget',
        params: {
          category: Constants.DEFAULTCATEGORY,
          step: Constants.DEFAULTSTEP,
        },
    },
    components: {
      header: () => import(/* webpackChunkName: "Header" */ '@/views/header/Header.vue'),
      default: () => import(/* webpackChunkName: "MainWrap" */ '@/views/main-wrap/MainWrap.vue'),
      footer: () => import(/* webpackChunkName: "Footer" */ '@/views/footer/Footer.vue'),
    },
    beforeEnter: async (to, from, next) => {
      // load categories from
      // api REST service
      let categories = await Categories.getAllCategories();
      for (let node of categories.map((category, index) => ({ id: index, name: category.name, slug: category.slug }))) {
        store.dispatch('categories/fillLocalCategories', node);
      }

      // set loaded state on true
      store.dispatch('categories/setLoadedState', true);
      next();
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
  }, {
    path: '/UIKIT',
    name: 'uikit',
    components: {
      header: () => import(/* webpackChunkName: "Header" */ '@/views/header/Header.vue'),
      default: () => import(/* webpackChunkName: "Uikit" */ '@/views/uikit/Uikit.vue'),
      footer: () => import(/* webpackChunkName: "Footer" */ '@/views/footer/Footer.vue'),
    },
  }, {
    path: '*',
    redirect: { name: 'budget' },
  },
];

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'navigation-router-link--is-active',
  base: process.env.BASE_URL,
  routes,
});

export default router;
