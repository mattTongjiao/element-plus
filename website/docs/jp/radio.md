## ラジオ

複数の選択肢の中から 1 つを選択することができます。

### 基本的な使い方

ラジオにはあまり多くのオプションを持たせてはいけません。多くのオプションを持つなら代わりに Select コンポーネントを使用します。

:::demo radio コンポーネントの作成は簡単で、Radio の `v-model` に変数をバインドするだけです。これは選択したラジオの `label` の値に等しくなります。ラベルの型は `String`, `Number`, `Boolean` のいずれかです。

```html
<template>
  <tj-radio v-model="radio" label="1">Option A</tj-radio>
  <tj-radio v-model="radio" label="2">Option B</tj-radio>
</template>

<script>
  export default {
    data() {
      return {
        radio: '1',
      }
    },
  }
</script>
```

:::

### 無効化

ラジオを無効にするには `disabled` 属性を用います。

:::demo `disabled`属性を追加する必要があります。

```html
<template>
  <tj-radio disabled v-model="radio" label="disabled">Option A</tj-radio>
  <tj-radio disabled v-model="radio" label="selected and disabled"
    >Option B</tj-radio
  >
</template>

<script>
  export default {
    data() {
      return {
        radio: 'selected and disabled',
      }
    },
  }
</script>
```

:::

### ラジオボタングループ

相互に関連し、排他的なオプションから一つのボタンを選択するのに適しています。

:::demo `tj-radio-group` と `tj-radio` を組み合わせてラジオグループを表示する。tj-radio-group`要素の`v-model`を変数にバインドし、ラベルの値を`tj-radio`に設定する。また、現在の値をパラメータとした`change` イベントも提供する。

```html
<tj-radio-group v-model="radio">
  <tj-radio :label="3">Option A</tj-radio>
  <tj-radio :label="6">Option B</tj-radio>
  <tj-radio :label="9">Option C</tj-radio>
</tj-radio-group>

<script>
  export default {
    data() {
      return {
        radio: 3,
      }
    },
  }
</script>
```

:::

### ボタンスタイル

ボタンスタイルのラジオ。

:::demo `tj-radio` 要素を `tj-radio-button` 要素に変更すればよい。また、`size`属性も用意している。

```html
<template>
  <div>
    <tj-radio-group v-model="radio1">
      <tj-radio-button label="New York"></tj-radio-button>
      <tj-radio-button label="Washington"></tj-radio-button>
      <tj-radio-button label="Los Angeles"></tj-radio-button>
      <tj-radio-button label="Chicago"></tj-radio-button>
    </tj-radio-group>
  </div>
  <div style="margin-top: 20px">
    <tj-radio-group v-model="radio2" size="medium">
      <tj-radio-button label="New York"></tj-radio-button>
      <tj-radio-button label="Washington"></tj-radio-button>
      <tj-radio-button label="Los Angeles"></tj-radio-button>
      <tj-radio-button label="Chicago"></tj-radio-button>
    </tj-radio-group>
  </div>
  <div style="margin-top: 20px">
    <tj-radio-group v-model="radio3" size="small">
      <tj-radio-button label="New York"></tj-radio-button>
      <tj-radio-button label="Washington" disabled></tj-radio-button>
      <tj-radio-button label="Los Angeles"></tj-radio-button>
      <tj-radio-button label="Chicago"></tj-radio-button>
    </tj-radio-group>
  </div>
  <div style="margin-top: 20px">
    <tj-radio-group v-model="radio4" disabled size="mini">
      <tj-radio-button label="New York"></tj-radio-button>
      <tj-radio-button label="Washington"></tj-radio-button>
      <tj-radio-button label="Los Angeles"></tj-radio-button>
      <tj-radio-button label="Chicago"></tj-radio-button>
    </tj-radio-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        radio1: 'New York',
        radio2: 'New York',
        radio3: 'New York',
        radio4: 'New York',
      }
    },
  }
</script>
```

:::

### ボーダーを付ける

:::demo `border` 属性はラジオにボーダーをつけます。

```html
<template>
  <div>
    <tj-radio v-model="radio1" label="1" border>Option A</tj-radio>
    <tj-radio v-model="radio1" label="2" border>Option B</tj-radio>
  </div>
  <div style="margin-top: 20px">
    <tj-radio v-model="radio2" label="1" border size="medium"
      >Option A</tj-radio
    >
    <tj-radio v-model="radio2" label="2" border size="medium"
      >Option B</tj-radio
    >
  </div>
  <div style="margin-top: 20px">
    <tj-radio-group v-model="radio3" size="small">
      <tj-radio label="1" border>Option A</tj-radio>
      <tj-radio label="2" border disabled>Option B</tj-radio>
    </tj-radio-group>
  </div>
  <div style="margin-top: 20px">
    <tj-radio-group v-model="radio4" size="mini" disabled>
      <tj-radio label="1" border>Option A</tj-radio>
      <tj-radio label="2" border>Option B</tj-radio>
    </tj-radio-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        radio1: '1',
        radio2: '1',
        radio3: '1',
        radio4: '1',
      }
    },
  }
</script>
```

:::

### ラジオ属性

| Attribute       | Description                                         | Type                      | Accepted Values       | Default |
| --------------- | --------------------------------------------------- | ------------------------- | --------------------- | ------- |
| value / v-model | バインド値                                          | string / number / boolean | —                     | —       |
| label           | ラジオの値                                          | string / number / boolean | —                     | —       |
| disabled        | ラジオが無効になっているかどうか                    | boolean                   | —                     | false   |
| border          | ラジオの周りにボーダーを追加するかどうか            | boolean                   | —                     | false   |
| size            | ラジオのサイズ、`border` が真の場合のみ動作します。 | string                    | medium / small / mini | —       |
| name            | ネイティブ 'name' 属性                              | string                    | —                     | —       |

### ラジオイベント

| Event Name | Description                                  | Parameters                 |
| ---------- | -------------------------------------------- | -------------------------- |
| change     | バウンド値が変更された場合にトリガされます。 | 選択されたラジオのラベル値 |

### ラジオグループ属性

| Attribute       | Description                                        | Type                      | Accepted Values       | Default |
| --------------- | -------------------------------------------------- | ------------------------- | --------------------- | ------- |
| value / v-model | バインディング値                                   | string / number / boolean | —                     | —       |
| size            | ラジオボタンのボーダーもしくはラジオボタンの大きさ | string                    | medium / small / mini | —       |
| disabled        | ネストしたラジオが無効になっているかどうか         | boolean                   | —                     | false   |
| text-color      | ボタンがアクティブなときのフォント色               | string                    | —                     | #ffffff |
| fill            | ボタンがアクティブなときの境界線と背景色           | string                    | —                     | #409EFF |

### ラジオグループイベント

| Event Name | Description                                  | Parameters                 |
| ---------- | -------------------------------------------- | -------------------------- |
| change     | バウンド値が変更された場合にトリガされます。 | 選択されたラジオのラベル値 |

### ラジオボタン属性

| Attribute | Description            | Type            | Accepted Values | Default |
| --------- | ---------------------- | --------------- | --------------- | ------- |
| label     | ラジオの値             | string / number | —               | —       |
| disabled  | ラジオが無効かどうか   | boolean         | —               | false   |
| name      | ネイティブ 'name' 属性 | string          | —               | —       |
