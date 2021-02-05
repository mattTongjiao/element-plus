## Icon

Tongjiao UI provides a set of common icons.

### Basic usage

Just assign the class name to `tj-icon-iconName`.

:::demo

```html
<i class="tj-icon-edit"></i>
<i class="tj-icon-share"></i>
<i class="tj-icon-delete"></i>
<tj-button type="primary" icon="tj-icon-search">Search</tj-button>
```

:::

### Icons

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'tj-icon-' + name"></i>
      <span class="icon-name">{{'tj-icon-' + name}}</span>
    </span>
  </li>
</ul>
