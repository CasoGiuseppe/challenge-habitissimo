// getters
import getters, {
  // GET_All_CATEGORIES,
  GET_SELECTED_CATEGORIES,
} from './getters';

// default value
const defaultState = () => ({
  categories: [{
    route: 'reform',
  }, {
    route: 'building',
  }, {
    route: 'change',
  }, {
    route: 'painters',
  }, {
    route: 'bricklayers',
  }, {
    route: 'parquet',
  }, {
    route: 'others',
  }],
});

export const categories = {
  namespaced: true,

  state: defaultState(),

  getters,
};
