## レイアウト

24 カラムを基本レイアウトで、簡単、素早く作れます。

### ベーシックレイアウト

カラムを用いて、ベーシックグリッドレイアウトを作ります。

:::demo `row` と `col` を使えば、`span` 属性を使って簡単にレイアウトを操作することができます。

```html
<tj-row>
  <tj-col :span="24"><div class="grid-content bg-purple-dark"></div></tj-col>
</tj-row>
<tj-row>
  <tj-col :span="12"><div class="grid-content bg-purple"></div></tj-col>
  <tj-col :span="12"><div class="grid-content bg-purple-light"></div></tj-col>
</tj-row>
<tj-row>
  <tj-col :span="8"><div class="grid-content bg-purple"></div></tj-col>
  <tj-col :span="8"><div class="grid-content bg-purple-light"></div></tj-col>
  <tj-col :span="8"><div class="grid-content bg-purple"></div></tj-col>
</tj-row>
<tj-row>
  <tj-col :span="6"><div class="grid-content bg-purple"></div></tj-col>
  <tj-col :span="6"><div class="grid-content bg-purple-light"></div></tj-col>
  <tj-col :span="6"><div class="grid-content bg-purple"></div></tj-col>
  <tj-col :span="6"><div class="grid-content bg-purple-light"></div></tj-col>
</tj-row>
<tj-row>
  <tj-col :span="4"><div class="grid-content bg-purple"></div></tj-col>
  <tj-col :span="4"><div class="grid-content bg-purple-light"></div></tj-col>
  <tj-col :span="4"><div class="grid-content bg-purple"></div></tj-col>
  <tj-col :span="4"><div class="grid-content bg-purple-light"></div></tj-col>
  <tj-col :span="4"><div class="grid-content bg-purple"></div></tj-col>
  <tj-col :span="4"><div class="grid-content bg-purple-light"></div></tj-col>
</tj-row>

<style>
  .tj-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .tj-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```

:::

### カラム間隔

カラム間隔もサポートされてます。

:::demo 行にはカラム間の間隔を指定するための `gutter` 属性があり、デフォルト値は 0 です。

```html
<tj-row :gutter="20">
  <tj-col :span="6"><div class="grid-content bg-purple"></div></tj-col>
  <tj-col :span="6"><div class="grid-content bg-purple"></div></tj-col>
  <tj-col :span="6"><div class="grid-content bg-purple"></div></tj-col>
  <tj-col :span="6"><div class="grid-content bg-purple"></div></tj-col>
</tj-row>

<style>
  .tj-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .tj-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```

:::

### ハイブリッドレイアウト

基本の 1/24 カラムを組み合わせて、より複雑なハイブリッドレイアウトを形成できます。

:::demo

```html
<tj-row :gutter="20">
  <tj-col :span="16"><div class="grid-content bg-purple"></div></tj-col>
  <tj-col :span="8"><div class="grid-content bg-purple"></div></tj-col>
</tj-row>
<tj-row :gutter="20">
  <tj-col :span="8"><div class="grid-content bg-purple"></div></tj-col>
  <tj-col :span="8"><div class="grid-content bg-purple"></div></tj-col>
  <tj-col :span="4"><div class="grid-content bg-purple"></div></tj-col>
  <tj-col :span="4"><div class="grid-content bg-purple"></div></tj-col>
</tj-row>
<tj-row :gutter="20">
  <tj-col :span="4"><div class="grid-content bg-purple"></div></tj-col>
  <tj-col :span="16"><div class="grid-content bg-purple"></div></tj-col>
  <tj-col :span="4"><div class="grid-content bg-purple"></div></tj-col>
</tj-row>

<style>
  .tj-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .tj-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```

:::

### カラムオフセット

オフセットを指定することができます。

:::demo Col の`offset`属性の値を設定することで、カラムのオフセット数を指定することができます。

```html
<tj-row :gutter="20">
  <tj-col :span="6"><div class="grid-content bg-purple"></div></tj-col>
  <tj-col :span="6" :offset="6"
    ><div class="grid-content bg-purple"></div
  ></tj-col>
</tj-row>
<tj-row :gutter="20">
  <tj-col :span="6" :offset="6"
    ><div class="grid-content bg-purple"></div
  ></tj-col>
  <tj-col :span="6" :offset="6"
    ><div class="grid-content bg-purple"></div
  ></tj-col>
</tj-row>
<tj-row :gutter="20">
  <tj-col :span="12" :offset="6"
    ><div class="grid-content bg-purple"></div
  ></tj-col>
</tj-row>

<style>
  .tj-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .tj-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```

:::

### 配置

フレックスレイアウトを使用して、列の配置を柔軟に行うことができます。

:::demo `type` 属性に `flex` を設定することでフレックスレイアウトを有効にし、`justify` 属性に start, center, end, space-between, space-around を設定することで子要素のレイアウトを定義することができます。

```html
<tj-row type="flex" class="row-bg">
  <tj-col :span="6"><div class="grid-content bg-purple"></div></tj-col>
  <tj-col :span="6"><div class="grid-content bg-purple-light"></div></tj-col>
  <tj-col :span="6"><div class="grid-content bg-purple"></div></tj-col>
</tj-row>
<tj-row type="flex" class="row-bg" justify="center">
  <tj-col :span="6"><div class="grid-content bg-purple"></div></tj-col>
  <tj-col :span="6"><div class="grid-content bg-purple-light"></div></tj-col>
  <tj-col :span="6"><div class="grid-content bg-purple"></div></tj-col>
</tj-row>
<tj-row type="flex" class="row-bg" justify="end">
  <tj-col :span="6"><div class="grid-content bg-purple"></div></tj-col>
  <tj-col :span="6"><div class="grid-content bg-purple-light"></div></tj-col>
  <tj-col :span="6"><div class="grid-content bg-purple"></div></tj-col>
</tj-row>
<tj-row type="flex" class="row-bg" justify="space-between">
  <tj-col :span="6"><div class="grid-content bg-purple"></div></tj-col>
  <tj-col :span="6"><div class="grid-content bg-purple-light"></div></tj-col>
  <tj-col :span="6"><div class="grid-content bg-purple"></div></tj-col>
</tj-row>
<tj-row type="flex" class="row-bg" justify="space-around">
  <tj-col :span="6"><div class="grid-content bg-purple"></div></tj-col>
  <tj-col :span="6"><div class="grid-content bg-purple-light"></div></tj-col>
  <tj-col :span="6"><div class="grid-content bg-purple"></div></tj-col>
</tj-row>

<style>
  .tj-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .tj-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```

:::

### レスポンシブレイアウト

Bootstrap のレスポンシブデザインを例にとると、xs, sm, md, lg, xl の 5 つのブレイクポイントがプリセットされています。

:::demo

```html
<tj-row :gutter="10">
  <tj-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
    ><div class="grid-content bg-purple"></div
  ></tj-col>
  <tj-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
    ><div class="grid-content bg-purple-light"></div
  ></tj-col>
  <tj-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
    ><div class="grid-content bg-purple"></div
  ></tj-col>
  <tj-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
    ><div class="grid-content bg-purple-light"></div
  ></tj-col>
</tj-row>

<style>
  .tj-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
```

:::

### 要素を隠すためのユーティリティクラス

さらに、Tongjiao UI は、特定の条件下で要素を隠すための一連のクラスを提供します。これらのクラスは、任意の DOM 要素やカスタムコンポーネントに追加することができます。これらのクラスを使用するには、以下の CSS ファイルをインポートする必要があります。

```js
import 'tongjiaoui-plus/lib/theme-chalk/display.css'
```

クラス:

- `hidden-xs-only` - xs ビューポートのとき、非表示にする
- `hidden-sm-only` - sm ビューポートのとき、非表示にする
- `hidden-sm-and-down` - sm ビューポート以下のとき、非表示にする
- `hidden-sm-and-up` - sm ビューポート以上のとき、非表示にする
- `hidden-md-only` - md ビューポートのとき、非表示にする
- `hidden-md-and-down` - md ビューポート以下のとき、非表示にする
- `hidden-md-and-up` - md ビューポート以上のとき、非表示にする
- `hidden-lg-only` - lg ビューポートのとき、非表示にする
- `hidden-lg-and-down` - lg ビューポート以下のとき、非表示にする
- `hidden-lg-and-up` - lg ビューポート以上のとき、非表示にする
- `hidden-xl-only` - xl ビューポートのとき、非表示にする

### 行属性

| Attribute | Description                                                                          | Type   | Accepted Values                             | Default |
| --------- | ------------------------------------------------------------------------------------ | ------ | ------------------------------------------- | ------- |
| gutter    | グリッド間隔                                                                         | number | —                                           | 0       |
| type      | レイアウトモード、フレックスを使用することができます、モダンなブラウザで動作します。 | string | —                                           | —       |
| justify   | フレックスレイアウトの水平配置                                                       | string | start/end/center/space-around/space-between | start   |
| align     | フレックスレイアウトの垂直配置                                                       | string | top/middle/bottom                           | top     |
| tag       | カスタムエレメントタグ                                                               | string | \*                                          | div     |

### 列属性

| Attribute | Description                                         | Type                                      | Accepted Values | Default |
| --------- | --------------------------------------------------- | ----------------------------------------- | --------------- | ------- |
| span      | グリッドスパンの列数                                | number                                    | —               | 24      |
| offset    | 左辺のグリッドのスペースの数                        | number                                    | —               | 0       |
| push      | グリッドが右に移動する列数                          | number                                    | —               | 0       |
| pull      | グリッドが左に移動する列数                          | number                                    | —               | 0       |
| xs        | `<768px` レスポンシブ列または列 props オブジェクト  | number/object (e.g. {span: 4, offset: 4}) | —               | —       |
| sm        | `≥768px` レスポンシブ列または列 props オブジェクト  | number/object (e.g. {span: 4, offset: 4}) | —               | —       |
| md        | `≥992px` レスポンシブ列または列 props オブジェクト  | number/object (e.g. {span: 4, offset: 4}) | —               | —       |
| lg        | `≥1200px` レスポンシブ列または列 props オブジェクト | number/object (e.g. {span: 4, offset: 4}) | —               | —       |
| xl        | `≥1920px` レスポンシブ列または列 props オブジェクト | number/object (e.g. {span: 4, offset: 4}) | —               | —       |
| tag       | カスタムエレメントタグ                              | string                                    | \*              | div     |
