## Container 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：

`<tj-container>`：外层容器。当子元素中包含 `<tj-header>` 或 `<tj-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<tj-header>`：顶栏容器。

`<tj-aside>`：侧边栏容器。

`<tj-main>`：主要区域容器。

`<tj-footer>`：底栏容器。

:::tip
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<tj-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<tj-container>`。
:::

### 常见页面布局

:::demo

```html
<div class="common-layout">
  <tj-container>
    <tj-header>Header</tj-header>
    <tj-main>Main</tj-main>
  </tj-container>

  <tj-container>
    <tj-header>Header</tj-header>
    <tj-main>Main</tj-main>
    <tj-footer>Footer</tj-footer>
  </tj-container>

  <tj-container>
    <tj-aside width="200px">Aside</tj-aside>
    <tj-main>Main</tj-main>
  </tj-container>

  <tj-container>
    <tj-header>Header</tj-header>
    <tj-container>
      <tj-aside width="200px">Aside</tj-aside>
      <tj-main>Main</tj-main>
    </tj-container>
  </tj-container>

  <tj-container>
    <tj-header>Header</tj-header>
    <tj-container>
      <tj-aside width="200px">Aside</tj-aside>
      <tj-container>
        <tj-main>Main</tj-main>
        <tj-footer>Footer</tj-footer>
      </tj-container>
    </tj-container>
  </tj-container>

  <tj-container>
    <tj-aside width="200px">Aside</tj-aside>
    <tj-container>
      <tj-header>Header</tj-header>
      <tj-main>Main</tj-main>
    </tj-container>
  </tj-container>

  <tj-container>
    <tj-aside width="200px">Aside</tj-aside>
    <tj-container>
      <tj-header>Header</tj-header>
      <tj-main>Main</tj-main>
      <tj-footer>Footer</tj-footer>
    </tj-container>
  </tj-container>
</div>

<style>
  .tj-header,
  .tj-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .tj-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .tj-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .tj-container {
    margin-bottom: 40px;
  }

  .tj-container:nth-child(5) .tj-aside,
  .tj-container:nth-child(6) .tj-aside {
    line-height: 260px;
  }

  .tj-container:nth-child(7) .tj-aside {
    line-height: 320px;
  }
</style>
```

:::

### 实例

:::demo

```html
<tj-container style="height: 500px; border: 1px solid #eee">
  <tj-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <tj-menu :default-openeds="['1', '3']">
      <tj-submenu index="1">
        <template #title><i class="tj-icon-message"></i>导航一</template>
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
          <tj-menu-item index="1-4-1">选项4-1</tj-menu-item>
        </tj-submenu>
      </tj-submenu>
      <tj-submenu index="2">
        <template #title><i class="tj-icon-menu"></i>导航二</template>
        <tj-menu-item-group>
          <template #title>分组一</template>
          <tj-menu-item index="2-1">选项1</tj-menu-item>
          <tj-menu-item index="2-2">选项2</tj-menu-item>
        </tj-menu-item-group>
        <tj-menu-item-group title="分组2">
          <tj-menu-item index="2-3">选项3</tj-menu-item>
        </tj-menu-item-group>
        <tj-submenu index="2-4">
          <template #title>选项4</template>
          <tj-menu-item index="2-4-1">选项4-1</tj-menu-item>
        </tj-submenu>
      </tj-submenu>
      <tj-submenu index="3">
        <template #title><i class="tj-icon-setting"></i>导航三</template>
        <tj-menu-item-group>
          <template #title>分组一</template>
          <tj-menu-item index="3-1">选项1</tj-menu-item>
          <tj-menu-item index="3-2">选项2</tj-menu-item>
        </tj-menu-item-group>
        <tj-menu-item-group title="分组2">
          <tj-menu-item index="3-3">选项3</tj-menu-item>
        </tj-menu-item-group>
        <tj-submenu index="3-4">
          <template #title>选项4</template>
          <tj-menu-item index="3-4-1">选项4-1</tj-menu-item>
        </tj-submenu>
      </tj-submenu>
    </tj-menu>
  </tj-aside>

  <tj-container>
    <tj-header style="text-align: right; font-size: 12px">
      <tj-dropdown>
        <i class="tj-icon-setting" style="margin-right: 15px"></i>
        <template #dropdown>
          <tj-dropdown-menu>
            <tj-dropdown-item>查看</tj-dropdown-item>
            <tj-dropdown-item>新增</tj-dropdown-item>
            <tj-dropdown-item>删除</tj-dropdown-item>
          </tj-dropdown-menu>
        </template>
      </tj-dropdown>
      <span>王小虎</span>
    </tj-header>

    <tj-main>
      <tj-table :data="tableData">
        <tj-table-column prop="date" label="日期" width="140">
        </tj-table-column>
        <tj-table-column prop="name" label="姓名" width="120">
        </tj-table-column>
        <tj-table-column prop="address" label="地址"> </tj-table-column>
      </tj-table>
    </tj-main>
  </tj-container>
</tj-container>

<style>
  .tj-header {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
  }

  .tj-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }
      return {
        tableData: Array(20).fill(item),
      }
    },
  }
</script>
```

:::

### Container Attributes

| 参数      | 说明             | 类型   | 可选值                | 默认值                                                                 |
| --------- | ---------------- | ------ | --------------------- | ---------------------------------------------------------------------- |
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 `tj-header` 或 `tj-footer` 时为 vertical，否则为 horizontal |

### Header Attributes

| 参数   | 说明     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| height | 顶栏高度 | string | —      | 60px   |

### Aside Attributes

| 参数  | 说明       | 类型   | 可选值 | 默认值 |
| ----- | ---------- | ------ | ------ | ------ |
| width | 侧边栏宽度 | string | —      | 300px  |

### Footer Attributes

| 参数   | 说明     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| height | 底栏高度 | string | —      | 60px   |
