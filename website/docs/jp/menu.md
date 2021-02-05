## ナビゲーションメニュー

ウェブサイトのナビゲーションを提供するメニュー。

### トップバー

トップバーのナビゲーションメニューは、様々なシーンで使用することができます。

:::demo デフォルトではメニューは縦長ですが、モードプロップを'horizontal'に設定することで横長にすることができます。また、サブメニューコンポーネントを使って第 2 階層のメニューを作成することもできます。メニューには `background-color`, `text-color`, `active-text-color` が用意されており、色をカスタマイズすることができます。

```html
<tj-menu
  :default-active="activeIndex"
  class="tj-menu-demo"
  mode="horizontal"
  @select="handleSelect"
>
  <tj-menu-item index="1">Processing Center</tj-menu-item>
  <tj-submenu index="2">
    <template #title>Workspace</template>
    <tj-menu-item index="2-1">item one</tj-menu-item>
    <tj-menu-item index="2-2">item two</tj-menu-item>
    <tj-menu-item index="2-3">item three</tj-menu-item>
    <tj-submenu index="2-4">
      <template #title>item four</template>
      <tj-menu-item index="2-4-1">item one</tj-menu-item>
      <tj-menu-item index="2-4-2">item two</tj-menu-item>
      <tj-menu-item index="2-4-3">item three</tj-menu-item>
    </tj-submenu>
  </tj-submenu>
  <tj-menu-item index="3" disabled>Info</tj-menu-item>
  <tj-menu-item index="4"
    ><a href="https://www.ele.me" target="_blank">Orders</a></tj-menu-item
  >
</tj-menu>
<div class="line"></div>
<tj-menu
  :default-active="activeIndex2"
  class="tj-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b"
>
  <tj-menu-item index="1">Processing Center</tj-menu-item>
  <tj-submenu index="2">
    <template #title>Workspace</template>
    <tj-menu-item index="2-1">item one</tj-menu-item>
    <tj-menu-item index="2-2">item two</tj-menu-item>
    <tj-menu-item index="2-3">item three</tj-menu-item>
    <tj-submenu index="2-4">
      <template #title>item four</template>
      <tj-menu-item index="2-4-1">item one</tj-menu-item>
      <tj-menu-item index="2-4-2">item two</tj-menu-item>
      <tj-menu-item index="2-4-3">item three</tj-menu-item>
    </tj-submenu>
  </tj-submenu>
  <tj-menu-item index="3" disabled>Info</tj-menu-item>
  <tj-menu-item index="4"
    ><a href="https://www.ele.me" target="_blank">Orders</a></tj-menu-item
  >
</tj-menu>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      },
    },
  }
</script>
```

:::

### サイドバー

V サブメニューのある縦型ナビメニュー。

:::demo tj-menu-item-group コンポーネントを使ってメニューグループを作成することができ、グループの名前はタイトルプロップか名前付きスロットで決まります。

```html
<tj-row class="tac">
  <tj-col :span="12">
    <h5>Default colors</h5>
    <tj-menu
      default-active="2"
      class="tj-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <tj-submenu index="1">
        <template #title>
          <i class="tj-icon-location"></i>
          <span>Navigator One</span>
        </template>
        <tj-menu-item-group title="Group One">
          <tj-menu-item index="1-1">item one</tj-menu-item>
          <tj-menu-item index="1-2">item one</tj-menu-item>
        </tj-menu-item-group>
        <tj-menu-item-group title="Group Two">
          <tj-menu-item index="1-3">item three</tj-menu-item>
        </tj-menu-item-group>
        <tj-submenu index="1-4">
          <template #title>item four</template>
          <tj-menu-item index="1-4-1">item one</tj-menu-item>
        </tj-submenu>
      </tj-submenu>
      <tj-menu-item index="2">
        <i class="tj-icon-menu"></i>
        <span>Navigator Two</span>
      </tj-menu-item>
      <tj-menu-item index="3" disabled>
        <i class="tj-icon-document"></i>
        <span>Navigator Three</span>
      </tj-menu-item>
      <tj-menu-item index="4">
        <i class="tj-icon-setting"></i>
        <span>Navigator Four</span>
      </tj-menu-item>
    </tj-menu>
  </tj-col>
  <tj-col :span="12">
    <h5>Custom colors</h5>
    <tj-menu
      default-active="2"
      class="tj-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <tj-submenu index="1">
        <template #title>
          <i class="tj-icon-location"></i>
          <span>Navigator One</span>
        </template>
        <tj-menu-item-group title="Group One">
          <tj-menu-item index="1-1">item one</tj-menu-item>
          <tj-menu-item index="1-2">item one</tj-menu-item>
        </tj-menu-item-group>
        <tj-menu-item-group title="Group Two">
          <tj-menu-item index="1-3">item three</tj-menu-item>
        </tj-menu-item-group>
        <tj-submenu index="1-4">
          <template #title>item four</template>
          <tj-menu-item index="1-4-1">item one</tj-menu-item>
        </tj-submenu>
      </tj-submenu>
      <tj-menu-item index="2">
        <i class="tj-icon-menu"></i>
        <span>Navigator Two</span>
      </tj-menu-item>
      <tj-menu-item index="3" disabled>
        <i class="tj-icon-document"></i>
        <span>Navigator Three</span>
      </tj-menu-item>
      <tj-menu-item index="4">
        <i class="tj-icon-setting"></i>
        <span>Navigator Four</span>
      </tj-menu-item>
    </tj-menu>
  </tj-col>
</tj-row>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      },
    },
  }
</script>
```

:::

### コラプス

縦型のナビメニューを潰すことも出来ます。

:::demo

```html
<tj-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <tj-radio-button :label="false">expand</tj-radio-button>
  <tj-radio-button :label="true">collapse</tj-radio-button>
</tj-radio-group>
<tj-menu
  default-active="2"
  class="tj-menu-vertical-demo"
  @open="handleOpen"
  @close="handleClose"
  :collapse="isCollapse"
>
  <tj-submenu index="1">
    <template #title>
      <i class="tj-icon-location"></i>
      <span>Navigator One</span>
    </template>
    <tj-menu-item-group>
      <template #title><span>Group One</span></template>
      <tj-menu-item index="1-1">item one</tj-menu-item>
      <tj-menu-item index="1-2">item two</tj-menu-item>
    </tj-menu-item-group>
    <tj-menu-item-group title="Group Two">
      <tj-menu-item index="1-3">item three</tj-menu-item>
    </tj-menu-item-group>
    <tj-submenu index="1-4">
      <template #title><span>item four</span></template>
      <tj-menu-item index="1-4-1">item one</tj-menu-item>
    </tj-submenu>
  </tj-submenu>
  <tj-menu-item index="2">
    <i class="tj-icon-menu"></i>
    <template #title>Navigator Two</template>
  </tj-menu-item>
  <tj-menu-item index="3" disabled>
    <i class="tj-icon-document"></i>
    <template #title>Navigator Three</template>
  </tj-menu-item>
  <tj-menu-item index="4">
    <i class="tj-icon-setting"></i>
    <template #title>Navigator Four</template>
  </tj-menu-item>
</tj-menu>

<style>
  .tj-menu-vertical-demo:not(.tj-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

<script>
  export default {
    data() {
      return {
        isCollapse: true,
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      },
    },
  }
</script>
```

:::

### メニュー属性

| Attribute           | Description                                                                                                                                    | Type    | Accepted Values       | Default  |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------- | --------------------- | -------- |
| mode                | メニュー表示モード                                                                                                                             | string  | horizontal / vertical | vertical |
| collapse            | メニューが折りたたまれているかどうか (垂直モードでのみ利用可能)                                                                                | boolean | —                     | false    |
| background-color    | メニューの背景色(16 進数形式)                                                                                                                  | string  | —                     | #ffffff  |
| text-color          | メニューのテキストカラー(16 進数形式)                                                                                                          | string  | —                     | #303133  |
| active-text-color   | 現在アクティブなメニュー項目のテキスト色 (16 進数形式)                                                                                         | string  | —                     | #409EFF  |
| default-active      | アクティブメニューのインデックス                                                                                                               | string  | —                     | —        |
| default-openeds     | 現在アクティブなサブメニューのインデックスを含む配列                                                                                           | Array   | —                     | —        |
| unique-opened       | 一つのサブメニューだけをアクティブにすることができるかどうか                                                                                   | boolean | —                     | false    |
| menu-trigger        | サブメニューのトリガ方法、`mode` が 'horizontal' の時のみ動作する                                                                              | string  | hover / click         | hover    |
| router              | `vue-router` モードを有効にしているかどうかを示します。true の場合、インデックスはルートアクションを有効にするための 'path' として使われます。 | boolean | —                     | false    |
| collapse-transition | 折りたたみ遷移を有効にするかどうか                                                                                                             | boolean | —                     | true     |

### メニューメソッド

| Methods Name | Description                | Parameters                            |
| ------------ | -------------------------- | ------------------------------------- |
| open         | 特定のサブメニューを開く   | index: index of the sub-menu to open  |
| close        | 特定のサブメニューを閉じる | index: index of the sub-menu to close |

### メニューイベント

| Event Name | Description                                    | Parameters                                                                      |
| ---------- | ---------------------------------------------- | ------------------------------------------------------------------------------- |
| select     | メニュー起動時コールバック機能                 | index: index of activated menu, indexPath: index path of activated menu         |
| open       | サブメニュー展開したときのコールバック関数     | index: index of expanded sub-menu, indexPath: index path of expanded sub-menu   |
| close      | サブメニューを折りたたんだ時のコールバック関数 | index: index of collapsed sub-menu, indexPath: index path of collapsed sub-menu |

### メニューアイテムイベント

| Event Name | Description                                        | Parameters             |
| ---------- | -------------------------------------------------- | ---------------------- |
| click      | メニュー項目がクリックされたときのコールバック関数 | el: menu-item instance |

### サブメニュー属性

| Attribute             | Description                                                                                                                      | Type    | Accepted Values | Default                                         |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- | --------------- | ----------------------------------------------- |
| index                 | ユニークアイデンティフィケーション                                                                                               | string  | —               | —                                               |
| popper-class          | ポップアップメニューのカスタムクラス名                                                                                           | string  | —               | —                                               |
| show-timeout          | サブメニュー表示前のタイムアウト                                                                                                 | number  | —               | 300                                             |
| hide-timeout          | サブメニューを隠す前のタイムアウト                                                                                               | number  | —               | 300                                             |
| disabled              | サブメニューが無効化されているかどうか                                                                                           | boolean | —               | false                                           |
| popper-append-to-body | ポップアップメニューをボディに追加するかどうかを指定します。メニューの位置が正しくない場合は、この prop を調整してみてください。 | boolean | -               | level one Submenu: true / other Submenus: false |

### メニューアイテム属性

| Attribute | Description                        | Type        | Accepted Values | Default |
| --------- | ---------------------------------- | ----------- | --------------- | ------- |
| index     | ユニークアイデンティフィケーション | string/null | —               | null    |
| route     | Vue Router オブジェクト            | object      | —               | —       |
| disabled  | 無効化かどうか                     | boolean     | —               | false   |

### メニューグループ属性

| Attribute | Description      | Type   | Accepted Values | Default |
| --------- | ---------------- | ------ | --------------- | ------- |
| title     | グループタイトル | string | —               | —       |
