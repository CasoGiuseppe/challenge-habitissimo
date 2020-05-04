// getters
import getters, {
  GET_All_QUOTES,
} from './getters';

// mutations
import mutations, {
  SET_QUOTES,
} from './mutations';

// ACTIONS
import actions, {
  FILL_QUOTES,
} from './actions';

export const quotes = {
  namespaced: true,

  state: {
    quotes: [],
  },

  mutations,

  actions: {
    [FILL_QUOTES]({ commit }, payload) {
      commit(SET_QUOTES, payload);
    },
  },

  getters,
};
