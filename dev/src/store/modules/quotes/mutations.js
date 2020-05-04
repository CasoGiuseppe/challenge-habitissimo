export const SET_QUOTES = 'setQuotes';

export default {
  /**
   * Set filter process steate
   * @param state
   * @param payload
   */
  [SET_QUOTES](state, payload) {
    state.quotes = payload;
  },
};
