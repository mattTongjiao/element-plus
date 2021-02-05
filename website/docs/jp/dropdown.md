## Dropdown

リンクとアクションのリストを表示するためのトグルメニュー

### 基本的な使い方

dropdown メニューの上にカーソルを置くと、より多くのアクションが展開されます。

:::demo トリガ要素はデフォルトの `slot` でレンダリングされ、dropdown 部分は `dropdown` という名前の `slot` でレンダリングされます。デフォルトでは、トリガーとなる要素にカーソルを合わせたときに dropdown リストが表示され、クリックする必要はありません。

```html
<tj-dropdown>
  <span class="tj-dropdown-link">
    Dropdown List<i class="tj-icon-arrow-down tj-icon--right"></i>
  </span>
  <template #dropdown>
    <tj-dropdown-menu>
      <tj-dropdown-item>Action 1</tj-dropdown-item>
      <tj-dropdown-item>Action 2</tj-dropdown-item>
      <tj-dropdown-item>Action 3</tj-dropdown-item>
      <tj-dropdown-item disabled>Action 4</tj-dropdown-item>
      <tj-dropdown-item divided>Action 5</tj-dropdown-item>
    </tj-dropdown-menu>
  </template>
</tj-dropdown>

<style>
  .tj-dropdown-link {
    cursor: pointer;
    color: #409eff;
  }
  .tj-icon-arrow-down {
    font-size: 12px;
  }
</style>
```

:::

### トリガー要素

dropdown リストを起動するには、ボタンを使用します。

:::demo トリガ要素をボタングループに分割するには `split-button` を使います。項目 3 と項目 4 の間に区切り線を挿入したい場合は、項目 4 にクラス `divider` を追加します。

```html
<tj-dropdown>
  <tj-button type="primary">
    Dropdown List<i class="tj-icon-arrow-down tj-icon--right"></i>
  </tj-button>
  <template #dropdown>
    <tj-dropdown-menu>
      <tj-dropdown-item>Action 1</tj-dropdown-item>
      <tj-dropdown-item>Action 2</tj-dropdown-item>
      <tj-dropdown-item>Action 3</tj-dropdown-item>
      <tj-dropdown-item>Action 4</tj-dropdown-item>
      <tj-dropdown-item>Action 5</tj-dropdown-item>
    </tj-dropdown-menu>
  </template>
</tj-dropdown>
<tj-dropdown split-button type="primary" @click="handleClick">
  Dropdown List
  <template #dropdown>
    <tj-dropdown-menu>
      <tj-dropdown-item>Action 1</tj-dropdown-item>
      <tj-dropdown-item>Action 2</tj-dropdown-item>
      <tj-dropdown-item>Action 3</tj-dropdown-item>
      <tj-dropdown-item>Action 4</tj-dropdown-item>
      <tj-dropdown-item>Action 5</tj-dropdown-item>
    </tj-dropdown-menu>
  </template>
</tj-dropdown>

<style>
  .tj-dropdown {
    vertical-align: top;
  }
  .tj-dropdown + .tj-dropdown {
    margin-left: 15px;
  }
  .tj-icon-arrow-down {
    font-size: 12px;
  }
</style>

<script>
  export default {
    methods: {
      handleClick() {
        alert('button click')
      },
    },
  }
</script>
```

:::

### トリガーのかけ方

トリガー要素をクリックするか、その上にカーソルを置きます。

:::demo アトリビュート `trigger` を用いる。デフォルトでは `hover` である。

```html
<tj-row class="block-col-2">
  <tj-col :span="8">
    <span class="demonstration">hover to trigger</span>
    <tj-dropdown>
      <span class="tj-dropdown-link">
        Dropdown List<i class="tj-icon-arrow-down tj-icon--right"></i>
      </span>
      <template #dropdown>
        <tj-dropdown-menu>
          <tj-dropdown-item icon="tj-icon-plus">Action 1</tj-dropdown-item>
          <tj-dropdown-item icon="tj-icon-circle-plus"
            >Action 2</tj-dropdown-item
          >
          <tj-dropdown-item icon="tj-icon-circle-plus-outline"
            >Action 3</tj-dropdown-item
          >
          <tj-dropdown-item icon="tj-icon-check">Action 4</tj-dropdown-item>
          <tj-dropdown-item icon="tj-icon-circle-check"
            >Action 5</tj-dropdown-item
          >
        </tj-dropdown-menu>
      </template>
    </tj-dropdown>
  </tj-col>
  <tj-col :span="8">
    <span class="demonstration">click to trigger</span>
    <tj-dropdown trigger="click">
      <span class="tj-dropdown-link">
        Dropdown List<i class="tj-icon-arrow-down tj-icon--right"></i>
      </span>
      <template #dropdown>
        <tj-dropdown-menu>
          <tj-dropdown-item icon="tj-icon-plus">Action 1</tj-dropdown-item>
          <tj-dropdown-item icon="tj-icon-circle-plus"
            >Action 2</tj-dropdown-item
          >
          <tj-dropdown-item icon="tj-icon-circle-plus-outline"
            >Action 3</tj-dropdown-item
          >
          <tj-dropdown-item icon="tj-icon-check">Action 4</tj-dropdown-item>
          <tj-dropdown-item icon="tj-icon-circle-check"
            >Action 5</tj-dropdown-item
          >
        </tj-dropdown-menu>
      </template>
    </tj-dropdown>
  </tj-col>
  <tj-col :span="8">
    <span class="demonstration">right click to trigger</span>
    <tj-dropdown trigger="contextmenu">
      <span class="tj-dropdown-link">
        Dropdown List<i class="tj-icon-arrow-down tj-icon--right"></i>
      </span>
      <template #dropdown>
        <tj-dropdown-menu>
          <tj-dropdown-item icon="tj-icon-plus">Action 1</tj-dropdown-item>
          <tj-dropdown-item icon="tj-icon-circle-plus"
            >Action 2</tj-dropdown-item
          >
          <tj-dropdown-item icon="tj-icon-circle-plus-outline"
            >Action 3</tj-dropdown-item
          >
          <tj-dropdown-item icon="tj-icon-check">Action 4</tj-dropdown-item>
          <tj-dropdown-item icon="tj-icon-circle-check"
            >Action 5</tj-dropdown-item
          >
        </tj-dropdown-menu>
      </template>
    </tj-dropdown>
  </tj-col>
</tj-row>

<style>
  .tj-dropdown-link {
    cursor: pointer;
    color: #409eff;
  }
  .tj-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>
```

:::

### メニューを非表示にする動作

クリックしたときにメニューが閉じるかどうかを定義するには `hide-on-click` を用いる。

:::demo デフォルトではメニュー項目をクリックするとメニューが閉じますが、hide-on-click を false にすることでオフにできます。

```html
<tj-dropdown :hide-on-click="false">
  <span class="tj-dropdown-link">
    Dropdown List<i class="tj-icon-arrow-down tj-icon--right"></i>
  </span>
  <template #dropdown>
    <tj-dropdown-menu>
      <tj-dropdown-item>Action 1</tj-dropdown-item>
      <tj-dropdown-item>Action 2</tj-dropdown-item>
      <tj-dropdown-item>Action 3</tj-dropdown-item>
      <tj-dropdown-item disabled>Action 4</tj-dropdown-item>
      <tj-dropdown-item divided>Action 5</tj-dropdown-item>
    </tj-dropdown-menu>
  </template>
</tj-dropdown>

<style>
  .tj-dropdown-link {
    cursor: pointer;
    color: #409eff;
  }
  .tj-icon-arrow-down {
    font-size: 12px;
  }
</style>
```

:::

### コマンドイベント

各 dropdown 項目をクリックすると、各項目に割り当てられたパラメータを持つイベントが発生します。

:::demo

```html
<tj-dropdown @command="handleCommand">
  <span class="tj-dropdown-link">
    Dropdown List<i class="tj-icon-arrow-down tj-icon--right"></i>
  </span>
  <template #dropdown>
    <tj-dropdown-menu>
      <tj-dropdown-item command="a">Action 1</tj-dropdown-item>
      <tj-dropdown-item command="b">Action 2</tj-dropdown-item>
      <tj-dropdown-item command="c">Action 3</tj-dropdown-item>
      <tj-dropdown-item command="d" disabled>Action 4</tj-dropdown-item>
      <tj-dropdown-item command="e" divided>Action 5</tj-dropdown-item>
    </tj-dropdown-menu>
  </template>
</tj-dropdown>

<style>
  .tj-dropdown-link {
    cursor: pointer;
    color: #409eff;
  }
  .tj-icon-arrow-down {
    font-size: 12px;
  }
</style>

<script>
  export default {
    methods: {
      handleCommand(command) {
        this.$message('click on item ' + command)
      },
    },
  }
</script>
```

:::

### サイズ

デフォルトのサイズの他に、dropdown コンポーネントには 3 つの追加サイズが用意されており、異なるシナリオから選択することができます。

:::demo 追加のサイズを `medium`, `small`, `mini` で設定するには `size` 属性を使います。

```html
<tj-dropdown split-button type="primary">
  Default
  <template #dropdown>
    <tj-dropdown-menu>
      <tj-dropdown-item>Action 1</tj-dropdown-item>
      <tj-dropdown-item>Action 2</tj-dropdown-item>
      <tj-dropdown-item>Action 3</tj-dropdown-item>
      <tj-dropdown-item>Action 4</tj-dropdown-item>
    </tj-dropdown-menu>
  </template>
</tj-dropdown>

<tj-dropdown size="medium" split-button type="primary">
  Medium
  <template #dropdown>
    <tj-dropdown-menu>
      <tj-dropdown-item>Action 1</tj-dropdown-item>
      <tj-dropdown-item>Action 2</tj-dropdown-item>
      <tj-dropdown-item>Action 3</tj-dropdown-item>
      <tj-dropdown-item>Action 4</tj-dropdown-item>
    </tj-dropdown-menu>
  </template>
</tj-dropdown>

<tj-dropdown size="small" split-button type="primary">
  Small
  <template #dropdown>
    <tj-dropdown-menu>
      <tj-dropdown-item>Action 1</tj-dropdown-item>
      <tj-dropdown-item>Action 2</tj-dropdown-item>
      <tj-dropdown-item>Action 3</tj-dropdown-item>
      <tj-dropdown-item>Action 4</tj-dropdown-item>
    </tj-dropdown-menu>
  </template>
</tj-dropdown>

<tj-dropdown size="mini" split-button type="primary">
  Mini
  <template #dropdown>
    <tj-dropdown-menu>
      <tj-dropdown-item>Action 1</tj-dropdown-item>
      <tj-dropdown-item>Action 2</tj-dropdown-item>
      <tj-dropdown-item>Action 3</tj-dropdown-item>
      <tj-dropdown-item>Action 4</tj-dropdown-item>
    </tj-dropdown-menu>
  </template>
</tj-dropdown>
```

:::

### dropdown 属性

| Attribute     | Description                                                                                         | Type    | Accepted Values                                      | Default    |
| ------------- | --------------------------------------------------------------------------------------------------- | ------- | ---------------------------------------------------- | ---------- |
| type          | `split-button` が `true`のとき、メニューボタンのタイプは `Button` コンポーネントを参照する。        | string  | —                                                    | —          |
| size          | メニューのサイズ(分割ボタンでも動作)                                                                | string  | medium / small / mini                                | —          |
| split-button  | ボタングループの表示の有無                                                                          | boolean | —                                                    | false      |
| placement     | ポップメニューの配置                                                                                | string  | top/top-start/top-end/bottom/bottom-start/bottom-end | bottom-end |
| trigger       | トリガーのきっかけ                                                                                  | string  | hover/click/contextmenu                              | hover      |
| hide-on-click | メニューアイテムをクリックした後にメニューを非表示にするかどうか                                    | boolean | —                                                    | true       |
| show-timeout  | dropdown を表示するまでの遅延時間 (トリガーが `hover` の場合のみ動作)                               | number  | —                                                    | 250        |
| hide-timeout  | dropdown を非表示にするまでの遅延時間 (トリガーが `hover` の場合のみ動作)                           | number  | —                                                    | 150        |
| tabindex      | dropdown の[tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) | number  | —                                                    | 0          |

### dropdown スロット

| Name     | Description                                                                                                                                                 |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| —        | dropdown の内容 Notice: トリガーリスナーをアタッチするには、有効な html dom 要素 (例: `<span>, <button> etc.`) または `tj-component` でなければなりません。 |
| dropdown | dropdown メニューの内容、通常は `<tj-dropdown-menu>` 要素                                                                                                   |

### dropdown イベント

| Event Name     | Description                                                                     | Parameters                                    |
| -------------- | ------------------------------------------------------------------------------- | --------------------------------------------- |
| click          | `split-button` が `true` の場合、左ボタンがクリックされたときにトリガされます。 | —                                             |
| command        | dropdown 項目がクリックされたときにトリガーする                                 | the command dispatched from the dropdown item |
| visible-change | dropdown が表示/非表示になったときにトリガされます。                            | true when it appears, and false otherwise     |

### dropdown メニュー項目の属性

| Attribute | Description                                                                | Type                 | Accepted Values | Default |
| --------- | -------------------------------------------------------------------------- | -------------------- | --------------- | ------- |
| command   | dropdown の `command` コールバックにディスパッチするコマンドを指定します。 | string/number/object | —               | —       |
| disabled  | 項目が無効化されているかどうか                                             | boolean              | —               | false   |
| divided   | 仕切り表示の有無                                                           | boolean              | —               | false   |
| icon      | アイコンクラス名                                                           | string               | —               | —       |
