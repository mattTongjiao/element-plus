import { mount } from '@vue/test-utils'
import Breadcrumb from '../src/index.vue'
import BreadcrumbItem from '../src/item.vue'

const _mount = (template: string) => mount({
  components: {
    'tj-breadcrumb': Breadcrumb,
    'tj-breadcrumb-item': BreadcrumbItem,
  },
  template,
}, {
  global: {
    provide: {
      breadcrumb: {},
    },
  },
})

describe('Breadcrumb.vue', () => {
  test('separator', () => {
    const wrapper = _mount(`
      <tj-breadcrumb separator="?">
        <tj-breadcrumb-item>A</tj-breadcrumb-item>
      </tj-breadcrumb>
    `)
    expect(wrapper.find('.tj-breadcrumb__separator').text()).toBe('?')
  })

  test('separatorClass', () => {
    const wrapper = _mount(`
      <tj-breadcrumb separator="?" separatorClass="test">
        <tj-breadcrumb-item>A</tj-breadcrumb-item>
      </tj-breadcrumb>
    `)
    expect(wrapper.find('.tj-breadcrumb__separator').text()).toBe('')
    expect(wrapper.find('.tj-breadcrumb__separator').classes()).toContain('test')
  })

  test('to', () => {
    const wrapper = _mount(`
      <tj-breadcrumb separator="?" separatorClass="test">
        <tj-breadcrumb-item to="/index">A</tj-breadcrumb-item>
      </tj-breadcrumb>
    `)
    expect(wrapper.find('.tj-breadcrumb__inner').classes()).toContain('is-link')
  })

  test('single', () => {
    const wrapper = _mount('<tj-breadcrumb-item>A</tj-breadcrumb-item>')
    expect(wrapper.find('.tj-breadcrumb__inner').text()).toBe('A')
    expect(wrapper.find('.tj-breadcrumb__separator').text()).toBe('')
  })
})
