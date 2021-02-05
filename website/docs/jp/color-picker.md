## Color-picker

color-picker は、複数のカラーフォーマットに対応したカラーセレクターです。

### 基本的な使い方

:::demo color-picker は、v-model にバインドするために文字列型の変数が必要です。

```html
<div class="block">
  <span class="demonstration">With default value</span>
  <tj-color-picker v-model="color1"></tj-color-picker>
</div>
<div class="block">
  <span class="demonstration">With no default value</span>
  <tj-color-picker v-model="color2"></tj-color-picker>
</div>

<script>
  export default {
    data() {
      return {
        color1: '#409EFF',
        color2: null,
      }
    },
  }
</script>
```

:::

### アルファ

:::demo color-picker はアルファチャンネルの選択をサポートしています。アルファチャンネルの選択を有効にするには、`show-alpha` アトリビュートを追加するだけです。

```html
<tj-color-picker v-model="color" show-alpha></tj-color-picker>

<script>
  export default {
    data() {
      return {
        color: 'rgba(19, 206, 102, 0.8)',
      }
    },
  }
</script>
```

:::

### 定義済みの色

:::demo color-picker は事前定義されたカラーオプションをサポートしています。

```html
<tj-color-picker v-model="color" show-alpha :predefine="predefineColors">
</tj-color-picker>

<script>
  export default {
    data() {
      return {
        color: 'rgba(255, 69, 0, 0.68)',
        predefineColors: [
          '#ff4500',
          '#ff8c00',
          '#ffd700',
          '#90ee90',
          '#00ced1',
          '#1e90ff',
          '#c71585',
          'rgba(255, 69, 0, 0.68)',
          'rgb(255, 120, 0)',
          'hsv(51, 100, 98)',
          'hsva(120, 40, 94, 0.5)',
          'hsl(181, 100%, 37%)',
          'hsla(209, 100%, 56%, 0.73)',
          '#c7158577',
        ],
      }
    },
  }
</script>
```

:::

### サイズ

:::demo

```html
<tj-color-picker v-model="color"></tj-color-picker>
<tj-color-picker v-model="color" size="medium"></tj-color-picker>
<tj-color-picker v-model="color" size="small"></tj-color-picker>
<tj-color-picker v-model="color" size="mini"></tj-color-picker>

<script>
  export default {
    data() {
      return {
        color: '#409EFF',
      }
    },
  }
</script>
```

:::

### 属性

| Attribute       | Description                                     | Type    | Accepted Values       | Default                                                       |
| --------------- | ----------------------------------------------- | ------- | --------------------- | ------------------------------------------------------------- |
| value / v-model | バインディング値                                | string  | —                     | —                                                             |
| disabled        | color-picker を無効にするかどうか               | boolean | —                     | false                                                         |
| size            | color-picker のサイズ                           | string  | —                     | medium / small / mini                                         |
| show-alpha      | アルファスライダーを表示するかどうか            | boolean | —                     | false                                                         |
| color-format    | v-model の色形式                                | string  | hsl / hsv / hex / rgb | hex (when show-alpha is false)/ rgb (when show-alpha is true) |
| popper-class    | color-picker のドロップダウンのカスタムクラス名 | string  | —                     | —                                                             |
| predefine       | 定義済みカラーオプション                        | array   | —                     | —                                                             |

### イベント

| Event Name    | Description                                          | Parameters         |
| ------------- | ---------------------------------------------------- | ------------------ |
| change        | 入力値変更時のトリガ                                 | color value        |
| active-change | 現在アクティブな色が変更されたときにトリガされます。 | active color value |
