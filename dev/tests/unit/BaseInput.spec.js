import BaseInput from '@/components/base-input/BaseInput'
import { mount } from '@vue/test-utils'

describe('BaseInput.vue', () => {
  let component

  beforeEach(() => {
    component = mount(BaseInput, {
      propsData:{
        type: 'text',
        id: 'test',
        placeholder: 'placeholder',
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
    expect(component.props().type).toBe('text')
    expect(component.props().id).toBe('test')
    expect(component.props().placeholder).toBe('placeholder')
    expect(component.props().isRequired).toHaveProperty('label', 'required')
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

  it('has input correct ID', () => {
    const input = component.find('.base-input__field')
    expect(input.attributes().id).toEqual('test')
  })

  it('has the expected html structure', () => {
    expect(component.html()).toMatchSnapshot()
  })
})