## ページヘッダー

ページのパスがシンプルな場合は、パンくず(Breadcrumb)ではなく PageHeader を使用することをお勧めします。

### 基本

:::demo

```html
<tj-page-header @back="goBack" content="detail"> </tj-page-header>

<script>
  export default {
    methods: {
      goBack() {
        console.log('go back')
      },
    },
  }
</script>
```

:::

### 属性

| Attribute | Description    | Type   | Accepted Values | Default |
| --------- | -------------- | ------ | --------------- | ------- |
| title     | メインタイトル | string | —               | Back    |
| content   | 内容           | string | —               | —       |

### イベント

| Event Name | Description                  | Parameters |
| ---------- | ---------------------------- | ---------- |
| back       | 右側をクリックするとトリガー | —          |

### スロット

| slot    | Description |
| ------- | ----------- |
| title   | タイトル    |
| content | 内容        |
