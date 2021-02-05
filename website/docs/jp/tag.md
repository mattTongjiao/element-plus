## タグ

マーキングや選択に使用します。

### 基本的な使い方

:::demo タグの型を定義するには `type` 属性を用いる。さらに、`color` 属性を用いてタグの背景色を設定することもできる。

```html
<tj-tag>Tag 1</tj-tag>
<tj-tag type="success">Tag 2</tj-tag>
<tj-tag type="info">Tag 3</tj-tag>
<tj-tag type="warning">Tag 4</tj-tag>
<tj-tag type="danger">Tag 5</tj-tag>
```

:::

### 取り外し可能なタグ

:::demo `closable` 属性は取り外し可能なタグを定義するために用いることができる。これは `Boolean` を受け付けます。デフォルトでは、タグの削除にはフェージングアニメーションが付きます。アニメーションを使いたくない場合は、`disable-transitions` 属性に `Boolean` を指定して `true` に設定すればよい。`close` イベントはタグが削除されたときに発生する。

```html
<tj-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type">
  {{tag.name}}
</tj-tag>

<script>
  export default {
    data() {
      return {
        tags: [
          { name: 'Tag 1', type: '' },
          { name: 'Tag 2', type: 'success' },
          { name: 'Tag 3', type: 'info' },
          { name: 'Tag 4', type: 'warning' },
          { name: 'Tag 5', type: 'danger' },
        ],
      }
    },
  }
</script>
```

:::

### 動的に編集

タグを動的に追加したり削除したりするには、`close`イベントを利用することができる。

:::demo

```html
<tj-tag
  :key="tag"
  v-for="tag in dynamicTags"
  closable
  :disable-transitions="false"
  @close="handleClose(tag)"
>
  {{tag}}
</tj-tag>
<tj-input
  class="input-new-tag"
  v-if="inputVisible"
  v-model="inputValue"
  ref="saveTagInput"
  size="mini"
  @keyup.enter.native="handleInputConfirm"
  @blur="handleInputConfirm"
>
</tj-input>
<tj-button v-else class="button-new-tag" size="small" @click="showInput"
  >+ New Tag</tj-button
>

<style>
  .tj-tag + .tj-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>

<script>
  export default {
    data() {
      return {
        dynamicTags: ['Tag 1', 'Tag 2', 'Tag 3'],
        inputVisible: false,
        inputValue: '',
      }
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
      },

      showInput() {
        this.inputVisible = true
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus()
        })
      },

      handleInputConfirm() {
        let inputValue = this.inputValue
        if (inputValue) {
          this.dynamicTags.push(inputValue)
        }
        this.inputVisible = false
        this.inputValue = ''
      },
    },
  }
</script>
```

:::

### サイズ

デフォルトのサイズの他に、Tag コンポーネントには 3 つの追加サイズが用意されており、異なるシナリオの中から選択することができます。

:::demo 追加のサイズを `medium`, `small`, `mini` で設定するには、属性 `size` を使用します。

```html
<tj-tag>Default</tj-tag>
<tj-tag size="medium">Medium</tj-tag>
<tj-tag size="small">Small</tj-tag>
<tj-tag size="mini">Mini</tj-tag>
```

:::

### テーマ

タグは 3 つの異なるテーマを提供します: `dark`、`light`、`plain`です。

:::demo `effect` を使って変更する場合、デフォルトは `light` です。

```html
<div class="tag-group">
  <span class="tag-group__title">Dark</span>
  <tj-tag
    v-for="item in items"
    :key="item.label"
    :type="item.type"
    effect="dark"
  >
    {{ item.label }}
  </tj-tag>
</div>
<div class="tag-group">
  <span class="tag-group__title">Plain</span>
  <tj-tag
    v-for="item in items"
    :key="item.label"
    :type="item.type"
    effect="plain"
  >
    {{ item.label }}
  </tj-tag>
</div>

<script>
  export default {
    data() {
      return {
        items: [
          { type: '', label: 'Tag 1' },
          { type: 'success', label: 'Tag 2' },
          { type: 'info', label: 'Tag 3' },
          { type: 'danger', label: 'Tag 4' },
          { type: 'warning', label: 'Tag 5' },
        ],
      }
    },
  }
</script>
```

:::

### 属性

| Attribute           | Description                                | Type    | Accepted Values             | Default |
| ------------------- | ------------------------------------------ | ------- | --------------------------- | ------- |
| type                | コンポーネントタイプ                       | string  | success/info/warning/danger | —       |
| closable            | タグを削除できるかどうか                   | boolean | —                           | false   |
| disable-transitions | アニメーションを無効にするかどうか         | boolean | —                           | false   |
| hit                 | タグにハイライトされた境界線があるかどうか | boolean | —                           | false   |
| color               | タグの背景色                               | string  | —                           | —       |
| size                | タグサイズ                                 | string  | medium / small / mini       | —       |
| effect              | コンポーネントテーマ                       | string  | dark / light / plain        | light   |

### イベント

| Event Name | Description                                  | Parameters |
| ---------- | -------------------------------------------- | ---------- |
| click      | タグがクリックされたときにトリガーされます。 | —          |
| close      | タグが削除されたときにトリガーされます。     | —          |
