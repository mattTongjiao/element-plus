## Switch

Switch is used for switching between two opposing states.

### Basic usage

:::demo Bind `v-model` to a `Boolean` typed variable. The `active-color` and `inactive-color` attribute decides the background color in two states.

```html
<tj-switch v-model="value1"> </tj-switch>
<tj-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949">
</tj-switch>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true,
      }
    },
  }
</script>
```

:::

### Text description

:::demo You can add `active-text` and `inactive-text` attribute to show texts.

```html
<tj-switch
  v-model="value1"
  active-text="Pay by month"
  inactive-text="Pay by year"
>
</tj-switch>
<tj-switch
  style="display: block"
  v-model="value2"
  active-color="#13ce66"
  inactive-color="#ff4949"
  active-text="Pay by month"
  inactive-text="Pay by year"
>
</tj-switch>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true,
      }
    },
  }
</script>
```

:::

### Extended value types

:::demo You can set `active-value` and `inactive-value` attributes. They both receive a `Boolean`, `String` or `Number` typed value.

```html
<tj-tooltip :content="'Switch value: ' + value" placement="top">
  <tj-switch
    v-model="value"
    active-color="#13ce66"
    inactive-color="#ff4949"
    active-value="100"
    inactive-value="0"
  >
  </tj-switch>
</tj-tooltip>

<script>
  export default {
    data() {
      return {
        value: '100',
      }
    },
  }
</script>
```

:::

### Disabled

:::demo Adding the `disabled` attribute disables Switch.

```html
<tj-switch v-model="value1" disabled> </tj-switch>
<tj-switch v-model="value2" disabled> </tj-switch>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: false,
      }
    },
  }
</script>
```

:::

### Loading

:::demo Setting the `loading` attribute to `true` indicates a loading state on the Switch.

```html
<tj-switch v-model="value1" loading> </tj-switch>
<tj-switch v-model="value2" loading> </tj-switch>
<script>
  export default {
    data() {
      return {
        value1: true,
        value2: false,
      }
    },
  }
</script>
```

:::

### Attributes

| Attribute           | Description                                                                                                         | Type                      | Accepted Values | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------- | --------------- | ------- |
| value / v-model     | binding value, it should be equivalent to either `active-value` or `inactive-value`, by default it's `boolean` type | boolean / string / number | —               | —       |
| disabled            | whether Switch is disabled                                                                                          | boolean                   | —               | false   |
| loading             | whether Switch is in loading state                                                                                  | boolean                   | —               | false   |
| width               | width of Switch                                                                                                     | number                    | —               | 40      |
| active-icon-class   | class name of the icon displayed when in `on` state, overrides `active-text`                                        | string                    | —               | —       |
| inactive-icon-class | class name of the icon displayed when in `off` state, overrides `inactive-text`                                     | string                    | —               | —       |
| active-text         | text displayed when in `on` state                                                                                   | string                    | —               | —       |
| inactive-text       | text displayed when in `off` state                                                                                  | string                    | —               | —       |
| active-value        | switch value when in `on` state                                                                                     | boolean / string / number | —               | true    |
| inactive-value      | switch value when in `off` state                                                                                    | boolean / string / number | —               | false   |
| active-color        | background color when in `on` state                                                                                 | string                    | —               | #409EFF |
| inactive-color      | background color when in `off` state                                                                                | string                    | —               | #C0CCDA |
| name                | input name of Switch                                                                                                | string                    | —               | —       |
| validate-event      | whether to trigger form validation                                                                                  | boolean                   | -               | true    |

### Events

| Event Name | Description                 | Parameters           |
| ---------- | --------------------------- | -------------------- |
| change     | triggers when value changes | value after changing |

### Methods

| Method | Description                | Parameters |
| ------ | -------------------------- | ---------- |
| focus  | focus the Switch component | —          |
