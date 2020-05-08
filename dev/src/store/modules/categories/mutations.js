export const SET_LOCAL_CATEGORIES = 'setLocalCategories';
export const SET_NEW_COMPLETED_STATE = 'setNewCompletedState';
export const MOVE_FORWARD_ACTIVE_STATE = 'moveForwardActiveState';
export const MOVE_BACK_ACTIVE_STATE = 'moveBackActiveState';
export const CHANGE_NEXT_ACTION = 'changeNextAction';
export const RESET_COMPLETED = 'resetCompleted';
export const ADD_COMPLETED_FORM = 'addCompletedForm';
export const SET_FROM_LOCALSTORAGE = 'setFromLocalstorage';

export default {
  /**
   * Set filter process steate
   * @param state
   * @param payload
   */
  [SET_LOCAL_CATEGORIES](state, payload) {
    state.list = { ...state.list, ...payload };
  },

  /**
   * Set completed state
   * @param state
   * @param category
   * @param step
   */
  [SET_NEW_COMPLETED_STATE](state, category) {
    const section = state.list[category];
    const current = section.funnel.filter((node) => node.active === true);
    const index = section.funnel.indexOf(current[0]);
    section.funnel[index].completed = true;
  },

  /**
   * Move forward state
   * @param state
   * @param category
   */
  [MOVE_FORWARD_ACTIVE_STATE](state, category) {
    const section = state.list[category];
    const current = section.funnel.filter((node) => node.active === true);
    const total = state.list[category].funnel.length;

    if (current.length === 0) {
      section.funnel[total - 1].active = true;
    } else {
      const index = section.funnel.indexOf(current[0]);
      if ((index + 1) > (total - 1)) {
        section.funnel[index].active = true;
      } else {
        section.funnel[index].active = false;
        section.funnel[index + 1].active = true;
      }
    }
  },

  /**
   * Move back state
   * @param state
   * @param category
   */
  [MOVE_BACK_ACTIVE_STATE](state, category) {
    const section = state.list[category];
    const current = section.funnel.filter((node) => node.active === true);

    if (current.length === 0) {
      section.funnel[0].active = true;
    } else {
      const index = section.funnel.indexOf(current[0]);
      if (index === 0) {
        section.funnel[0].active = true;
      } else {
        section.funnel[index].active = false;
        section.funnel[index - 1].active = true;
      }
    }
  },

  /**
   * Change next button state
   * @param state
   * @param status
   */
  [CHANGE_NEXT_ACTION](state, status) {
    state.funnel.next = status;
  },

  /**
   * Repeat action
   * @param state
   * @param category
   */
  [RESET_COMPLETED](state, category) {
    const section = state.list[category];
    const { funnel } = section;
    for (let [index, node] of funnel.entries()) {
      node.completed = false;
      node.form = [];
      index !== 0 ? node.active = false : node.active = true;
    }
  },

  /**
   * Add completed form value
   * @param state
   * @param category
   * @param fields
   */
  [ADD_COMPLETED_FORM](state, payload) {
    const { category, fields } = payload;
    const section = state.list[category];
    const current = section.funnel.indexOf(section.funnel.filter((node) => node.active === true)[0]);
    section.funnel[current].form = fields;
  },

  /**
   * Set value from localstorage
   * @param state
   * @param category
   * @param step
   */
  [SET_FROM_LOCALSTORAGE](state, payload) {
    const { category, fields } = payload;
    const section = state.list[category];
    const current = section.funnel.indexOf(section.funnel.filter((node) => node.active === true)[0]);
    section.funnel[current].form = fields;
  },
};
