import { mount } from '@vue/test-utils'
import Alert from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Alert.vue', () => {
  test('render test & class', () => {
    const wrapper = mount(Alert, {
      props: {
        title: AXIOM,
        showIcon: true,
      },
    })
    expect(wrapper.find('.tj-alert__title').text()).toEqual(AXIOM)
    expect(wrapper.find('.tj-alert').classes()).toContain('tj-alert--info')
  })

  test('type', () => {
    const wrapper = mount(Alert, {
      props: {
        title: 'test',
        type: 'success',
        showIcon: true,
      },
    })
    expect(wrapper.find('.tj-alert').classes()).toContain('tj-alert--success')
    expect(wrapper.find('.tj-alert__icon').classes()).toContain('tj-icon-success')
  })

  test('description', () => {
    const wrapper = mount(Alert, {
      props: {
        title: 'Dorne',
        description: AXIOM,
        showIcon: true,
      },
    })
    expect(wrapper.find('.tj-alert__description').text()).toEqual(AXIOM)
  })

  test('theme', () => {
    const wrapper = mount(Alert, {
      props: {
        title: 'test',
        effect: 'dark',
      },
    })
    expect(wrapper.find('.tj-alert').classes()).toContain('is-dark')
  })

  test('title slot', () => {
    const wrapper = mount(Alert, {
      slots: {
        title: AXIOM,
      },
    })
    expect(wrapper.find('.tj-alert__title').text()).toEqual(AXIOM)
  })

  test('close', async () => {
    const wrapper = mount(Alert, {
      props: {
        closeText: 'close',
      },
    })

    const closeBtn = wrapper.find('.tj-alert__closebtn')
    expect(closeBtn.exists()).toBe(true)

    await closeBtn.trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })
})
