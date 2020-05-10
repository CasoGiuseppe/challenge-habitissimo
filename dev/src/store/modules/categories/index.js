import { Constants } from '@/constants.js';

// getters
import getters, {
  GET_All_CATEGORIES,
  GET_SELECTED_CATEGORIES,
  GET_ACTIVE_STATE,
  ALL_COMPLETED,
  ALL_FORM_FIELDS,
  GET_COMPLETED_STATE,
} from './getters';

// mutations
import mutations, {
  SET_LOCAL_CATEGORIES,
  SET_NEW_COMPLETED_STATE,
  MOVE_FORWARD_ACTIVE_STATE,
  MOVE_BACK_ACTIVE_STATE,
  CHANGE_NEXT_ACTION,
  RESET_COMPLETED,
  ADD_COMPLETED_FORM,
  CHANGE_LOADED_STATE,
} from './mutations';

// actions
import actions, {
  FILL_LOCAL_CATEGORIES,
  COMPLETED,
  ACTIVE,
  NEXT_ACTION,
  REPEAT_ACTION,
  ADD_FORM_VALUE,
  SET_LOADED_STATE,
} from './actions';

// default value
const features = [
  {
    name: 'gratis',
    icon: 'gratis',
  },
  {
    name: 'saveTime',
    icon: 'time',
  },
  {
    name: 'saveMoney',
    icon: 'money',
  },
  {
    name: 'findBest',
    icon: 'award',
  },
];

const setFunnelArray = (category) => {
  let temp = [];

  for (let [i, component] of Constants.FUNNELSTEPS.entries()) {
    temp.push({
      component,
      completed: false,
      active: true,
      form: [],
    });
  }
  return temp;
};

export const categories = {
  namespaced: true,

  state: {
    funnel: {
      next: false,
      loaded: false,
    },
    list: [],
  },

  mutations,

  actions: {
    [FILL_LOCAL_CATEGORIES]({ commit }, payload) {
      commit(SET_LOCAL_CATEGORIES, {
        [payload.slug]: {
          ...{ data: payload },
          ...{
            funnel: setFunnelArray(payload.slug),
          },
          ...{ features },
        },
      });
    },

    [COMPLETED]({ commit }, payload) {
      const { category } = payload;
      commit(SET_NEW_COMPLETED_STATE, category);
    },

    [ACTIVE]({ commit }, payload) {
      const { category, step, direction } = payload;
      if (direction === 'next') {
        commit(MOVE_FORWARD_ACTIVE_STATE, { category, step });
      } else {
        commit(MOVE_BACK_ACTIVE_STATE, { category, step });
      }
    },

    [NEXT_ACTION]({ commit }, payload) {
      const { status } = payload;
      commit(CHANGE_NEXT_ACTION, status);
    },

    [REPEAT_ACTION]({ commit }, payload) {
      const { category } = payload;
      commit(RESET_COMPLETED, category);
    },

    [ADD_FORM_VALUE]({ commit }, payload) {
      commit(ADD_COMPLETED_FORM, payload);
    },

    [SET_LOADED_STATE]({ commit }, payload) {
      commit(CHANGE_LOADED_STATE, payload);
    },
  },

  getters,
};
