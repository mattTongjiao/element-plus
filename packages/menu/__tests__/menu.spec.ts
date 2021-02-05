import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { sleep } from '@tongjiaoui-plus/test-utils'

import Menu from '../src/menu.vue'
import MenuGroup from '../src/menuItemGroup.vue'
import MenuItem from '../src/menuItem.vue'
import SubMenu from '../src/submenu.vue'

const _mount = (template: string, options = {}) =>
  mount({
    components: {
      'tj-menu': Menu,
      'tj-menu-item-group': MenuGroup,
      'tj-menu-item': MenuItem,
      'tj-submenu': SubMenu,
    },
    template,
    ...options,
  })

describe('menu', () => {
  test('create', async () => {
    const wrapper = _mount(
      `<tj-menu>
        <tj-menu-item index="1" ref="item1">处理中心</tj-menu-item>
        <tj-menu-item index="2" ref="item2">订单管理</tj-menu-item>
      </tj-menu>`,
    )
    const item1 = await wrapper.findComponent({ ref: 'item1' })
    const item2 = await wrapper.findComponent({ ref: 'item2' })
    await item1.trigger('click')
    await nextTick()
    expect(item1.classes()).toContain('is-active')
    await item2.trigger('click')
    await nextTick()
    expect(item2.classes()).toContain('is-active')
  })
  test('background-color', async () => {
    const wrapper = _mount(
      `<tj-menu default-active="2"
        background-color="#f00"
        text-color="#000"
        active-text-color="#0f0">
        <tj-menu-item index="1" ref="item1">处理中心</tj-menu-item>
        <tj-menu-item index="2" ref="item2">订单管理</tj-menu-item>
      </tj-menu>`,
    )
    const instance = wrapper.vm.$el
    const item1 = await wrapper.findComponent({ ref: 'item1' })
    const item2 = await wrapper.findComponent({ ref: 'item2' })

    expect(instance.style.backgroundColor).toEqual('rgb(255, 0, 0)')
    expect(item1.vm.$el.style.backgroundColor).toEqual('rgb(255, 0, 0)')
    expect(item1.vm.$el.style.color).toEqual('rgb(0, 0, 0)')
    expect(item2.vm.$el.style.color).toEqual('rgb(0, 255, 0)')
    await item1.trigger('mouseenter')
    await nextTick()
    expect(item1.vm.$el.style.backgroundColor).toEqual('rgb(204, 0, 0)')
  })
  test('menu-item click', async () => {
    const wrapper = _mount(
      `<tj-menu>
        <tj-menu-item @click="onMenuItemClick" index="1" ref="item1">处理中心</tj-menu-item>
        <tj-menu-item index="2" ref="item2">订单管理</tj-menu-item>
      </tj-menu>`,
      {
        data() {
          return {
            clicksCount: 0,
          }
        },
        methods: {
          onMenuItemClick(item) {
            expect(item).toMatchObject({
              index: '1',
              indexPath: ['1'],
            })
            this.clicksCount = this.clicksCount + 1
          },
        },
      },
    )
    const item1 = await wrapper.findComponent({ ref: 'item1' })
    await item1.trigger('click')
    await nextTick()
    expect((wrapper.vm as any).clicksCount).toEqual(1)
  })
  test('menu-item disabled', async () => {
    const wrapper = _mount(
      `<tj-menu default-active="2">
        <tj-menu-item index="1" ref="item1" disabled>处理中心</tj-menu-item>
        <tj-menu-item index="2" ref="item2">订单管理</tj-menu-item>
      </tj-menu>`,
    )
    const item1 = await wrapper.findComponent({ ref: 'item1' })
    const item2 = await wrapper.findComponent({ ref: 'item2' })
    expect(item2.classes()).toContain('is-active')
    await item1.trigger('click')
    await nextTick()
    expect(item1.classes().includes('is-active')).toBeFalsy()
  })
  test('open method', async () => {
    const wrapper = _mount(
      `<div>
          <tj-menu
            ref="menu"
            default-active="2"
            class="tj-menu-vertical-demo"
          >
            <tj-submenu index="1">
              <template #title>
                <i class="tj-icon-location"></i>
                <span>导航一</span>
              </template>
              <tj-menu-item-group>
                <template #title>分组一</template>
                <tj-menu-item index="1-1">选项1</tj-menu-item>
                <tj-menu-item index="1-2">选项2</tj-menu-item>
              </tj-menu-item-group>
              <tj-menu-item-group title="分组2">
                <tj-menu-item index="1-3">选项3</tj-menu-item>
              </tj-menu-item-group>
              <tj-submenu index="1-4">
                <template #title>选项4</template>
                <tj-menu-item index="1-4-1">选项1</tj-menu-item>
              </tj-submenu>
            </tj-submenu>
            <tj-menu-item index="2">
              <i class="tj-icon-menu"></i>
              <template #title>导航二</template>
            </tj-menu-item>
          </tj-menu>
          <button @click="open"></button>
        </div>
      `,
      {
        methods: {
          open() {
            this.$refs.menu.open('1')
          },
        },
      },
    )
    const elSubmenu = wrapper.findComponent({ name: 'TjSubmenu' })
    const button = wrapper.find('button')
    button.trigger('click')
    await nextTick()
    const instance = elSubmenu.vm as any
    expect(instance.opened).toBeTruthy()
  })
})

describe('default active', () => {
  test('normal active', async () => {
    const wrapper = _mount(
      `<tj-menu default-active="2">
        <tj-menu-item index="1" ref="item1">处理中心</tj-menu-item>
        <tj-menu-item index="2" ref="item2">订单管理</tj-menu-item>
      </tj-menu>`,
    )
    const item1 = await wrapper.findComponent({ ref: 'item1' })
    const item2 = await wrapper.findComponent({ ref: 'item2' })

    expect(item2.classes()).toContain('is-active')
    await item1.trigger('click')
    await nextTick()
    expect(item1.classes()).toContain('is-active')
  })
  test('dynamic active', async () => {
    const wrapper = _mount(
      `<tj-menu :default-active="active">
        <tj-menu-item index="1" ref="item1">active watch处理中心</tj-menu-item>
        <tj-menu-item index="2" ref="item2">active watch订单管理</tj-menu-item>
      </tj-menu>`,
      {
        data() {
          return {
            active: '2',
          }
        },
      },
    )
    const instance = wrapper.vm as any
    instance.active = '1'
    await nextTick()
    const item1 = await wrapper.findComponent({ ref: 'item1' })
    expect(item1.classes()).toContain('is-active')
  })
  test('vertical submenu item active', async () => {
    const wrapper = _mount(
      `<div>
        <tj-menu default-active="2-2" mode="vertical">
          <tj-menu-item index="1" ref="item1">处理中心</tj-menu-item>
          <tj-submenu index="2" ref="submenu">
            <template slot="title">我的工作台</template>
            <tj-menu-item index="2-1">选项1</tj-menu-item>
            <tj-menu-item index="2-2" ref="submenuItem2">选项2</tj-menu-item>
            <tj-menu-item index="2-3">选项3</tj-menu-item>
          </tj-submenu>
          <tj-menu-item index="3">订单管理</tj-menu-item>
        </tj-menu>
      </div>`,
    )
    const submenu = await wrapper.findComponent({ ref: 'submenu' })
    const submenuItem2 = await wrapper.findComponent({ ref: 'submenuItem2' })
    expect(submenuItem2.classes()).toContain('is-active')
    await nextTick()
    expect(submenu.classes()).toContain('is-opened')
    expect(submenu.classes()).toContain('is-active')
  })
  test('horizontal submenu item active', async () => {
    const wrapper = _mount(
      `<div>
        <tj-menu default-active="2-2">
          <tj-menu-item index="1" ref="item1">处理中心</tj-menu-item>
          <tj-submenu index="2" ref="submenu">
            <template slot="title">我的工作台</template>
            <tj-menu-item index="2-1">选项1</tj-menu-item>
            <tj-menu-item index="2-2" ref="submenuItem2">选项2</tj-menu-item>
            <tj-menu-item index="2-3">选项3</tj-menu-item>
          </tj-submenu>
          <tj-menu-item index="3">订单管理</tj-menu-item>
        </tj-menu>
      </div>`,
    )
    const submenu = await wrapper.findComponent({ ref: 'submenu' })
    const submenuItem2 = await wrapper.findComponent({ ref: 'submenuItem2' })
    expect(submenuItem2.classes()).toContain('is-active')
    await nextTick()
    expect(submenu.classes()).toContain('is-opened')
    expect(submenu.classes()).toContain('is-active')
  })
})

describe('submenu', () => {
  test('toggle', async () => {
    const wrapper = _mount(
      `<tj-menu>
        <tj-menu-item index="1" ref="item1">处理中心</tj-menu-item>
        <tj-submenu index="2" ref="submenu">
          <template slot="title">我的工作台</template>
          <tj-menu-item index="2-1">选项1</tj-menu-item>
          <tj-menu-item index="2-2" ref="submenuItem2">选项2</tj-menu-item>
          <tj-menu-item index="2-3">选项3</tj-menu-item>
        </tj-submenu>
        <tj-menu-item index="3">订单管理</tj-menu-item>
      </tj-menu>`,
    )
    const submenu = await wrapper.findComponent({ ref: 'submenu' })
    const submenuItem2 = await wrapper.findComponent({ ref: 'submenuItem2' })
    submenu.vm.$el.querySelector('.tj-submenu__title').click()
    await nextTick()
    expect(submenu.classes()).toContain('is-opened')
    submenuItem2.trigger('click')
    await nextTick()
    expect(submenuItem2.classes()).toContain('is-active')
    submenu.trigger('click')
    await nextTick()
    expect(submenu.classes()).toContain('is-opened')
  })
  test('default opened', async () => {
    const wrapper = _mount(
      `<tj-menu :default-openeds="defaultOpeneds">
        <tj-menu-item index="1">default opened处理中心</tj-menu-item>
        <tj-submenu index="2" ref="submenu1">
          <template slot="title">default opened我的工作台</template>
          <tj-menu-item index="2-1">选项1</tj-menu-item>
          <tj-menu-item index="2-2" ref="submenu1Item2">选项2</tj-menu-item>
          <tj-menu-item index="2-3">选项3</tj-menu-item>
        </tj-submenu>
        <tj-submenu index="3" ref="submenu2">
          <template slot="title">default opened订单管理</template>
          <tj-menu-item index="3-1">选项1</tj-menu-item>
          <tj-menu-item index="3-2" ref="submenu2Item2">选项2</tj-menu-item>
          <tj-menu-item index="3-3">选项3</tj-menu-item>
        </tj-submenu>
      </tj-menu>`,
      {
        data() {
          return {
            defaultOpeneds: ['2', '3'],
          }
        },
      },
    )
    const submenu1 = await wrapper.findComponent({ ref: 'submenu1' })
    const submenu2 = await wrapper.findComponent({ ref: 'submenu2' })
    await nextTick()
    expect(submenu1.classes()).toContain('is-opened')
    expect(submenu2.classes()).toContain('is-opened')
    const instance = wrapper.vm as any
    instance.defaultOpeneds = ['2']
    await nextTick()
    expect(submenu1.classes()).toContain('is-opened')
    expect(submenu2.classes()).toContain('is-opened')
  })
  test('disabled', async () => {
    const wrapper = _mount(
      `<tj-menu>
        <tj-menu-item index="1" ref="item1">处理中心</tj-menu-item>
        <tj-submenu index="2" ref="submenu" disabled>
          <template slot="title">我的工作台</template>
          <tj-menu-item index="2-1">选项1</tj-menu-item>
          <tj-menu-item index="2-2" ref="submenuItem2">选项2</tj-menu-item>
          <tj-menu-item index="2-3">选项3</tj-menu-item>
        </tj-submenu>
        <tj-menu-item index="3">订单管理</tj-menu-item>
      </tj-menu>`,
      {
        data() {
          return {
            defaultOpeneds: ['2', '3'],
          }
        },
      },
    )
    const submenu = await wrapper.findComponent({ ref: 'submenu' })
    await submenu.trigger('click')
    await nextTick()
    expect(submenu.classes().includes('is-opened')).toBeFalsy()
  })
})

describe('other', () => {
  test('disabled', async () => {
    const wrapper = _mount(
      `<tj-menu unique-opened default-active="2-2">
        <tj-menu-item index="1">处理中心</tj-menu-item>
        <tj-submenu index="2" ref="submenu1">
          <template slot="title">我的工作台</template>
          <tj-menu-item index="2-1">选项1</tj-menu-item>
          <tj-menu-item index="2-2" ref="submenu1Item2">选项2</tj-menu-item>
          <tj-menu-item index="2-3">选项3</tj-menu-item>
        </tj-submenu>
        <tj-submenu index="3" ref="submenu2">
          <template slot="title">订单管理</template>
          <tj-menu-item index="3-1">选项1</tj-menu-item>
          <tj-menu-item index="3-2" ref="submenu2Item2">选项2</tj-menu-item>
          <tj-menu-item index="3-3">选项3</tj-menu-item>
        </tj-submenu>
      </tj-menu>`,
    )
    const submenu2 = await wrapper.findComponent({ ref: 'submenu2' })
    submenu2.vm.$el.querySelector('.tj-submenu__title').click()
    await nextTick()
    const submenu1 = await wrapper.findComponent({ ref: 'submenu1' })
    expect(submenu1.classes().includes('is-opened')).toBeFalsy()
  })
  test('horizontal mode', async () => {
    const wrapper = _mount(
      `<tj-menu mode="horizontal">
        <tj-menu-item index="1">处理中心</tj-menu-item>
        <tj-submenu index="2" ref="submenu">
          <template slot="title">我的工作台</template>
          <tj-menu-item index="2-1">选项1</tj-menu-item>
          <tj-menu-item index="2-2" ref="submenuItem2">选项2</tj-menu-item>
          <tj-menu-item index="2-3">选项3</tj-menu-item>
        </tj-submenu>
        <tj-menu-item index="3">订单管理</tj-menu-item>
      </tj-menu>`,
    )
    expect(wrapper.classes()).toContain('tj-menu--horizontal')
    const submenu = await wrapper.findComponent({ ref: 'submenu' })

    submenu.trigger('mouseenter')
    await sleep(500)
    expect(
      document.body
        .querySelector('body [role="tooltip"]')
        .getAttribute('style'),
    ).not.toContain('display: none')
  })
  test('menu group', async () => {
    const wrapper = _mount(
      `<tj-menu mode="vertical" default-active="1">
        <tj-menu-item-group title="分组一" ref="group1">
          <tj-menu-item index="1"><i class="tj-icon-message"></i>导航一</tj-menu-item>
          <tj-menu-item index="2"><i class="tj-icon-message"></i>导航二</tj-menu-item>
        </tj-menu-item-group>
        <tj-submenu index="5">
          <template slot="title">导航五</template>
          <tj-menu-item-group title="分组二">
            <tj-menu-item index="5-1">选项1</tj-menu-item>
            <tj-menu-item index="5-2">选项2</tj-menu-item>
          </tj-menu-item-group>
        </tj-submenu>
      </tj-menu>`,
    )
    const group1 = await wrapper.findComponent({ ref: 'group1' })
    expect(
      group1.vm.$el.querySelector('.tj-menu-item-group__title').innerHTML,
    ).toEqual('分组一')
  })
  test('dynamic menus, issue 9092', async () => {
    const wrapper = _mount(
      `<tj-menu :default-active="active">
        <tj-menu-item
          v-for="menu in menus"
          :index="menu.name"
          :key="menu.name">
          {{menu.description}}
        </tj-menu-item>
      </tj-menu>`,
      {
        data() {
          return {
            active: '',
            menus: [],
          }
        },
      },
    )
    const instance = wrapper.vm as any
    instance.active = '2'
    instance.menus = [
      { name: '1', description: 'happy' },
      { name: '2', description: 'new' },
      { name: '3', description: 'year' },
    ]
    await nextTick()
    expect(
      instance.$el.querySelector('.tj-menu-item.is-active').innerHTML,
    ).toEqual('new')
  })
})
