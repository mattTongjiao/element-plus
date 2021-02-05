## Transiciones incorporadas

Puede usar directamente las transiciones incorporadas en Element. Antes de hacerlo, por favor lea la [documentación](https://vuejs.org/v2/api/#transition).

### Fade

:::demo Tenemos dos efectos de fading: `tj-fade-in-linear` y `tj-fade-in`.

```html
<template>
  <div>
    <tj-button @click="show = !show">Click Me</tj-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="tj-fade-in-linear">
        <div v-show="show" class="transition-box">.tj-fade-in-linear</div>
      </transition>
      <transition name="tj-fade-in">
        <div v-show="show" class="transition-box">.tj-fade-in</div>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      show: true,
    }),
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409eff;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```

:::

### Zoom

:::demo También tenemos zoom: `tj-zoom-in-center`, `tj-zoom-in-top` y `tj-zoom-in-bottom`.

```html
<template>
  <div>
    <tj-button @click="show2 = !show2">Click Me</tj-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="tj-zoom-in-center">
        <div v-show="show2" class="transition-box">.tj-zoom-in-center</div>
      </transition>

      <transition name="tj-zoom-in-top">
        <div v-show="show2" class="transition-box">.tj-zoom-in-top</div>
      </transition>

      <transition name="tj-zoom-in-bottom">
        <div v-show="show2" class="transition-box">.tj-zoom-in-bottom</div>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      show2: true,
    }),
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409eff;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```

:::

### Colapsado

Para efectos de colapsado usar el componente `tj-collapse-transition`.
:::demo

```html
<template>
  <div>
    <tj-button @click="show3 = !show3">Click Me</tj-button>

    <div style="margin-top: 20px; height: 200px;">
      <tj-collapse-transition>
        <div v-show="show3">
          <div class="transition-box">tj-collapse-transition</div>
          <div class="transition-box">tj-collapse-transition</div>
        </div>
      </tj-collapse-transition>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      show3: true,
    }),
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409eff;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```

:::

### Bajo demanda

```js
// fade/zoom
import 'element-plus/lib/theme-chalk/base.css'
// colapsar
import { TjCollapseTransition } from 'element-plus'
import Vue from 'vue'

Vue.component(TjCollapseTransition.name, TjCollapseTransition)
```
