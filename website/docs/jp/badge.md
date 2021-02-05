## Badge

ボタンやアイコンの数字やステータスマーク

### 基本的な使い方

新しいメッセージの量を表示します。

:::demo 量は `value` で定義します。`value` は `Number` または `String` を受け入れる。

```html
<tj-badge :value="12" class="item">
  <tj-button size="small">comments</tj-button>
</tj-badge>
<tj-badge :value="3" class="item">
  <tj-button size="small">replies</tj-button>
</tj-badge>
<tj-badge :value="1" class="item" type="primary">
  <tj-button size="small">comments</tj-button>
</tj-badge>
<tj-badge :value="2" class="item" type="warning">
  <tj-button size="small">replies</tj-button>
</tj-badge>

<tj-dropdown trigger="click">
  <span class="tj-dropdown-link">
    Click Me<i class="tj-icon-caret-bottom tj-icon--right"></i>
  </span>
  <template #dropdown>
    <tj-dropdown-menu>
      <tj-dropdown-item class="clearfix">
        comments
        <tj-badge class="mark" :value="12" />
      </tj-dropdown-item>
      <tj-dropdown-item class="clearfix">
        replies
        <tj-badge class="mark" :value="3" />
      </tj-dropdown-item>
    </tj-dropdown-menu>
  </template>
</tj-dropdown>

<style>
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
</style>
```

:::

### 最大値

最大値をカスタマイズすることができます。

:::demo 最大値はプロパティ `max` で定義され `Number` である。value`が`Number` である場合にのみ動作することに注意すること。

```html
<tj-badge :value="200" :max="99" class="item">
  <tj-button size="small">comments</tj-button>
</tj-badge>
<tj-badge :value="100" :max="10" class="item">
  <tj-button size="small">replies</tj-button>
</tj-badge>

<style>
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
</style>
```

:::

### カスタマイズ

数字以外のテキスト内容を表示します。

:::demo `value` が `String` の場合、カスタマイズしたテキストを表示することができる。

```html
<tj-badge value="new" class="item">
  <tj-button size="small">comments</tj-button>
</tj-badge>
<tj-badge value="hot" class="item">
  <tj-button size="small">replies</tj-button>
</tj-badge>

<style>
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
</style>
```

:::

### 小さな赤い点

注目すべきコンテンツには、赤い点を使ってマークをつけましょう。

:::demo 属性 `is-dot` を用いる。`Boolean` である。

```html
<tj-badge is-dot class="item">query</tj-badge>
<tj-badge is-dot class="item">
  <tj-button
    class="share-button"
    icon="tj-icon-share"
    type="primary"
  ></tj-button>
</tj-badge>

<style>
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
</style>
```

:::

### 属性

| Attribute | Description                                                                          | Type           | Accepted Values                             | Default |
| --------- | ------------------------------------------------------------------------------------ | -------------- | ------------------------------------------- | ------- |
| value     | 表示値                                                                               | string, number | —                                           | —       |
| max       | 最大値を超えると '{max}+' を表示します。`value` が `Number` の場合にのみ動作します。 | number         | —                                           | —       |
| is-dot    | 小さな点が表示されている場合                                                         | boolean        | —                                           | false   |
| hidden    | かくし badge                                                                         | boolean        | —                                           | false   |
| type      | ボタンタイプ                                                                         | string         | primary / success / warning / danger / info | —       |
