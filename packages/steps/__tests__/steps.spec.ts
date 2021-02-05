import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import Steps from '../src/index.vue'
import Step from '../src/item.vue'

const _mount = (template: string) => mount({
  components: {
    'tj-steps': Steps,
    'tj-step': Step,
  },
  template,
}, {
  attachTo: document.body,
  global: {
    provide: {
      TjSteps: {},
    },
  },
})

describe('Steps.vue', () => {
  test('render', () => {
    const wrapper = _mount(`
      <tj-steps>
        <tj-step />
        <tj-step />
        <tj-step />
      </tj-steps>
    `)
    expect(wrapper.findAll('.tj-step').length).toBe(3)
    expect(wrapper.classes()).toContain('tj-steps--horizontal')
    expect(wrapper.find('.tj-step').classes()).toContain('is-horizontal')
  })

  test('space', () => {
    const wrapper = _mount(`
      <tj-steps :space="100">
        <tj-step />
      </tj-steps>
    `)
    expect(wrapper.find('.tj-step').attributes('style')).toMatch('flex-basis: 100px;')
  })

  test('alignCenter', () => {
    const wrapper = _mount(`
      <tj-steps alignCenter>
        <tj-step />
      </tj-steps>
    `)
    expect(wrapper.find('.tj-step').classes()).toContain('is-center')
  })

  test('direction', () => {
    const wrapper = _mount(`
      <tj-steps direction="vertical">
        <tj-step />
      </tj-steps>
    `)
    expect(wrapper.classes()).toContain('tj-steps--vertical')
    expect(wrapper.find('.tj-step').classes()).toContain('is-vertical')
  })

  test('simple', () => {
    const wrapper = _mount(`
      <tj-steps simple direction="vertical" :space="100" alignCenter>
        <tj-step />
      </tj-steps>
    `)
    expect(wrapper.classes()).toContain('tj-steps--simple')
    expect(wrapper.find('is-center').exists()).toBe(false)
    expect(wrapper.find('is-vertical').exists()).toBe(false)
  })

  test('active', async () => {
    const wrapper = _mount(`
      <tj-steps :active="0">
        <tj-step />
        <tj-step />
        <tj-step />
      </tj-steps>
    `)
    await nextTick()
    expect(wrapper.findAll('.tj-step')[0].find('.tj-step__head').classes()).toContain('is-process')
    expect(wrapper.findAll('.tj-step')[1].find('.tj-step__head').classes()).toContain('is-wait')
    expect(wrapper.findAll('.tj-step')[2].find('.tj-step__head').classes()).toContain('is-wait')
    await wrapper.setProps({ active: 1 })
    expect(wrapper.findAll('.tj-step')[0].find('.tj-step__head').classes()).toContain('is-finish')
    expect(wrapper.findAll('.tj-step')[1].find('.tj-step__head').classes()).toContain('is-process')
    expect(wrapper.findAll('.tj-step')[2].find('.tj-step__head').classes()).toContain('is-wait')
    await wrapper.setProps({ active: 2 })
    expect(wrapper.findAll('.tj-step')[0].find('.tj-step__head').classes()).toContain('is-finish')
    expect(wrapper.findAll('.tj-step')[1].find('.tj-step__head').classes()).toContain('is-finish')
    expect(wrapper.findAll('.tj-step')[2].find('.tj-step__head').classes()).toContain('is-process')
    await wrapper.setProps({ active: 3 })
    expect(wrapper.findAll('.tj-step')[2].find('.tj-step__head').classes()).toContain('is-finish')
  })

  test('process-status', async () => {
    const wrapper = _mount(`
      <tj-steps :active="2" process-status="success">
        <tj-step />
        <tj-step />
        <tj-step />
      </tj-steps>
    `)
    await nextTick()
    expect(wrapper.findAll('.tj-step')[2].find('.tj-step__head').classes()).toContain('is-success')
    await wrapper.setProps({ processStatus: 'error' })
    expect(wrapper.findAll('.tj-step')[2].find('.tj-step__head').classes()).toContain('is-error')
  })

  test('finish-status', async () => {
    const wrapper = _mount(`
      <tj-steps :active="2" finish-status="error">
        <tj-step />
        <tj-step />
        <tj-step />
      </tj-steps>
    `)
    await nextTick()
    expect(wrapper.findAll('.tj-step')[0].find('.tj-step__head').classes()).toContain('is-error')
    await wrapper.setProps({ finishStatus: 'success' })
    expect(wrapper.findAll('.tj-step')[0].find('.tj-step__head').classes()).toContain('is-success')
  })

  test('step attribute', () => {
    const wrapper = _mount(`
      <tj-steps :active="0">
        <tj-step icon="tj-icon-edit" title="title" description="description" status="wait" />
      </tj-steps>
    `)
    expect(wrapper.find('.tj-step__head').classes()).toContain('is-wait')
    expect(wrapper.find('.tj-icon-edit').exists()).toBe(true)
    expect(wrapper.find('.tj-step__title').text()).toBe('title')
    expect(wrapper.find('.tj-step__description').text()).toBe('description')
  })

  test('step slot', () => {
    const wrapper = _mount(`
      <tj-steps :active="0">
        <tj-step>
          <template #title>A</template>
          <template #description>B</template>
        </tj-step>
      </tj-steps>
    `)
    expect(wrapper.find('.tj-step__title').text()).toBe('A')
    expect(wrapper.find('.tj-step__description').text()).toBe('B')
  })
})
