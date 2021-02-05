## Popover

### Usage

Similaire à Tooltip, Popover est aussi construit avec `Vue-popper`. Certains attributs sont donc les mêmes, vous pourrez vous référer à la documentation de Tooltip pour certains d'entre eux.

:::demo L'attribut `trigger` détermine comment le popover se déclenche: `hover`, `click`, `focus` ou `manual`. Concernant l'élément déclencheur, vous pouvez l'écrire de deux manières: en utilisant le slot `#reference` ou bien la directive `v-popover` avec `ref` égal à popover.

```html
<template>
  <tj-popover
    placement="top-start"
    title="Title"
    :width="200"
    trigger="hover"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <tj-button>S'active au passage du curseur</tj-button>
    </template>
  </tj-popover>

  <tj-popover
    placement="bottom"
    title="Title"
    :width="200"
    trigger="click"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <tj-button>S'active en cliquant</tj-button>
    </template>
  </tj-popover>

  <tj-popover
    ref="popover"
    placement="right"
    title="Title"
    :width="200"
    trigger="focus"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <tj-button>S'active au focus</tj-button>
    </template>
  </tj-popover>

  <tj-popover
    placement="bottom"
    title="Title"
    :width="200"
    trigger="manual"
    content="this is content, this is content, this is content"
    v-model:visible="visible"
  >
    <template #reference>
      <tj-button @click="visible = !visible">S'active manuellement</tj-button>
    </template>
  </tj-popover>
</template>

<script>
  export default {
    data() {
      return {
        visible: false,
      }
    },
  }
</script>
```

:::

### Informations imbriquées

D'autres composants peuvent s'imbriquer dans un popover.

:::demo Remplacez `content` par un `slot`.

```html
<tj-popover placement="right" :width="400" trigger="click">
  <template #reference>
    <tj-button>Cliquez pour activer</tj-button>
  </template>
  <tj-table :data="gridData">
    <tj-table-column width="150" property="date" label="date"></tj-table-column>
    <tj-table-column width="100" property="name" label="name"></tj-table-column>
    <tj-table-column
      width="300"
      property="address"
      label="address"
    ></tj-table-column>
  </tj-table>
</tj-popover>

<script>
  export default {
    data() {
      return {
        gridData: [
          {
            date: '2016-05-02',
            name: 'Jack',
            address: 'New York City',
          },
          {
            date: '2016-05-04',
            name: 'Jack',
            address: 'New York City',
          },
          {
            date: '2016-05-01',
            name: 'Jack',
            address: 'New York City',
          },
          {
            date: '2016-05-03',
            name: 'Jack',
            address: 'New York City',
          },
        ],
      }
    },
  }
</script>
```

:::

### Opérations imbriquées

Vous pouvez aussi imbriquer des opérations. Procéder ainsi est plus léger que d'utiliser Dialog.

:::demo

```html
<tj-popover placement="top" :width="160" v-model:visible="visible">
  <p>Voulez-vous vraiment supprimer ceci?</p>
  <div style="text-align: right; margin: 0">
    <tj-button size="mini" type="text" @click="visible = false"
      >Annuler</tj-button
    >
    <tj-button type="primary" size="mini" @click="visible = false"
      >Confirmer</tj-button
    >
  </div>
  <template #reference>
    <tj-button @click="visible = true">Supprimer</tj-button>
  </template>
</tj-popover>

<script>
  export default {
    data() {
      return {
        visible: false,
      }
    },
  }
</script>
```

:::

### Attributs

| Attribut                  | Description                                                                                                                                      | Type           | Valeurs acceptées                                                                                         | Défaut                                                  |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| trigger                   | Comment le popover se déclenche.                                                                                                                 | string         | click/focus/hover/manual                                                                                  | click                                                   |
| title                     | Titre du popover.                                                                                                                                | string         | —                                                                                                         | —                                                       |
| content                   | Contenu du popover, peut être remplacé par un `slot`                                                                                             | string         | —                                                                                                         | —                                                       |
| width                     | Largeur du popover.                                                                                                                              | string, number | —                                                                                                         | Min width 150px                                         |
| placement                 | Emplacement du popover.                                                                                                                          | string         | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom                                                  |
| disabled                  | Si le popover est désactivé.                                                                                                                     | boolean        | —                                                                                                         | false                                                   |
| visible / v-model:visible | Si le popover est visible.                                                                                                                       | Boolean        | —                                                                                                         | false                                                   |
| offset                    | Décalage du popover.                                                                                                                             | number         | —                                                                                                         | 0                                                       |
| transition                | Animation de transition du popover.                                                                                                              | string         | —                                                                                                         | tj-fade-in-linear                                       |
| show-arrow                | Si une flèche doit être affichée ou non. Pour plus d'informations, référez-vous à [Vue-popper](https://github.com/element-component/vue-popper). | boolean        | —                                                                                                         | true                                                    |
| popper-options            | Paramètres pour [popper.js](https://popper.js.org/documentation.html).                                                                           | object         | Référez-vous à [popper.js](https://popper.js.org/documentation.html).                                     | `{ boundariesElement: 'body', gpuAcceleration: false }` |
| popper-class              | Classe du popover.                                                                                                                               | string         | —                                                                                                         | —                                                       |
| show-after                | Délai avant l'apparition en millisecondes.                                                                                                       | number         | —                                                                                                         | 0                                                       |
| hide-after                | Le temps de disparaître en millisecondes                                                                                                         | number         | —                                                                                                         | 0                                                       |
| auto-close                | Délai avant disparition.                                                                                                                         | number         | —                                                                                                         | 0                                                       |
| tabindex                  | [tabindex](https://developer.mozilla.org/fr/docs/Web/HTML/Attributs_universels/tabindex) de Popover                                              | number         | —                                                                                                         | 0                                                       |

### Slot

| Nom       | Description                                |
| --------- | ------------------------------------------ |
| —         | Contenu du popover.                        |
| reference | Tongjiao UI HTML qui déclenche le popover. |

### Évènements

| Nom         | Description                                            | Paramètres |
| ----------- | ------------------------------------------------------ | ---------- |
| show        | Se déclenche quand le popover s'affiche.               | —          |
| after-enter | Se déclenche quand la transition d'entrée se termine.  | —          |
| hide        | Se déclenche quand le popover disparaît.               | —          |
| after-leave | Se déclenche quand la transition de sortie se termine. | —          |
