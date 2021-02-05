## Breadcrumb(パンくず)

現在のページの位置を表示し、ブラウザバックを容易にします。

### 基本的な使い方

:::demo `tj-breadcrumb` では、`tj-breadcrumb-item` はホームページから始まる各レベルを表すタグである。このコンポーネントは `String` 属性 `separator` を持ち、セパレータを決定する。デフォルト値は'/'である。

```html
<tj-breadcrumb separator="/">
  <tj-breadcrumb-item :to="{ path: '/' }">homepage</tj-breadcrumb-item>
  <tj-breadcrumb-item><a href="/">promotion management</a></tj-breadcrumb-item>
  <tj-breadcrumb-item>promotion list</tj-breadcrumb-item>
  <tj-breadcrumb-item>promotion detail</tj-breadcrumb-item>
</tj-breadcrumb>
```

:::

### アイコンセパレータ

:::demo `separator-class` を `iconfont` をセパレータとして使用するように設定します．

```html
<tj-breadcrumb separator-class="tj-icon-arrow-right">
  <tj-breadcrumb-item :to="{ path: '/' }">homepage</tj-breadcrumb-item>
  <tj-breadcrumb-item>promotion management</tj-breadcrumb-item>
  <tj-breadcrumb-item>promotion list</tj-breadcrumb-item>
  <tj-breadcrumb-item>promotion detail</tj-breadcrumb-item>
</tj-breadcrumb>
```

:::

### Breadcrumb(パンくず)属性

| Attribute       | Description                  | Type   | Accepted Values | Default |
| --------------- | ---------------------------- | ------ | --------------- | ------- |
| separator       | セパレータ文字               | string | —               | /       |
| separator-class | アイコンセパレータのクラス名 | string | —               | -       |

### Breadcrumb(パンくず)項目属性

| Attribute | Description                                           | Type          | Accepted Values | Default |
| --------- | ----------------------------------------------------- | ------------- | --------------- | ------- |
| to        | リンクのターゲットルート、`vue-router` の `to` と同じ | string/object | —               | —       |
| replace   | `true` の場合、ナビゲーションは履歴を残しません。     | boolean       | —               | false   |
