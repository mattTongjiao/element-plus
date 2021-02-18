## Quick start

This part walks you through the process of using Tongjiao UI in a webpack project.

### Use vue-cli@4.5

We provide an [Tongjiao UI plugin](https://github.com/tongjiaoui-plus/vue-cli-plugin-tongjiaoui-plus) for vue-cli@4.5, which you can use to quickly build an Element-based project.

### Use Starter Kit

We provide a general [project template](https://github.com/tongjiaoui-plus/tongjiaoui-plus-starter) for you, and also a Vite [template](https://github.com/tongjiaoui-plus/tongjiaoui-plus-vite-starter). For Laravel users, we have a [template](https://github.com/tongjiaoui-plus/tongjiaoui-plus-in-laravel-starter) here. You can download and use them directly.

If you prefer not to use them, please read the following.

### Import Tongjiao UI

You can import TongjiaoUIPlus entirely, or just import what you need. Let's start with fully import.

#### Fully import

In main.js:

```javascript
import { createApp } from 'vue'
import TongjiaoUIPlus from 'tongjiaoui-plus'
import 'tongjiaoui-plus/lib/theme-chalk/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(TongjiaoUIPlus)
app.mount('#app')
```

The above imports Tongjiao UI entirely. Note that CSS file needs to be imported separately.

#### On demand

With the help of [babel-plugin-import](https://github.com/ant-design/babel-plugin-import), we can import components we actually need, making the project smaller than otherwise.

Firstly，install babel-plugin-import:

```bash
$ npm install babel-plugin-import -D
```

or if you use `Yarn` as package manager

```bash
$ yarn add babel-plugin-import -D
```

Then edit babel.config.js:

```js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'tongjiaoui-plus',
        customStyleName: name => {
          // Because of the existence of `customStyleName`, `style: true` will not be effective.
          // So if you want to use the `.scss` source file, you only need to replace the extension name from `.css` to `.scss`
          return `tongjiaoui-plus/lib/theme-chalk/${name}.css`
        },
      },
    ],
  ],
}
```

Next, if you need Button and Select, edit main.js:

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

Full example (Component list [reference](https://github.com/tongjiaoui-plus/tongjiaoui-plus/tree/dev/packages))

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

### Global config

When importing Element, you can define a global config object. For now this object has two properties: `size` and `zIndex`. The property `size` sets the default size for all components and the property `zIndex` sets the initial z-index (default: 2000) for modal boxes:

Fully import Element：

```js
import { createApp } from 'vue'
import TongjiaoUIPlus from 'tongjiaoui-plus'
import App from './App.vue'

const app = createApp(App)
app.use(TongjiaoUIPlus, { size: 'small', zIndex: 3000 })
```

Partial import Element：

```js
import { createApp } from 'vue'
import { TjButton } from 'tongjiaoui-plus'
import App from './App.vue'

const app = createApp(App)
app.config.globalProperties.$ELEMENT = option
app.use(TjButton)
```

With the above config, the default size of all components that have size attribute will be 'small', and the initial z-index of modal boxes is 3000.

### Start coding

Now you have implemented Vue and Tongjiao UI to your project, and it's time to write your code. Please refer to each component's documentation to learn how to use them.

### Use Nuxt.js

We can also start a project using [Nuxt.js](https://nuxtjs.org/):

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe src="https://glitch.com/embed/#!/embed/nuxt-with-element?path=nuxt.config.js&previewSize=0&attributionHidden=true" alt="nuxt-with-element on glitch" style="height: 100%; width: 100%; border: 0;"></iframe>
</div>
