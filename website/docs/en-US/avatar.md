## Avatar avatar

Avatars can be used to represent people or objects. It supports images, Icons, or characters.

### Basic

use `shape` and `size` prop to set avatar's shape and size

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

### Types

It supports images, Icons, or characters

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

### Fallback when image load error

fallback when image load error

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

### How the image fit its container

Set how the image fit its container for an image avatar, same as [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit).

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

### Attributes

| Attribute | Description                                                                                                            | Type          | Accepted Values                            | Default |
| --------- | ---------------------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------ | ------- |
| icon      | set representation type to Icon, more info on Icon Component                                                           | string        |                                            |         |
| size      | set avatar size                                                                                                        | number/string | number / large / medium / small            | large   |
| shape     | set avatar shape                                                                                                       | string        | circle / square                            | circle  |
| src       | the address of the image for an image avatar                                                                           | string        |                                            |         |
| srcSet    | A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use | string        |                                            |         |
| alt       | This attribute defines an alternative text description of the image                                                    | string        |                                            |         |
| fit       | set how the image fit its container for an image avatar                                                                | string        | fill / contain / cover / none / scale-down | cover   |

### Events

| Event Name | Description                                                                    | Parameters |
| ---------- | ------------------------------------------------------------------------------ | ---------- |
| error      | handler when img load error, return false to prevent default fallback behavior | (e: Event) |

### Slot

| Slot Name | Description |
| default | customize avatar content |
