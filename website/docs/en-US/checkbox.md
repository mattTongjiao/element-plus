## Checkbox

A group of options for multiple choices.

### Basic usage

Checkbox can be used alone to switch between two states.

:::demo Define `v-model`(bind variable) in `tj-checkbox`. The default value is a `Boolean` for single `checkbox`, and it becomes `true` when selected. Content inside the `tj-checkbox` tag will become the description following the button of the checkbox.

```html
<template>
  <!-- `checked` should be true or false -->
  <tj-checkbox v-model="checked">Option</tj-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        checked: true,
      }
    },
  }
</script>
```

:::

### Disabled State

Disabled state for checkbox.

:::demo Set the `disabled` attribute.

```html
<template>
  <tj-checkbox v-model="checked1" disabled>Option</tj-checkbox>
  <tj-checkbox v-model="checked2" disabled>Option</tj-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        checked1: false,
        checked2: true,
      }
    },
  }
</script>
```

:::

### Checkbox group

It is used for multiple checkboxes which are bound in one group, and indicates whether one option is selected by checking if it is checked.

:::demo `checkbox-group` element can manage multiple checkboxes in one group by using `v-model` which is bound as an `Array`. Inside the `tj-checkbox` element, `label` is the value of the checkbox. If no content is nested in that tag, `label` will be rendered as the description following the button of the checkbox. `label` also corresponds with the element values in the array. It is selected if the specified value exists in the array, and vice versa.

```html
<template>
  <tj-checkbox-group v-model="checkList">
    <tj-checkbox label="Option A"></tj-checkbox>
    <tj-checkbox label="Option B"></tj-checkbox>
    <tj-checkbox label="Option C"></tj-checkbox>
    <tj-checkbox label="disabled" disabled></tj-checkbox>
    <tj-checkbox label="selected and disabled" disabled></tj-checkbox>
  </tj-checkbox-group>
</template>

<script>
  export default {
    data() {
      return {
        checkList: ['selected and disabled', 'Option A'],
      }
    },
  }
</script>
```

:::

### Indeterminate

The `indeterminate` property can help you to achieve a 'check all' effect.

:::demo

```html
<template>
  <tj-checkbox
    :indeterminate="isIndeterminate"
    v-model="checkAll"
    @change="handleCheckAllChange"
    >Check all</tj-checkbox
  >
  <div style="margin: 15px 0;"></div>
  <tj-checkbox-group
    v-model="checkedCities"
    @change="handleCheckedCitiesChange"
  >
    <tj-checkbox v-for="city in cities" :label="city" :key="city"
      >{{city}}</tj-checkbox
    >
  </tj-checkbox-group>
</template>
<script>
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']
  export default {
    data() {
      return {
        checkAll: false,
        checkedCities: ['Shanghai', 'Beijing'],
        cities: cityOptions,
        isIndeterminate: true,
      }
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : []
        this.isIndeterminate = false
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length
        this.checkAll = checkedCount === this.cities.length
        this.isIndeterminate =
          checkedCount > 0 && checkedCount < this.cities.length
      },
    },
  }
</script>
```

:::

### Minimum / Maximum items checked

The `min` and `max` properties can help you to limit the number of checked items.

:::demo

```html
<template>
  <tj-checkbox-group v-model="checkedCities" :min="1" :max="2">
    <tj-checkbox v-for="city in cities" :label="city" :key="city"
      >{{city}}</tj-checkbox
    >
  </tj-checkbox-group>
</template>
<script>
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']
  export default {
    data() {
      return {
        checkedCities: ['Shanghai', 'Beijing'],
        cities: cityOptions,
      }
    },
  }
</script>
```

:::

### Button style

Checkbox with button styles.

:::demo You just need to change `tj-checkbox` element into `tj-checkbox-button` element. We also provide `size` attribute.

```html
<template>
  <div>
    <tj-checkbox-group v-model="checkboxGroup1">
      <tj-checkbox-button v-for="city in cities" :label="city" :key="city"
        >{{city}}</tj-checkbox-button
      >
    </tj-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <tj-checkbox-group v-model="checkboxGroup2" size="medium">
      <tj-checkbox-button v-for="city in cities" :label="city" :key="city"
        >{{city}}</tj-checkbox-button
      >
    </tj-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <tj-checkbox-group v-model="checkboxGroup3" size="small">
      <tj-checkbox-button
        v-for="city in cities"
        :label="city"
        :disabled="city === 'Beijing'"
        :key="city"
        >{{city}}</tj-checkbox-button
      >
    </tj-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <tj-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
      <tj-checkbox-button v-for="city in cities" :label="city" :key="city"
        >{{city}}</tj-checkbox-button
      >
    </tj-checkbox-group>
  </div>
</template>
<script>
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']

  export default {
    data() {
      return {
        checkboxGroup1: ['Shanghai'],
        checkboxGroup2: ['Shanghai'],
        checkboxGroup3: ['Shanghai'],
        checkboxGroup4: ['Shanghai'],
        cities: cityOptions,
      }
    },
  }
</script>
```

:::

### With borders

:::demo The `border` attribute adds a border to Checkboxes.

```html
<template>
  <div>
    <tj-checkbox v-model="checked1" label="Option1" border></tj-checkbox>
    <tj-checkbox v-model="checked2" label="Option2" border></tj-checkbox>
  </div>
  <div style="margin-top: 20px">
    <tj-checkbox
      v-model="checked3"
      label="Option1"
      border
      size="medium"
    ></tj-checkbox>
    <tj-checkbox
      v-model="checked4"
      label="Option2"
      border
      size="medium"
    ></tj-checkbox>
  </div>
  <div style="margin-top: 20px">
    <tj-checkbox-group v-model="checkboxGroup1" size="small">
      <tj-checkbox label="Option1" border></tj-checkbox>
      <tj-checkbox label="Option2" border disabled></tj-checkbox>
    </tj-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <tj-checkbox-group v-model="checkboxGroup2" size="mini" disabled>
      <tj-checkbox label="Option1" border></tj-checkbox>
      <tj-checkbox label="Option2" border></tj-checkbox>
    </tj-checkbox-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked1: true,
        checked2: false,
        checked3: false,
        checked4: true,
        checkboxGroup1: [],
        checkboxGroup2: [],
      }
    },
  }
</script>
```

:::

### Checkbox Attributes

| Attribute       | Description                                               | Type                      | Options               | Default |
| --------------- | --------------------------------------------------------- | ------------------------- | --------------------- | ------- |
| value / v-model | binding value                                             | string / number / boolean | —                     | —       |
| label           | value of the Checkbox when used inside a `checkbox-group` | string / number / boolean | —                     | —       |
| true-label      | value of the Checkbox if it's checked                     | string / number           | —                     | —       |
| false-label     | value of the Checkbox if it's not checked                 | string / number           | —                     | —       |
| disabled        | whether the Checkbox is disabled                          | boolean                   | —                     | false   |
| border          | whether to add a border around Checkbox                   | boolean                   | —                     | false   |
| size            | size of the Checkbox, only works when `border` is true    | string                    | medium / small / mini | —       |
| name            | native 'name' attribute                                   | string                    | —                     | —       |
| checked         | if the Checkbox is checked                                | boolean                   | —                     | false   |
| indeterminate   | same as `indeterminate` in native checkbox                | boolean                   | —                     | false   |

### Checkbox Events

| Event Name | Description                             | Parameters        |
| ---------- | --------------------------------------- | ----------------- |
| change     | triggers when the binding value changes | the updated value |

### Checkbox-group Attributes

| Attribute       | Description                                       | Type    | Options               | Default |
| --------------- | ------------------------------------------------- | ------- | --------------------- | ------- |
| value / v-model | binding value                                     | array   | —                     | —       |
| size            | size of checkbox buttons or bordered checkboxes   | string  | medium / small / mini | —       |
| disabled        | whether the nesting checkboxes are disabled       | boolean | —                     | false   |
| min             | minimum number of checkbox checked                | number  | —                     | —       |
| max             | maximum number of checkbox checked                | number  | —                     | —       |
| text-color      | font color when button is active                  | string  | —                     | #ffffff |
| fill            | border and background color when button is active | string  | —                     | #409EFF |

### Checkbox-group Events

| Event Name | Description                             | Parameters        |
| ---------- | --------------------------------------- | ----------------- |
| change     | triggers when the binding value changes | the updated value |

### Checkbox-button Attributes

| Attribute   | Description                                               | Type                      | Options | Default |
| ----------- | --------------------------------------------------------- | ------------------------- | ------- | ------- |
| label       | value of the checkbox when used inside a `checkbox-group` | string / number / boolean | —       | —       |
| true-label  | value of the checkbox if it's checked                     | string / number           | —       | —       |
| false-label | value of the checkbox if it's not checked                 | string / number           | —       | —       |
| disabled    | whether the checkbox is disabled                          | boolean                   | —       | false   |
| name        | native 'name' attribute                                   | string                    | —       | —       |
| checked     | if the checkbox is checked                                | boolean                   | —       | false   |
