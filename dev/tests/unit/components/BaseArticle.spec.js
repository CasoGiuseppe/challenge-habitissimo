import BaseArticle from '@/components/base-article/BaseArticle'
import { mount } from '@vue/test-utils'

describe('BaseArticle.vue', () => {
  let component

  beforeEach(() => {
    component = mount(BaseArticle, {
      propsData:{
        category: 'cat',
        arrow: {
          'direction': 'dir'
        }
      },
      slots: {
        action: '<span class="slot-action">title</span>'
      }
    })
  })

  it('has correct action slot', () => {
    const main = component.find('.base-article')
    expect(main.findAll(".slot-action").length).toBe(1);
  })

  it('has correct props values', () => {
    expect(component.props().category).toBe('cat')
    expect(component.props().arrow).toHaveProperty('direction', 'dir')
  })

  it('has the expected html structure', () => {
    expect(component.html()).toMatchSnapshot()
  })
})