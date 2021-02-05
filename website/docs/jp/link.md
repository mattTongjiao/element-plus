## リンク

テキストハイパーリンク

### ベーシック

ベーシックテキストリンク
:::demo

```html
<div>
  <tj-link href="https://element.eleme.io" target="_blank">default</tj-link>
  <tj-link type="primary">primary</tj-link>
  <tj-link type="success">success</tj-link>
  <tj-link type="warning">warning</tj-link>
  <tj-link type="danger">danger</tj-link>
  <tj-link type="info">info</tj-link>
</div>
```

:::

### 無効化

リンクの無効化状態
:::demo

```html
<div>
  <tj-link disabled>default</tj-link>
  <tj-link type="primary" disabled>primary</tj-link>
  <tj-link type="success" disabled>success</tj-link>
  <tj-link type="warning" disabled>warning</tj-link>
  <tj-link type="danger" disabled>danger</tj-link>
  <tj-link type="info" disabled>info</tj-link>
</div>
```

:::

### 下線

リンクの下線
:::demo

```html
<div>
  <tj-link :underline="false">Without Underline</tj-link>
  <tj-link>With Underline</tj-link>
</div>
```

:::

### アイコン

リンク付きアイコン
:::demo

```html
<div>
  <tj-link icon="tj-icon-edit">Edit</tj-link>
  <tj-link>Check<i class="tj-icon-view tj-icon--right"></i> </tj-link>
</div>
```

:::

### 属性

| Attribute | Description                              | Type    | Options                                     | Default |
| --------- | ---------------------------------------- | ------- | ------------------------------------------- | ------- |
| type      | タイプ                                   | string  | primary / success / warning / danger / info | default |
| underline | コンポーネントに下線があるか             | boolean | —                                           | true    |
| disabled  | コンポーネントが無効化されているか       | boolean | —                                           | false   |
| href      | ネイティブハイパーリンクの `href` と同じ | string  | —                                           | -       |
| icon      | アイコンのクラス名                       | string  | —                                           | -       |
