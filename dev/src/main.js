import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// for translations
import i18n from './i18n';

// for global event bus
Vue.prototype.$eventHub = new Vue();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
