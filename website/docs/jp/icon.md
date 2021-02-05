## アイコン

Tongjiao UI は、共通のアイコンのセットを提供します。

### 基本的な使い方

クラス名に `tj-icon-iconName` を代入するだけで使えます。

:::demo

```html
<i class="tj-icon-edit"></i>
<i class="tj-icon-share"></i>
<i class="tj-icon-delete"></i>
<tj-button type="primary" icon="tj-icon-search">Search</tj-button>
```

:::

### アイコン

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'tj-icon-' + name"></i>
      <span class="icon-name">{{'tj-icon-' + name}}</span>
    </span>
  </li>
</ul>
