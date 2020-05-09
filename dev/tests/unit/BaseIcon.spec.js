import BaseIcon from '@/components/base-icon/BaseIcon'
import { mount } from '@vue/test-utils'

describe('BaseIcon.vue', () => {
  let component

  beforeEach(() => {
    component = mount(BaseIcon, {
      propsData:{
        name: 'icon',
        size: 'size',
        color: 'primary',
      }
    })
  })

  it('has correct props values', () => {
    expect(component.props().name).toBe('icon')
    expect(component.props().size).toBe('size')
    expect(component.props().color).toBe('primary')
  })

  it('has correct class name', () => {
    expect(component.classes()).toContain('base-icon--is-primary')
  })

  it('has the expected html structure', () => {
    expect(component.html()).toMatchSnapshot()
  })
})