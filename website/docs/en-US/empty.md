## Empty

Placeholder hints for empty states.

### Basic usage

:::demo

```html
<tj-empty description="description"></tj-empty>
```

:::

### Custom image

Use `image` prop to set image URL.

:::demo

```html
<tj-empty
  image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
></tj-empty>
```

:::

### Image size

Use `image-size` prop to control image size.

:::demo

```html
<tj-empty :image-size="200"></tj-empty>
```

:::

### Bottom content

Use the default slot to insert content at the bottom.

:::demo

```html
<tj-empty>
  <tj-button type="primary">Button</tj-button>
</tj-empty>
```

:::

### Empty Attributes

| Attribute   | Description        | Type   | Acceptable Value | Default Value |
| ----------- | ------------------ | ------ | ---------------- | ------------- |
| image       | image URL          | string | —                | —             |
| image-size  | image size (width) | number | —                | —             |
| description | description        | string | —                | —             |

### Empty Slots

| Name        | Description           |
| ----------- | --------------------- |
| default     | Custom bottom content |
| image       | Custom image          |
| description | Custom description    |
