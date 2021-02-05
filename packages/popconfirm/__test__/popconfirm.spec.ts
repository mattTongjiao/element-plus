import { h } from 'vue'
import { mount } from '@vue/test-utils'
import TjPopconfirm from '../src/index.vue'
const selector = '.tj-popper'
const _mount = (props: any = {}) => mount(TjPopconfirm, {
  props,
  slots: {
    reference: () => h('div', {
      class: 'reference',
    }),
  },
  attachTo: 'body',
})

describe('Popconfirm.vue', () => {

  test('render test', async () => {
    const wrapper = _mount()
    const trigger = wrapper.find('.reference')

    expect(document.querySelector(selector).getAttribute('style')).toContain('display: none')

    await trigger.trigger('click')

    expect(document.querySelector(selector).getAttribute('style')).not.toContain('display: none')
  })
})
