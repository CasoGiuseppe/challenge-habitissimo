import Banner from '@/components/banner/Banner'
import { mount } from '@vue/test-utils'
window.matchMedia = window.matchMedia || function() {
  return {
      matches : false,
      addListener : function() {},
      removeListener: function() {}
  };
};

describe('Banner.vue', () => {
  let component

  beforeEach(() => {
    component = mount(Banner, {
      propsData:{
        isSecondary: true,
        hasIcon: 'icon'
      }
    })
  })

  it('has correct props values', () => {
    expect(component.props().isSecondary).toBeTruthy()
    expect(component.props().hasIcon).toBe('icon')
  })

  it('has correct class name', () => {
    expect(component.classes()).toContain('banner--isSecondary')
  })

  it('has the expected html structure', () => {
    expect(component.html()).toMatchSnapshot()
  })
})