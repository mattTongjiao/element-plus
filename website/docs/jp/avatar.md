## Avator

avator は、人やオブジェクトを表現するために使用することができます。画像、アイコン、文字をサポートしています。

### 基本

avator の形状とサイズを設定するために `shape` と `size` プロップを使う

:::demo

```html
<template>
  <tj-row class="demo-avatar demo-basic">
    <tj-col :span="12">
      <div class="sub-title">circle</div>
      <div class="demo-basic--circle">
        <div class="block">
          <tj-avatar :size="50" :src="circleUrl"></tj-avatar>
        </div>
        <div class="block" v-for="size in sizeList" :key="size">
          <tj-avatar :size="size" :src="circleUrl"></tj-avatar>
        </div>
      </div>
    </tj-col>
    <tj-col :span="12">
      <div class="sub-title">square</div>
      <div class="demo-basic--circle">
        <div class="block">
          <tj-avatar shape="square" :size="50" :src="squareUrl"></tj-avatar>
        </div>
        <div class="block" v-for="size in sizeList" :key="size">
          <tj-avatar shape="square" :size="size" :src="squareUrl"></tj-avatar>
        </div>
      </div>
    </tj-col>
  </tj-row>
</template>
<script>
  export default {
    data() {
      return {
        circleUrl:
          'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        squareUrl:
          'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
        sizeList: ['large', 'medium', 'small'],
      }
    },
  }
</script>
```

:::

### タイプ

イメージ、アイコン、文字をサポートしています。

:::demo

```html
<template>
  <div class="demo-type">
    <div>
      <tj-avatar icon="tj-icon-user-solid"></tj-avatar>
    </div>
    <div>
      <tj-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></tj-avatar>
    </div>
    <div>
      <tj-avatar> user </tj-avatar>
    </div>
  </div>
</template>
```

:::

### イメージ読み込みエラー時のフォールバック

イメージ読み込みエラー時のフォールバック

:::demo

```html
<template>
  <div class="demo-type">
    <tj-avatar :size="60" src="https://empty" @error="errorHandler">
      <img
        src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
      />
    </tj-avatar>
  </div>
</template>
<script>
  export default {
    methods: {
      errorHandler() {
        return true
      },
    },
  }
</script>
```

:::

### イメージがそのコンテナにどのようにフィットするか

[object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)と同様に、イメージ avator のコンテナに画像がどのようにフィットするかを設定します。

:::demo

```html
<template>
  <div class="demo-fit">
    <div class="block" v-for="fit in fits" :key="fit">
      <span class="title">{{ fit }}</span>
      <tj-avatar shape="square" :size="100" :fit="fit" :src="url"></tj-avatar>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url:
          'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      }
    },
  }
</script>
```

:::

### 属性

| Attribute | Description                                                                                                   | Type          | Accepted Values                            | Default |
| --------- | ------------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------ | ------- |
| icon      | 表現タイプを Icon に設定します。詳細はアイコンコンポーネントを確認してください。                              | string        |                                            |         |
| size      | avator サイズを設定する                                                                                       | number/string | number / large / medium / small            | large   |
| shape     | セット avator の形を設定する                                                                                  | string        | circle / square                            | circle  |
| src       | 画像 avator 用の画像アドレス                                                                                  | string        |                                            |         |
| srcSet    | ユーザーエージェントが使用する可能性のある画像ソースのセットを示すコンマで区切られた 1 つ以上の文字列のリスト | string        |                                            |         |
| alt       | この属性は画像の代替テキストの説明を定義します。                                                              | string        |                                            |         |
| fit       | 画像 avator のコンテナに画像がどのようにフィットするかを設定します。                                          | string        | fill / contain / cover / none / scale-down | cover   |

### イベント

| Event Name | Description                                                                                   | Parameters |
| ---------- | --------------------------------------------------------------------------------------------- | ---------- |
| error      | img のロードエラー時のハンドラ、デフォルトのフォールバック動作を防ぐために false を返します。 | (e: Event) |

### スロット

| Slot Name | Description |
| default | avator の内容をカスタマイズ |
