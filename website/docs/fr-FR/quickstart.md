## Démarrer

Cette page vous guidera tout le long de l'installation d'Tongjiao UI au sein d'un projet webpack.

### Use vue-cli@4.5

Nous fournissons un [plugin Element](https://github.com/tongjiaoui-plus/vue-cli-plugin-tongjiaoui-plus) pour vue-cli@4.5, que vous pouvez utiliser pour créer rapidement un projet basé sur Element.

### Utiliser le Starter Kit

Nous fournissons un [template de projet](https://github.com/tongjiaoui-plus/tongjiaoui-plus-starter) pour débuter rapidement, and also a Vite [template](https://github.com/tongjiaoui-plus/tongjiaoui-plus-vite-starter). Pour les utilisateurs Laravel, il est aussi possible d'utiliser ce [template](https://github.com/tongjiaoui-plus/tongjiaoui-plus-in-laravel-starter). VOus pouvez les télécharger directement.

Si vous préférer vous passer de template, voyez la section suivante.

### Importer Tongjiao UI

Tongjiao UI peut être importé entièrement ou à la demande. Commençons par l'import total.

#### Import total

Dans main.js:

```javascript
import { createApp } from 'vue'
import TongjiaoUIPlus from 'tongjiaoui-plus'
import 'tongjiaoui-plus/lib/theme-chalk/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(TongjiaoUIPlus)
app.mount('#app')
```

L'exemple ci-dessus importe Tongjiao UI entièrement. Notez que les fichiers CSS doivent être importés séparément.

#### À la demande

Grâce au [babel-plugin-import](https://github.com/ant-design/babel-plugin-import), nous pouvons importer uniquement les composants désirés, rendant ainsi le projet plus léger.

Tout d'abord, installez babel-plugin-import:

```bash
npm install babel-plugin-import -D
```

Puis éditez babel.config.js:

```js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'tongjiaoui-plus',
        customStyleName: name => {
          // En raison de l'existence de "customStyleName", "style : true" ne sera pas efficace.
          // Donc si vous voulez utiliser le fichier source `.scss`, il vous suffit de remplacer le nom de l'extension `.css` par `.scss`.
          return `tongjiaoui-plus/lib/theme-chalk/${name}.css`
        },
      },
    ],
  ],
}
```

Ensuite, si vous n'avez besoin que de Button et Select, éditez main.js comme suit:

```javascript
import { createApp } from 'vue'
import { TjButton, TjSelect } from 'tongjiaoui-plus'
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

Exemple complet (liste complète des composants dans [reference](https://github.com/tongjiaoui-plus/tongjiaoui-plus/tree/dev/packages)):

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
} from 'tongjiaoui-plus'

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

### Configuration globale

Lors de l'import d'Element, vous pouvez définir un objet de configuration global. Actuellement il possède de propriétés: `size` et `zIndex`. La propriété `size` détermine la taille par défaut de tout les composants et `zIndex` règle le z-index initial (default: 2000) des fenêtres modales:

Import total d'Element：

```js
import { createApp } from 'vue'
import TongjiaoUIPlus from 'tongjiaoui-plus'
import App from './App.vue'

const app = createApp(App)
app.use(TongjiaoUIPlus, { size: 'small', zIndex: 3000 })
```

Import partiel d'Element：

```js
import { createApp } from 'vue'
import { TjButton } from 'tongjiaoui-plus'
import App from './App.vue'

const app = createApp(App)
app.config.globalProperties.$ELEMENT = option
app.use(TjButton)
```

Avec la configuration ci-dessus, la taille par défaut des composants ayant l'attribut size sera 'small', et le z-index initial des fenêtres modales est 3000.

### Commencer à développer

Maintenant que vous avez ajouté Vue et Tongjiao UI à votre projet, vous pouvez commencer à coder. Référez-vous à la documentation de chaque composant pour savoir comment les utiliser.

### Utiliser Nuxt.js

Vous pouvez également commencer un projet avec [Nuxt.js](https://nuxtjs.org/):

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe src="https://glitch.com/embed/#!/embed/nuxt-with-element?path=nuxt.config.js&previewSize=0&attributionHidden=true" alt="nuxt-with-element on glitch" style="height: 100%; width: 100%; border: 0;"></iframe>
</div>
