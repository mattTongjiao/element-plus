## Card

card コンテナに情報を統合する

### 基本的な使い方

card はタイトル、内容、操作を含む。

:::demo card は `header` と `body` からなる。ヘッダはオプションであり、その内容の分布はスロットの名前に依存します。

```html
<tj-card class="box-card">
  <template #header>
    <div class="card-header">
      <span>Card name</span>
      <tj-button class="button" type="text">Operation button</tj-button>
    </div>
  </template>
  <div v-for="o in 4" :key="o" class="text item">
    {{'List item ' + o }}
  </div>
</tj-card>

<style>
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .box-card {
    width: 480px;
  }
</style>
```

:::

### シンプルな card

ヘッダー部分は省略可能です。

:::demo

```html
<tj-card class="box-card">
  <div v-for="o in 4" :key="o" class="text item">
    {{'List item ' + o }}
  </div>
</tj-card>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
</style>
```

:::

### 画像付き

設定を追加することで、よりリッチなコンテンツを表示することができます。

:::demo `body-style` 属性は、カスタム `body` の CSS スタイルを定義します。この例ではレイアウトにも `tj-col` を用いています。

```html
<tj-row>
  <tj-col
    :span="8"
    v-for="(o, index) in 2"
    :key="o"
    :offset="index > 0 ? 2 : 0"
  >
    <tj-card :body-style="{ padding: '0px' }">
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        class="image"
      />
      <div style="padding: 14px;">
        <span>Yummy hamburger</span>
        <div class="bottom">
          <time class="time">{{ currentDate }}</time>
          <tj-button type="text" class="button">Operating</tj-button>
        </div>
      </div>
    </tj-card>
  </tj-col>
</tj-row>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .button {
    padding: 0;
    min-height: auto;
  }

  .image {
    width: 100%;
    display: block;
  }
</style>

<script>
  export default {
    data() {
      return {
        currentDate: new Date(),
      }
    },
  }
</script>
```

:::

### シャドウ

card のシャドウを表示するタイミングを定義することができます。

:::demo `shadow` 属性は、card の影をいつ表示するかを決定します。`always`, `hover`, `never` のいずれかです。

```html
<tj-row :gutter="12">
  <tj-col :span="8">
    <tj-card shadow="always">
      Always
    </tj-card>
  </tj-col>
  <tj-col :span="8">
    <tj-card shadow="hover">
      Hover
    </tj-card>
  </tj-col>
  <tj-col :span="8">
    <tj-card shadow="never">
      Never
    </tj-card>
  </tj-col>
</tj-row>
```

:::

### Attributes

| Attribute  | Description                                                              | Type   | Accepted Values        | Default             |
| ---------- | ------------------------------------------------------------------------ | ------ | ---------------------- | ------------------- |
| header     | card のタイトルを指定します。`slot#header` で渡された DOM も受け付ける。 | string | —                      | —                   |
| body-style | ボディの CSS スタイル                                                    | object | —                      | { padding: '20px' } |
| shadow     | card の影を表示するタイミング                                            | string | always / hover / never | always              |
