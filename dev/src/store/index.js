import Vue from 'vue';
import Vuex from 'vuex';

// modules
import { categories } from './modules/categories/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    categories,
  },
});
