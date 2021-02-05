## Popconfirm

要素のクリック操作の簡単な確認ダイアログです。

### 基本的な使い方

popconfirm は ポップオーバー と似ています。そのため、重複する属性については ポップオーバー のドキュメントを参照してください。

:::demo popconfirm では `title` 属性のみが利用可能で、`content` 属性は無視されます。

```html
<template>
  <tj-popconfirm title="Are you sure to delete this?">
    <template #reference>
      <tj-button>Delete</tj-button>
    </template>
  </tj-popconfirm>
</template>
```

:::

### カスタマイズ

popconfirm は以下のようにカスタマイズすることができます。:
:::demo

```html
<template>
  <tj-popconfirm
    confirmButtonText="OK"
    cancelButtonText="No, Thanks"
    icon="tj-icon-info"
    iconColor="red"
    title="Are you sure to delete this?"
  >
    <template #reference>
      <tj-button>Delete</tj-button>
    </template>
  </tj-popconfirm>
</template>
```

:::

### 属性

| Attribute         | Description                | Type    | Accepted Values | Default          |
| ----------------- | -------------------------- | ------- | --------------- | ---------------- |
| title             | タイトル                   | String  | —               | —                |
| confirmButtonText | 確認ボタンのテキスト       | String  | —               | —                |
| cancelButtonText  | キャンセルボタンのテキスト | String  | —               | —                |
| confirmButtonType | 確認ボタンの種類           | String  | —               | Primary          |
| cancelButtonType  | キャンセルボタンの種類     | String  | —               | Text             |
| icon              | アイコン                   | String  | —               | tj-icon-question |
| iconColor         | アイコンカラー             | String  | —               | #f90             |
| hideIcon          | アイコンを隠すか           | Boolean | —               | false            |

### スロット

| Name      | Description                           |
| --------- | ------------------------------------- |
| reference | Popconfirm をトリガーとする HTML 要素 |

### イベント

| Event Name | Description                                  | Parameters |
| ---------- | -------------------------------------------- | ---------- |
| onConfirm  | 確認ボタンをクリックするときのトリガー       | —          |
| onCancel   | キャンセルボタンをクリックするときのトリガー | —          |
