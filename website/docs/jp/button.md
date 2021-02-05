## Button

広く使われている button です。

### 基本的な使い方

:::demo Button のスタイルを定義するには `type`, `plain`, `round`, `circle` を使います。

```html
<tj-row>
  <tj-button>Default</tj-button>
  <tj-button type="primary">Primary</tj-button>
  <tj-button type="success">Success</tj-button>
  <tj-button type="info">Info</tj-button>
  <tj-button type="warning">Warning</tj-button>
  <tj-button type="danger">Danger</tj-button>
</tj-row>

<tj-row>
  <tj-button plain>Plain</tj-button>
  <tj-button type="primary" plain>Primary</tj-button>
  <tj-button type="success" plain>Success</tj-button>
  <tj-button type="info" plain>Info</tj-button>
  <tj-button type="warning" plain>Warning</tj-button>
  <tj-button type="danger" plain>Danger</tj-button>
</tj-row>

<tj-row>
  <tj-button round>Round</tj-button>
  <tj-button type="primary" round>Primary</tj-button>
  <tj-button type="success" round>Success</tj-button>
  <tj-button type="info" round>Info</tj-button>
  <tj-button type="warning" round>Warning</tj-button>
  <tj-button type="danger" round>Danger</tj-button>
</tj-row>

<tj-row>
  <tj-button icon="tj-icon-search" circle></tj-button>
  <tj-button type="primary" icon="tj-icon-edit" circle></tj-button>
  <tj-button type="success" icon="tj-icon-check" circle></tj-button>
  <tj-button type="info" icon="tj-icon-message" circle></tj-button>
  <tj-button type="warning" icon="tj-icon-star-off" circle></tj-button>
  <tj-button type="danger" icon="tj-icon-delete" circle></tj-button>
</tj-row>
```

:::

### 無効化 button

`disabled` 属性は button が無効になっているかどうかを判定します。

:::demo button が無効になっているかどうかを判断するには `disabled` 属性を用いる。これは `Boolean` 値を受け取ります。

```html
<tj-row>
  <tj-button disabled>Default</tj-button>
  <tj-button type="primary" disabled>Primary</tj-button>
  <tj-button type="success" disabled>Success</tj-button>
  <tj-button type="info" disabled>Info</tj-button>
  <tj-button type="warning" disabled>Warning</tj-button>
  <tj-button type="danger" disabled>Danger</tj-button>
</tj-row>

<tj-row>
  <tj-button plain disabled>Plain</tj-button>
  <tj-button type="primary" plain disabled>Primary</tj-button>
  <tj-button type="success" plain disabled>Success</tj-button>
  <tj-button type="info" plain disabled>Info</tj-button>
  <tj-button type="warning" plain disabled>Warning</tj-button>
  <tj-button type="danger" plain disabled>Danger</tj-button>
</tj-row>
```

:::

### テキスト button

枠線と背景のない button です。

:::demo

```html
<tj-button type="text">Text Button</tj-button>
<tj-button type="text" disabled>Text Button</tj-button>
```

:::

### アイコン button

アイコンを使って Button にさらに意味を持たせましょう。アイコンだけでスペースを確保したり、テキストと一緒に使うこともできます。

:::demo アイコンを追加するには `icon` 属性を使います。アイコンのリストは要素のアイコンコンポーネントにあります。テキストの右側にアイコンを追加するには、`<i>` タグを使用します。カスタムアイコンも使用できます。

```html
<tj-button type="primary" icon="tj-icon-edit"></tj-button>
<tj-button type="primary" icon="tj-icon-share"></tj-button>
<tj-button type="primary" icon="tj-icon-delete"></tj-button>
<tj-button type="primary" icon="tj-icon-search">Search</tj-button>
<tj-button type="primary"
  >Upload<i class="tj-icon-upload tj-icon-right"></i
></tj-button>
```

:::

### button グループ

button グループとして表示され、同じよう操作をグループ化することができます。

:::demo button をグループ化するにはタグ `<tj-button-group>` を使用します。

```html
<tj-button-group>
  <tj-button type="primary" icon="tj-icon-arrow-left">Previous Page</tj-button>
  <tj-button type="primary"
    >Next Page<i class="tj-icon-arrow-right tj-icon-right"></i
  ></tj-button>
</tj-button-group>
<tj-button-group>
  <tj-button type="primary" icon="tj-icon-edit"></tj-button>
  <tj-button type="primary" icon="tj-icon-share"></tj-button>
  <tj-button type="primary" icon="tj-icon-delete"></tj-button>
</tj-button-group>
```

:::

### 読み込み button

button をクリックしてデータを読み込むと、読み込み状態が表示されます。

:::demo ロード状態を表示するために `loading` 属性を `true` に設定します。

```html
<tj-button type="primary" :loading="true">Loading</tj-button>
```

:::

### サイズ

Button コンポーネントにはデフォルトサイズの他に、3 つの追加サイズが用意されており、異なるシナリオの中から選択することができます。

:::demo 追加のサイズを `medium`, `small`, `mini` で設定するには、属性 `size` を使用します。

```html
<tj-row>
  <tj-button>Default</tj-button>
  <tj-button size="medium">Medium</tj-button>
  <tj-button size="small">Small</tj-button>
  <tj-button size="mini">Mini</tj-button>
</tj-row>
<tj-row>
  <tj-button round>Default</tj-button>
  <tj-button size="medium" round>Medium</tj-button>
  <tj-button size="small" round>Small</tj-button>
  <tj-button size="mini" round>Mini</tj-button>
</tj-row>
```

:::

### 属性

| Attribute   | Description                                    | Type    | Accepted values                                    | Default |
| ----------- | ---------------------------------------------- | ------- | -------------------------------------------------- | ------- |
| size        | button サイズ                                  | string  | medium / small / mini                              | —       |
| type        | button タイプ                                  | string  | primary / success / warning / danger / info / text | —       |
| plain       | プレーン button か判定する                     | boolean | —                                                  | false   |
| round       | ラウンド(丸みを持った)button か判定する        | boolean | —                                                  | false   |
| circle      | サークル(丸)button か判定する                  | boolean | —                                                  | false   |
| loading     | 読み込み中か判定する                           | boolean | —                                                  | false   |
| disabled    | button を無効化する                            | boolean | —                                                  | false   |
| icon        | アイコンクラス名                               | string  | —                                                  | —       |
| autofocus   | ネイティブ button の `オートフォーカス` と同じ | boolean | —                                                  | false   |
| native-type | ネイティブ button の `タイプ` と同じ           | string  | button / submit / reset                            | button  |
