export const GET_All_CATEGORIES = 'getAllCategories';
export const GET_SELECTED_CATEGORIES = 'getSelectedCategories';
export const GET_ACTIVE_STATE = 'getActiveState';
export const ALL_COMPLETED = 'getAllComplteted';
export const ALL_FORM_FIELDS = 'getFormFields';
export const GET_COMPLETED_STATE = 'getCompletedState';

export default {
  /**
   * Get selected categories
   * @param state
   * @param item
   */
  [GET_SELECTED_CATEGORIES]: (state) => (item) => state.list[item],

  /**
   * Get all categories
   * @param state
   */
  [GET_All_CATEGORIES]: (state) => state.list,

  /**
   * Get active state
   * @param state
   * @param category
   */
  [GET_ACTIVE_STATE]: (state, getters) => (category) => {
    const res = getters[GET_SELECTED_CATEGORIES](category).funnel.filter((node) => node.active === true);
    return getters[GET_SELECTED_CATEGORIES](category).funnel.filter((node) => node.active === true);
  },

  /**
   * Get completed step
   * @param state
   * @param category
   */
  [GET_COMPLETED_STATE]: (state, getters) => (category) => {
    return getters[GET_SELECTED_CATEGORIES](category).funnel.filter((node) => node.completed === true);
  },

  /**
   * Get all completed
   * @param state
   * @param category
   */
  [ALL_COMPLETED]: (state, getters) => (category) => {
    return getters[GET_SELECTED_CATEGORIES](category).funnel.map((node) => node.completed === true).every((value) => value === true);
  },

  /**
   * Get form fields
   * @param state
   * @param category
   */
  [ALL_FORM_FIELDS]: (state, getters) => (category) => {
    return getters[GET_SELECTED_CATEGORIES](category).funnel.filter((node) => node.active === true)[0].form;
  },
};
