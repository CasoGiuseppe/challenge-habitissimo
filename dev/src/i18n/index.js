import Vue from 'vue';
import VueI18n from 'vue-i18n';
import literalES from './es';

const messages = {
  es: {
    message: literalES,
  },
};

Vue.use(VueI18n);

export default new VueI18n({
  locale: 'es',
  messages,
});
