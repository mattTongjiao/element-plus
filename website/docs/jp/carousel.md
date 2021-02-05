## Carousel(カルーセル)

限られたスペースに一連の画像やテキストをループさせる

### 基本的な使い方

:::demo `tj-carousel` と `tj-carousel-item` を組み合わせれば、carousel ができあがります。各スライドの内容は完全にカスタマイズ可能で、`tj-carousel-item`タグの中に配置するだけです。デフォルトでは、マウスがインジケータの上にカーソルを置くと carousel が切り替わります。`trigger`を`click`に設定すると、インジケータがクリックされたときだけ carousel が切り替わります。

```html
<template>
  <div class="block">
    <span class="demonstration"
      >Switch when indicator is hovered (default)</span
    >
    <tj-carousel height="150px">
      <tj-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </tj-carousel-item>
    </tj-carousel>
  </div>
  <div class="block">
    <span class="demonstration">Switch when indicator is clicked</span>
    <tj-carousel trigger="click" height="150px">
      <tj-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </tj-carousel-item>
    </tj-carousel>
  </div>
</template>

<style>
  .tj-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .tj-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .tj-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
</style>
```

:::

### インジケータ

インジケータは carousel の外側に表示することができます。

:::demo `indicator-position` 属性はインジケータの位置を決定します。デフォルトでは carousel の内側にあり、`indicator-position` を `outside` に設定すると外側に移動し、`indicator-position` を `none` に設定するとインジケータは非表示になります。

```html
<template>
  <tj-carousel indicator-position="outside">
    <tj-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </tj-carousel-item>
  </tj-carousel>
</template>

<style>
  .tj-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .tj-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .tj-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
</style>
```

:::

### 矢印

矢印が表示されるタイミングを定義することができます。

:::demo `arrow` 属性は、いつ矢印が表示されるかを決定します。デフォルトでは、マウスが carousel の上にカーソルを置いたときに表示されます。`arrow` を `always` または `never` に設定すると、矢印を恒久的に表示/非表示にすることができます。

```html
<template>
  <tj-carousel :interval="5000" arrow="always">
    <tj-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </tj-carousel-item>
  </tj-carousel>
</template>

<style>
  .tj-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .tj-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .tj-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
</style>
```

:::

### カードモード

ページが十分に広くても高さが限られている場合、carousel のカードモードを有効にすることができます。

:::demo `type` を `card` にするとカードモードになります。見た目とは別に、カードモードと共通モードの最大の違いは、両側のスライドをクリックすると carousel が直接カードモードに切り替わることです。

```html
<template>
  <tj-carousel :interval="4000" type="card" height="200px">
    <tj-carousel-item v-for="item in 6" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </tj-carousel-item>
  </tj-carousel>
</template>

<style>
  .tj-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .tj-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .tj-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
</style>
```

:::

デフォルトでは `direction` は `horizontal` である。`direction` を `vertical` に設定することで、carousel を垂直方向に表示させることができる。

:::demo

```html
<template>
  <tj-carousel height="200px" direction="vertical" :autoplay="false">
    <tj-carousel-item v-for="item in 4" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </tj-carousel-item>
  </tj-carousel>
</template>

<style>
  .tj-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .tj-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .tj-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
</style>
```

:::

### carousel 属性

| Attribute          | Description                                        | Type    | Accepted Values     | Default    |
| ------------------ | -------------------------------------------------- | ------- | ------------------- | ---------- |
| height             | carousel の高さ                                    | string  | —                   | —          |
| initial-index      | アクティブになったスライドのインデックス(0 始まり) | number  | —                   | 0          |
| trigger            | インディケータの発動方法                           | string  | hover/click         | hover      |
| autoplay           | スライドを自動的にループさせるかどうか             | boolean | —                   | true       |
| interval           | 自動ループの間隔 (ミリ秒単位)                      | number  | —                   | 3000       |
| indicator-position | インディケータの位置                               | string  | outside/none        | —          |
| arrow              | 矢印が表示されている場合                           | string  | always/hover/never  | hover      |
| type               | carousel のタイプ                                  | string  | card                | —          |
| loop               | ループ表示                                         | boolean | -                   | true       |
| direction          | 表示方向                                           | string  | horizontal/vertical | horizontal |

### carousel イベント

| Event Name | Description                                              | Parameters                                                   |
| ---------- | -------------------------------------------------------- | ------------------------------------------------------------ |
| change     | アクティブなスライドが切り替わったときにトリガされます。 | index of the new active slide, index of the old active slide |

### carousel メソッド

| Method        | Description                | Parameters                                                                                               |
| ------------- | -------------------------- | -------------------------------------------------------------------------------------------------------- |
| setActiveItem | 手動でスライドを切り替える | index of the slide to be switched to, starting from 0; or the `name` of corresponding `tj-carousel-item` |
| prev          | 前のスライドに切り替える   | —                                                                                                        |
| next          | 次のスライドに移る         | —                                                                                                        |

### carousel-アイテム属性

| Attribute | Description                                         | Type   | Accepted Values | Default |
| --------- | --------------------------------------------------- | ------ | --------------- | ------- |
| name      | アイテムの名前は `setActiveItem` で使われています。 | string | —               | —       |
| label     | 対応するインジケータのテキスト内容                  | string | —               | —       |
