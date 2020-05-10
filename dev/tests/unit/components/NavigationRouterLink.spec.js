import NavigationRouterLink from '@/components/navigation-router-link/NavigationRouterLink'
import { mount } from '@vue/test-utils'
const $route = {
  path: 'path',
  params: 'category'
}

describe('NavigationRouterLink.vue', () => {
  let component

  beforeEach(() => {
    component = mount(NavigationRouterLink, {
      stubs: ['router-link'],
      mocks: { $route },
      propsData:{
        link: 'link',
        step: 'step'
      }
    })
  })

  it('has correct props values', () => {
    expect(component.props().link).toBe('link')
    expect(component.props().step).toBe('step')
  })

  it('has the expected html structure', () => {
    expect(component.html()).toMatchSnapshot()
  })
})