import Badge from '@/components/badge/Badge'
import { mount } from '@vue/test-utils'

describe('Badge.vue', () => {
  let component

  beforeEach(() => {
    component = mount(Badge, {
      propsData:{
        id: 'test',
        isLoading: true,
        isLight: false,
        arrow: {
          dir: 'dir'
        },
        hasIcon: 'icon',
        isAnimated: true
      },
      slots: {
        image: '<span class="slot-image">image</span>',
        action: '<span class="slot-action">title</span>'
      }
    })
  })

  it('has correct props values', () => {
    expect(component.props().id).toBe('test')
    expect(component.props().isLoading).toBeTruthy()
    expect(component.props().isLight).toBeFalsy()
    expect(component.props().arrow).toHaveProperty('dir', 'dir')
    expect(component.props().hasIcon).toBe('icon')
    expect(component.props().isAnimated).toBeTruthy()
  })

  it('has correct action slot', () => {
    const main = component.find('.badge')
    expect(main.findAll(".slot-image").length).toBe(1);
    expect(main.findAll(".slot-action").length).toBe(1);
  })

  it('has correct class name', () => {
    expect(component.classes()).toContain('badge--isLoading')
  })

  it('has the expected html structure', () => {
    expect(component.html()).toMatchSnapshot()
  })
})