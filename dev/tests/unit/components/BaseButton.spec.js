import BaseButton from '@/components/base-button/BaseButton'
import { mount } from '@vue/test-utils'

describe('BaseButton.vue', () => {
  let component

  beforeEach(() => {
    component = mount(BaseButton, {
      propsData:{
        isDisabled: true,
        isSecondary: true,
        isFullsize: true,
        isLight: true,
        hasMinWidth: "100px",
        isReplaced: {
          state: false,
          icon: 'svg',
          color: 'primary'
        }
      },
      slots: {
        default: '<span class="slot-action">button</span>'
      }
    })
  })

  it('has correct props values', () => {
    expect(component.props().isDisabled).toBe(true)
    expect(component.props().isSecondary).toBe(true)
    expect(component.props().isFullsize).toBe(true)
    expect(component.props().isLight).toBe(true)
    expect(component.props().hasMinWidth).toBe('100px')
    expect(component.props().isReplaced).toHaveProperty('icon', 'svg')
  })

  it('has correct $emit response', async () => {
    component.vm.$emit('click', 'clickvalue')

    await component.vm.$nextTick()
    expect(component.emitted().click).toBeTruthy()
    expect(component.emitted().click[0]).toEqual(['clickvalue'])
  })

  it('has correct action slot', () => {
    const main = component.find('.base-button')
    expect(main.findAll(".slot-action").length).toBe(1);
  })

  it('has correct class name', () => {
    expect(component.classes()).toContain('base-button--isLight')
  })

  it('has the expected html structure', () => {
    expect(component.html()).toMatchSnapshot()
  })
})