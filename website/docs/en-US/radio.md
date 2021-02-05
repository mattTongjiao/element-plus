## Radio

Single selection among multiple options.

### Basic usage

Radio should not have too many options. Otherwise, use the Select component instead.

:::demo Creating a radio component is easy, you just need to bind a variable to Radio's `v-model`. It equals to the value of `label` of the chosen radio. The type of `label` is `String`, `Number` or `Boolean`.

```html
<template>
  <tj-radio v-model="radio" label="1">Option A</tj-radio>
  <tj-radio v-model="radio" label="2">Option B</tj-radio>
</template>

<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const radio = ref('1')
      return {
        radio,
      }
    },
  }
</script>
```

:::

### Disabled

`disabled` attribute is used to disable the radio.

:::demo You just need to add the `disabled` attribute.

```html
<template>
  <tj-radio disabled v-model="radio" label="disabled">Option A</tj-radio>
  <tj-radio disabled v-model="radio" label="selected and disabled"
    >Option B</tj-radio
  >
</template>

<script>
  export default {
    data() {
      return {
        radio: 'selected and disabled',
      }
    },
  }
</script>
```

:::

### Radio button group

Suitable for choosing from some mutually exclusive options.

:::demo Combine `tj-radio-group` with `tj-radio` to display a radio group. Bind a variable with `v-model` of `tj-radio-group` element and set label value in `tj-radio`. It also provides `change` event with the current value as its parameter.

```html
<tj-radio-group v-model="radio">
  <tj-radio :label="3">Option A</tj-radio>
  <tj-radio :label="6">Option B</tj-radio>
  <tj-radio :label="9">Option C</tj-radio>
</tj-radio-group>

<script>
  export default {
    data() {
      return {
        radio: 3,
      }
    },
  }
</script>
```

:::

### Button style

Radio with button styles.

:::demo You just need to change `tj-radio` element into `tj-radio-button` element. We also provide `size` attribute.

```html
<template>
  <div>
    <tj-radio-group v-model="radio1">
      <tj-radio-button label="New York"></tj-radio-button>
      <tj-radio-button label="Washington"></tj-radio-button>
      <tj-radio-button label="Los Angeles"></tj-radio-button>
      <tj-radio-button label="Chicago"></tj-radio-button>
    </tj-radio-group>
  </div>
  <div style="margin-top: 20px">
    <tj-radio-group v-model="radio2" size="medium">
      <tj-radio-button label="New York"></tj-radio-button>
      <tj-radio-button label="Washington"></tj-radio-button>
      <tj-radio-button label="Los Angeles"></tj-radio-button>
      <tj-radio-button label="Chicago"></tj-radio-button>
    </tj-radio-group>
  </div>
  <div style="margin-top: 20px">
    <tj-radio-group v-model="radio3" size="small">
      <tj-radio-button label="New York"></tj-radio-button>
      <tj-radio-button label="Washington" disabled></tj-radio-button>
      <tj-radio-button label="Los Angeles"></tj-radio-button>
      <tj-radio-button label="Chicago"></tj-radio-button>
    </tj-radio-group>
  </div>
  <div style="margin-top: 20px">
    <tj-radio-group v-model="radio4" disabled size="mini">
      <tj-radio-button label="New York"></tj-radio-button>
      <tj-radio-button label="Washington"></tj-radio-button>
      <tj-radio-button label="Los Angeles"></tj-radio-button>
      <tj-radio-button label="Chicago"></tj-radio-button>
    </tj-radio-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        radio1: 'New York',
        radio2: 'New York',
        radio3: 'New York',
        radio4: 'New York',
      }
    },
  }
</script>
```

:::

### With borders

:::demo The `border` attribute adds a border to Radios.

```html
<template>
  <div>
    <tj-radio v-model="radio1" label="1" border>Option A</tj-radio>
    <tj-radio v-model="radio1" label="2" border>Option B</tj-radio>
  </div>
  <div style="margin-top: 20px">
    <tj-radio v-model="radio2" label="1" border size="medium"
      >Option A</tj-radio
    >
    <tj-radio v-model="radio2" label="2" border size="medium"
      >Option B</tj-radio
    >
  </div>
  <div style="margin-top: 20px">
    <tj-radio-group v-model="radio3" size="small">
      <tj-radio label="1" border>Option A</tj-radio>
      <tj-radio label="2" border disabled>Option B</tj-radio>
    </tj-radio-group>
  </div>
  <div style="margin-top: 20px">
    <tj-radio-group v-model="radio4" size="mini" disabled>
      <tj-radio label="1" border>Option A</tj-radio>
      <tj-radio label="2" border>Option B</tj-radio>
    </tj-radio-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        radio1: '1',
        radio2: '1',
        radio3: '1',
        radio4: '1',
      }
    },
  }
</script>
```

:::

### Radio Attributes

| Attribute       | Description                                         | Type                      | Accepted Values       | Default |
| --------------- | --------------------------------------------------- | ------------------------- | --------------------- | ------- |
| value / v-model | binding value                                       | string / number / boolean | —                     | —       |
| label           | the value of Radio                                  | string / number / boolean | —                     | —       |
| disabled        | whether Radio is disabled                           | boolean                   | —                     | false   |
| border          | whether to add a border around Radio                | boolean                   | —                     | false   |
| size            | size of the Radio, only works when `border` is true | string                    | medium / small / mini | —       |
| name            | native 'name' attribute                             | string                    | —                     | —       |

### Radio Events

| Event Name | Description                           | Parameters                          |
| ---------- | ------------------------------------- | ----------------------------------- |
| change     | triggers when the bound value changes | the label value of the chosen radio |

### Radio-group Attributes

| Attribute       | Description                                       | Type                      | Accepted Values       | Default |
| --------------- | ------------------------------------------------- | ------------------------- | --------------------- | ------- |
| value / v-model | binding value                                     | string / number / boolean | —                     | —       |
| size            | the size of radio buttons or bordered radios      | string                    | medium / small / mini | —       |
| disabled        | whether the nesting radios are disabled           | boolean                   | —                     | false   |
| text-color      | font color when button is active                  | string                    | —                     | #ffffff |
| fill            | border and background color when button is active | string                    | —                     | #409EFF |

### Radio-group Events

| Event Name | Description                           | Parameters                          |
| ---------- | ------------------------------------- | ----------------------------------- |
| change     | triggers when the bound value changes | the label value of the chosen radio |

### Radio-button Attributes

| Attribute | Description               | Type            | Accepted Values | Default |
| --------- | ------------------------- | --------------- | --------------- | ------- |
| label     | the value of radio        | string / number | —               | —       |
| disabled  | whether radio is disabled | boolean         | —               | false   |
| name      | native 'name' attribute   | string          | —               | —       |
