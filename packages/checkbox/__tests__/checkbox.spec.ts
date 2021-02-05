import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import Checkbox from '../src/checkbox.vue'
import CheckboxButton from '../src/checkbox-button.vue'
import CheckboxGroup from '../src/checkbox-group.vue'

const _mount = <D>(template: string, data: () => D, otherObj?: Record<string, unknown>) => mount<D>({
  components: {
    'tj-checkbox': Checkbox,
    'tj-checkbox-group': CheckboxGroup,
    'tj-checkbox-button': CheckboxButton,
  },
  template,
  data,
  ...otherObj,
})

describe('Checkbox', () => {
  test('create', async () => {
    const wrapper = _mount('<tj-checkbox v-model="checkbox" label="a"/>', () => ({ checkbox: false }))
    expect(wrapper.classes()).toContain('tj-checkbox')
    await wrapper.trigger('click')
    expect(wrapper.classes()).toContain('is-checked')
    await wrapper.trigger('click')
    expect(wrapper.classes('is-checked')).toBe(false)
  })

  test('no v-model', async () => {
    const wrapper = _mount('<tj-checkbox label="a"/>', () => ({ checkbox: false }))
    expect(wrapper.classes('is-checked')).toBe(false)
  })

  test('disabled', async () => {
    const wrapper = _mount('<tj-checkbox v-model="checkbox" disabled label="a"/>', () => ({ checkbox: false }))
    expect(wrapper.classes()).toContain('is-disabled')
    await wrapper.trigger('click')
    expect(wrapper.classes()).toContain('is-disabled')
  })

  test('change event', async () => {
    const wrapper = _mount(
      `<tj-checkbox v-model="checked" @change="onChange" />`,
      () => ({
        data: null,
        checked: false,
      }),
      {
        methods: {
          onChange(val: boolean) {
            this.data = val
          },
        },
      },
    )

    const vm = wrapper.vm
    await wrapper.trigger('click')
    expect(vm.data).toBe(true)
  })

  test('checkbox group', async () => {
    const wrapper = _mount(
      `
      <tj-checkbox-group v-model="checkList">
        <tj-checkbox label="a" ref="a"></tj-checkbox>
        <tj-checkbox label="b" ref="b"></tj-checkbox>
        <tj-checkbox label="c" ref="c"></tj-checkbox>
        <tj-checkbox label="d" ref="d"></tj-checkbox>
      </tj-checkbox-group>
      `,
      () => ({ checkList: [] }),
    )
    const vm = wrapper.vm
    expect(vm.checkList.length).toBe(0)
    await wrapper.findComponent({ ref: 'a' }).trigger('click')
    expect(vm.checkList.length).toBe(1)
    expect(vm.checkList).toContain('a')
    await wrapper.findComponent({ ref: 'b' }).trigger('click')
    expect(vm.checkList.length).toBe(2)
    expect(vm.checkList).toContain('a')
    expect(vm.checkList).toContain('b')
  })

  test('checkbox group change', async () => {
    const wrapper = _mount(
      `
      <tj-checkbox-group v-model="checkList" @change="onChange">
        <tj-checkbox label="a" ref="a"></tj-checkbox>
        <tj-checkbox label="b" ref="b"></tj-checkbox>
      </tj-checkbox-group>
      `,
      () => ({ checkList: [], data: null }),
      {
        methods: {
          onChange(val: string[]) {
            this.data = val
          },
        },
      },
    )
    const vm = wrapper.vm
    await wrapper.findComponent({ ref: 'a' }).trigger('click')
    await nextTick()
    expect(vm.data.length).toBe(1)
    expect(vm.data).toEqual(['a'])
  })

  test('nested group', async () => {
    const wrapper = _mount(
      `
      <tj-checkbox-group v-model="checkList">
        <div>
          <tj-checkbox label="a" ref="a"></tj-checkbox>
          <tj-checkbox label="b" ref="b"></tj-checkbox>
          <tj-checkbox label="c" ref="c"></tj-checkbox>
          <tj-checkbox label="d" ref="d"></tj-checkbox>
        </div>
      </tj-checkbox-group>
      `,
      () => ({ checkList: [] }),
    )
    const vm = wrapper.vm
    expect(vm.checkList.length).toBe(0)
    await wrapper.findComponent({ ref: 'a' }).trigger('click')
    expect(vm.checkList).toEqual(['a'])
  })

  test('true false lable', async () => {
    const wrapper = _mount(
      `<tj-checkbox true-label="a" :false-label="3" v-model="checked"></tj-checkbox>`,
      () => ({
        checked: 'a',
      }),
    )
    const vm = wrapper.vm
    await wrapper.trigger('click')
    expect(vm.checked).toBe(3)
  })

  test('check', () => {
    const wrapper = _mount(
      `
      <div>
        <tj-checkbox v-model="checked" checked></tj-checkbox>
        <tj-checkbox-group v-model="checklist">
          <tj-checkbox checked label="a"></tj-checkbox>
        </tj-checkbox-group>
      </div>
      `,
      () => ({
        checked: false,
        checklist: [],
      }),
    ) as any
    expect(wrapper.vm.checked).toBe(true)
    expect(wrapper.vm.checklist).toEqual(['a'])
  })
})

describe('check-button', () => {
  test('create', async () => {
    const wrapper = _mount('<tj-checkbox-button v-model="checkbox" label="a"/>', () => ({ checkbox: false }))
    expect(wrapper.classes()).toContain('tj-checkbox-button')
    await wrapper.trigger('click')
    expect(wrapper.classes()).toContain('is-checked')
    await wrapper.trigger('click')
    expect(wrapper.classes('is-checked')).toBe(false)
  })

  test('disabled', async () => {
    const wrapper = _mount('<tj-checkbox-button v-model="checkbox" disabled label="a"/>', () => ({ checkbox: false }))
    expect(wrapper.classes()).toContain('is-disabled')
    await wrapper.trigger('click')
    expect(wrapper.classes()).toContain('is-disabled')
  })

  test('change event', async () => {
    const wrapper = _mount(
      `
      <tj-checkbox-button v-model="checked" @change="onChange" />
      `,
      () => ({
        data: '',
        checked: false,
      }),
      {
        methods: {
          onChange(val: boolean) {
            this.data = val
          },
        },
      },
    )

    const vm = wrapper.vm
    await wrapper.trigger('click')
    expect(vm.data).toBe(true)
  })

  test('button group change', async () => {
    const wrapper = _mount(
      `
      <tj-checkbox-group v-model="checkList" @change="onChange">
        <tj-checkbox-button label="a" ref="a"></tj-checkbox-button>
        <tj-checkbox-button label="b" ref="b"></tj-checkbox-button>
        <tj-checkbox-button label="c" ref="c"></tj-checkbox-button>
        <tj-checkbox-button label="d" ref="d"></tj-checkbox-button>
      </tj-checkbox-group>
      `,
      () => ({
        data: null,
        checkList: [],
      }),
      {
        methods: {
          onChange(val: string[]) {
            this.data = val
          },
        },
      },
    )
    const vm = wrapper.vm
    await wrapper.findComponent({ ref: 'a' }).trigger('click')
    await nextTick() // await change event
    expect(vm.data).toEqual(['a'])
    await wrapper.findComponent({ ref: 'b' }).trigger('click')
    await nextTick() // await change event
    expect(vm.data).toEqual(['a', 'b'])
  })

  test('button group props', () => {
    const wrapper = _mount(
      `
      <tj-checkbox-group v-model="checkList" size="large" fill="#FF0000" text-color="#000">
        <tj-checkbox-button label="a" ref="a"></tj-checkbox-button>
        <tj-checkbox-button label="b" ref="b"></tj-checkbox-button>
        <tj-checkbox-button label="c" ref="c"></tj-checkbox-button>
        <tj-checkbox-button label="d" ref="d"></tj-checkbox-button>
      </tj-checkbox-group>
      `,
      () => ({ checkList: ['a', 'b'] }),
    )
    const vm = wrapper.vm
    expect(vm.checkList.length).toBe(2)
    expect((vm.$refs.a as any).$el.classList.contains('is-checked')).toBe(true)
    expect((vm.$refs.a as any).$el.querySelector('.tj-checkbox-button__inner').style.borderColor).toEqual('#ff0000')
  })

  test('button group min and max', async () => {
    const wrapper = _mount(
      `
      <tj-checkbox-group
        v-model="checkList"
        :min="1"
        :max="2"
      >
        <tj-checkbox-button label="a" ref="a"></tj-checkbox-button>
        <tj-checkbox-button label="b" ref="b"></tj-checkbox-button>
        <tj-checkbox-button label="c" ref="c"></tj-checkbox-button>
        <tj-checkbox-button label="d" ref="d"></tj-checkbox-button>
      </tj-checkbox-group>
      `,
      () => ({
        checkList: ['a'],
        lastEvent: null,
      }),
    )
    const vm = wrapper.vm
    expect(vm.checkList.length).toBe(1)
    await wrapper.findComponent({ ref: 'a' }).trigger('click')
    vm.$nextTick(async () => {
      expect(vm.checkList.length).toBe(1)
      await wrapper.findComponent({ ref: 'b' }).trigger('click')
      expect(vm.checkList.length).toBe(2)
      await wrapper.findComponent({ ref: 'c' }).trigger('click')
      expect(vm.checkList.length).toBe(2)
      expect(vm.checkList).toEqual(['a', 'b'])
      expect((wrapper.findComponent({ ref: 'c' }).vm as any).isDisabled).toBe(true)
      expect((wrapper.findComponent({ ref: 'd' }).vm as any).isDisabled).toBe(true)
    })
  })

  test('nested group', async () => {
    const wrapper = _mount(
      `
      <tj-checkbox-group v-model="checkList">
        <div>
          <tj-checkbox-button label="a" ref="a"></tj-checkbox-button>
          <tj-checkbox-button label="b" ref="b"></tj-checkbox-button>
          <tj-checkbox-button label="c" ref="c"></tj-checkbox-button>
          <tj-checkbox-button label="d" ref="d"></tj-checkbox-button>
        </div>
      </tj-checkbox-group>
      `,
      () => ({ checkList: [] }),
    )
    const vm = wrapper.vm
    expect(vm.checkList.length).toBe(0)
    await wrapper.findComponent({ ref: 'a' }).trigger('click')
    expect(vm.checkList).toEqual(['a'])
  })

  test('true false lable', async () => {
    const wrapper = _mount(
      `<tj-checkbox-button true-label="a" :false-label="3" v-model="checked" />`,
      () => ({
        checked: 'a',
      }),
    )
    const vm = wrapper.vm
    await wrapper.trigger('click')
    expect(vm.checked).toBe(3)
  })

  test('check', () => {
    const wrapper = _mount(
      `
      <div>
        <tj-checkbox-button v-model="checked" checked />
        <tj-checkbox-group v-model="checklist">
          <tj-checkbox-button checked label="a" />
        </tj-checkbox-group>
      </div>
      `,
      () => ({
        checked: false,
        checklist: [],
      }),
    )
    expect(wrapper.vm.checked).toBe(true)
    expect(wrapper.vm.checklist).toEqual(['a'])
  })
})
