## Bouton

Bouton communément utilisé.

### Usage

:::demo Utilisez `type`, `plain`, `round` et `circle` pour définir le style du bouton.

```html
<tj-row>
  <tj-button>Défaut</tj-button>
  <tj-button type="primary">Primary</tj-button>
  <tj-button type="success">Success</tj-button>
  <tj-button type="info">Info</tj-button>
  <tj-button type="warning">Warning</tj-button>
  <tj-button type="danger">Danger</tj-button>
</tj-row>

<tj-row>
  <tj-button plain>Plein</tj-button>
  <tj-button type="primary" plain>Primary</tj-button>
  <tj-button type="success" plain>Success</tj-button>
  <tj-button type="info" plain>Info</tj-button>
  <tj-button type="warning" plain>Warning</tj-button>
  <tj-button type="danger" plain>Danger</tj-button>
</tj-row>

<tj-row>
  <tj-button round>Arrondi</tj-button>
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

### Bouton désactivé

L'attribut `disabled` détermine si le bouton est désactivé.

:::demo Utilisez l'attribut `disabled` pour déterminer si un bouton est désactivé ou non. Il accepte un `Boolean`.

```html
<tj-row>
  <tj-button disabled>Défaut</tj-button>
  <tj-button type="primary" disabled>Principal</tj-button>
  <tj-button type="success" disabled>Succès</tj-button>
  <tj-button type="info" disabled>Info</tj-button>
  <tj-button type="warning" disabled>Attention</tj-button>
  <tj-button type="danger" disabled>Danger</tj-button>
</tj-row>

<tj-row>
  <tj-button plain disabled>Plein</tj-button>
  <tj-button type="primary" plain disabled>Principal</tj-button>
  <tj-button type="success" plain disabled>Succès</tj-button>
  <tj-button type="info" plain disabled>Info</tj-button>
  <tj-button type="warning" plain disabled>Attention</tj-button>
  <tj-button type="danger" plain disabled>Danger</tj-button>
</tj-row>
```

:::

### Bouton texte

Bouton sans bordure ni fond.

:::demo

```html
<tj-button type="text">Bouton texte</tj-button>
<tj-button type="text" disabled>Bouton texte</tj-button>
```

:::

### Icône

Utilisez des icônes pour ajouter plus de sens aux boutons. Vous pouvez utiliser uniquement l'icône pour économiser de l'espace, ou bien l'utiliser avec du texte.

:::demo Utilisez l'attribut `icon` pour ajouter une icône. Vous pourrez trouver la liste des icônes dans le composant Icon d'Element. Ajouter des icônes sur le coté droit du texte est possible grâce à la balise `<i>`. Des icônes personnalisées peuvent également être utilisées.

```html
<tj-button type="primary" icon="tj-icon-edit"></tj-button>
<tj-button type="primary" icon="tj-icon-share"></tj-button>
<tj-button type="primary" icon="tj-icon-delete"></tj-button>
<tj-button type="primary" icon="tj-icon-search">Recherche</tj-button>
<tj-button type="primary"
  >Upload<i class="tj-icon-upload tj-icon-right"></i
></tj-button>
```

:::

### Groupes de boutons

Affiche un groupe de bouton. Peut être utilisé pour grouper un ensemble d'opérations similaires.

:::demo Utilisez la balise `<tj-button-group>` pour grouper vos boutons.

```html
<tj-button-group>
  <tj-button type="primary" icon="tj-icon-arrow-left"
    >Page précédente</tj-button
  >
  <tj-button type="primary"
    >Page suivante<i class="tj-icon-arrow-right tj-icon-right"></i
  ></tj-button>
</tj-button-group>
<tj-button-group>
  <tj-button type="primary" icon="tj-icon-edit"></tj-button>
  <tj-button type="primary" icon="tj-icon-share"></tj-button>
  <tj-button type="primary" icon="tj-icon-delete"></tj-button>
</tj-button-group>
```

:::

### Bouton en chargement

Cliquez sur le bouton pour charger des données et il affichera un état de chargement.

:::demo Configurez l'attribut `loading` à `true` pour afficher un état de chargement.

```html
<tj-button type="primary" :loading="true">Chargement</tj-button>
```

:::

### Tailles

En plus de la taille par défaut, le composant Button fournit trois tailles supplémentaires pour différents scénarios.

:::demo Utilisez l'attribut `size` pour choisir d'autres tailles parmi `medium`, `small` ou `mini`.

```html
<tj-row>
  <tj-button>Défaut</tj-button>
  <tj-button size="medium">Medium</tj-button>
  <tj-button size="small">Small</tj-button>
  <tj-button size="mini">Mini</tj-button>
</tj-row>
<tj-row>
  <tj-button round>Défaut</tj-button>
  <tj-button size="medium" round>Medium</tj-button>
  <tj-button size="small" round>Small</tj-button>
  <tj-button size="mini" round>Mini</tj-button>
</tj-row>
```

:::

### Attributs

| Attribut    | Description                                    | Type    | Valeurs acceptées                                  | Défaut |
| ----------- | ---------------------------------------------- | ------- | -------------------------------------------------- | ------ |
| size        | Taille du bouton.                              | string  | medium / small / mini                              | —      |
| type        | Type du bouton.                                | string  | primary / success / warning / danger / info / text | —      |
| plain       | Détermine si le bouton est plein.              | boolean | —                                                  | false  |
| round       | Détermine si le bouton est arrondi.            | boolean | —                                                  | false  |
| circle      | Détermine si le bouton est un cercle.          | boolean | —                                                  | false  |
| loading     | Détermine si l'état de chargement est affiché. | boolean | —                                                  | false  |
| disabled    | Désactive le bouton                            | boolean | —                                                  | false  |
| icon        | Classe de l'icône.                             | string  | —                                                  | —      |
| autofocus   | Identique à l'attribut natif `autofocus`       | boolean | —                                                  | false  |
| native-type | Identique à l'attribut natif `type`            | string  | button / submit / reset                            | button |
