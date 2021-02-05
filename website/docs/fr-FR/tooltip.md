## Tooltip

Permet d'afficher des informations au passage de la souris sur un élément.

### Usage

Tooltip a 9 emplacements.

:::demo L'attribut `content` détermine le contenu à afficher. L'attribut `placement` détermine la position du tooltip. Sa valeur est sous la forme `[orientation]-[alignment]` avec quatre orientations `top`, `left`, `right`, `bottom` et trois alignements `start`, `end`, `null`, le défaut étant `null`. Par exemple, `placement="left-end"` affichera la tooltip sur la gauche de l'élément et le bas de la tooltip sera aligné avec le bas de l'élément.

```html
<div class="box">
  <div class="top">
    <tj-tooltip
      class="item"
      effect="dark"
      content="Top Left prompts info"
      placement="top-start"
    >
      <tj-button>top-start</tj-button>
    </tj-tooltip>
    <tj-tooltip
      class="item"
      effect="dark"
      content="Top Center prompts info"
      placement="top"
    >
      <tj-button>top</tj-button>
    </tj-tooltip>
    <tj-tooltip
      class="item"
      effect="dark"
      content="Top Right prompts info"
      placement="top-end"
    >
      <tj-button>top-end</tj-button>
    </tj-tooltip>
  </div>
  <div class="left">
    <tj-tooltip
      class="item"
      effect="dark"
      content="Left Top prompts info"
      placement="left-start"
    >
      <tj-button>left-start</tj-button>
    </tj-tooltip>
    <tj-tooltip
      class="item"
      effect="dark"
      content="Left Center prompts info"
      placement="left"
    >
      <tj-button>left</tj-button>
    </tj-tooltip>
    <tj-tooltip
      class="item"
      effect="dark"
      content="Left Bottom prompts info"
      placement="left-end"
    >
      <tj-button>left-end</tj-button>
    </tj-tooltip>
  </div>

  <div class="right">
    <tj-tooltip
      class="item"
      effect="dark"
      content="Right Top prompts info"
      placement="right-start"
    >
      <tj-button>right-start</tj-button>
    </tj-tooltip>
    <tj-tooltip
      class="item"
      effect="dark"
      content="Right Center prompts info"
      placement="right"
    >
      <tj-button>right</tj-button>
    </tj-tooltip>
    <tj-tooltip
      class="item"
      effect="dark"
      content="Right Bottom prompts info"
      placement="right-end"
    >
      <tj-button>right-end</tj-button>
    </tj-tooltip>
  </div>
  <div class="bottom">
    <tj-tooltip
      class="item"
      effect="dark"
      content="Bottom Left prompts info"
      placement="bottom-start"
    >
      <tj-button>bottom-start</tj-button>
    </tj-tooltip>
    <tj-tooltip
      class="item"
      effect="dark"
      content="Bottom Center prompts info"
      placement="bottom"
    >
      <tj-button>bottom</tj-button>
    </tj-tooltip>
    <tj-tooltip
      class="item"
      effect="dark"
      content="Bottom Right prompts info"
      placement="bottom-end"
    >
      <tj-button>bottom-end</tj-button>
    </tj-tooltip>
  </div>
</div>

<style>
  .box {
    width: 400px;

    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 110px;
    }

    .right {
      float: right;
      width: 110px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }

    .left .tj-tooltip__popper,
    .right .tj-tooltip__popper {
      padding: 8px 10px;
    }

    .tj-button {
      width: 110px;
    }
  }
</style>
```

:::

### Thèmes

Tooltip a deux thèmes: `dark` et `light`。

:::demo Utilisez `effect` pour modifier le thème, le défaut étant `dark`.

```html
<tj-tooltip content="Top center" placement="top">
  <tj-button>Dark</tj-button>
</tj-tooltip>
<tj-tooltip content="Bottom center" placement="bottom" effect="light">
  <tj-button>Light</tj-button>
</tj-tooltip>
```

:::

### Plus de contenu

Vous pouvez afficher plus de lignes et formater leur contenu.

:::demo Utiliser un slot nommé `content` au lieu de l'attribut.

```html
<tj-tooltip placement="top">
  <template #content> Multiples lignes<br />Seconde ligne </template>
  <tj-button>Top center</tj-button>
</tj-tooltip>
```

:::

### Usage avancé

Vous pouvez utiliser d'autres attributs pour un usage plus poussé:

`transition` permet de définir l'animation d'apparition et de disparition du tooltip, le défaut étant tj-fade-in-linear.

`disabled` permet de désactiver le tooltip. Mettez-le simplement à `true`.

En réalité, Tooltip est une extension de [Vue-popper](https://github.com/element-component/vue-popper), vous pouvez donc utiliser n'importe quel attribut de Vue-popper.

:::demo

```html
<template>
  <tj-tooltip
    :disabled="disabled"
    content="Cliquez pour désactiver le tooltip"
    placement="bottom"
    effect="light"
  >
    <tj-button @click="disabled = !disabled"
      >Cliquez pour {{disabled ? 'activer' : 'désactiver'}} le
      tooltip</tj-button
    >
  </tj-tooltip>
</template>

<script>
  export default {
    data() {
      return {
        disabled: false,
      }
    },
  }
</script>

<style>
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter,
  .expand-fade-leave-active {
    margin-left: 20px;
    opacity: 0;
  }
</style>
```

:::

:::tip
Le composant `router-link` n'est pas supporté par tooltip, utilisez plutôt `vm.$router.push`.

Les éléments de formulaire désactivés ne sont pas supportés par Tooltip, plus d'informations sur [MDN](https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter). Vous aurez besoin de mettre ces éléments dans un conteneur pour que cela fonctionne.
:::

### Attributs

| Attribut        | Description                                                                                                                    | Type    | Valeurs acceptées                                                                                         | Défaut                                                  |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| append-to-body  | S'il faut ajouter le Dialog au body. Un Dialog imbriqué doit avoir cet attribut à `true`.                                      | boolean | —                                                                                                         | false                                                   |
| effect          | Thème du Tooltip.                                                                                                              | string  | dark/light                                                                                                | dark                                                    |
| content         | Contenu à afficher, écrasé par `slot#content`.                                                                                 | String  | —                                                                                                         | —                                                       |
| placement       | Position du Tooltip.                                                                                                           | string  | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom                                                  |
| value / v-model | Visibilité du Tooltip.                                                                                                         | boolean | —                                                                                                         | false                                                   |
| disabled        | Si le Tooltip est désactivé.                                                                                                   | boolean | —                                                                                                         | false                                                   |
| offset          | Décalage du Tooltip.                                                                                                           | number  | —                                                                                                         | 0                                                       |
| transition      | Animation de transition.                                                                                                       | string  | —                                                                                                         | tj-fade-in-linear                                       |
| visible-arrow   | Si une flèche doit être affichée. Pour plus d'information, voir [Vue-popper](https://github.com/element-component/vue-popper). | boolean | —                                                                                                         | true                                                    |
| popper-options  | Paramètres [popper.js](https://popper.js.org/documentation.html).                                                              | Object  | Se référer à [popper.js](https://popper.js.org/documentation.html).                                       | `{ boundariesElement: 'body', gpuAcceleration: false }` |
| show-after      | Délai avant l'apparition en millisecondes.                                                                                     | number  | —                                                                                                         | 0                                                       |
| hide-after      | Le temps de disparaître en millisecondes                                                                                       | number  | —                                                                                                         | 0                                                       |
| auto-close      | Délai avant disparition.                                                                                                       | number  | —                                                                                                         | 0                                                       |
| manual          | Si le contrôle du Tooltip doit être manuel. `mouseenter` et `mouseleave` n'auront pas d'effet si `true`.                       | boolean | —                                                                                                         | false                                                   |
| popper-class    | Classe du popper de Tooltip.                                                                                                   | string  | —                                                                                                         | —                                                       |
| enterable       | Si la souris peut entrer dans la Tooltip.                                                                                      | Boolean | —                                                                                                         | true                                                    |
| tabindex        | [tabindex](https://developer.mozilla.org/fr/docs/Web/HTML/Attributs_universels/tabindex) de Tooltip.                           | number  | —                                                                                                         | 0                                                       |
