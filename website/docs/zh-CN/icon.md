## Icon 图标

提供了一套常用的图标集合。

### 使用方法

直接通过设置类名为 `tj-icon-iconName` 来使用即可。例如：

:::demo

```html
<i class="tj-icon-edit"></i>
<i class="tj-icon-share"></i>
<i class="tj-icon-delete"></i>
<tj-button type="primary" icon="tj-icon-search">搜索</tj-button>
```

:::

### 图标集合

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'tj-icon-' + name"></i>
      <span class="icon-name">{{'tj-icon-' + name}}</span>
    </span>
  </li>
</ul>
