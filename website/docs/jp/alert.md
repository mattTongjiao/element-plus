## Alert

重要な alert メッセージを表示します。

### 基本的な使い方

alert コンポーネントは、自動的には消えないページ内の非オーバーレイ要素です。

:::demo alert は `type` で定義された 4 種類のテーマを提供しており、デフォルト値は `info` です。

```html
<template>
  <tj-alert title="success alert" type="success"> </tj-alert>
  <tj-alert title="info alert" type="info"> </tj-alert>
  <tj-alert title="warning alert" type="warning"> </tj-alert>
  <tj-alert title="error alert" type="error"> </tj-alert>
</template>
```

:::

### テーマ

alert は、`ライト`と`ダーク`の 2 つの異なるテーマを提供しています。

:::demo テーマを変更するために `effect` を設定します。

```html
<template>
  <tj-alert title="success alert" type="success" effect="dark"> </tj-alert>
  <tj-alert title="info alert" type="info" effect="dark"> </tj-alert>
  <tj-alert title="warning alert" type="warning" effect="dark"> </tj-alert>
  <tj-alert title="error alert" type="error" effect="dark"> </tj-alert>
</template>
```

:::

### カスタマイズ可能なクローズボタン

閉じるボタンをテキストや他の記号にカスタマイズします。

:::demo alert では、クローズ可能かどうかを設定することができます。閉じるボタンのテキストや閉じるコールバックもカスタマイズ可能です。`closable`属性はコンポーネントを閉じられるかどうかを決める。戻り値は `boolean` で、デフォルトは `true` です。`close-text` 属性を設定することで、デフォルトの十字マークを閉じるボタンに置き換えることができます。`close-text` は文字列でなければならないので注意が必要である。コンポーネントが閉じられたときに `close` イベントが発生する。

```html
<template>
  <tj-alert title="unclosable alert" type="success" :closable="false">
  </tj-alert>
  <tj-alert title="customized close-text" type="info" close-text="Gotcha">
  </tj-alert>
  <tj-alert title="alert with callback" type="warning" @close="hello">
  </tj-alert>
</template>

<script>
  import { defineComponent } from 'vue'
  export default defineComponent({
    setup() {
      const hello = () => {
        alert('Hello World!')
      }
      return {
        hello,
      }
    },
  })
</script>
```

:::

### アイコン付き

アイコンを表示することで可読性が向上します。

:::demo `show-icon` 属性を設定すると、現在の alert タイプに対応するアイコンを表示します。

```html
<template>
  <tj-alert title="success alert" type="success" show-icon> </tj-alert>
  <tj-alert title="info alert" type="info" show-icon> </tj-alert>
  <tj-alert title="warning alert" type="warning" show-icon> </tj-alert>
  <tj-alert title="error alert" type="error" show-icon> </tj-alert>
</template>
```

:::

## 中央揃えのテキスト

テキストを中央に配置するには `center` 属性を使用します。

:::demo

```html
<template>
  <tj-alert title="success alert" type="success" center show-icon> </tj-alert>
  <tj-alert title="info alert" type="info" center show-icon> </tj-alert>
  <tj-alert title="warning alert" type="warning" center show-icon> </tj-alert>
  <tj-alert title="error alert" type="error" center show-icon> </tj-alert>
</template>
```

:::

### 説明文付き

説明には、より詳細な情報が記載されたメッセージが含まれています。

:::demo 必須の `title` 属性の他に、`description` 属性を追加することで、alert をより詳細に説明することができます。説明はテキスト文字列のみを格納することができ、自動的にワードラップされます。

```html
<template>
  <tj-alert
    title="with description"
    type="success"
    description="This is a description."
  >
  </tj-alert>
</template>
```

:::

### アイコンと説明文付き

:::demo 最後に、アイコンと説明文の例です。

```html
<template>
  <tj-alert
    title="success alert"
    type="success"
    description="more text description"
    show-icon
  >
  </tj-alert>
  <tj-alert
    title="info alert"
    type="info"
    description="more text description"
    show-icon
  >
  </tj-alert>
  <tj-alert
    title="warning alert"
    type="warning"
    description="more text description"
    show-icon
  >
  </tj-alert>
  <tj-alert
    title="error alert"
    type="error"
    description="more text description"
    show-icon
  >
  </tj-alert>
</template>
```

:::

### 属性

| Attribute   | Description                              | Type    | Accepted Values            | Default |
| ----------- | ---------------------------------------- | ------- | -------------------------- | ------- |
| title       | タイトル                                 | string  | —                          | —       |
| type        | コンポーネントタイプ                     | string  | success/warning/info/error | info    |
| description | 説明的なテキスト。デフォルトのスロット   | string  | —                          | —       |
| closable    | クローズ可能な場合かどうか               | boolean | —                          | true    |
| center      | テキストを中央に配置するかどうか         | boolean | —                          | false   |
| close-text  | カスタマイズしたクローズボタンのテキスト | string  | —                          | —       |
| show-icon   | タイプアイコンが表示されているま         | boolean | —                          | false   |
| effect      | テーマを選ぶ                             | string  | light/dark                 | light   |

### スロット

| Name  | Description          |
| ----- | -------------------- |
| —     | description          |
| title | alert タイトルの内容 |

### イベント

| Event Name | Description                          | Parameters |
| ---------- | ------------------------------------ | ---------- |
| close      | alert が閉じたときにトリガーされます | —          |
