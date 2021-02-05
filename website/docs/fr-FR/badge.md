## Badge

Un nombre ou un status affiché par-dessus un bouton ou un icône.

### Usage

Affiche le nombre de nouveaux messages.

:::demo La quantité est définit par `value` qui accepte un `Number` ou un `String`.

```html
<tj-badge :value="12" class="item">
  <tj-button size="small">Commentaires</tj-button>
</tj-badge>
<tj-badge :value="3" class="item">
  <tj-button size="small">Réponses</tj-button>
</tj-badge>
<tj-badge :value="1" class="item" type="primary">
  <tj-button size="small">Commentaires</tj-button>
</tj-badge>
<tj-badge :value="2" class="item" type="warning">
  <tj-button size="small">Réponses</tj-button>
</tj-badge>

<tj-dropdown trigger="click">
  <span class="tj-dropdown-link">
    Cliquez<i class="tj-icon-caret-bottom tj-icon--right"></i>
  </span>
  <template #dropdown>
    <tj-dropdown-menu>
      <tj-dropdown-item class="clearfix">
        Commentaires
        <tj-badge class="mark" :value="12" />
      </tj-dropdown-item>
      <tj-dropdown-item class="clearfix">
        Réponses
        <tj-badge class="mark" :value="3" />
      </tj-dropdown-item>
    </tj-dropdown-menu>
  </template>
</tj-dropdown>

<style>
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
</style>
```

:::

### Valeur maximale

Vous pouvez configurer la valeur maximale.

:::demo La valeur maximale est définit par `max` qui accepte un `Number`. Ceci ne marche qui si `value` est également un `Number`.

```html
<tj-badge :value="200" :max="99" class="item">
  <tj-button size="small">Commentaires</tj-button>
</tj-badge>
<tj-badge :value="100" :max="10" class="item">
  <tj-button size="small">Réponses</tj-button>
</tj-badge>

<style>
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
</style>
```

:::

### Configuration

Affiche du texte autre que des nombres.

:::demo Quand `value` est un `String`, il affiche un texte personnalisé.

```html
<tj-badge value="new" class="item">
  <tj-button size="small">Commentaires</tj-button>
</tj-badge>
<tj-badge value="hot" class="item">
  <tj-button size="small">Réponses</tj-button>
</tj-badge>

<style>
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
</style>
```

:::

### Point rouge

Utilisez un point rouge pour signaler du contenu devant être remarqué.

:::demo Utilisez l'attribut `is-dot` qui est un `Boolean`.

```html
<tj-badge is-dot class="item">Requète</tj-badge>
<tj-badge is-dot class="item">
  <tj-button
    class="share-button"
    icon="tj-icon-share"
    type="primary"
  ></tj-button>
</tj-badge>

<style>
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
</style>
```

:::

### Attributs

| Attribut | Description                                                                                          | Type           | Valeurs acceptées                           | Défaut |
| -------- | ---------------------------------------------------------------------------------------------------- | -------------- | ------------------------------------------- | ------ |
| value    | Valeur affichée.                                                                                     | string, number | —                                           | —      |
| max      | Valeur maximale, affiche '{max}+' quand elle est dépassée. Ne marche que si `value` est un `Number`. | number         | —                                           | —      |
| is-dot   | Affiche un point rouge.                                                                              | boolean        | —                                           | false  |
| hidden   | Cache le badge.                                                                                      | boolean        | —                                           | false  |
| type     | Type du bouton.                                                                                      | string         | primary / success / warning / danger / info | —      |
