export const GET_All_CATEGORIES = 'getAllCategories';
export const GET_SELECTED_CATEGORIES = 'getSelectedCategories';

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
};
