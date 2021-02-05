## Alert

Displays important alert messages.

### Basic usage

Alert components are non-overlay elements in the page that does not disappear automatically.

:::demo Alert provides 4 types of themes defined by `type`, whose default value is `info`.

```html
<template>
  <tj-alert title="success alert" type="success"> </tj-alert>
  <tj-alert title="info alert" type="info"> </tj-alert>
  <tj-alert title="warning alert" type="warning"> </tj-alert>
  <tj-alert title="error alert" type="error"> </tj-alert>
</template>
```

:::

### Theme

Alert provide two different themes, `light` and `dark`.

:::demo Set `effect` to change theme, default is `light`.

```html
<template>
  <tj-alert title="success alert" type="success" effect="dark"> </tj-alert>
  <tj-alert title="info alert" type="info" effect="dark"> </tj-alert>
  <tj-alert title="warning alert" type="warning" effect="dark"> </tj-alert>
  <tj-alert title="error alert" type="error" effect="dark"> </tj-alert>
</template>
```

:::

### Customizable close button

Customize the close button as texts or other symbols.

:::demo Alert allows you to configure if it's closable. The close button text and closing callbacks are also customizable. `closable` attribute decides if the component can be closed or not. It accepts `boolean`, and the default is `true`. You can set `close-text` attribute to replace the default cross symbol as the close button. Be careful that `close-text` must be a string. `close` event fires when the component is closed.

```html
<template>
  <tj-alert title="unclosable alert" type="success" :closable="false">
  </tj-alert>
  <tj-alert title="customized close-text" type="info" close-text="Gotcha">
  </tj-alert>
  <tj-alert title="alert with callback" type="warning" @close="hello">
  </tj-alert>
</template>

<script>
  import { defineComponent } from 'vue'
  export default defineComponent({
    setup() {
      const hello = () => {
        alert('Hello World!')
      }
      return {
        hello,
      }
    },
  })
</script>
```

:::

### With icon

Displaying an icon improves readability.

:::demo Setting the `show-icon` attribute displays an icon that corresponds with the current Alert type.

```html
<template>
  <tj-alert title="success alert" type="success" show-icon> </tj-alert>
  <tj-alert title="info alert" type="info" show-icon> </tj-alert>
  <tj-alert title="warning alert" type="warning" show-icon> </tj-alert>
  <tj-alert title="error alert" type="error" show-icon> </tj-alert>
</template>
```

:::

## Centered text

Use the `center` attribute to center the text.

:::demo

```html
<template>
  <tj-alert title="success alert" type="success" center show-icon> </tj-alert>
  <tj-alert title="info alert" type="info" center show-icon> </tj-alert>
  <tj-alert title="warning alert" type="warning" center show-icon> </tj-alert>
  <tj-alert title="error alert" type="error" center show-icon> </tj-alert>
</template>
```

:::

### With description

Description includes a message with more detailed information.

:::demo Besides the required `title` attribute, you can add a `description` attribute to help you describe the alert with more details. Description can only store text string, and it will word wrap automatically.

```html
<template>
  <tj-alert
    title="with description"
    type="success"
    description="This is a description."
  >
  </tj-alert>
</template>
```

:::

### With icon and description

:::demo At last, this is an example with both icon and description.

```html
<template>
  <tj-alert
    title="success alert"
    type="success"
    description="more text description"
    show-icon
  >
  </tj-alert>
  <tj-alert
    title="info alert"
    type="info"
    description="more text description"
    show-icon
  >
  </tj-alert>
  <tj-alert
    title="warning alert"
    type="warning"
    description="more text description"
    show-icon
  >
  </tj-alert>
  <tj-alert
    title="error alert"
    type="error"
    description="more text description"
    show-icon
  >
  </tj-alert>
</template>
```

:::

### Attributes

| Attribute   | Description                                                | Type    | Accepted Values            | Default |
| ----------- | ---------------------------------------------------------- | ------- | -------------------------- | ------- |
| title       | title                                                      | string  | —                          | —       |
| type        | Component type                                             | string  | success/warning/info/error | info    |
| description | Descriptive text. Can also be passed with the default slot | string  | —                          | —       |
| closable    | If closable or not                                         | boolean | —                          | true    |
| center      | Whether to center the text                                 | boolean | —                          | false   |
| close-text  | Customized close button text                               | string  | —                          | —       |
| show-icon   | If a type icon is displayed                                | boolean | —                          | false   |
| effect      | Choose theme                                               | string  | light/dark                 | light   |

### Slot

| Name  | Description                |
| ----- | -------------------------- |
| —     | description                |
| title | content of the Alert title |

### Events

| Event Name | Description                | Parameters |
| ---------- | -------------------------- | ---------- |
| close      | fires when alert is closed | —          |
