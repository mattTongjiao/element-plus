import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import Carousel from '../src/main.vue'
import CarouselItem from '../src/item.vue'

const wait = (ms = 100) =>
  new Promise(resolve => setTimeout(() => resolve(), ms))

const _mount = (template: string, data?: () => void, methods?: any) =>
  mount({
    components: {
      'tj-carousel': Carousel,
      'tj-carousel-item': CarouselItem,
    },
    template,
    data,
    methods,
  })

describe('Carousel', () => {
  it('create', () => {
    const wrapper = _mount(
      `
        <div>
          <tj-carousel ref="carousel">
            <tj-carousel-item v-for="item in 3" :key="item"></tj-carousel-item>
          </tj-carousel>
        </div>
      `,
    )

    expect(wrapper.vm.$refs.carousel.direction).toBe('horizontal')
    expect(wrapper.findAll('.tj-carousel__item').length).toEqual(3)
  })

  it('auto play', async done => {
    const wrapper = _mount(`
        <div>
          <tj-carousel :interval="50">
            <tj-carousel-item v-for="item in 3" :key="item"></tj-carousel-item>
          </tj-carousel>
        </div>
      `)

    await nextTick()
    await wait(10)
    const items = wrapper.vm.$el.querySelectorAll('.tj-carousel__item')
    expect(items[0].classList.contains('is-active')).toBeTruthy()
    await wait(60)
    expect(items[1].classList.contains('is-active')).toBeTruthy()
    done()
  })

  it('initial index', async done => {
    const wrapper = _mount(`
        <div>
          <tj-carousel :autoplay="false" :initial-index="1">
            <tj-carousel-item v-for="item in 3" :key="item"></tj-carousel-item>
          </tj-carousel>
        </div>
      `)

    await nextTick()
    await wait(10)

    expect(
      wrapper.vm.$el
        .querySelectorAll('.tj-carousel__item')[1]
        .classList.contains('is-active'),
    ).toBeTruthy()
    done()
  })

  it('reset timer', async done => {
    const wrapper = _mount(`
        <div>
          <tj-carousel :interval="500">
            <tj-carousel-item v-for="item in 3" :key="item"></tj-carousel-item>
          </tj-carousel>
        </div>
      `)
    await nextTick()
    const items = wrapper.vm.$el.querySelectorAll('.tj-carousel__item')
    await wrapper.trigger('mouseenter')
    await nextTick()
    expect(items[0].classList.contains('is-active')).toBeTruthy()
    await wrapper.trigger('mouseleave')
    await nextTick()
    await wait(700)
    expect(items[1].classList.contains('is-active')).toBeTruthy()
    done()
  })

  it('change', async done => {
    const wrapper = _mount(
      `
        <div>
          <tj-carousel :interval="50" @change="handleChange">
            <tj-carousel-item v-for="item in 3" :key="item"></tj-carousel-item>
          </tj-carousel>
        </div>
      `,
      () => {
        return {
          val: -1,
          oldVal: -1,
        }
      },
      {
        handleChange(val, oldVal) {
          this.val = val
          this.oldVal = oldVal
        },
      },
    )

    await nextTick()
    await wait(50)
    expect(wrapper.vm.val).toBe(1)
    expect(wrapper.vm.oldVal).toBe(0)
    done()
  })

  it('label', async done => {
    const wrapper = _mount(`
        <div>
          <tj-carousel>
            <tj-carousel-item v-for="item in 3" :key="item" :label="item"></tj-carousel-item>
          </tj-carousel>
        </div>
      `)
    await nextTick()
    expect(wrapper.find('.tj-carousel__button span').text()).toBe('1')
    done()
  })

  describe('manual control', () => {
    it('hover', async done => {
      const wrapper = _mount(`
        <div>
          <tj-carousel :autoplay="false">
            <tj-carousel-item v-for="item in 3" :key="item"></tj-carousel-item>
          </tj-carousel>
        </div>
      `)

      await nextTick()
      await wait()
      await wrapper.findAll('.tj-carousel__indicator')[1].trigger('mouseenter')
      await nextTick()
      await wait()
      expect(
        wrapper.vm.$el
          .querySelectorAll('.tj-carousel__item')[1]
          .classList.contains('is-active'),
      ).toBeTruthy()
      done()
    })
  })

  it('card', async done => {
    const wrapper = _mount(`
        <div>
          <tj-carousel :autoplay="false" type="card">
            <tj-carousel-item v-for="item in 7" :key="item"></tj-carousel-item>
          </tj-carousel>
        </div>
      `)
    await nextTick()
    await wait()
    const items = wrapper.vm.$el.querySelectorAll('.tj-carousel__item')
    expect(items[0].classList.contains('is-active')).toBeTruthy()
    expect(items[1].classList.contains('is-in-stage')).toBeTruthy()
    expect(items[6].classList.contains('is-in-stage')).toBeTruthy()
    await items[1].click()
    await wait()
    expect(items[1].classList.contains('is-active')).toBeTruthy()
    await wrapper.vm.$el.querySelector('.tj-carousel__arrow--left').click()
    await wait()
    expect(items[0].classList.contains('is-active')).toBeTruthy()
    await items[6].click()
    await wait()
    expect(items[6].classList.contains('is-active')).toBeTruthy()
    done()
  })

  it('vertical direction', () => {
    const wrapper = _mount(`
        <div>
          <tj-carousel ref="carousel" :autoplay="false" direction="vertical" height="100px">
            <tj-carousel-item v-for="item in 3" :key="item"></tj-carousel-item>
          </tj-carousel>
        </div>
      `)
    const items = wrapper.vm.$el.querySelectorAll('.tj-carousel__item')

    expect(wrapper.vm.$refs.carousel.direction).toBe('vertical')
    expect(items[0].style.transform.indexOf('translateY') !== -1).toBeTruthy()
  })
})
