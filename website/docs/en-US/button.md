## Button

Commonly used button.

### Basic usage

:::demo Use `type`, `plain`, `round` and `circle` to define Button's style.

```html
<tj-row>
  <tj-button>Default</tj-button>
  <tj-button type="primary">Primary</tj-button>
  <tj-button type="success">Success</tj-button>
  <tj-button type="info">Info</tj-button>
  <tj-button type="warning">Warning</tj-button>
  <tj-button type="danger">Danger</tj-button>
</tj-row>

<tj-row>
  <tj-button plain>Plain</tj-button>
  <tj-button type="primary" plain>Primary</tj-button>
  <tj-button type="success" plain>Success</tj-button>
  <tj-button type="info" plain>Info</tj-button>
  <tj-button type="warning" plain>Warning</tj-button>
  <tj-button type="danger" plain>Danger</tj-button>
</tj-row>

<tj-row>
  <tj-button round>Round</tj-button>
  <tj-button type="primary" round>Primary</tj-button>
  <tj-button type="success" round>Success</tj-button>
  <tj-button type="info" round>Info</tj-button>
  <tj-button type="warning" round>Warning</tj-button>
  <tj-button type="danger" round>Danger</tj-button>
</tj-row>

<tj-row>
  <tj-button icon="tj-icon-search" circle></tj-button>
  <tj-button type="primary" icon="tj-icon-edit" circle></tj-button>
  <tj-button type="success" icon="tj-icon-check" circle></tj-button>
  <tj-button type="info" icon="tj-icon-message" circle></tj-button>
  <tj-button type="warning" icon="tj-icon-star-off" circle></tj-button>
  <tj-button type="danger" icon="tj-icon-delete" circle></tj-button>
</tj-row>
```

:::

### Disabled Button

The `disabled` attribute determines if the button is disabled.

:::demo Use `disabled` attribute to determine whether a button is disabled. It accepts a `Boolean` value.

```html
<tj-row>
  <tj-button disabled>Default</tj-button>
  <tj-button type="primary" disabled>Primary</tj-button>
  <tj-button type="success" disabled>Success</tj-button>
  <tj-button type="info" disabled>Info</tj-button>
  <tj-button type="warning" disabled>Warning</tj-button>
  <tj-button type="danger" disabled>Danger</tj-button>
</tj-row>

<tj-row>
  <tj-button plain disabled>Plain</tj-button>
  <tj-button type="primary" plain disabled>Primary</tj-button>
  <tj-button type="success" plain disabled>Success</tj-button>
  <tj-button type="info" plain disabled>Info</tj-button>
  <tj-button type="warning" plain disabled>Warning</tj-button>
  <tj-button type="danger" plain disabled>Danger</tj-button>
</tj-row>
```

:::

### Text Button

Buttons without border and background.

:::demo

```html
<tj-button type="text">Text Button</tj-button>
<tj-button type="text" disabled>Text Button</tj-button>
```

:::

### Icon Button

Use icons to add more meaning to Button. You can use icon alone to save some space, or use it with text.

:::demo Use the `icon` attribute to add icon. You can find the icon list in Tongjiao UI icon component. Adding icons to the right side of the text is achievable with an `<i>` tag. Custom icons can be used as well.

```html
<tj-button type="primary" icon="tj-icon-edit"></tj-button>
<tj-button type="primary" icon="tj-icon-share"></tj-button>
<tj-button type="primary" icon="tj-icon-delete"></tj-button>
<tj-button type="primary" icon="tj-icon-search">Search</tj-button>
<tj-button type="primary"
  >Upload<i class="tj-icon-upload tj-icon-right"></i
></tj-button>
```

:::

### Button Group

Displayed as a button group, can be used to group a series of similar operations.

:::demo Use tag `<tj-button-group>` to group your buttons.

```html
<tj-button-group>
  <tj-button type="primary" icon="tj-icon-arrow-left">Previous Page</tj-button>
  <tj-button type="primary"
    >Next Page<i class="tj-icon-arrow-right tj-icon-right"></i
  ></tj-button>
</tj-button-group>
<tj-button-group>
  <tj-button type="primary" icon="tj-icon-edit"></tj-button>
  <tj-button type="primary" icon="tj-icon-share"></tj-button>
  <tj-button type="primary" icon="tj-icon-delete"></tj-button>
</tj-button-group>
```

:::

### Loading Button

Click the button to load data, then the button displays a loading state.

:::demo Set `loading` attribute to `true` to display loading state.

```html
<tj-button type="primary" :loading="true">Loading</tj-button>
```

:::

### Sizes

Besides default size, Button component provides three additional sizes for you to choose among different scenarios.

:::demo Use attribute `size` to set additional sizes with `medium`, `small` or `mini`.

```html
<tj-row>
  <tj-button>Default</tj-button>
  <tj-button size="medium">Medium</tj-button>
  <tj-button size="small">Small</tj-button>
  <tj-button size="mini">Mini</tj-button>
</tj-row>
<tj-row>
  <tj-button round>Default</tj-button>
  <tj-button size="medium" round>Medium</tj-button>
  <tj-button size="small" round>Small</tj-button>
  <tj-button size="mini" round>Mini</tj-button>
</tj-row>
```

:::

### Attributes

| Attribute   | Description                            | Type    | Accepted values                                    | Default |
| ----------- | -------------------------------------- | ------- | -------------------------------------------------- | ------- |
| size        | button size                            | string  | medium / small / mini                              | —       |
| type        | button type                            | string  | primary / success / warning / danger / info / text | —       |
| plain       | determine whether it's a plain button  | boolean | —                                                  | false   |
| round       | determine whether it's a round button  | boolean | —                                                  | false   |
| circle      | determine whether it's a circle button | boolean | —                                                  | false   |
| loading     | determine whether it's loading         | boolean | —                                                  | false   |
| disabled    | disable the button                     | boolean | —                                                  | false   |
| icon        | icon class name                        | string  | —                                                  | —       |
| autofocus   | same as native button's `autofocus`    | boolean | —                                                  | false   |
| native-type | same as native button's `type`         | string  | button / submit / reset                            | button  |
