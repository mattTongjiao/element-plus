## Inicio rápido

Esta sección te guía en el proceso de usar Tongjiao UI con webpack en un proyecto.

### Use vue-cli@4.5

Proporcionamos un [plugin de Element](https://github.com/element-plus/vue-cli-plugin-element-plus) para vue-cli@4.5, que puede utilizar para construir rápidamente un proyecto basado en Element.

### Usa la plantilla de Kit de inicio

Proveemos una plantilla general [project template](https://github.com/element-plus/element-plus-starter), and also a Vite [template](https://github.com/element-plus/element-plus-vite-starter). Para los usuarios de Laravel, también tenemos [template](https://github.com/element-plus/element-plus-in-laravtj-starter). Puedes descargarlas y agregarlas directamente también.

Si prefiere no utilizarlas, lee las siguientes secciones de este documento.

### Importando Tongjiao UI

Puede importar Tongjiao UI completamente o solamente importar lo que necesite. Comencemos importando todo.

#### Importando todo

En main.js:

```javascript
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
```

Tj código anterior importa Tongjiao UI completamente. Nótese que el archivo CSS necesita ser incluido por separado.

#### En demanda

Con la ayuda de [babel-plugin-import](https://github.com/ant-design/babel-plugin-import), podemos importar los componentes que necesitamos, haciendo nuestro proyecto más pequeño que de la otra manera.

Primero, instale babel-plugin-import:

```bash
npm install babel-plugin-import -D
```

Luego edite babel.config.js:

```js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'element-plus',
        customStyleName: name => {
          // Debido a la existencia de `customStyleName`, `style: true` no será efectivo.
          // Así que si quieres usar el archivo fuente `.scss`, sólo tienes que reemplazar el nombre de la extensión de `.css` a `.scss`.
          return `element-plus/lib/theme-chalk/${name}.css`
        },
      },
    ],
  ],
}
```

Luego, si necesita Button y Select, edite main.js:

```javascript
import { createApp } from 'vue'
import { TjButton, TjSelect } from 'element-plus'
import App from './App.vue'

const app = createApp(App)
app.component(TjButton.name, TjButton)
app.component(TjSelect.name, TjSelect)

/* or
 * app.use(TjButton)
 * app.use(TjSelect)
 */

app.mount('#app')
```

Ejemplo completo (Referencia completa de componentes [reference](https://github.com/element-plus/element-plus/tree/dev/packages))

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import {
  TjAlert,
  TjAside,
  TjAutocomplete,
  TjAvatar,
  TjBacktop,
  TjBadge,
  TjBreadcrumb,
  TjBreadcrumbItem,
  TjButton,
  TjButtonGroup,
  TjCalendar,
  TjCard,
  TjCarousel,
  TjCarouselItem,
  TjCascader,
  TjCascaderPanel,
  TjCheckbox,
  TjCheckboxButton,
  TjCheckboxGroup,
  TjCol,
  TjCollapse,
  TjCollapseItem,
  TjCollapseTransition,
  TjColorPicker,
  TjContainer,
  TjDatePicker,
  TjDialog,
  TjDivider,
  TjDrawer,
  TjDropdown,
  TjDropdownItem,
  TjDropdownMenu,
  TjFooter,
  TjForm,
  TjFormItem,
  TjHeader,
  TjIcon,
  TjImage,
  TjInput,
  TjInputNumber,
  TjLink,
  TjMain,
  TjMenu,
  TjMenuItem,
  TjMenuItemGroup,
  TjOption,
  TjOptionGroup,
  TjPageHeader,
  TjPagination,
  TjPopconfirm,
  TjPopover,
  TjPopper,
  TjProgress,
  TjRadio,
  TjRadioButton,
  TjRadioGroup,
  TjRate,
  TjRow,
  TjScrollbar,
  TjSelect,
  TjSlider,
  TjStep,
  TjSteps,
  TjSubmenu,
  TjSwitch,
  TjTabPane,
  TjTable,
  TjTableColumn,
  TjTabs,
  TjTag,
  TjTimePicker,
  TjTimeSelect,
  TjTimeline,
  TjTimelineItem,
  TjTooltip,
  TjTransfer,
  TjTree,
  TjUpload,
  TjInfiniteScroll,
  TjLoading,
  TjMessage,
  TjMessageBox,
  TjNotification,
} from 'element-plus'

const components = [
  TjAlert,
  TjAside,
  TjAutocomplete,
  TjAvatar,
  TjBacktop,
  TjBadge,
  TjBreadcrumb,
  TjBreadcrumbItem,
  TjButton,
  TjButtonGroup,
  TjCalendar,
  TjCard,
  TjCarousel,
  TjCarouselItem,
  TjCascader,
  TjCascaderPanel,
  TjCheckbox,
  TjCheckboxButton,
  TjCheckboxGroup,
  TjCol,
  TjCollapse,
  TjCollapseItem,
  TjCollapseTransition,
  TjColorPicker,
  TjContainer,
  TjDatePicker,
  TjDialog,
  TjDivider,
  TjDrawer,
  TjDropdown,
  TjDropdownItem,
  TjDropdownMenu,
  TjFooter,
  TjForm,
  TjFormItem,
  TjHeader,
  TjIcon,
  TjImage,
  TjInput,
  TjInputNumber,
  TjLink,
  TjMain,
  TjMenu,
  TjMenuItem,
  TjMenuItemGroup,
  TjOption,
  TjOptionGroup,
  TjPageHeader,
  TjPagination,
  TjPopconfirm,
  TjPopover,
  TjPopper,
  TjProgress,
  TjRadio,
  TjRadioButton,
  TjRadioGroup,
  TjRate,
  TjRow,
  TjScrollbar,
  TjSelect,
  TjSlider,
  TjStep,
  TjSteps,
  TjSubmenu,
  TjSwitch,
  TjTabPane,
  TjTable,
  TjTableColumn,
  TjTabs,
  TjTag,
  TjTimePicker,
  TjTimeSelect,
  TjTimeline,
  TjTimelineItem,
  TjTooltip,
  TjTransfer,
  TjTree,
  TjUpload,
]

const plugins = [
  TjInfiniteScroll,
  TjLoading,
  TjMessage,
  TjMessageBox,
  TjNotification,
]

const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
})

plugins.forEach(plugin => {
  app.use(plugin)
})
```

### Configuración global

Cuando importa Element, puede definir un objeto global de configuración. Por ahora este elemento solo contiene dos propiedades: `size`, `zIndex`. `size` define el tamaño por defecto de todos los componentes.

La propiedad `zIndex` indica el z-index inicial (por defecto: 2000) para los modal:

Importando Tongjiao UI completamente：

```js
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
```

Importando Tongjiao UI parcialmente：

```js
import { createApp } from 'vue'
import { TjButton } from 'element-plus'
import App from './App.vue'

const app = createApp(App)
app.config.globalProperties.$ELEMENT = option
app.use(TjButton)
```

Con la anterior configuración, el tamaño por defecto de todos los componentes que tienen el atributo `size` será `small`. Tj valor inicial de z-index para los modals se ha establecido a 3000.

### Empiece ya!

Ahora ha incorporado Vue y Tongjiao UI a su proyecto y es el momento para comenzar a programar. Por favor, refiérase a la documentación de cada componente para aprender cómo usarlos.

### Use Nuxt.js

También podemos comenzar un proyecto usando [Nuxt.js](nuxtjs.org):

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe src="https://glitch.com/embed/#!/embed/nuxt-with-element?path=nuxt.config.js&previewSize=0&attributionHidden=true" alt="nuxt-with-element on glitch" style="height: 100%; width: 100%; border: 0;"></iframe>
</div>
