import BaseTextarea from '@/components/base-textarea/BaseTextarea'
import { mount } from '@vue/test-utils'

describe('BaseTextarea.vue', () => {
  let component

  beforeEach(() => {
    component = mount(BaseTextarea, {
      propsData:{
        id: 'test',
        placeholder: 'placeholder',
        rows: 5,
        value: 'value',
        isRequired: {
          state: false,
          label: 'required'
        },
        isValidate: {
          state: true
        }
      }
    })
  })

  it('has correct props values', () => {
    expect(component.props().id).toBe('test')
    expect(component.props().placeholder).toBe('placeholder')
    expect(component.props().rows).toBe(5)
    expect(component.props().isRequired).toHaveProperty('state', false)
    expect(component.props().isValidate).toHaveProperty('state', true)
  })

  it('has correct $emit response', async () => {
    component.vm.$emit('input', 'inputvalue')

    await component.vm.$nextTick()
    expect(component.emitted().input).toBeTruthy()
    expect(component.emitted().input[0]).toEqual(['inputvalue'])
  })

  it('has correct set data value', () => {
    component.setData({onActive: true})
    expect(component.vm.onActive).toBeTruthy()
  })

  it('has correct class name', () => {
    expect(component.classes()).toContain('base-textarea--isValid')
  })

  it('has the expected html structure', () => {
    expect(component.html()).toMatchSnapshot()
  })
})