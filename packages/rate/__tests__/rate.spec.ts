import { mount } from '@vue/test-utils'
import Rate from '../src/index.vue'

describe('Rate.vue', () => {
  test('create', () => {
    const wrapper = mount(Rate, {
      props: {
        max: 10,
      },
    })
    const stars = wrapper.findAll('.tj-rate__item')
    expect(stars.length).toEqual(10)
  })

  test('allow half', async () => {
    const wrapper = mount({
      template: `
        <div>
          <tj-rate v-model="value" allow-half ref='rate' />
        </div>
      `,
      props: {},
      data() {
        return {
          value: 0,
        }
      },
      components: {
        'tj-rate': Rate,
      },
    })
    const vm = wrapper.vm
    const secondStar = wrapper.findAll('.tj-rate__item')[1].element as HTMLElement
    vm.$refs.rate.setCurrentValue(1, { target: secondStar, offsetX: 0 })
    // expect(vm.$refs.rate.currentValue).toEqual(0.5)
    secondStar.click()
    vm.$refs.rate.resetCurrentValue()
    expect(vm.value).toEqual(0.5)
  })

  test('with texts', () => {
    const wrapper = mount(Rate, {
      props: {
        showText: true,
        modelValue: 4,
        texts: ['1', '2', '3', '4', '5'],
      },
    })
    const text = wrapper.find('.tj-rate__text').element
    expect(text.textContent).toEqual('4')
  })

  test('value change', async () => {
    const wrapper = mount(Rate, {
      props: {
        modelValue: 0,
      },
    })
    const vm = wrapper.vm
    await wrapper.setProps({ modelValue: 3 })
    expect(vm.modelValue).toEqual(3)
  })

  test('click', () => {
    const wrapper = mount({
      template: `
        <div>
          <tj-rate v-model="value1" />
        </div>
      `,
      props: {},
      data() {
        return {
          value1: 0,
        }
      },
      components: {
        'tj-rate': Rate,
      },
    })
    const vm = wrapper.vm
    const thirdStar = wrapper.findAll('.tj-rate__item')[2].element as HTMLElement

    thirdStar.click()
    expect(vm.value1).toEqual(3)
  })

  test('colors', () => {
    const wrapper = mount({
      template: `
        <div>
          <tj-rate v-model="value" :colors="['#99A9BF', '#F7BA2A', '#FF9900']"></tj-rate>
        </div>
      `,
      props:{},
      data() {
        return {
          value: 4,
        }
      },
      components: {
        'tj-rate': Rate,
      },
    })
    // const vm = wrapper.vm
    const thirdStar = (wrapper.findAll('.tj-rate__item')[2].element as HTMLElement).querySelector('.tj-rate__icon') as any

    expect(thirdStar.style.color).toEqual('rgb(255, 153, 0)')
  })
})
