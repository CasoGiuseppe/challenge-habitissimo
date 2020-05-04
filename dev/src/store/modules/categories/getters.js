export const GET_All_CATEGORIES = 'getAllCategories';
export const GET_SELECTED_CATEGORIES = 'getSelectedCategories';
export const GET_ALl_COMPLETED_BY_CATEGORY = 'getAllCompletedByCategory';
export const GET_NEXT_STEP = 'getNextStep';

export default {
  /**
   * Get selected categories
   * @param state
   * @param item
   */
  [GET_SELECTED_CATEGORIES]: (state) => (item) => state.categories.filter((category) => category.route === item),

  /**
   * Get all categories
   * @param state
   */
  [GET_All_CATEGORIES]: (state) => state.categories,

  /**
   * Get last completed step
   * @param state
   * @param category
   */
  [GET_ALl_COMPLETED_BY_CATEGORY]: (state, getters) => (current) => current[0].funnel.filter((node) => node.completed === true),

  /**
   * Get last completed step
   * @param state
   * @param category
   */
  [GET_NEXT_STEP]: (state, getters) => (category) => {
    const current = getters[GET_SELECTED_CATEGORIES](category);
    const { funnel } = current[0];
    const { length, [length - 1]: lastItem } = getters[GET_ALl_COMPLETED_BY_CATEGORY](current);
    return lastItem
      ? funnel.indexOf(lastItem) !== (funnel.length - 1)
        ? funnel[funnel.indexOf(lastItem) + 1].component
        : funnel[funnel.indexOf(lastItem)].component
      : funnel[0].component;
  },
};
