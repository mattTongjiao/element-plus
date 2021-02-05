## ステップ

プロセスに沿ってタスクを完了するようにユーザーを誘導します。そのステップは、実際のアプリケーションのシナリオに応じて設定することができ、ステップの数は 2 以下にすることはできません。

### 基本的な使い方

シンプルなステップバーです。

:::demo ステップのインデックスを示す `Number` 型の `active` 属性を設定する。 ステップの幅を固定する必要がある場合に `space` 属性を設定すると、`Number` 型を受け付けることができる。`space` 属性の単位は `px` である。設定されていない場合はレスポンシブです。`finish-status` 属性を設定すると、完了したステップの状態を変更することができる。

```html
<tj-steps :active="active" finish-status="success">
  <tj-step title="Step 1"></tj-step>
  <tj-step title="Step 2"></tj-step>
  <tj-step title="Step 3"></tj-step>
</tj-steps>

<tj-button style="margin-top: 12px;" @click="next">Next step</tj-button>

<script>
  export default {
    data() {
      return {
        active: 0,
      }
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0
      },
    },
  }
</script>
```

:::

### ステータスを含むステップバー

各ステップのステータスを表示します。

:::demo ステップの名前を設定するには `title` 属性を使うか、`slot` という名前を使って属性をオーバーライドします。このページの最後に全てのスロット名をリストアップしました。

```html
<tj-steps :space="200" :active="1" finish-status="success">
  <tj-step title="Done"></tj-step>
  <tj-step title="Processing"></tj-step>
  <tj-step title="Step 3"></tj-step>
</tj-steps>
```

:::

### センター

タイトルと説明文は中央揃えにすることができます。

:::demo

```html
<tj-steps :active="2" align-center>
  <tj-step title="Step 1" description="Some description"></tj-step>
  <tj-step title="Step 2" description="Some description"></tj-step>
  <tj-step title="Step 3" description="Some description"></tj-step>
  <tj-step title="Step 4" description="Some description"></tj-step>
</tj-steps>
```

:::

### ステップバーには説明文が表示されます。

各ステップの説明があります。

:::demo

```html
<tj-steps :active="1">
  <tj-step title="Step 1" description="Some description"></tj-step>
  <tj-step title="Step 2" description="Some description"></tj-step>
  <tj-step title="Step 3" description="Some description"></tj-step>
</tj-steps>
```

:::

### ステップバー（アイコン付き）

ステップバーには様々なカスタムアイコンを使用することができます。

:::demo アイコンは `icon` プロパティで設定します。アイコンの種類については、Icon コンポーネントのドキュメントを参照してください。さらに、`slot` を通じてアイコンをカスタマイズすることもできる。

```html
<tj-steps :active="1">
  <tj-step title="Step 1" icon="tj-icon-edit"></tj-step>
  <tj-step title="Step 2" icon="tj-icon-upload"></tj-step>
  <tj-step title="Step 3" icon="tj-icon-picture"></tj-step>
</tj-steps>
```

:::

### 垂直方向のステップバー

垂直方向のステップバー

:::demo `tj-steps` 要素で `direction` 属性を`vertical` に設定するだけです。

```html
<div style="height: 300px;">
  <tj-steps direction="vertical" :active="1">
    <tj-step title="Step 1"></tj-step>
    <tj-step title="Step 2"></tj-step>
    <tj-step title="Step 3"></tj-step>
  </tj-steps>
</div>
```

:::

### シンプルなステップバー

単純なステップバーで、`align-center`, `description`, `direction`, `space` は無視されます。

:::demo

```html
<tj-steps :space="200" :active="1" simple>
  <tj-step title="Step 1" icon="tj-icon-edit"></tj-step>
  <tj-step title="Step 2" icon="tj-icon-upload"></tj-step>
  <tj-step title="Step 3" icon="tj-icon-picture"></tj-step>
</tj-steps>

<tj-steps :active="1" finish-status="success" simple style="margin-top: 20px">
  <tj-step title="Step 1"></tj-step>
  <tj-step title="Step 2"></tj-step>
  <tj-step title="Step 3"></tj-step>
</tj-steps>
```

:::

### ステップ属性

| Attribute      | Description                                                                              | Type            | Accepted Values                           | Default    |
| -------------- | ---------------------------------------------------------------------------------------- | --------------- | ----------------------------------------- | ---------- |
| space          | 各ステップの間隔を指定し、省略した場合は応答します。パーセンテージをサポートしています。 | number / string | —                                         | —          |
| direction      | 表示方向                                                                                 | string          | vertical/horizontal                       | horizontal |
| active         | 現在アクティブになっているステップ                                                       | number          | —                                         | 0          |
| process-status | 現在のステップの状態                                                                     | string          | wait / process / finish / error / success | process    |
| finish-status  | 終了ステップの状態                                                                       | string          | wait / process / finish / error / success | finish     |
| align-center   | センタータイトルと説明                                                                   | boolean         | —                                         | false      |
| simple         | シンプルなテーマを適用するかどうか                                                       | boolean         | -                                         | false      |

### ステップ属性

| Attribute   | Description                                                                              | Type                                                               | Accepted Values | Default |
| ----------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | --------------- | ------- |
| title       | ステップタイトル                                                                         | string                                                             | —               | —       |
| description | ステップ記述                                                                             | string                                                             | —               | —       |
| icon        | ステップアイコン                                                                         | step icon's class name. Icons can be passed via named slot as well | string          | —       |
| status      | 現在の状態を表示します。設定されていない場合は、ステップスによって自動的に設定されます。 | wait / process / finish / error / success                          | -               |

### ステップスロット

| Name        | Description      |
| ----------- | ---------------- |
| icon        | カスタムアイコン |
| title       | ステップタイトル |
| description | ステップ記述     |
