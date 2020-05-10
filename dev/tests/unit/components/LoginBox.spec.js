import LoginBox from '@/components/login-box/LoginBox'
import { mount } from '@vue/test-utils'

describe('LoginBox.vue', () => {
  let component

  beforeEach(() => {
    component = mount(LoginBox, {
      propsData:{
        isInColumns: true
      }
    })
  })

  it('has correct props values', () => {
    expect(component.props().isInColumns).toBeTruthy()
  })

  it('has correct class name', () => {
    const child = component.find('.login-box__UI-elements')
    expect(child.classes()).toContain('login-box__UI-elements--isInColumns')
  })

  it('has the expected html structure', () => {
    expect(component.html()).toMatchSnapshot()
  })
})