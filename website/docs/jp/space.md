## Space (Translation needed)

Even though we have [Divider](#/en-US/component/divider), but sometimes we need more than one [Divider](#/en-US/component/divider) to split the elements apart, so we stack each elements upon [Divider](#/en-US/component/divider), but doing so not only makes our code ugly but also makes it difficult to maintain. **Space** is this kind of component provides us both productivity and elegance.

### Basic usage

The basic use case is using this component to provide unified space between each components

:::demo Using Space to provide space

```html
<template>
  <tj-space wrap>
    <tj-card class="box-card" style="width: 250px" v-for="i in 3" :key="i">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <tj-button class="button" type="text">Operation button</tj-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </tj-card>
  </tj-space>
</template>
```

:::

### Vertical layout

Using `direction` attribute to control the layout, we use `flex-direction` to implement this.

:::demo We also provide vertical layout.

```html
<template>
  <tj-space direction="vertical">
    <tj-card class="box-card" style="width: 250px" v-for="i in 2" :key="i">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <tj-button class="button" type="text">Operation button</tj-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </tj-card>
  </tj-space>
</template>
```

:::

### Control the size of the space

Control the space size via `size` API.

You can set the size with built-in sizes `mini`, `small`, `medium`, `large`, these size coresponds to `4px`, `8px`, `12px`, `16px`. The default size is `small`, A.K.A. `8px`

You can also using customized size to override it. Refer to the next part.

:::demo

```html
<template>
  <tj-space direction="vertical" alignment="start" :size="30">
    <tj-radio-group v-model="size">
      <tj-radio :label="'mini'">mini</tj-radio>
      <tj-radio :label="'small'">small</tj-radio>
      <tj-radio :label="'medium'">medium</tj-radio>
      <tj-radio :label="'large'">large</tj-radio>
    </tj-radio-group>

    <tj-space wrap :size="size">
      <tj-card class="box-card" style="width: 250px" v-for="i in 3" :key="i">
        <template #header>
          <div class="card-header">
            <span>Card name</span>
            <tj-button class="button" type="text">Operation button</tj-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">
          {{ 'List item ' + o }}
        </div>
      </tj-card>
    </tj-space>
  </tj-space>
</template>

<script>
  export default {
    data() {
      return {
        size: 'mini',
      }
    },
  }
</script>
```

:::

### Customized Size

Sometimes built-in sizes could not meet the business needs, we can use custom size (number type) to control the space between items.

:::demo

```html
<template>
  <tj-slider v-model="size" />
  <tj-space wrap :size="size">
    <tj-card class="box-card" style="width: 250px" v-for="i in 2" :key="i">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <tj-button class="button" type="text">Operation button</tj-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </tj-card>
  </tj-space>
</template>

<script>
  export default {
    data() {
      return {
        size: 20,
      }
    },
  }
</script>
```

:::

:::tip
Do not use `TjSpace` with components that depend on ancestor width (height), e.g. `TjSlider`, in this case when you drag the trigger button the bar will grow which causes misplacement between cursor and trigger button.
:::

### Auto wrapping

When in **horizontal** mode, using `wrap` (**bool type**) to control auto wrapping behavior.

:::demo Using `wrap` to control line wrap

```html
<tj-space wrap>
  <div v-for="i in 20" :key="i">
    <tj-button type="text">
      Text button
    </tj-button>
  </div>
</tj-space>
```

:::

### Spacer

Sometimes we want something more than blank space, so we have (spacer) to help us.

#### Literal type spacer

:::demo

```html
<template>
  <tj-space :size="size" spacer="|">
    <div v-for="i in 2" :key="i">
      <tj-button>
        button {{ i }}
      </tj-button>
    </div>
  </tj-space>
</template>

<script>
  export default {
    data() {
      return {
        size: 10,
      }
    },
  }
</script>
```

:::

#### Spacer can also be VNode

:::demo

```html
<template>
  <tj-space :size="size" :spacer="spacer">
    <div v-for="i in 2" :key="i">
      <tj-button>
        button {{ i }}
      </tj-button>
    </div>
  </tj-space>
</template>

<script>
  import { h, resolveComponent } from 'vue'
  import { TjDivider } from 'element-plus'
  export default {
    data() {
      return {
        size: 10,
        spacer: h(TjDivider, { direction: 'vertical' }),
      }
    },
  }
</script>
```

:::

### Alignment

Setting this attribute can adjust the alignment of child nodes, the desirable value can be found at [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items).

:::demo Using `alignment`

```html
<template>
  <div
    style="width: 240px;margin-bottom: 20px;padding: 8px;border: 1px solid #ccc;"
  >
    <tj-space>
      string
      <tj-button>
        button
      </tj-button>
      <tj-card>
        <template #header>
          header
        </template>
        body
      </tj-card>
    </tj-space>
  </div>
  <div
    style="width: 240px;margin-bottom: 20px;padding: 8px;border: 1px solid #ccc;"
  >
    <tj-space alignment="flex-start">
      string
      <tj-button>
        button
      </tj-button>
      <tj-card>
        <template #header>
          header
        </template>
        body
      </tj-card>
    </tj-space>
  </div>
  <div
    style="width: 240px;margin-bottom: 20px;padding: 8px;border: 1px solid #ccc;"
  >
    <tj-space alignment="flex-end">
      string
      <tj-button>
        button
      </tj-button>
      <tj-card>
        <template #header>
          header
        </template>
        body
      </tj-card>
    </tj-space>
  </div>
</template>
```

:::

### Space Attributes

| Attribute | Description                     | Type                                      | Available value                                                             | Defaults   |
| --------- | ------------------------------- | ----------------------------------------- | --------------------------------------------------------------------------- | ---------- |
| alignment | Controls the alignment of items | string                                    | [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) | 'center'   |
| class     | Classname                       | string / Array<Object \| String> / Object | -                                                                           | -          |
| direction | Placement direction             | string                                    | vertical/horizontal                                                         | horizontal |
| prefixCls | Prefix for space-items          | string                                    | tj-space                                                                    | -          |
| style     | Extra style rules               | string / Array<Object \| String> / Object | -                                                                           | -          |
| spacer    | Spacer                          | string / number / VNode                   | -                                                                           | -          |
| size      | Spacing size                    | string / number / [number, number]        | -                                                                           | 'small'    |
| wrap      | Auto wrapping                   | boolean                                   | true / false                                                                | false      |

### Space Slot

| name    | description        |
| ------- | ------------------ |
| default | Items to be spaced |
