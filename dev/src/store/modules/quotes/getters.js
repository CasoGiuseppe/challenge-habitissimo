export const GET_All_QUOTES = 'getAllQuotes';

export default {
  /**
   * Get all quotes
   * @param state
   */
  [GET_All_QUOTES]: (state) => state.quotes,
};
