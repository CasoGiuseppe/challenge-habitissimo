// getters
import getters, {
  GET_All_CATEGORIES,
  GET_SELECTED_CATEGORIES,
  GET_ALl_COMPLETED_BY_CATEGORY,
  GET_NEXT_STEP,
} from './getters';

// default value
const defaultState = () => ([
  {
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
    features: [
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
    features: [
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
    features: [
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
    features: [
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
    features: [
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
    features: [
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
    ],
  }, {
    route: 'others',
  }]
);

export const categories = {
  namespaced: true,

  state: {
    categories: defaultState(),
  },

  getters,
};
