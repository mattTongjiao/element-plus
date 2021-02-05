## Link

Un hyperlien textuel.

### Usage basique

Lien texte basique.

:::demo

```html
<div>
  <tj-link href="https://element.eleme.io" target="_blank">défaut</tj-link>
  <tj-link type="primary">primaire</tj-link>
  <tj-link type="success">succès</tj-link>
  <tj-link type="warning">avertissement</tj-link>
  <tj-link type="danger">danger</tj-link>
  <tj-link type="info">info</tj-link>
</div>
```

:::

### Désactivé

Lien désactivé.

:::demo

```html
<div>
  <tj-link disabled>défaut</tj-link>
  <tj-link type="primary" disabled>primaire</tj-link>
  <tj-link type="success" disabled>succès</tj-link>
  <tj-link type="warning" disabled>avertissement</tj-link>
  <tj-link type="danger" disabled>danger</tj-link>
  <tj-link type="info" disabled>info</tj-link>
</div>
```

:::

### Souligné

Lien souligné.

:::demo

```html
<div>
  <tj-link :underline="false">non souligné</tj-link>
  <tj-link>Souligné</tj-link>
</div>
```

:::

### Icône

Lien avec icône.

:::demo

```html
<div>
  <tj-link icon="tj-icon-edit">Éditer</tj-link>
  <tj-link>Vérifier<i class="tj-icon-view tj-icon--right"></i> </tj-link>
</div>
```

:::

### Attributs

| Attribut  | Description                    | Type    | Options                                     | Défaut |
| --------- | ------------------------------ | ------- | ------------------------------------------- | ------ |
| type      | Type du lien.                  | string  | primary / success / warning / danger / info | défaut |
| underline | Si le composant est souligné.  | boolean | —                                           | true   |
| disabled  | Si le composant est désactivé. | boolean | —                                           | false  |
| href      | Identique au `href` natif.     | string  | —                                           | -      |
| icon      | Nom de classe de l'icône.      | string  | —                                           | -      |
