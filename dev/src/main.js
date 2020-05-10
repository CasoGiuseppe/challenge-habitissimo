import Vue from 'vue';
import Vuelidate from 'vuelidate';
import VueScrollTo from 'vue-scrollto';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';
import './services/server';

// for global event bus
Vue.prototype.$eventHub = new Vue();

// Vue use
Vue.use(Vuelidate);
Vue.use(VueScrollTo);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
