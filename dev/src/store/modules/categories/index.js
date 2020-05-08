import { Constants } from '@/constants.js';
import { LocalStorage } from '@/services/storage/localStorage';

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
  SET_FROM_LOCALSTORAGE,
} from './mutations';

// actions
import actions, {
  FILL_LOCAL_CATEGORIES,
  COMPLETED,
  ACTIVE,
  NEXT_ACTION,
  REPEAT_ACTION,
  ADD_FORM_VALUE,
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

  // fill data with localstorage params or default params
  for (let [i, component] of Constants.FUNNELSTEPS.entries()) {
    const comparation = LocalStorage.exist()
                        && LocalStorage.exist().category.filter((node) => node.name === category).length > 0
                        && LocalStorage.exist().datas.filter((node) => node.name === component).length > 0;
    temp.push({
      component,
      completed: comparation ? LocalStorage.exist().datas.filter((node) => node.name === component)[0].completed : false,
      active: true,
      form: comparation ? LocalStorage.exist().datas.filter((node) => node.name === component)[0].form : [],
    });
  }
  return temp;
};

export const categories = {
  namespaced: true,

  state: {
    funnel: {
      next: false,
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
      const { category, direction } = payload;
      if (direction === 'next') {
        commit(MOVE_FORWARD_ACTIVE_STATE, category);
      } else {
        commit(MOVE_BACK_ACTIVE_STATE, category);
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

  },

  getters,
};
