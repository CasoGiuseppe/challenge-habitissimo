import Article from '@/components/article/Article'
import { mount } from '@vue/test-utils'

describe('Article.vue', () => {
  let component

  beforeEach(() => {
    component = mount(Article, {
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
    const main = component.find('.article')
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