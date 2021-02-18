import { mount } from '@vue/test-utils'
import { EVENT_CODE } from '@tongjiaoui-plus/utils/aria'
import { sleep } from '@tongjiaoui-plus/test-utils'
import Dropdown from '../src/dropdown.vue'
import DropdownItem from '../src/dropdown-item.vue'
import DropdownMenu from '../src/dropdown-menu.vue'

const TIMEOUT = 250
const MOUSE_ENTER_EVENT = 'mouseenter'
const MOUSE_LEAVE_EVENT = 'mouseleave'
const CLICK = 'click'
const CONTEXTMENU = 'contextmenu'

const _mount = (template: string, data, otherObj?) => mount({
  components: {
    [Dropdown.name]: Dropdown,
    [DropdownItem.name]: DropdownItem,
    [DropdownMenu.name]: DropdownMenu,
  },
  template,
  data,
  ...otherObj,
})

describe('Dropdown', () => {
  test('create', async () => {
    const wrapper = mount({
      setup() {
        return () => (
          <Dropdown
            ref="b"
            placement="right"
            v-slots = {
              {
                dropdown: () => (
                  <DropdownMenu>
                    <DropdownItem>Apple</DropdownItem>
                    <DropdownItem>Orange</DropdownItem>
                    <DropdownItem>Cherry</DropdownItem>
                    <DropdownItem disabled>Peach</DropdownItem>
                    <DropdownItem divided>Pear</DropdownItem>
                  </DropdownMenu>
                )
              }
            }
          >
            <span class="tj-dropdown-link" ref="a">
              dropdown<i class="tj-icon-arrow-down tj-icon--right"></i>
            </span>
          </Dropdown>
        )
      }
    })
    const content = wrapper.findComponent({ ref: 'b' }).vm as any
    const triggerElm = wrapper.find('.tj-dropdown-link')
    expect(content.visible).toBe(false)
    await triggerElm.trigger('keydown')
    await triggerElm.trigger('focus')
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    await sleep(TIMEOUT)
    expect(content.visible).toBe(true)
    await triggerElm.trigger(MOUSE_LEAVE_EVENT)
    await sleep(TIMEOUT)
    expect(content.visible).toBe(false)
  })

  test('menu click', async () => {
    const wrapper = _mount(
      `
      <tj-dropdown ref="b" @command="commandHandler" placement="right">
        <span class="tj-dropdown-link" ref="a">
          dropdown<i class="tj-icon-arrow-down tj-icon--right"></i>
        </span>
        <template #dropdown>
          <tj-dropdown-menu>
            <tj-dropdown-item command="a">Apple</tj-dropdown-item>
            <tj-dropdown-item command="b">Orange</tj-dropdown-item>
            <tj-dropdown-item ref="c" :command="myCommandObject">Cherry</tj-dropdown-item>
            <tj-dropdown-item command="d">Peach</tj-dropdown-item>
            <tj-dropdown-item command="e">Pear</tj-dropdown-item>
          </tj-dropdown-menu>
        </template>
      </tj-dropdown>
      `,
      () => ({
        myCommandObject: { name: 'CommandC' },
        name: '',
      }),
      {
        methods: {
          commandHandler(command) {
            this.name = command.name
          },
        },
      },
    )
    // const content = wrapper.findComponent({ ref: 'b' }).vm as any
    const triggerElm = wrapper.find('.tj-dropdown-link')
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    await sleep(TIMEOUT)
    await wrapper.findComponent({ ref: 'c' }).trigger('click')
    await sleep(TIMEOUT)
    expect((wrapper.vm as any).name).toBe('CommandC')
  })

  test('trigger', async () => {
    const wrapper = _mount(
      `
      <tj-dropdown trigger="click" ref="b" placement="right">
        <span class="tj-dropdown-link" ref="a">
          dropdown<i class="tj-icon-arrow-down tj-icon--right"></i>
        </span>
        <template #dropdown>
          <tj-dropdown-menu>
            <tj-dropdown-item command="a">Apple</tj-dropdown-item>
            <tj-dropdown-item command="b">Orange</tj-dropdown-item>
            <tj-dropdown-item ref="c" :command="myCommandObject">Cherry</tj-dropdown-item>
            <tj-dropdown-item command="d">Peach</tj-dropdown-item>
            <tj-dropdown-item command="e">Pear</tj-dropdown-item>
          </tj-dropdown-menu>
        </template>
      </tj-dropdown>
      `,
      () => ({
        myCommandObject: { name: 'CommandC' },
        name: '',
      }),
    )
    const content = wrapper.findComponent({ ref: 'b' }).vm as any
    const triggerElm = wrapper.find('.tj-dropdown-link')
    expect(content.visible).toBe(false)
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    await sleep(TIMEOUT)
    expect(content.visible).toBe(false)
    await triggerElm.trigger(CLICK)
    await sleep(TIMEOUT)
    expect(content.visible).toBe(true)
  })

  test('trigger contextmenu', async () => {
    const wrapper = _mount(
      `
      <tj-dropdown trigger="contextmenu" ref="b" placement="right">
        <span class="tj-dropdown-link" ref="a">
          dropdown<i class="tj-icon-arrow-down tj-icon--right"></i>
        </span>
        <template #dropdown>
          <tj-dropdown-menu>
            <tj-dropdown-item command="a">Apple</tj-dropdown-item>
            <tj-dropdown-item command="b">Orange</tj-dropdown-item>
            <tj-dropdown-item ref="c" :command="myCommandObject">Cherry</tj-dropdown-item>
            <tj-dropdown-item command="d">Peach</tj-dropdown-item>
            <tj-dropdown-item command="e">Pear</tj-dropdown-item>
          </tj-dropdown-menu>
        </template>
      </tj-dropdown>
      `,
      () => ({
        myCommandObject: { name: 'CommandC' },
        name: '',
      }),
    )
    const content = wrapper.findComponent({ ref: 'b' }).vm as any
    const triggerElm = wrapper.find('.tj-dropdown-link')
    expect(content.visible).toBe(false)
    await triggerElm.trigger(CONTEXTMENU)
    await sleep(TIMEOUT)
    expect(content.visible).toBe(true)
  })

  test('split button', async () => {
    const wrapper = _mount(
      `
      <tj-dropdown  @click="handleClick" split-button type="primary" ref="b" placement="right">
        dropdown
        <template #dropdown>
          <tj-dropdown-menu>
            <tj-dropdown-item command="a">Apple</tj-dropdown-item>
            <tj-dropdown-item command="b">Orange</tj-dropdown-item>
            <tj-dropdown-item ref="c" :command="myCommandObject">Cherry</tj-dropdown-item>
            <tj-dropdown-item command="d">Peach</tj-dropdown-item>
            <tj-dropdown-item command="e">Pear</tj-dropdown-item>
          </tj-dropdown-menu>
        </template>
      </tj-dropdown>
      `,
      () => ({
        myCommandObject: { name: 'CommandC' },
        name: '',
      }),
      {
        methods: {
          handleClick() {
            this.name = 'click'
          },
        },
      },
    )
    const content = wrapper.findComponent({ ref: 'b' }).vm as any
    const triggerElm = wrapper.find('.tj-dropdown__caret-button')
    const button = wrapper.find('.tj-button')
    expect(content.visible).toBe(false)
    await button.trigger('click')
    expect((wrapper.vm as any).name).toBe('click')
    await triggerElm.trigger('keydown')
    await triggerElm.trigger('focus')
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    await sleep(TIMEOUT)
    expect(content.visible).toBe(true)
  })

  test('hide on click', async () => {
    const wrapper = _mount(
      `
      <tj-dropdown ref="b" placement="right" :hide-on-click="false">
        <span class="tj-dropdown-link" ref="a">
          dropdown<i class="tj-icon-arrow-down tj-icon--right"></i>
        </span>
        <template #dropdown>
          <tj-dropdown-menu>
            <tj-dropdown-item>Apple</tj-dropdown-item>
            <tj-dropdown-item>Orange</tj-dropdown-item>
            <tj-dropdown-item ref="c">Cherry</tj-dropdown-item>
            <tj-dropdown-item disabled>Peach</tj-dropdown-item>
            <tj-dropdown-item divided>Pear</tj-dropdown-item>
          </tj-dropdown-menu>
        </template>
      </tj-dropdown>
      `,
      () => ({}),
    )

    const content = wrapper.findComponent({ ref: 'b' }).vm as any
    const triggerElm = wrapper.find('.tj-dropdown-link')
    await triggerElm.trigger('keydown')
    await triggerElm.trigger('focus')
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    await sleep(TIMEOUT)
    await wrapper.findComponent({ ref: 'c' }).trigger('click')
    await sleep(TIMEOUT)
    expect(content.visible).toBe(true)
  })

  test('triggerElm keydown', async () => {
    const wrapper = _mount(
      `
      <tj-dropdown ref="b" placement="right" :hide-on-click="false">
        <span class="tj-dropdown-link" ref="a">
          dropdown<i class="tj-icon-arrow-down tj-icon--right"></i>
        </span>
        <template #dropdown>
          <tj-dropdown-menu>
            <tj-dropdown-item>Apple</tj-dropdown-item>
            <tj-dropdown-item>Orange</tj-dropdown-item>
            <tj-dropdown-item ref="c">Cherry</tj-dropdown-item>
            <tj-dropdown-item disabled>Peach</tj-dropdown-item>
            <tj-dropdown-item divided>Pear</tj-dropdown-item>
          </tj-dropdown-menu>
        </template>
      </tj-dropdown>
      `,
      () => ({}),
    )

    const content = wrapper.findComponent({ ref: 'b' }).vm as any
    const triggerElm = wrapper.find('.tj-dropdown-link')
    await triggerElm.trigger('keydown')
    await triggerElm.trigger('focus')
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    await sleep(TIMEOUT)
    await triggerElm.trigger('keydown', {
      code: EVENT_CODE.enter,
    })
    await sleep(TIMEOUT)
    expect(content.visible).toBe(false)

    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    await sleep(TIMEOUT)
    await triggerElm.trigger('keydown', {
      code: EVENT_CODE.tab,
    })
    await sleep(TIMEOUT)
    expect(content.visible).toBe(false)
  })

  test('dropdown menu keydown', async () => {
    const wrapper = _mount(
      `
      <tj-dropdown ref="b" placement="right" :hide-on-click="false">
        <span class="tj-dropdown-link" ref="a">
          dropdown<i class="tj-icon-arrow-down tj-icon--right"></i>
        </span>
        <template #dropdown>
          <tj-dropdown-menu ref="a">
            <tj-dropdown-item ref="d">Apple</tj-dropdown-item>
            <tj-dropdown-item>Orange</tj-dropdown-item>
            <tj-dropdown-item ref="c">Cherry</tj-dropdown-item>
            <tj-dropdown-item disabled>Peach</tj-dropdown-item>
            <tj-dropdown-item divided>Pear</tj-dropdown-item>
          </tj-dropdown-menu>
        </template>
      </tj-dropdown>
      `,
      () => ({}),
    )

    const content = wrapper.findComponent({ ref: 'a' })
    const triggerElm = wrapper.find('.tj-dropdown-link')
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    await sleep(TIMEOUT)
    await content.trigger('keydown', {
      code: EVENT_CODE.down,
    })
    await sleep(TIMEOUT)
    expect(wrapper.findComponent({ ref: 'd' }).attributes('tabindex')).toBe('0')
  })

  test('max height', async () => {
    const wrapper = _mount(
      `
      <tj-dropdown ref="b" max-height="60px">
        <span class="tj-dropdown-link" ref="a">
          dropdown<i class="tj-icon-arrow-down tj-icon--right"></i>
        </span>
        <template #dropdown>
          <tj-dropdown-menu>
            <tj-dropdown-item>Apple</tj-dropdown-item>
            <tj-dropdown-item>Orange</tj-dropdown-item>
            <tj-dropdown-item>Cherry</tj-dropdown-item>
            <tj-dropdown-item disabled>Peach</tj-dropdown-item>
            <tj-dropdown-item divided>Pear</tj-dropdown-item>
          </tj-dropdown-menu>
        </template>
      </tj-dropdown>
      `,
      () => ({}),
    )
    const content = wrapper.findComponent({ ref: 'b' })
    const scrollbar = content.findComponent({ ref: 'scrollbar' })
    expect(scrollbar.find('.tj-scrollbar__wrap').attributes('style')).toContain('max-height: 60px;')
  })

  test('tooltip debounce', async () => {
    const wrapper = _mount(
      `
      <tj-dropdown ref="b">
        <span class="tj-dropdown-link">
          dropdown<i class="tj-icon-arrow-down tj-icon--right"></i>
        </span>
        <template #dropdown>
          <tj-dropdown-menu>
            <tj-dropdown-item>Apple</tj-dropdown-item>
            <tj-dropdown-item>Orange</tj-dropdown-item>
            <tj-dropdown-item>Cherry</tj-dropdown-item>
            <tj-dropdown-item>Peach</tj-dropdown-item>
            <tj-dropdown-item>Pear</tj-dropdown-item>
          </tj-dropdown-menu>
        </template>
      </tj-dropdown>
      `,
      () => ({}),
    )
    const content = wrapper.findComponent({ ref: 'b' }).vm as any
    const triggerElm = wrapper.find('.tj-dropdown-link')
    expect(content.visible).toBe(false)
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    await triggerElm.trigger(MOUSE_LEAVE_EVENT)
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    await sleep(TIMEOUT)
    expect(content.visible).toBe(true)
  })
})
