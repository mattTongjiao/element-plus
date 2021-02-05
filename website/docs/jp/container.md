## コンテナ

ページの基本構造を組み立てるためのコンテナコンポーネント:

`<tj-container>`: ラッパーコンテナ。`<tj-header>` や `<tj-footer>` と入れ子になっている場合、その子要素はすべて垂直方向に配置されます。それ以外の場合は水平に配置されます。

`<tj-header>`: ヘッダ用のコンテナ。

`<tj-aside>`: サイドセクションのコンテナ (通常はサイドナビ)。

`<tj-main>`: メインセクションのコンテナ。

`<tj-footer>`: フッター用のコンテナ。

:::tip
これらのコンポーネントはレイアウトにフレックスを使用していますので、ブラウザがフレックスをサポートしていることを確認してください。また、`<tj-container>`の直接の子要素は`tj-container` 以下の 4 つのコンポーネントのうちの 1 つ以上でなければなりません。また、4 つの要素の親要素は `<tj-container>` でなければなりません。
:::

### 共通レイアウト

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

### 例

:::demo

```html
<tj-container style="height: 500px; border: 1px solid #eee">
  <tj-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <tj-menu :default-openeds="['1', '3']">
      <tj-submenu index="1">
        <template #title><i class="tj-icon-message"></i>Navigator One</template>
        <tj-menu-item-group>
          <template #title>Group 1</template>
          <tj-menu-item index="1-1">Option 1</tj-menu-item>
          <tj-menu-item index="1-2">Option 2</tj-menu-item>
        </tj-menu-item-group>
        <tj-menu-item-group title="Group 2">
          <tj-menu-item index="1-3">Option 3</tj-menu-item>
        </tj-menu-item-group>
        <tj-submenu index="1-4">
          <template #title>Option4</template>
          <tj-menu-item index="1-4-1">Option 4-1</tj-menu-item>
        </tj-submenu>
      </tj-submenu>
      <tj-submenu index="2">
        <template #title><i class="tj-icon-menu"></i>Navigator Two</template>
        <tj-menu-item-group>
          <template #title>Group 1</template>
          <tj-menu-item index="2-1">Option 1</tj-menu-item>
          <tj-menu-item index="2-2">Option 2</tj-menu-item>
        </tj-menu-item-group>
        <tj-menu-item-group title="Group 2">
          <tj-menu-item index="2-3">Option 3</tj-menu-item>
        </tj-menu-item-group>
        <tj-submenu index="2-4">
          <template #title>Option 4</template>
          <tj-menu-item index="2-4-1">Option 4-1</tj-menu-item>
        </tj-submenu>
      </tj-submenu>
      <tj-submenu index="3">
        <template #title
          ><i class="tj-icon-setting"></i>Navigator Three</template
        >
        <tj-menu-item-group>
          <template #title>Group 1</template>
          <tj-menu-item index="3-1">Option 1</tj-menu-item>
          <tj-menu-item index="3-2">Option 2</tj-menu-item>
        </tj-menu-item-group>
        <tj-menu-item-group title="Group 2">
          <tj-menu-item index="3-3">Option 3</tj-menu-item>
        </tj-menu-item-group>
        <tj-submenu index="3-4">
          <template #title>Option 4</template>
          <tj-menu-item index="3-4-1">Option 4-1</tj-menu-item>
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
            <tj-dropdown-item>View</tj-dropdown-item>
            <tj-dropdown-item>Add</tj-dropdown-item>
            <tj-dropdown-item>Delete</tj-dropdown-item>
          </tj-dropdown-menu>
        </template>
      </tj-dropdown>
      <span>Tom</span>
    </tj-header>

    <tj-main>
      <tj-table :data="tableData">
        <tj-table-column prop="date" label="Date" width="140">
        </tj-table-column>
        <tj-table-column prop="name" label="Name" width="120">
        </tj-table-column>
        <tj-table-column prop="address" label="Address"> </tj-table-column>
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
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      }
      return {
        tableData: Array(20).fill(item),
      }
    },
  }
</script>
```

:::

### コンテナ属性

| Attribute | Description            | Type   | Accepted Values       | Default                                                                    |
| --------- | ---------------------- | ------ | --------------------- | -------------------------------------------------------------------------- |
| direction | 子要素のレイアウト方向 | string | horizontal / vertical | vertical when nested with `tj-header` or `tj-footer`; horizontal otherwise |

### ヘッダー属性

| Attribute | Description    | Type   | Accepted Values | Default |
| --------- | -------------- | ------ | --------------- | ------- |
| height    | ヘッダーの高さ | string | —               | 60px    |

### アサイド属性

| Attribute | Description          | Type   | Accepted Values | Default |
| --------- | -------------------- | ------ | --------------- | ------- |
| width     | サイドセクションの幅 | string | —               | 300px   |

### フッター属性

| Attribute | Description    | Type   | Accepted Values | Default |
| --------- | -------------- | ------ | --------------- | ------- |
| height    | フッターの高さ | string | —               | 60px    |
