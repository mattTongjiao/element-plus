## Card

Conteneur intégrant des informations.

### Usage

Le composant Card comprend un titre, un contenu et des opérations.

:::demo Card est composé d'un `header` et d'un `body`. `header` est optionnel et son contenu nécessite l'utilisation d'un slot.

```html
<tj-card class="box-card">
  <template #header>
    <div class="card-header">
      <span>Card name</span>
      <tj-button class="button" type="text">Bouton</tj-button>
    </div>
  </template>
  <div v-for="o in 4" :key="o" class="text item">
    {{'List item ' + o }}
  </div>
</tj-card>

<style>
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .box-card {
    width: 480px;
  }
</style>
```

:::

### Card simple

Le header peut être omis.

:::demo

```html
<tj-card class="box-card">
  <div v-for="o in 4" :key="o" class="text item">
    {{'List item ' + o }}
  </div>
</tj-card>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
</style>
```

:::

### Images

Affichez un contenu plus riche grâce à la configuration.

:::demo L'attribut `body-style` définit le style CSS du `body`. Cet exemple utilise aussi `tj-col` pour la mise en page.

```html
<tj-row>
  <tj-col
    :span="8"
    v-for="(o, index) in 2"
    :key="o"
    :offset="index > 0 ? 2 : 0"
  >
    <tj-card :body-style="{ padding: '0px' }">
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        class="image"
      />
      <div style="padding: 14px;">
        <span>Yummy hamburger</span>
        <div class="bottom">
          <time class="time">{{ currentDate }}</time>
          <tj-button type="text" class="button">Operating</tj-button>
        </div>
      </div>
    </tj-card>
  </tj-col>
</tj-row>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .button {
    padding: 0;
    min-height: auto;
  }

  .image {
    width: 100%;
    display: block;
  }
</style>

<script>
  export default {
    data() {
      return {
        currentDate: new Date(),
      }
    },
  }
</script>
```

:::

### Ombres

Vous pouvez définir quand l'ombre des Cards doivent apparaître.

:::demo L'attribut `shadow` détermine quand l'ombre doit apparaître. Les valeurs possibles sont `always`, `hover` ou `never`.

```html
<tj-row :gutter="12">
  <tj-col :span="8">
    <tj-card shadow="always">
      Always
    </tj-card>
  </tj-col>
  <tj-col :span="8">
    <tj-card shadow="hover">
      Hover
    </tj-card>
  </tj-col>
  <tj-col :span="8">
    <tj-card shadow="never">
      Never
    </tj-card>
  </tj-col>
</tj-row>
```

:::

### Attributs

| Attribut   | Description                                                              | Type   | Valeurs acceptées      | Défaut              |
| ---------- | ------------------------------------------------------------------------ | ------ | ---------------------- | ------------------- |
| header     | Titre de la Card. Accepte aussi un template DOM passé via `slot#header`. | string | —                      | —                   |
| body-style | Style CSS du body.                                                       | object | —                      | { padding: '20px' } |
| shadow     | Quand l'ombre doit apparaître                                            | string | always / hover / never | always              |
