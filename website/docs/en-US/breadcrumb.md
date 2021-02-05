## Breadcrumb

Displays the location of the current page, making it easier to browser back.

### Basic usage

:::demo In `tj-breadcrumb`, each `tj-breadcrumb-item` is a tag that stands for every level starting from homepage. This component has a `String` attribute `separator`, and it determines the separator. Its default value is '/'.

```html
<tj-breadcrumb separator="/">
  <tj-breadcrumb-item :to="{ path: '/' }">homepage</tj-breadcrumb-item>
  <tj-breadcrumb-item><a href="/">promotion management</a></tj-breadcrumb-item>
  <tj-breadcrumb-item>promotion list</tj-breadcrumb-item>
  <tj-breadcrumb-item>promotion detail</tj-breadcrumb-item>
</tj-breadcrumb>
```

:::

### Icon separator

:::demo Set `separator-class` to use `iconfont` as the separator，it will cover `separator`

```html
<tj-breadcrumb separator-class="tj-icon-arrow-right">
  <tj-breadcrumb-item :to="{ path: '/' }">homepage</tj-breadcrumb-item>
  <tj-breadcrumb-item>promotion management</tj-breadcrumb-item>
  <tj-breadcrumb-item>promotion list</tj-breadcrumb-item>
  <tj-breadcrumb-item>promotion detail</tj-breadcrumb-item>
</tj-breadcrumb>
```

:::

### Breadcrumb Attributes

| Attribute       | Description                  | Type   | Accepted Values | Default |
| --------------- | ---------------------------- | ------ | --------------- | ------- |
| separator       | separator character          | string | —               | /       |
| separator-class | class name of icon separator | string | —               | -       |

### Breadcrumb Item Attributes

| Attribute | Description                                               | Type          | Accepted Values | Default |
| --------- | --------------------------------------------------------- | ------------- | --------------- | ------- |
| to        | target route of the link, same as `to` of `vue-router`    | string/object | —               | —       |
| replace   | if `true`, the navigation will not leave a history record | boolean       | —               | false   |
