import { mount } from '@vue/test-utils'
import Tag from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Tag.vue', () => {
  test('render text & class', () => {
    const wrapper = mount(Tag, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)

    const vm = wrapper.vm

    expect(vm.$el.classList.contains('tj-tag')).toEqual(true)
    expect(vm.$el.classList.contains('tj-tag__close')).toEqual(false)
    expect(vm.$el.classList.contains('is-hit')).toEqual(false)
    expect(vm.$el.classList.contains('md-fade-center')).toEqual(false)
  })

  test('type', () => {
    const wrapper = mount(Tag, {
      props: {
        type: 'primary',
      },
    })
    const vm = wrapper.vm
    expect(vm.$el.classList.contains('tj-tag--primary')).toEqual(true)
  })

  test('hit', () => {
    const wrapper = mount(Tag, {
      props: {
        hit: true,
      },
    })
    const vm = wrapper.vm
    expect(vm.$el.classList.contains('is-hit')).toEqual(true)
  })

  test('closeable', async () => {
    const wrapper = mount(Tag, {
      props: {
        closable: true,
      },
    })
    const closeBtn = wrapper.find('.tj-tag .tj-tag__close')
    expect(closeBtn.exists()).toBe(true)

    await closeBtn.trigger('click')
    expect(wrapper.emitted().close).toBeTruthy()
  })

  test('closeTransition', () => {
    const wrapper = mount(Tag, {
      props: {
        closeTransition: true,
      },
    })
    const vm = wrapper.vm
    expect(vm.$el.classList.contains('md-fade-center')).toEqual(false)
  })

  test('color', () => {
    const wrapper = mount(Tag, {
      props: {
        color: 'rgb(0, 0, 0)',
      },
    })
    const vm = wrapper.vm
    expect(vm.$el.style.backgroundColor).toEqual('rgb(0, 0, 0)')
  })

  test('theme', () => {
    const wrapper = mount(Tag, {
      props: {
        effect: 'dark',
      },
    })
    const vm = wrapper.vm
    const el = vm.$el
    expect(el.className.indexOf('tj-tag--dark') > -1).toEqual(true)
    expect(el.className.indexOf('tj-tag--light') > -1).toEqual(false)
    expect(el.className.indexOf('tj-tag--plain') > -1).toEqual(false)
  })
})
