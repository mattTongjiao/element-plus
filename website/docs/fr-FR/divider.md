## Divider

Une ligne de séparation entre deux contenus.

### Usage basique

Séparer le texte de deux paragraphes.

:::demo

```html
<template>
  <div>
    <span
      >Je suis assis à ma fenêtre ce matin où le monde, tel un passant, s’arrête
      un instant, me fait signe de la tête et part.</span
    >
    <tj-divider></tj-divider>
    <span
      >Les petites pensées sont le bruissement des feuilles; ils ont leur
      murmure de joie dans mon esprit.</span
    >
  </div>
</template>
```

:::

### Contenu personnalisé

Vous ajouter du contenu dans la ligne de séparation.

:::demo

```html
<template>
  <div>
    <span
      >Vous ne voyez pas ce que vous êtes, ce que vous voyez est votre
      ombre.</span
    >
    <tj-divider content-position="left">Rabindranath Tagore</tj-divider>
    <span>Je ne peux pas choisir le meilleur. Le meilleur me choisit.</span>
    <tj-divider><i class="tj-icon-star-on"></i></tj-divider>
    <span
      >Mes souhaits sont des imbéciles, ils crient à travers ta chanson, mon
      Maître. Laisse-moi mais écoute.</span
    >
    <tj-divider content-position="right">Rabindranath Tagore</tj-divider>
  </div>
</template>
```

:::

### Séparation verticale

:::demo

```html
<template>
  <div>
    <span>Pluie</span>
    <tj-divider direction="vertical"></tj-divider>
    <span>Maison</span>
    <tj-divider direction="vertical"></tj-divider>
    <span>Herbe</span>
  </div>
</template>
```

:::

### Attributs

| Attribut         | Description                            | Type   | Valeurs acceptées     | Défaut     |
| ---------------- | -------------------------------------- | ------ | --------------------- | ---------- |
| direction        | Règle la direction du séparateur.      | string | horizontal / vertical | horizontal |
| content-position | Personnalise le contenu du séparateur. | String | left / right / center | center     |
