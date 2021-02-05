## クイックスタート

このパートでは、webpack プロジェクトで Tongjiao UI を用いた開発プロセスを説明します。

### vue-cli@4.5 を使う

私達は vue-cli@4.5 のために [Tongjiao UI plugin](https://github.com/tongjiaoui-plus/vue-cli-plugin-tongjiaoui-plus) 提供しており, 簡単に Tongjiao UI ベースのプロジェクトを構築出来ます。

### スターターキットを使う

私達は一般的なツール[project template](https://github.com/tongjiaoui-plus/tongjiaoui-plus-starter) があります。 直接ダウンロードして使うことが出来ます。

これらのツールを使いたくない場合は、以下の記事を御覧ください。

### Tongjiao UI をインポートする

Tongjiao UI を完全にインポートすることも、必要なものだけをインポートすることもできます。完全なインポートから始めましょう。

#### 完全にインポートした場合

main.js:

```javascript
import { createApp } from 'vue'
import TongjiaoUIPlus from 'tongjiaoui-plus'
import 'tongjiaoui-plus/lib/theme-chalk/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(TongjiaoUIPlus)
app.mount('#app')
```

上記のコードは完全に Tongjiao UI をインポートします。CSS ファイルは個別にインポートする必要があることを注意してください。

#### オンデマンド

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) を用いて、 必要な分のコンポーネントをインポートし、プロジェクトをより小さくすることが出来ます。

はじめに、babel-plugin-import をインストール:

```bash
npm install babel-plugin-import -D
```

つぎに babel.config.js を編集します:

```js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'tongjiaoui-plus',
        customStyleName: name => {
          // `customStyleName` が存在するため、`style: true` は有効になりません。
          // そのため、`.scss` のソースファイルを使いたい場合は、拡張子を `.css` から `.scss` に置き換えるだけです。
          return `tongjiaoui-plus/lib/theme-chalk/${name}.css`
        },
      },
    ],
  ],
}
```

次に、ボタンとセレクトが必要な場合、main.js を編集します:

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

全ての例 (コンポーネントリストのリファレンスは [reference](https://github.com/tongjiaoui-plus/tongjiaoui-plus/tree/dev/packages) を御覧ください)

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

### グローバルコンフィグ

Tjenent をインポートする際、グローバルコンフィグオブジェクトを定義出来ます。現時点では 2 つのプロパティ: `size` と `zIndex` があります。 プロパティ `size` はすべてのコンポーネントのデフォルトサイズ、プロパティ `zIndex` はモーダルボックスの初期の z-index (デフォルト: 2000) を設定します。

Tongjiao UI を完全にインポート：

```js
import { createApp } from 'vue'
import TongjiaoUIPlus from 'tongjiaoui-plus'
import App from './App.vue'

const app = createApp(App)
app.use(TongjiaoUIPlus, { size: 'small', zIndex: 3000 })
```

Tongjiao UI を部分的にインポート：

```js
import { createApp } from 'vue'
import { TjButton } from 'tongjiaoui-plus'
import App from './App.vue'

const app = createApp(App)
app.config.globalProperties.$ELEMENT = option
app.use(TjButton)
```

上記の設定では、size 属性を持つすべてのコンポーネントのデフォルトのサイズは `small`、モーダルボックスのデフォルト値 `z-index` は 3000 となります。

### コーディングを始めましょう

プロジェクトに Vue と Tongjiao UI を実装したので、いよいよコードを書く時が来ました。使用方法については、各コンポーネントのドキュメントを参照してください。

### Nuxt.js を使う

[Nuxt.js](https://nuxtjs.org/) を使ってプロジェクトを立ち上げることも出来ます:

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe src="https://glitch.com/embed/#!/embed/nuxt-with-element?path=nuxt.config.js&previewSize=0&attributionHidden=true" alt="nuxt-with-element on glitch" style="height: 100%; width: 100%; border: 0;"></iframe>
</div>
