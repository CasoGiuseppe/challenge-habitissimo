// getters
import getters, {
  GET_All_CATEGORIES,
  GET_SELECTED_CATEGORIES,
  GET_ALl_COMPLETED_BY_CATEGORY,
  GET_NEXT_STEP,
} from './getters';

// default value
const defaultState = () => ({
  categories: [{
    route: 'reform',
    funnel: [
      {
        component: 'step1',
        completed: false,
        active: false,
      },
      {
        component: 'step2',
        completed: false,
        active: false,
      },
      {
        component: 'step3',
        completed: false,
        active: false,
      },
    ],
  }, {
    route: 'building',
    funnel: [
      {
        component: 'step1',
        completed: true,
        active: false,
      },
      {
        component: 'step2',
        completed: true,
        active: false,
      },
      {
        component: 'step3',
        completed: false,
        active: false,
      },
    ],
  }, {
    route: 'change',
    funnel: [
      {
        component: 'step1',
        completed: true,
        active: false,
      },
      {
        component: 'step2',
        completed: true,
        active: false,
      },
      {
        component: 'step3',
        completed: false,
        active: false,
      },
    ],
  }, {
    route: 'painters',
    funnel: [
      {
        component: 'step1',
        completed: false,
        active: false,
      },
      {
        component: 'step2',
        completed: false,
        active: false,
      },
      {
        component: 'step3',
        completed: false,
        active: false,
      },
    ],
  }, {
    route: 'bricklayers',
    funnel: [
      {
        component: 'step1',
        completed: false,
        active: false,
      },
      {
        component: 'step2',
        completed: false,
        active: false,
      },
      {
        component: 'step3',
        completed: false,
        active: false,
      },
    ],
  }, {
    route: 'parquet',
    funnel: [
      {
        component: 'step1',
        completed: false,
        active: false,
      },
      {
        component: 'step2',
        completed: false,
        active: false,
      },
      {
        component: 'step3',
        completed: false,
        active: false,
      },
    ],
  }, {
    route: 'others',
  }],
});

export const categories = {
  namespaced: true,

  state: defaultState(),

  getters,
};
