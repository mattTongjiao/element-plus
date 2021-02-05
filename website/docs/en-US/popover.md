## Popover

### Basic usage

Similar to Tooltip, Popover is also built with `Vue-popper`. So for some duplicated attributes, please refer to the documentation of Tooltip.

:::demo The `trigger` attribute is used to define how popover is triggered: `hover`, `click`, `focus` or `manual`. As for the triggering element, you can write it in two different ways: use the `#reference` named slot, or use the `v-popover` directive and set it to Popover's `ref`.

```html
<template>
  <tj-popover
    placement="top-start"
    title="Title"
    :width="200"
    trigger="hover"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <tj-button>Hover to activate</tj-button>
    </template>
  </tj-popover>

  <tj-popover
    placement="bottom"
    title="Title"
    :width="200"
    trigger="click"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <tj-button>Click to activate</tj-button>
    </template>
  </tj-popover>

  <tj-popover
    ref="popover"
    placement="right"
    title="Title"
    :width="200"
    trigger="focus"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <tj-button>Focus to activate</tj-button>
    </template>
  </tj-popover>

  <tj-popover
    placement="bottom"
    title="Title"
    :width="200"
    trigger="manual"
    content="this is content, this is content, this is content"
    v-model:visible="visible"
  >
    <template #reference>
      <tj-button @click="visible = !visible">Manual to activate</tj-button>
    </template>
  </tj-popover>
</template>

<script>
  export default {
    data() {
      return {
        visible: false,
      }
    },
  }
</script>
```

:::

### Nested information

Other components can be nested in popover. Following is an example of nested table.

:::demo replace the `content` attribute with a default `slot`.

```html
<tj-popover placement="right" :width="400" trigger="click">
  <template #reference>
    <tj-button>Click to activate</tj-button>
  </template>
  <tj-table :data="gridData">
    <tj-table-column width="150" property="date" label="date"></tj-table-column>
    <tj-table-column width="100" property="name" label="name"></tj-table-column>
    <tj-table-column
      width="300"
      property="address"
      label="address"
    ></tj-table-column>
  </tj-table>
</tj-popover>

<script>
  export default {
    data() {
      return {
        gridData: [
          {
            date: '2016-05-02',
            name: 'Jack',
            address: 'New York City',
          },
          {
            date: '2016-05-04',
            name: 'Jack',
            address: 'New York City',
          },
          {
            date: '2016-05-01',
            name: 'Jack',
            address: 'New York City',
          },
          {
            date: '2016-05-03',
            name: 'Jack',
            address: 'New York City',
          },
        ],
      }
    },
  }
</script>
```

:::

### Nested operation

Of course, you can nest other operations. It's more light-weight than using a dialog.

:::demo

```html
<tj-popover placement="top" :width="160" v-model:visible="visible">
  <p>Are you sure to delete this?</p>
  <div style="text-align: right; margin: 0">
    <tj-button size="mini" type="text" @click="visible = false"
      >cancel</tj-button
    >
    <tj-button type="primary" size="mini" @click="visible = false"
      >confirm</tj-button
    >
  </div>
  <template #reference>
    <tj-button @click="visible = true">Delete</tj-button>
  </template>
</tj-popover>

<script>
  export default {
    data() {
      return {
        visible: false,
      }
    },
  }
</script>
```

:::

### Attributes

| Attribute                 | Description                                                                                                                               | Type           | Accepted Values                                                                                           | Default                                                 |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| trigger                   | how the popover is triggered                                                                                                              | string         | click/focus/hover/manual                                                                                  | click                                                   |
| title                     | popover title                                                                                                                             | string         | —                                                                                                         | —                                                       |
| content                   | popover content, can be replaced with a default `slot`                                                                                    | string         | —                                                                                                         | —                                                       |
| width                     | popover width                                                                                                                             | string, number | —                                                                                                         | Min width 150px                                         |
| placement                 | popover placement                                                                                                                         | string         | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom                                                  |
| disabled                  | whether Popover is disabled                                                                                                               | boolean        | —                                                                                                         | false                                                   |
| visible / v-model:visible | whether popover is visible                                                                                                                | Boolean        | —                                                                                                         | false                                                   |
| offset                    | popover offset                                                                                                                            | number         | —                                                                                                         | 0                                                       |
| transition                | popover transition animation                                                                                                              | string         | —                                                                                                         | tj-fade-in-linear                                       |
| show-arrow                | whether a tooltip arrow is displayed or not. For more info, please refer to [Vue-popper](https://github.com/element-component/vue-popper) | boolean        | —                                                                                                         | true                                                    |
| popper-options            | parameters for [popper.js](https://popper.js.org/documentation.html)                                                                      | object         | please refer to [popper.js](https://popper.js.org/documentation.html)                                     | `{ boundariesElement: 'body', gpuAcceleration: false }` |
| popper-class              | custom class name for popover                                                                                                             | string         | —                                                                                                         | —                                                       |
| show-after                | delay of appearance, in millisecond                                                                                                       | number         | —                                                                                                         | 0                                                       |
| hide-after                | delay of disappear, in millisecond                                                                                                        | number         | —                                                                                                         | 0                                                       |
| auto-close                | timeout in milliseconds to hide tooltip                                                                                                   | number         | —                                                                                                         | 0                                                       |
| tabindex                  | [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of Popover                                       | number         | —                                                                                                         | 0                                                       |

### Slot

| Name      | Description                        |
| --------- | ---------------------------------- |
| —         | text content of popover            |
| reference | HTML element that triggers popover |

### Events

| Event Name  | Description                                | Parameters |
| ----------- | ------------------------------------------ | ---------- |
| show        | triggers when popover shows                | —          |
| after-enter | triggers when the entering transition ends | —          |
| hide        | triggers when popover hides                | —          |
| after-leave | triggers when the leaving transition ends  | —          |
