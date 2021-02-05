## Icônes

Tongjiao UI fournit un ensemble d'icônes basiques.

### Usage

Il vous suffit d'assigner le nom de classe `tj-icon-iconName` à une balise `<i>`.

:::demo

```html
<i class="tj-icon-edit"></i>
<i class="tj-icon-share"></i>
<i class="tj-icon-delete"></i>
<tj-button type="primary" icon="tj-icon-search">Chercher</tj-button>
```

:::

### Icônes

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'tj-icon-' + name"></i>
      <span class="icon-name">{{'tj-icon-' + name}}</span>
    </span>
  </li>
</ul>
