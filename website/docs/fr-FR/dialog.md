## Dialog

Informe les utilisateurs tout en préservant l'état de la page.

### Usage

Le Dialog ouvre un modal personnalisable.

:::demo Configurez l'attribut `visible` avec un `Boolean`, un modal apparaîtra quand la valeur sera à `true`. Le Dialog possède deux parties: `body` et `footer`, ce-dernier nécessitant un `slot` appelé `footer`. L'attribut optionnel `title` (vide par défaut) définit le titre. Cet exemple montre également comment `before-close` peut être utilisé.

```html
<tj-button type="text" @click="dialogVisible = true"
  >Cliquez pour ouvrir le modal</tj-button
>

<tj-dialog
  title="Tips"
  v-model="dialogVisible"
  width="30%"
  :before-close="handleClose"
>
  <span>Ceci est un message</span>
  <template #footer>
    <span class="dialog-footer">
      <tj-button @click="dialogVisible = false">Annuler</tj-button>
      <tj-button type="primary" @click="dialogVisible = false"
        >Confirmer</tj-button
      >
    </span>
  </template>
</tj-dialog>

<script>
  export default {
    data() {
      return {
        dialogVisible: false,
      }
    },
    methods: {
      handleClose(done) {
        this.$confirm('Voulez-vous vraiment quitter ?')
          .then(_ => {
            done()
          })
          .catch(_ => {})
      },
    },
  }
</script>
```

:::

:::tip
`before-close` ne fonctionne que quand l'utilisateur clique sur l'icône de fermeture en dehors du modal. S'il y a des boutons dans le `footer`, vous pouvez configurer `before-close` grâce à leur évènement click.
:::

### Personalisation

Le contenu du modal peut être n'importe quoi, tableau ou formulaire compris.

:::demo

```html
<!-- Table -->
<tj-button type="text" @click="dialogTableVisible = true"
  >Ouvrir un modal avec tableau</tj-button
>

<tj-dialog title="Adresse d'expédition" v-model="dialogTableVisible">
  <tj-table :data="gridData">
    <tj-table-column property="date" label="Date" width="150"></tj-table-column>
    <tj-table-column property="name" label="Nom" width="200"></tj-table-column>
    <tj-table-column property="address" label="Adresse"></tj-table-column>
  </tj-table>
</tj-dialog>

<!-- Form -->
<tj-button type="text" @click="dialogFormVisible = true"
  >Ouvrir un modal avec formulaire</tj-button
>

<tj-dialog title="Adresse d'expédition" v-model="dialogFormVisible">
  <tj-form :model="form">
    <tj-form-item label="Nom de promotion" :label-width="formLabelWidth">
      <tj-input v-model="form.name" autocomplete="off"></tj-input>
    </tj-form-item>
    <tj-form-item label="Zones" :label-width="formLabelWidth">
      <tj-select v-model="form.region" placeholder="Sélectionnez une zone">
        <tj-option label="Zone No.1" value="shanghai"></tj-option>
        <tj-option label="Zone No.2" value="beijing"></tj-option>
      </tj-select>
    </tj-form-item>
  </tj-form>
  <template #footer>
    <span class="dialog-footer">
      <tj-button @click="dialogFormVisible = false">Annuler</tj-button>
      <tj-button type="primary" @click="dialogFormVisible = false"
        >Confirmer</tj-button
      >
    </span>
  </template>
</tj-dialog>

<script>
  export default {
    data() {
      return {
        gridData: [
          {
            date: '2016-05-02',
            name: 'John Smith',
            address: 'No.1518,  Jinshajiang Road, Putuo District',
          },
          {
            date: '2016-05-04',
            name: 'John Smith',
            address: 'No.1518,  Jinshajiang Road, Putuo District',
          },
          {
            date: '2016-05-01',
            name: 'John Smith',
            address: 'No.1518,  Jinshajiang Road, Putuo District',
          },
          {
            date: '2016-05-03',
            name: 'John Smith',
            address: 'No.1518,  Jinshajiang Road, Putuo District',
          },
        ],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
        formLabelWidth: '120px',
      }
    },
  }
</script>
```

:::

### Dialog imbriqué

Si un Dialog est imbriqué dans un autre Dialog, `append-to-body` est requis.

:::demo Normalement l'utilisation de Dialog imbriqué est déconseillée. Si vous avez besoin de plusieurs Dialogs sur la page, vous pouvez les aplatir afin qu'ils soit au même niveau. Si vous devez absolument utiliser un Dialog imbriqué, configurez l'attribut `append-to-body` du Dialog imbriqué à `true` et il sera ajouté au body au lieu de son noeud parent, afin d'avoir un affichage correct.

```html
<template>
  <tj-button type="text" @click="outerVisible = true"
    >Ouvrir le modal extérieur</tj-button
  >

  <tj-dialog title="Modal extérieur" v-model="outerVisible">
    <tj-dialog
      width="30%"
      title="Modal intérieur"
      v-model="innerVisible"
      append-to-body
    >
    </tj-dialog>
    <template #footer>
      <div class="dialog-footer">
        <tj-button @click="outerVisible = false">Annuler</tj-button>
        <tj-button type="primary" @click="innerVisible = true"
          >Ouvrir le modal intérieur</tj-button
        >
      </div>
    </template>
  </tj-dialog>
</template>

<script>
  export default {
    data() {
      return {
        outerVisible: false,
        innerVisible: false,
      }
    },
  }
</script>
```

:::

### Centrer le contenu

Le contenu du modal peut être centré.

:::demo Régler `center` à `true` centrera horizontalement le header et le footer. `center` n'affecte que le header et le footer. Le contenu du body pouvant être n'importe quoi, si vous désirez le centrer vous devrez ajouter des règles CSS.

```html
<tj-button type="text" @click="centerDialogVisible = true"
  >Cliquez pour ouvrir le modal</tj-button
>

<tj-dialog title="Attention" v-model="centerDialogVisible" width="30%" center>
  <span>Le contenu du modal n'est pas centré par défaut.</span>
  <template #footer>
    <span class="dialog-footer">
      <tj-button @click="centerDialogVisible = false">Annuler</tj-button>
      <tj-button type="primary" @click="centerDialogVisible = false"
        >Confirmer</tj-button
      >
    </span>
  </template>
</tj-dialog>

<script>
  export default {
    data() {
      return {
        centerDialogVisible: false,
      }
    },
  }
</script>
```

:::

:::tip
Le contenu de Dialog bénéficie du lazy loading, ce qui signifie que le slot par défaut n'est pas généré par le DOM avant la première ouverture. Si vous avez besoin de manipuler le DOM ou d'accéder à un composant via `ref`, vous pouvez le faire avec la callback de l'évènement `open`.
:::

### Destroy on Close (Translation needed)

When this is feature is enabled, the content under default slot will be destroyed with a `v-if` directive. Enable this when you have perf concerns.

:::demo Note that by enabling this feature, the content will not be rendered before `transition.beforeEnter` dispatched, there will only be `overlay` `header(if any)` `footer(if any)`.

```html
<tj-button type="text" @click="centerDialogVisible = true"
  >Click to open Dialog</tj-button
>

<tj-dialog
  title="Notice"
  v-model="centerDialogVisible"
  width="30%"
  destroy-on-close
  center
>
  <span
    >Notice: before dialog gets opened for the first time this node and the one
    bellow will not be rendered</span
  >
  <div>
    <strong>Extra content (Not rendered)</strong>
  </div>
  <template #footer>
    <span class="dialog-footer">
      <tj-button @click="centerDialogVisible = false">Cancel</tj-button>
      <tj-button type="primary" @click="centerDialogVisible = false"
        >Confirm</tj-button
      >
    </span>
  </template>
</tj-dialog>

<script>
  export default {
    data() {
      return {
        centerDialogVisible: false,
      }
    },
  }
</script>
```

:::tip
When using `modal` = false, please make sure that `append-to-body` was set to **true**, because `Dialog` was positioned by `position: relative`, when `modal` gets removed, `Dialog` will position itself based on the current position in the DOM, instead of `Document.Body`, thus the style will be messed up.
:::

### Attributs

| Attribut              | Description                                                                               | Type                                                    | Valeurs acceptées | Défaut |
| --------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------- | ----------------- | ------ |
| modtj-value / v-model | Visibilité du Dialog                                                                      | boolean                                                 | —                 | —      |
| title                 | Titre du Dialog. Peut aussi être passé via un slot (voir la table suivante).              | string                                                  | —                 | —      |
| width                 | Largeur du Dialog.                                                                        | string / number                                         | —                 | 50%    |
| fullscreen            | Si le Dialog doit être en plein écran.                                                    | boolean                                                 | —                 | false  |
| top                   | Valeur du `margin-top` du CSS du Dialog.                                                  | string                                                  | —                 | 15vh   |
| modal                 | Si un masque est affiché.                                                                 | boolean                                                 | —                 | true   |
| append-to-body        | S'il faut ajouter le Dialog au body. Un Dialog imbriqué doit avoir cet attribut à `true`. | boolean                                                 | —                 | false  |
| lock-scroll           | Si le défilement du body est désactivé.                                                   | boolean                                                 | —                 | true   |
| custom-class          | Nom de classe pour le Dialog                                                              | string                                                  | —                 | —      |
| open-delay            | Temps (millisecondes) avant la ouvert                                                     | number                                                  | —                 | 0      |
| close-delay           | Temps (millisecondes) avant la proche                                                     | number                                                  | —                 | 0      |
| close-on-click-modal  | Si le Dialog peut être fermé en cliquant sur le masque.                                   | boolean                                                 | —                 | true   |
| close-on-press-escape | Si le Dialog peut être fermé en appuyant sur Echap.                                       | boolean                                                 | —                 | true   |
| show-close            | Si le bouton de fermeture doit apparaître.                                                | boolean                                                 | —                 | true   |
| before-close          | Callback avant la fermeture du Dialog.                                                    | function(done)，done est utilisé pour fermer le Dialog. | —                 | —      |
| center                | Si le header et le footer doivent être centrés.                                           | boolean                                                 | —                 | false  |
| destroy-on-close      | Destroy elements in Dialog when closed                                                    | boolean                                                 | —                 | false  |

### Slot

| Nom    | Description        |
| ------ | ------------------ |
| —      | Contenu du Dialog. |
| title  | Contenu du titre.  |
| footer | Contenu du footer. |

### Évènements

| Nom    | Description                                                         | Paramètres |
| ------ | ------------------------------------------------------------------- | ---------- |
| open   | Se déclenche quand le Dialog s'ouvre.                               | —          |
| opened | Se déclenche quand l'animation d'ouverture est terminée.            | —          |
| close  | Se déclenche quand le Dialog se ferme.                              | —          |
| closed | Se déclenche quand l'animation de fermeture du Dialog est terminée. | —          |
