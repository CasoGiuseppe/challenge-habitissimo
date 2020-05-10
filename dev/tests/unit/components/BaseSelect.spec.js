import BaseSelect from '@/components/base-select/BaseSelect'
import { mount } from '@vue/test-utils'

describe('BaseSelect.vue', () => {
  let component

  beforeEach(() => {
    component = mount(BaseSelect, {
      propsData:{
        id: 'test',
        placeholder: 'placeholder',
        value: 'value',
        options: [
          {
            id: 1,
            label: "option",
            value: 1
          }
        ],
        isRequired: {
          state: false,
          label: 'required'
        },
        isValidate: {
          state: true
        },
        isCurrent: 'current',
        isDisabled: false,
        isLoading: true
      }
    })
  })

  it('has correct props values', () => {
    expect(component.props().id).toBe('test')
    expect(component.props().placeholder).toBe('placeholder')
    expect(component.props().value).toBe('value')
    expect(component.props().options).toContainEqual({id: 1, label: 'option', value: 1})
    expect(component.props().isRequired).toHaveProperty('state', false)
    expect(component.props().isValidate).toHaveProperty('state', true)
    expect(component.props().isCurrent).toBe('current')
    expect(component.props().isDisabled).toBeFalsy()
    expect(component.props().isLoading).toBeTruthy()
  })

  it('has correct $emit response', async () => {
    component.vm.$emit('input', 'inputvalue')
    component.vm.$emit('change', 'changevalue')

    await component.vm.$nextTick()
    expect(component.emitted().input).toBeTruthy()
    expect(component.emitted().input[0]).toEqual(['inputvalue'])

    expect(component.emitted().change).toBeTruthy()
    expect(component.emitted().change[0]).toEqual(['changevalue'])
  })

  it('has correct class name', () => {
    expect(component.classes()).toContain('base-select--isLoading')
  })

  it('has the expected html structure', () => {
    expect(component.html()).toMatchSnapshot()
  })
})