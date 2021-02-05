import { mount } from '@vue/test-utils'
import Switch from '../src/index.vue'

describe('Switch.vue', () => {

  test('create', () => {
    const wrapper = mount(Switch, {
      props: {
        activeText: 'on',
        inactiveText: 'off',
        activeColor: '#0f0',
        inactiveColor: '#f00',
        width: 100,
      },
    })
    const vm = wrapper.vm
    const coreTj = vm.$el.querySelector('.tj-switch__core')
    expect(coreTj.style.backgroundColor).toEqual('rgb(255, 0, 0)')
    expect(coreTj.style.width).toEqual('100px')
    const leftLabelWrapper = wrapper.find('.tj-switch__label--left span')
    expect(leftLabelWrapper.text()).toEqual('off')
  })

  test('switch with icons', () => {
    const wrapper = mount(Switch, {
      props: {
        activeIconClass: 'tj-icon-check',
        inactiveIconClass: 'tj-icon-close',
      },
    })

    const iconWrapper = wrapper.find('.tj-switch__label--left i')
    expect(iconWrapper.classes('tj-icon-close')).toBe(true)
  })

  test('value correctly update', async () => {
    const wrapper = mount({
      components: {
        'tj-switch': Switch,
      },
      template: `
        <div>
          <tj-switch
            v-model="value"
            activeColor="#0f0"
            inactiveColor="#f00">
          </tj-switch>
        </div>
      `,
      data() {
        return {
          value: true,
        }
      },
    })
    const vm = wrapper.vm
    const coreTj = vm.$el.querySelector('.tj-switch__core')
    expect(coreTj.style.backgroundColor).toEqual('rgb(0, 255, 0)')
    const coreWrapper = wrapper.find('.tj-switch__core')
    await coreWrapper.trigger('click')
    expect(coreTj.style.backgroundColor).toEqual('rgb(255, 0, 0)')
    expect(vm.value).toEqual(false)
    await coreWrapper.trigger('click')
    expect(vm.value).toEqual(true)
  })

  test('change event', async () => {
    const wrapper = mount({
      components: {
        'tj-switch': Switch,
      },
      template: `
        <div>
          <tj-switch
            v-model="value"
            @update:modelValue="handleChange">
          </tj-switch>
        </div>
      `,
      methods: {
        handleChange(val) {
          this.target = val
        },
      },
      data() {
        return {
          target: 1,
          value: true,
        }
      },
    })
    const vm = wrapper.vm

    expect(vm.target).toEqual(1)
    const coreWrapper = wrapper.find('.tj-switch__core')
    await coreWrapper.trigger('click')
    const switchWrapper = wrapper.findComponent(Switch)
    expect(switchWrapper.emitted()['update:modelValue']).toBeTruthy()
    expect(vm.target).toEqual(false)
  })

  test('disabled switch should not respond to user click', async () => {
    const wrapper = mount({
      components: {
        'tj-switch': Switch,
      },
      template: `
        <div>
          <tj-switch disabled v-model="value"></tj-switch>
        </div>
      `,
      data() {
        return {
          value: true,
        }
      },
    })
    const vm = wrapper.vm

    expect(vm.value).toEqual(true)
    const coreWrapper = wrapper.find('.tj-switch__core')
    await coreWrapper.trigger('click')
    expect(vm.value).toEqual(true)
  })

  test('expand switch value', async () => {
    const wrapper = mount({
      components: {
        'tj-switch': Switch,
      },
      template: `
        <div>
          <tj-switch v-model="value" :active-value="onValue" :inactive-value="offValue"></tj-switch>
        </div>
      `,
      data() {
        return {
          value: '100',
          onValue: '100',
          offValue: '0',
        }
      },
    })
    const vm = wrapper.vm

    const coreWrapper = wrapper.find('.tj-switch__core')
    await coreWrapper.trigger('click')
    expect(vm.value).toEqual('0')
    await coreWrapper.trigger('click')
    expect(vm.value).toEqual('100')
  })

  test('value is the single source of truth', async () => {
    const wrapper = mount({
      components: {
        'tj-switch': Switch,
      },
      template: `
        <div>
          <tj-switch :value="true"></tj-switch>
        </div>
      `,
    })
    const vm = wrapper.vm
    const coreWrapper = wrapper.find('.tj-switch__core')
    const switchWrapper = wrapper.findComponent(Switch)
    const switchVm = switchWrapper.vm
    const inputTj = vm.$el.querySelector('input')

    expect(switchVm.checked).toBe(true)
    expect(switchWrapper.classes('is-checked')).toEqual(true)
    expect(inputTj.checked).toEqual(true)
    await coreWrapper.trigger('click')
    expect(switchVm.checked).toBe(true)
    expect(switchWrapper.classes('is-checked')).toEqual(true)
    expect(inputTj.checked).toEqual(true)
  })

  test('modtj-value is the single source of truth', async () => {
    const wrapper = mount({
      components: {
        'tj-switch': Switch,
      },
      template: `
        <div>
          <tj-switch :modtj-value="true"></tj-switch>
        </div>
      `,
    })
    const vm = wrapper.vm
    const coreWrapper = wrapper.find('.tj-switch__core')
    const switchWrapper = wrapper.findComponent(Switch)
    const switchVm = switchWrapper.vm
    const inputTj = vm.$el.querySelector('input')

    expect(switchVm.checked).toBe(true)
    expect(switchWrapper.classes('is-checked')).toEqual(true)
    expect(inputTj.checked).toEqual(true)
    await coreWrapper.trigger('click')
    expect(switchVm.checked).toBe(true)
    expect(switchWrapper.classes('is-checked')).toEqual(true)
    expect(inputTj.checked).toEqual(true)
  })

  test('sets checkbox value', async () => {
    const wrapper = mount({
      components: {
        'tj-switch': Switch,
      },
      template: `
        <div>
          <tj-switch v-model="value"></tj-switch>
        </div>
      `,
      data() {
        return {
          value: false,
        }
      },
    })
    const vm = wrapper.vm
    const inputTj = vm.$el.querySelector('input')

    vm.value = true
    await vm.$nextTick()
    expect(inputTj.checked).toEqual(true)
    vm.value = false
    await vm.$nextTick()
    expect(inputTj.checked).toEqual(false)
  })
})
