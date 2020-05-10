import Vuex from 'vuex'
import getters from '@/store/modules/categories/getters'
import { createLocalVue } from '@vue/test-utils'
import { categories } from './mock'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Getters', () => {
  it('Should return all store categories', () => {
    const actual = getters.getAllCategories(categories)
    const length = Object.keys(actual).length
    expect(length).toBeGreaterThan(0);
  })

  it('Should return selected store categories', () => {
    const actual = getters.getSelectedCategories(categories)('albaniles')
    const name = actual.data.name
    expect(name).toBe('albañiles')
  })

  describe('Getters mock', () => {
    let getters
    let store
    
    beforeEach(() => {
      getters = {
        getSelectedCategories: (state) => (item) => state.list[item],
        getActiveState: (state) => (item) => getters.getSelectedCategories(state)(item).funnel.filter((node) => node.active === true),
        getCompletedState: (state) => (item) => getters.getSelectedCategories(state)(item).funnel.filter((node) => node.completed === true),
        getAllComplteted: (state) => (item) => getters.getSelectedCategories(state)(item).funnel.map((node) => node.completed === true).every((value) => value === true),
        getFormFields: (state) => (item, step) => getters.getSelectedCategories(state)(item).funnel.filter((node) => node.component === step)[0]
      }
      store = new Vuex.Store({
        store: categories,
        getters
      })
    })

    it('Should return active item', () => {
      const actual = getters.getActiveState(categories)('albaniles')
      const length = Object.keys(actual).length
      expect(length).toBeGreaterThan(0);
    })

    it('Should return completed item', () => {
      const actual = getters.getCompletedState(categories)('albaniles')
      const length = Object.keys(actual).length
      expect(length).toBeGreaterThanOrEqual(0);
    })

    it('Should return all completed items', () => {
      const actual = getters.getAllComplteted(categories)('albaniles')
      expect(actual).toBeFalsy();
    })

    it('Should return item fields', () => {
      const actual = getters.getFormFields(categories)('albaniles', 'Step1')
      const length = Object.keys(actual).length
      expect(length).toBeGreaterThanOrEqual(0);
    })
  })
})