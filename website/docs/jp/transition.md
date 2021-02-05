## ビルトイントランジション

Tongjiao UI にビルトインされているトランジションをダイレクトに使うことができます。利用の前に、[transition docs](https://vuejs.org/v2/api/#transition)を読むことを勧めます。

### フェード

:::demo 2 つのフェード効果が提供されています。: `tj-fade-in-linear` と `tj-fade-in`

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

### ズーム

:::demo `tj-zoom-in-center`、 `tj-zoom-in-top` と `tj-zoom-in-bottom` が提供されています。

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

### コラプス

コラプスの効果を利用するためには、`tj-collapse-transition` コンポーネントを用います。

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

### オンデマンド

```js
// fade/zoom
import 'tongjiaoui-plus/lib/theme-chalk/base.css'
// collapse
import { TjCollapseTransition } from 'tongjiaoui-plus'
import Vue from 'vue'

Vue.component(TjCollapseTransition.name, TjCollapseTransition)
```
