## Card

Integrate information in a card container.

### Basic usage

Card includes title, content and operations.

:::demo Card is made up of `header` and `body`. `header` is optional, and its content distribution depends on a named slot.

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

### Simple card

The header part can be omitted.

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

### With images

Display richer content by adding some configs.

:::demo The `body-style` attribute defines CSS style of custom `body`. This example also uses `tj-col` for layout.

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

### Shadow

You can define when to show the card shadows

:::demo The `shadow` attribute determines when the card shadows are displayed. It can be `always`, `hover` or `never`.

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

| Attribute  | Description                                                   | Type   | Accepted Values        | Default             |
| ---------- | ------------------------------------------------------------- | ------ | ---------------------- | ------------------- |
| header     | title of the card. Also accepts a DOM passed by `slot#header` | string | —                      | —                   |
| body-style | CSS style of body                                             | object | —                      | { padding: '20px' } |
| shadow     | when to show card shadows                                     | string | always / hover / never | always              |
