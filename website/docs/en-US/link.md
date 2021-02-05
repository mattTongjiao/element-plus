## Link

Text hyperlink

### Basic

Basic text link
:::demo

```html
<div>
  <tj-link href="https://element.eleme.io" target="_blank">default</tj-link>
  <tj-link type="primary">primary</tj-link>
  <tj-link type="success">success</tj-link>
  <tj-link type="warning">warning</tj-link>
  <tj-link type="danger">danger</tj-link>
  <tj-link type="info">info</tj-link>
</div>
```

:::

### Disabled

Disabled state of link
:::demo

```html
<div>
  <tj-link disabled>default</tj-link>
  <tj-link type="primary" disabled>primary</tj-link>
  <tj-link type="success" disabled>success</tj-link>
  <tj-link type="warning" disabled>warning</tj-link>
  <tj-link type="danger" disabled>danger</tj-link>
  <tj-link type="info" disabled>info</tj-link>
</div>
```

:::

### Underline

Underline of link
:::demo

```html
<div>
  <tj-link :underline="false">Without Underline</tj-link>
  <tj-link>With Underline</tj-link>
</div>
```

:::

### Icon

Link with icon
:::demo

```html
<div>
  <tj-link icon="tj-icon-edit">Edit</tj-link>
  <tj-link>Check<i class="tj-icon-view tj-icon--right"></i> </tj-link>
</div>
```

:::

### Attributes

| Attribute | Description                         | Type    | Options                                     | Default |
| --------- | ----------------------------------- | ------- | ------------------------------------------- | ------- |
| type      | type                                | string  | primary / success / warning / danger / info | default |
| underline | whether the component has underline | boolean | —                                           | true    |
| disabled  | whether the component is disabled   | boolean | —                                           | false   |
| href      | same as native hyperlink's `href`   | string  | —                                           | -       |
| icon      | class name of icon                  | string  | —                                           | -       |
