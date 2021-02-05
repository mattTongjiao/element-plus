## Cascader(カスケード)

オプションが明確な階層構造になっている場合は、Cascader を使って表示したり選択したりすることができます。

### 基本的な使い方

子要素のオプション項目を拡張するには 2 つの方法があります。

:::demo オプションの配列に `options` 属性を代入すると、cascader をレンダリングします。`props.expandTrigger` 属性は、子オプションがどのように展開されるかを定義します。

```html
<div class="block">
  <span class="demonstration"
    >クリックすると子オプションが展開される(デフォルト)</span
  >
  <tj-cascader
    v-model="value"
    :options="options"
    @change="handleChange"
  ></tj-cascader>
</div>
<div class="block">
  <span class="demonstration">ホバーすると子のオプションが拡張される</span>
  <tj-cascader
    v-model="value"
    :options="options"
    :props="{ expandTrigger: 'hover' }"
    @change="handleChange"
  ></tj-cascader>
</div>

<script>
  export default {
    data() {
      return {
        value: [],
        options: [
          {
            value: 'guide',
            label: 'Guide',
            children: [
              {
                value: 'disciplines',
                label: 'Disciplines',
                children: [
                  {
                    value: 'consistency',
                    label: 'Consistency',
                  },
                  {
                    value: 'feedback',
                    label: 'Feedback',
                  },
                  {
                    value: 'efficiency',
                    label: 'Efficiency',
                  },
                  {
                    value: 'controllability',
                    label: 'Controllability',
                  },
                ],
              },
              {
                value: 'navigation',
                label: 'Navigation',
                children: [
                  {
                    value: 'side nav',
                    label: 'Side Navigation',
                  },
                  {
                    value: 'top nav',
                    label: 'Top Navigation',
                  },
                ],
              },
            ],
          },
          {
            value: 'component',
            label: 'Component',
            children: [
              {
                value: 'basic',
                label: 'Basic',
                children: [
                  {
                    value: 'layout',
                    label: 'Layout',
                  },
                  {
                    value: 'color',
                    label: 'Color',
                  },
                  {
                    value: 'typography',
                    label: 'Typography',
                  },
                  {
                    value: 'icon',
                    label: 'Icon',
                  },
                  {
                    value: 'button',
                    label: 'Button',
                  },
                ],
              },
              {
                value: 'form',
                label: 'Form',
                children: [
                  {
                    value: 'radio',
                    label: 'Radio',
                  },
                  {
                    value: 'checkbox',
                    label: 'Checkbox',
                  },
                  {
                    value: 'input',
                    label: 'Input',
                  },
                  {
                    value: 'input-number',
                    label: 'InputNumber',
                  },
                  {
                    value: 'select',
                    label: 'Select',
                  },
                  {
                    value: 'cascader',
                    label: 'Cascader',
                  },
                  {
                    value: 'switch',
                    label: 'Switch',
                  },
                  {
                    value: 'slider',
                    label: 'Slider',
                  },
                  {
                    value: 'time-picker',
                    label: 'TimePicker',
                  },
                  {
                    value: 'date-picker',
                    label: 'DatePicker',
                  },
                  {
                    value: 'datetime-picker',
                    label: 'DateTimePicker',
                  },
                  {
                    value: 'upload',
                    label: 'Upload',
                  },
                  {
                    value: 'rate',
                    label: 'Rate',
                  },
                  {
                    value: 'form',
                    label: 'Form',
                  },
                ],
              },
              {
                value: 'data',
                label: 'Data',
                children: [
                  {
                    value: 'table',
                    label: 'Table',
                  },
                  {
                    value: 'tag',
                    label: 'Tag',
                  },
                  {
                    value: 'progress',
                    label: 'Progress',
                  },
                  {
                    value: 'tree',
                    label: 'Tree',
                  },
                  {
                    value: 'pagination',
                    label: 'Pagination',
                  },
                  {
                    value: 'badge',
                    label: 'Badge',
                  },
                ],
              },
              {
                value: 'notice',
                label: 'Notice',
                children: [
                  {
                    value: 'alert',
                    label: 'Alert',
                  },
                  {
                    value: 'loading',
                    label: 'Loading',
                  },
                  {
                    value: 'message',
                    label: 'Message',
                  },
                  {
                    value: 'message-box',
                    label: 'MessageBox',
                  },
                  {
                    value: 'notification',
                    label: 'Notification',
                  },
                ],
              },
              {
                value: 'navigation',
                label: 'Navigation',
                children: [
                  {
                    value: 'menu',
                    label: 'NavMenu',
                  },
                  {
                    value: 'tabs',
                    label: 'Tabs',
                  },
                  {
                    value: 'breadcrumb',
                    label: 'Breadcrumb',
                  },
                  {
                    value: 'dropdown',
                    label: 'Dropdown',
                  },
                  {
                    value: 'steps',
                    label: 'Steps',
                  },
                ],
              },
              {
                value: 'others',
                label: 'Others',
                children: [
                  {
                    value: 'dialog',
                    label: 'Dialog',
                  },
                  {
                    value: 'tooltip',
                    label: 'Tooltip',
                  },
                  {
                    value: 'popover',
                    label: 'Popover',
                  },
                  {
                    value: 'card',
                    label: 'Card',
                  },
                  {
                    value: 'carousel',
                    label: 'Carousel',
                  },
                  {
                    value: 'collapse',
                    label: 'Collapse',
                  },
                ],
              },
            ],
          },
          {
            value: 'resource',
            label: 'Resource',
            children: [
              {
                value: 'axure',
                label: 'Axure Components',
              },
              {
                value: 'sketch',
                label: 'Sketch Templates',
              },
              {
                value: 'docs',
                label: 'Design Documentation',
              },
            ],
          },
        ],
      }
    },
    methods: {
      handleChange(value) {
        console.log(value)
      },
    },
  }
</script>
```

:::

### 無効化されたオプション

オプションオブジェクトに `disabled` フィールドを設定することで、オプションを無効にします。

:::demo この例では、`options` 配列の最初の項目に `disabled: true` フィールドがあるので、無効になっています。デフォルトでは、Cascader は各オプションオブジェクトの `disabled` フィールドをチェックします。オプションが無効かどうかを示すために別のフィールド名を使用している場合は、`props.disabled` 属性にそれを割り当てることができます (詳細は以下の API テーブルを参照してください)。もちろん、フィールド名 `value`、`label`、`children` も同様にカスタマイズすることができます。

```html
<tj-cascader :options="options"></tj-cascader>

<script>
  export default {
    data() {
      return {
        options: [
          {
            value: 'guide',
            label: 'Guide',
            disabled: true,
            children: [
              {
                value: 'disciplines',
                label: 'Disciplines',
                children: [
                  {
                    value: 'consistency',
                    label: 'Consistency',
                  },
                  {
                    value: 'feedback',
                    label: 'Feedback',
                  },
                  {
                    value: 'efficiency',
                    label: 'Efficiency',
                  },
                  {
                    value: 'controllability',
                    label: 'Controllability',
                  },
                ],
              },
              {
                value: 'navigation',
                label: 'Navigation',
                children: [
                  {
                    value: 'side nav',
                    label: 'Side Navigation',
                  },
                  {
                    value: 'top nav',
                    label: 'Top Navigation',
                  },
                ],
              },
            ],
          },
          {
            value: 'component',
            label: 'Component',
            children: [
              {
                value: 'basic',
                label: 'Basic',
                children: [
                  {
                    value: 'layout',
                    label: 'Layout',
                  },
                  {
                    value: 'color',
                    label: 'Color',
                  },
                  {
                    value: 'typography',
                    label: 'Typography',
                  },
                  {
                    value: 'icon',
                    label: 'Icon',
                  },
                  {
                    value: 'button',
                    label: 'Button',
                  },
                ],
              },
              {
                value: 'form',
                label: 'Form',
                children: [
                  {
                    value: 'radio',
                    label: 'Radio',
                  },
                  {
                    value: 'checkbox',
                    label: 'Checkbox',
                  },
                  {
                    value: 'input',
                    label: 'Input',
                  },
                  {
                    value: 'input-number',
                    label: 'InputNumber',
                  },
                  {
                    value: 'select',
                    label: 'Select',
                  },
                  {
                    value: 'cascader',
                    label: 'Cascader',
                  },
                  {
                    value: 'switch',
                    label: 'Switch',
                  },
                  {
                    value: 'slider',
                    label: 'Slider',
                  },
                  {
                    value: 'time-picker',
                    label: 'TimePicker',
                  },
                  {
                    value: 'date-picker',
                    label: 'DatePicker',
                  },
                  {
                    value: 'datetime-picker',
                    label: 'DateTimePicker',
                  },
                  {
                    value: 'upload',
                    label: 'Upload',
                  },
                  {
                    value: 'rate',
                    label: 'Rate',
                  },
                  {
                    value: 'form',
                    label: 'Form',
                  },
                ],
              },
              {
                value: 'data',
                label: 'Data',
                children: [
                  {
                    value: 'table',
                    label: 'Table',
                  },
                  {
                    value: 'tag',
                    label: 'Tag',
                  },
                  {
                    value: 'progress',
                    label: 'Progress',
                  },
                  {
                    value: 'tree',
                    label: 'Tree',
                  },
                  {
                    value: 'pagination',
                    label: 'Pagination',
                  },
                  {
                    value: 'badge',
                    label: 'Badge',
                  },
                ],
              },
              {
                value: 'notice',
                label: 'Notice',
                children: [
                  {
                    value: 'alert',
                    label: 'Alert',
                  },
                  {
                    value: 'loading',
                    label: 'Loading',
                  },
                  {
                    value: 'message',
                    label: 'Message',
                  },
                  {
                    value: 'message-box',
                    label: 'MessageBox',
                  },
                  {
                    value: 'notification',
                    label: 'Notification',
                  },
                ],
              },
              {
                value: 'navigation',
                label: 'Navigation',
                children: [
                  {
                    value: 'menu',
                    label: 'NavMenu',
                  },
                  {
                    value: 'tabs',
                    label: 'Tabs',
                  },
                  {
                    value: 'breadcrumb',
                    label: 'Breadcrumb',
                  },
                  {
                    value: 'dropdown',
                    label: 'Dropdown',
                  },
                  {
                    value: 'steps',
                    label: 'Steps',
                  },
                ],
              },
              {
                value: 'others',
                label: 'Others',
                children: [
                  {
                    value: 'dialog',
                    label: 'Dialog',
                  },
                  {
                    value: 'tooltip',
                    label: 'Tooltip',
                  },
                  {
                    value: 'popover',
                    label: 'Popover',
                  },
                  {
                    value: 'card',
                    label: 'Card',
                  },
                  {
                    value: 'carousel',
                    label: 'Carousel',
                  },
                  {
                    value: 'collapse',
                    label: 'Collapse',
                  },
                ],
              },
            ],
          },
          {
            value: 'resource',
            label: 'Resource',
            children: [
              {
                value: 'axure',
                label: 'Axure Components',
              },
              {
                value: 'sketch',
                label: 'Sketch Templates',
              },
              {
                value: 'docs',
                label: 'Design Documentation',
              },
            ],
          },
        ],
      }
    },
  }
</script>
```

:::

### クリア可能

`tj-cascader` に `clearable` 属性を設定すると、選択してホバリングしたときにクリアアイコンが表示されるようになります。

:::demo

```html
<tj-cascader :options="options" clearable></tj-cascader>

<script>
  export default {
    data() {
      return {
        options: [
          {
            value: 'guide',
            label: 'Guide',
            children: [
              {
                value: 'disciplines',
                label: 'Disciplines',
                children: [
                  {
                    value: 'consistency',
                    label: 'Consistency',
                  },
                  {
                    value: 'feedback',
                    label: 'Feedback',
                  },
                  {
                    value: 'efficiency',
                    label: 'Efficiency',
                  },
                  {
                    value: 'controllability',
                    label: 'Controllability',
                  },
                ],
              },
              {
                value: 'navigation',
                label: 'Navigation',
                children: [
                  {
                    value: 'side nav',
                    label: 'Side Navigation',
                  },
                  {
                    value: 'top nav',
                    label: 'Top Navigation',
                  },
                ],
              },
            ],
          },
          {
            value: 'component',
            label: 'Component',
            children: [
              {
                value: 'basic',
                label: 'Basic',
                children: [
                  {
                    value: 'layout',
                    label: 'Layout',
                  },
                  {
                    value: 'color',
                    label: 'Color',
                  },
                  {
                    value: 'typography',
                    label: 'Typography',
                  },
                  {
                    value: 'icon',
                    label: 'Icon',
                  },
                  {
                    value: 'button',
                    label: 'Button',
                  },
                ],
              },
              {
                value: 'form',
                label: 'Form',
                children: [
                  {
                    value: 'radio',
                    label: 'Radio',
                  },
                  {
                    value: 'checkbox',
                    label: 'Checkbox',
                  },
                  {
                    value: 'input',
                    label: 'Input',
                  },
                  {
                    value: 'input-number',
                    label: 'InputNumber',
                  },
                  {
                    value: 'select',
                    label: 'Select',
                  },
                  {
                    value: 'cascader',
                    label: 'Cascader',
                  },
                  {
                    value: 'switch',
                    label: 'Switch',
                  },
                  {
                    value: 'slider',
                    label: 'Slider',
                  },
                  {
                    value: 'time-picker',
                    label: 'TimePicker',
                  },
                  {
                    value: 'date-picker',
                    label: 'DatePicker',
                  },
                  {
                    value: 'datetime-picker',
                    label: 'DateTimePicker',
                  },
                  {
                    value: 'upload',
                    label: 'Upload',
                  },
                  {
                    value: 'rate',
                    label: 'Rate',
                  },
                  {
                    value: 'form',
                    label: 'Form',
                  },
                ],
              },
              {
                value: 'data',
                label: 'Data',
                children: [
                  {
                    value: 'table',
                    label: 'Table',
                  },
                  {
                    value: 'tag',
                    label: 'Tag',
                  },
                  {
                    value: 'progress',
                    label: 'Progress',
                  },
                  {
                    value: 'tree',
                    label: 'Tree',
                  },
                  {
                    value: 'pagination',
                    label: 'Pagination',
                  },
                  {
                    value: 'badge',
                    label: 'Badge',
                  },
                ],
              },
              {
                value: 'notice',
                label: 'Notice',
                children: [
                  {
                    value: 'alert',
                    label: 'Alert',
                  },
                  {
                    value: 'loading',
                    label: 'Loading',
                  },
                  {
                    value: 'message',
                    label: 'Message',
                  },
                  {
                    value: 'message-box',
                    label: 'MessageBox',
                  },
                  {
                    value: 'notification',
                    label: 'Notification',
                  },
                ],
              },
              {
                value: 'navigation',
                label: 'Navigation',
                children: [
                  {
                    value: 'menu',
                    label: 'NavMenu',
                  },
                  {
                    value: 'tabs',
                    label: 'Tabs',
                  },
                  {
                    value: 'breadcrumb',
                    label: 'Breadcrumb',
                  },
                  {
                    value: 'dropdown',
                    label: 'Dropdown',
                  },
                  {
                    value: 'steps',
                    label: 'Steps',
                  },
                ],
              },
              {
                value: 'others',
                label: 'Others',
                children: [
                  {
                    value: 'dialog',
                    label: 'Dialog',
                  },
                  {
                    value: 'tooltip',
                    label: 'Tooltip',
                  },
                  {
                    value: 'popover',
                    label: 'Popover',
                  },
                  {
                    value: 'card',
                    label: 'Card',
                  },
                  {
                    value: 'carousel',
                    label: 'Carousel',
                  },
                  {
                    value: 'collapse',
                    label: 'Collapse',
                  },
                ],
              },
            ],
          },
          {
            value: 'resource',
            label: 'Resource',
            children: [
              {
                value: 'axure',
                label: 'Axure Components',
              },
              {
                value: 'sketch',
                label: 'Sketch Templates',
              },
              {
                value: 'docs',
                label: 'Design Documentation',
              },
            ],
          },
        ],
      }
    },
  }
</script>
```

:::

### 最後のレベルのみ表示

入力では、すべてのレベルを表示するのではなく、最後のレベルのみを表示することができます。

:::demo `show-all-levels` 属性は、すべてのレベルを表示するかどうかを定義する。`false` の場合、最後のレベルのみが表示される。

```html
<tj-cascader :options="options" :show-all-levels="false"></tj-cascader>
<script>
  export default {
    data() {
      return {
        options: [
          {
            value: 'guide',
            label: 'Guide',
            children: [
              {
                value: 'disciplines',
                label: 'Disciplines',
                children: [
                  {
                    value: 'consistency',
                    label: 'Consistency',
                  },
                  {
                    value: 'feedback',
                    label: 'Feedback',
                  },
                  {
                    value: 'efficiency',
                    label: 'Efficiency',
                  },
                  {
                    value: 'controllability',
                    label: 'Controllability',
                  },
                ],
              },
              {
                value: 'navigation',
                label: 'Navigation',
                children: [
                  {
                    value: 'side nav',
                    label: 'Side Navigation',
                  },
                  {
                    value: 'top nav',
                    label: 'Top Navigation',
                  },
                ],
              },
            ],
          },
          {
            value: 'component',
            label: 'Component',
            children: [
              {
                value: 'basic',
                label: 'Basic',
                children: [
                  {
                    value: 'layout',
                    label: 'Layout',
                  },
                  {
                    value: 'color',
                    label: 'Color',
                  },
                  {
                    value: 'typography',
                    label: 'Typography',
                  },
                  {
                    value: 'icon',
                    label: 'Icon',
                  },
                  {
                    value: 'button',
                    label: 'Button',
                  },
                ],
              },
              {
                value: 'form',
                label: 'Form',
                children: [
                  {
                    value: 'radio',
                    label: 'Radio',
                  },
                  {
                    value: 'checkbox',
                    label: 'Checkbox',
                  },
                  {
                    value: 'input',
                    label: 'Input',
                  },
                  {
                    value: 'input-number',
                    label: 'InputNumber',
                  },
                  {
                    value: 'select',
                    label: 'Select',
                  },
                  {
                    value: 'cascader',
                    label: 'Cascader',
                  },
                  {
                    value: 'switch',
                    label: 'Switch',
                  },
                  {
                    value: 'slider',
                    label: 'Slider',
                  },
                  {
                    value: 'time-picker',
                    label: 'TimePicker',
                  },
                  {
                    value: 'date-picker',
                    label: 'DatePicker',
                  },
                  {
                    value: 'datetime-picker',
                    label: 'DateTimePicker',
                  },
                  {
                    value: 'upload',
                    label: 'Upload',
                  },
                  {
                    value: 'rate',
                    label: 'Rate',
                  },
                  {
                    value: 'form',
                    label: 'Form',
                  },
                ],
              },
              {
                value: 'data',
                label: 'Data',
                children: [
                  {
                    value: 'table',
                    label: 'Table',
                  },
                  {
                    value: 'tag',
                    label: 'Tag',
                  },
                  {
                    value: 'progress',
                    label: 'Progress',
                  },
                  {
                    value: 'tree',
                    label: 'Tree',
                  },
                  {
                    value: 'pagination',
                    label: 'Pagination',
                  },
                  {
                    value: 'badge',
                    label: 'Badge',
                  },
                ],
              },
              {
                value: 'notice',
                label: 'Notice',
                children: [
                  {
                    value: 'alert',
                    label: 'Alert',
                  },
                  {
                    value: 'loading',
                    label: 'Loading',
                  },
                  {
                    value: 'message',
                    label: 'Message',
                  },
                  {
                    value: 'message-box',
                    label: 'MessageBox',
                  },
                  {
                    value: 'notification',
                    label: 'Notification',
                  },
                ],
              },
              {
                value: 'navigation',
                label: 'Navigation',
                children: [
                  {
                    value: 'menu',
                    label: 'NavMenu',
                  },
                  {
                    value: 'tabs',
                    label: 'Tabs',
                  },
                  {
                    value: 'breadcrumb',
                    label: 'Breadcrumb',
                  },
                  {
                    value: 'dropdown',
                    label: 'Dropdown',
                  },
                  {
                    value: 'steps',
                    label: 'Steps',
                  },
                ],
              },
              {
                value: 'others',
                label: 'Others',
                children: [
                  {
                    value: 'dialog',
                    label: 'Dialog',
                  },
                  {
                    value: 'tooltip',
                    label: 'Tooltip',
                  },
                  {
                    value: 'popover',
                    label: 'Popover',
                  },
                  {
                    value: 'card',
                    label: 'Card',
                  },
                  {
                    value: 'carousel',
                    label: 'Carousel',
                  },
                  {
                    value: 'collapse',
                    label: 'Collapse',
                  },
                ],
              },
            ],
          },
          {
            value: 'resource',
            label: 'Resource',
            children: [
              {
                value: 'axure',
                label: 'Axure Components',
              },
              {
                value: 'sketch',
                label: 'Sketch Templates',
              },
              {
                value: 'docs',
                label: 'Design Documentation',
              },
            ],
          },
        ],
      }
    },
  }
</script>
```

:::

### 複数選択

複数選択を使用するには `props.multiple = true` を設定する。

:::demo 複数選択の場合、デフォルトでは選択されたタグがすべて表示されます。選択したタグを折りたたむには、`collapse-tags = true` を設定することができます。

```html
<div class="block">
  <span class="demonstration">すべてのタグを表示する（デフォルト)</span>
  <tj-cascader :options="options" :props="props" clearable></tj-cascader>
</div>
<div class="block">
  <span class="demonstration">タグの折りたたみ</span>
  <tj-cascader
    :options="options"
    :props="props"
    collapse-tags
    clearable
  ></tj-cascader>
</div>

<script>
  export default {
    data() {
      return {
        props: { multiple: true },
        options: [
          {
            value: 1,
            label: 'Asia',
            children: [
              {
                value: 2,
                label: 'China',
                children: [
                  { value: 3, label: 'Beijing' },
                  { value: 4, label: 'Shanghai' },
                  { value: 5, label: 'Hangzhou' },
                ],
              },
              {
                value: 6,
                label: 'Japan',
                children: [
                  { value: 7, label: 'Tokyo' },
                  { value: 8, label: 'Osaka' },
                  { value: 9, label: 'Kyoto' },
                ],
              },
              {
                value: 10,
                label: 'Korea',
                children: [
                  { value: 11, label: 'Seoul' },
                  { value: 12, label: 'Busan' },
                  { value: 13, label: 'Taegu' },
                ],
              },
            ],
          },
          {
            value: 14,
            label: 'Europe',
            children: [
              {
                value: 15,
                label: 'France',
                children: [
                  { value: 16, label: 'Paris' },
                  { value: 17, label: 'Marseille' },
                  { value: 18, label: 'Lyon' },
                ],
              },
              {
                value: 19,
                label: 'UK',
                children: [
                  { value: 20, label: 'London' },
                  { value: 21, label: 'Birmingham' },
                  { value: 22, label: 'Manchester' },
                ],
              },
            ],
          },
          {
            value: 23,
            label: 'North America',
            children: [
              {
                value: 24,
                label: 'US',
                children: [
                  { value: 25, label: 'New York' },
                  { value: 26, label: 'Los Angeles' },
                  { value: 27, label: 'Washington' },
                ],
              },
              {
                value: 28,
                label: 'Canada',
                children: [
                  { value: 29, label: 'Toronto' },
                  { value: 30, label: 'Montreal' },
                  { value: 31, label: 'Ottawa' },
                ],
              },
            ],
          },
        ],
      }
    },
  }
</script>
```

:::

### オプションの任意のレベルを選択

単一選択の場合はリーフノードのみをチェックし、複数選択の場合は親ノードをチェックすることで最終的にリーフノードをチェックします。この機能を有効にすると、親ノードと子ノードのリンクを解除することができ、任意のレベルのオプションを選択することができます。

:::demo `props.checkStrictly = true` を設定すると、チェックしたノードの状態が親ノードや子ノードに影響を与えないようにすることができ、任意のレベルのオプションを選択することができます。

```html
<div class="block">
  <span class="demonstration">任意のレベルのオプションを選択（単一選択)</span>
  <tj-cascader
    :options="options"
    :props="{ checkStrictly: true }"
    clearable
  ></tj-cascader>
</div>
<div class="block">
  <span class="demonstration">任意のレベルのオプションを選択（複数選択)</span>
  <tj-cascader
    :options="options"
    :props="{ multiple: true, checkStrictly: true }"
    clearable
  ></tj-cascader>
</div>

<script>
  export default {
    data() {
      return {
        options: [
          {
            value: 'guide',
            label: 'Guide',
            children: [
              {
                value: 'disciplines',
                label: 'Disciplines',
                children: [
                  {
                    value: 'consistency',
                    label: 'Consistency',
                  },
                  {
                    value: 'feedback',
                    label: 'Feedback',
                  },
                  {
                    value: 'efficiency',
                    label: 'Efficiency',
                  },
                  {
                    value: 'controllability',
                    label: 'Controllability',
                  },
                ],
              },
              {
                value: 'navigation',
                label: 'Navigation',
                children: [
                  {
                    value: 'side nav',
                    label: 'Side Navigation',
                  },
                  {
                    value: 'top nav',
                    label: 'Top Navigation',
                  },
                ],
              },
            ],
          },
          {
            value: 'component',
            label: 'Component',
            children: [
              {
                value: 'basic',
                label: 'Basic',
                children: [
                  {
                    value: 'layout',
                    label: 'Layout',
                  },
                  {
                    value: 'color',
                    label: 'Color',
                  },
                  {
                    value: 'typography',
                    label: 'Typography',
                  },
                  {
                    value: 'icon',
                    label: 'Icon',
                  },
                  {
                    value: 'button',
                    label: 'Button',
                  },
                ],
              },
              {
                value: 'form',
                label: 'Form',
                children: [
                  {
                    value: 'radio',
                    label: 'Radio',
                  },
                  {
                    value: 'checkbox',
                    label: 'Checkbox',
                  },
                  {
                    value: 'input',
                    label: 'Input',
                  },
                  {
                    value: 'input-number',
                    label: 'InputNumber',
                  },
                  {
                    value: 'select',
                    label: 'Select',
                  },
                  {
                    value: 'cascader',
                    label: 'Cascader',
                  },
                  {
                    value: 'switch',
                    label: 'Switch',
                  },
                  {
                    value: 'slider',
                    label: 'Slider',
                  },
                  {
                    value: 'time-picker',
                    label: 'TimePicker',
                  },
                  {
                    value: 'date-picker',
                    label: 'DatePicker',
                  },
                  {
                    value: 'datetime-picker',
                    label: 'DateTimePicker',
                  },
                  {
                    value: 'upload',
                    label: 'Upload',
                  },
                  {
                    value: 'rate',
                    label: 'Rate',
                  },
                  {
                    value: 'form',
                    label: 'Form',
                  },
                ],
              },
              {
                value: 'data',
                label: 'Data',
                children: [
                  {
                    value: 'table',
                    label: 'Table',
                  },
                  {
                    value: 'tag',
                    label: 'Tag',
                  },
                  {
                    value: 'progress',
                    label: 'Progress',
                  },
                  {
                    value: 'tree',
                    label: 'Tree',
                  },
                  {
                    value: 'pagination',
                    label: 'Pagination',
                  },
                  {
                    value: 'badge',
                    label: 'Badge',
                  },
                ],
              },
              {
                value: 'notice',
                label: 'Notice',
                children: [
                  {
                    value: 'alert',
                    label: 'Alert',
                  },
                  {
                    value: 'loading',
                    label: 'Loading',
                  },
                  {
                    value: 'message',
                    label: 'Message',
                  },
                  {
                    value: 'message-box',
                    label: 'MessageBox',
                  },
                  {
                    value: 'notification',
                    label: 'Notification',
                  },
                ],
              },
              {
                value: 'navigation',
                label: 'Navigation',
                children: [
                  {
                    value: 'menu',
                    label: 'NavMenu',
                  },
                  {
                    value: 'tabs',
                    label: 'Tabs',
                  },
                  {
                    value: 'breadcrumb',
                    label: 'Breadcrumb',
                  },
                  {
                    value: 'dropdown',
                    label: 'Dropdown',
                  },
                  {
                    value: 'steps',
                    label: 'Steps',
                  },
                ],
              },
              {
                value: 'others',
                label: 'Others',
                children: [
                  {
                    value: 'dialog',
                    label: 'Dialog',
                  },
                  {
                    value: 'tooltip',
                    label: 'Tooltip',
                  },
                  {
                    value: 'popover',
                    label: 'Popover',
                  },
                  {
                    value: 'card',
                    label: 'Card',
                  },
                  {
                    value: 'carousel',
                    label: 'Carousel',
                  },
                  {
                    value: 'collapse',
                    label: 'Collapse',
                  },
                ],
              },
            ],
          },
          {
            value: 'resource',
            label: 'Resource',
            children: [
              {
                value: 'axure',
                label: 'Axure Components',
              },
              {
                value: 'sketch',
                label: 'Sketch Templates',
              },
              {
                value: 'docs',
                label: 'Design Documentation',
              },
            ],
          },
        ],
      }
    },
  }
</script>
```

:::

### 動的ローディング

ノードをチェックすると、その子ノードを動的にロードします。

:::demo 動的ロードを利用するには `lazy = true` を設定し、`lazyload` でデータソースのロード方法を指定する必要があります。パラメータ `lazyload` には 2 つのパラメータがあり、最初のパラメータ `node` は現在クリックされているノード、`resolve` はロードが完了したことを示すコールバックで、これを呼び出す必要があります。ノードの状態をより正確に表示するには、それがリーフノードであるかどうかを示すために `leaf` フィールドを追加します ( `props.leaf` で変更可能)。そうでない場合は、子ノードがあるかどうかで推測されます。

```html
<tj-cascader :props="props"></tj-cascader>

<script>
  let id = 0

  export default {
    data() {
      return {
        props: {
          lazy: true,
          lazyLoad(node, resolve) {
            const { level } = node
            setTimeout(() => {
              const nodes = Array.from({ length: level + 1 }).map(item => ({
                value: ++id,
                label: `Option - ${id}`,
                leaf: level >= 2,
              }))
              // Invoke `resolve` callback to return the child nodes data and indicate the loading is finished.
              resolve(nodes)
            }, 1000)
          },
        },
      }
    },
  }
</script>
```

:::

### フィルタリング可能

キーワードで検索してオプションを選択します。

:::demo `tj-cascader` に `filterable` を追加することでフィルタリングが可能になる。cascader は、ラベルまたは親のラベル(`show-all-levels`による)に入力キーワードが含まれているノードにマッチするようになります。もちろん、`filter-method`で検索ロジックをカスタマイズすることもできます。

```html
<div class="block">
  <span class="demonstration">Filterable (Single selection)</span>
  <tj-cascader
    placeholder="Try searchingL Guide"
    :options="options"
    filterable
  ></tj-cascader>
</div>
<div class="block">
  <span class="demonstration">Filterable (Multiple selection)</span>
  <tj-cascader
    placeholder="Try searchingL Guide"
    :options="options"
    :props="{ multiple: true }"
    filterable
  ></tj-cascader>
</div>

<script>
  export default {
    data() {
      return {
        options: [
          {
            value: 'guide',
            label: 'Guide',
            children: [
              {
                value: 'disciplines',
                label: 'Disciplines',
                children: [
                  {
                    value: 'consistency',
                    label: 'Consistency',
                  },
                  {
                    value: 'feedback',
                    label: 'Feedback',
                  },
                  {
                    value: 'efficiency',
                    label: 'Efficiency',
                  },
                  {
                    value: 'controllability',
                    label: 'Controllability',
                  },
                ],
              },
              {
                value: 'navigation',
                label: 'Navigation',
                children: [
                  {
                    value: 'side nav',
                    label: 'Side Navigation',
                  },
                  {
                    value: 'top nav',
                    label: 'Top Navigation',
                  },
                ],
              },
            ],
          },
          {
            value: 'component',
            label: 'Component',
            children: [
              {
                value: 'basic',
                label: 'Basic',
                children: [
                  {
                    value: 'layout',
                    label: 'Layout',
                  },
                  {
                    value: 'color',
                    label: 'Color',
                  },
                  {
                    value: 'typography',
                    label: 'Typography',
                  },
                  {
                    value: 'icon',
                    label: 'Icon',
                  },
                  {
                    value: 'button',
                    label: 'Button',
                  },
                ],
              },
              {
                value: 'form',
                label: 'Form',
                children: [
                  {
                    value: 'radio',
                    label: 'Radio',
                  },
                  {
                    value: 'checkbox',
                    label: 'Checkbox',
                  },
                  {
                    value: 'input',
                    label: 'Input',
                  },
                  {
                    value: 'input-number',
                    label: 'InputNumber',
                  },
                  {
                    value: 'select',
                    label: 'Select',
                  },
                  {
                    value: 'cascader',
                    label: 'Cascader',
                  },
                  {
                    value: 'switch',
                    label: 'Switch',
                  },
                  {
                    value: 'slider',
                    label: 'Slider',
                  },
                  {
                    value: 'time-picker',
                    label: 'TimePicker',
                  },
                  {
                    value: 'date-picker',
                    label: 'DatePicker',
                  },
                  {
                    value: 'datetime-picker',
                    label: 'DateTimePicker',
                  },
                  {
                    value: 'upload',
                    label: 'Upload',
                  },
                  {
                    value: 'rate',
                    label: 'Rate',
                  },
                  {
                    value: 'form',
                    label: 'Form',
                  },
                ],
              },
              {
                value: 'data',
                label: 'Data',
                children: [
                  {
                    value: 'table',
                    label: 'Table',
                  },
                  {
                    value: 'tag',
                    label: 'Tag',
                  },
                  {
                    value: 'progress',
                    label: 'Progress',
                  },
                  {
                    value: 'tree',
                    label: 'Tree',
                  },
                  {
                    value: 'pagination',
                    label: 'Pagination',
                  },
                  {
                    value: 'badge',
                    label: 'Badge',
                  },
                ],
              },
              {
                value: 'notice',
                label: 'Notice',
                children: [
                  {
                    value: 'alert',
                    label: 'Alert',
                  },
                  {
                    value: 'loading',
                    label: 'Loading',
                  },
                  {
                    value: 'message',
                    label: 'Message',
                  },
                  {
                    value: 'message-box',
                    label: 'MessageBox',
                  },
                  {
                    value: 'notification',
                    label: 'Notification',
                  },
                ],
              },
              {
                value: 'navigation',
                label: 'Navigation',
                children: [
                  {
                    value: 'menu',
                    label: 'NavMenu',
                  },
                  {
                    value: 'tabs',
                    label: 'Tabs',
                  },
                  {
                    value: 'breadcrumb',
                    label: 'Breadcrumb',
                  },
                  {
                    value: 'dropdown',
                    label: 'Dropdown',
                  },
                  {
                    value: 'steps',
                    label: 'Steps',
                  },
                ],
              },
              {
                value: 'others',
                label: 'Others',
                children: [
                  {
                    value: 'dialog',
                    label: 'Dialog',
                  },
                  {
                    value: 'tooltip',
                    label: 'Tooltip',
                  },
                  {
                    value: 'popover',
                    label: 'Popover',
                  },
                  {
                    value: 'card',
                    label: 'Card',
                  },
                  {
                    value: 'carousel',
                    label: 'Carousel',
                  },
                  {
                    value: 'collapse',
                    label: 'Collapse',
                  },
                ],
              },
            ],
          },
          {
            value: 'resource',
            label: 'Resource',
            children: [
              {
                value: 'axure',
                label: 'Axure Components',
              },
              {
                value: 'sketch',
                label: 'Sketch Templates',
              },
              {
                value: 'docs',
                label: 'Design Documentation',
              },
            ],
          },
        ],
      }
    },
  }
</script>
```

:::

### カスタムオプションの内容

cascader ノードの内容をカスタマイズすることができます。

:::demo `scoped slot`によって、cascader の内容をカスタマイズすることができます。スコープ内の `node` と `data` にアクセスすることができます。

```html
<tj-cascader :options="options">
  <template slot-scope="{ node, data }">
    <span>{{ data.label }}</span>
    <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
  </template>
</tj-cascader>

<script>
  export default {
    data() {
      return {
        options: [
          {
            value: 'guide',
            label: 'Guide',
            children: [
              {
                value: 'disciplines',
                label: 'Disciplines',
                children: [
                  {
                    value: 'consistency',
                    label: 'Consistency',
                  },
                  {
                    value: 'feedback',
                    label: 'Feedback',
                  },
                  {
                    value: 'efficiency',
                    label: 'Efficiency',
                  },
                  {
                    value: 'controllability',
                    label: 'Controllability',
                  },
                ],
              },
              {
                value: 'navigation',
                label: 'Navigation',
                children: [
                  {
                    value: 'side nav',
                    label: 'Side Navigation',
                  },
                  {
                    value: 'top nav',
                    label: 'Top Navigation',
                  },
                ],
              },
            ],
          },
          {
            value: 'component',
            label: 'Component',
            children: [
              {
                value: 'basic',
                label: 'Basic',
                children: [
                  {
                    value: 'layout',
                    label: 'Layout',
                  },
                  {
                    value: 'color',
                    label: 'Color',
                  },
                  {
                    value: 'typography',
                    label: 'Typography',
                  },
                  {
                    value: 'icon',
                    label: 'Icon',
                  },
                  {
                    value: 'button',
                    label: 'Button',
                  },
                ],
              },
              {
                value: 'form',
                label: 'Form',
                children: [
                  {
                    value: 'radio',
                    label: 'Radio',
                  },
                  {
                    value: 'checkbox',
                    label: 'Checkbox',
                  },
                  {
                    value: 'input',
                    label: 'Input',
                  },
                  {
                    value: 'input-number',
                    label: 'InputNumber',
                  },
                  {
                    value: 'select',
                    label: 'Select',
                  },
                  {
                    value: 'cascader',
                    label: 'Cascader',
                  },
                  {
                    value: 'switch',
                    label: 'Switch',
                  },
                  {
                    value: 'slider',
                    label: 'Slider',
                  },
                  {
                    value: 'time-picker',
                    label: 'TimePicker',
                  },
                  {
                    value: 'date-picker',
                    label: 'DatePicker',
                  },
                  {
                    value: 'datetime-picker',
                    label: 'DateTimePicker',
                  },
                  {
                    value: 'upload',
                    label: 'Upload',
                  },
                  {
                    value: 'rate',
                    label: 'Rate',
                  },
                  {
                    value: 'form',
                    label: 'Form',
                  },
                ],
              },
              {
                value: 'data',
                label: 'Data',
                children: [
                  {
                    value: 'table',
                    label: 'Table',
                  },
                  {
                    value: 'tag',
                    label: 'Tag',
                  },
                  {
                    value: 'progress',
                    label: 'Progress',
                  },
                  {
                    value: 'tree',
                    label: 'Tree',
                  },
                  {
                    value: 'pagination',
                    label: 'Pagination',
                  },
                  {
                    value: 'badge',
                    label: 'Badge',
                  },
                ],
              },
              {
                value: 'notice',
                label: 'Notice',
                children: [
                  {
                    value: 'alert',
                    label: 'Alert',
                  },
                  {
                    value: 'loading',
                    label: 'Loading',
                  },
                  {
                    value: 'message',
                    label: 'Message',
                  },
                  {
                    value: 'message-box',
                    label: 'MessageBox',
                  },
                  {
                    value: 'notification',
                    label: 'Notification',
                  },
                ],
              },
              {
                value: 'navigation',
                label: 'Navigation',
                children: [
                  {
                    value: 'menu',
                    label: 'NavMenu',
                  },
                  {
                    value: 'tabs',
                    label: 'Tabs',
                  },
                  {
                    value: 'breadcrumb',
                    label: 'Breadcrumb',
                  },
                  {
                    value: 'dropdown',
                    label: 'Dropdown',
                  },
                  {
                    value: 'steps',
                    label: 'Steps',
                  },
                ],
              },
              {
                value: 'others',
                label: 'Others',
                children: [
                  {
                    value: 'dialog',
                    label: 'Dialog',
                  },
                  {
                    value: 'tooltip',
                    label: 'Tooltip',
                  },
                  {
                    value: 'popover',
                    label: 'Popover',
                  },
                  {
                    value: 'card',
                    label: 'Card',
                  },
                  {
                    value: 'carousel',
                    label: 'Carousel',
                  },
                  {
                    value: 'collapse',
                    label: 'Collapse',
                  },
                ],
              },
            ],
          },
          {
            value: 'resource',
            label: 'Resource',
            children: [
              {
                value: 'axure',
                label: 'Axure Components',
              },
              {
                value: 'sketch',
                label: 'Sketch Templates',
              },
              {
                value: 'docs',
                label: 'Design Documentation',
              },
            ],
          },
        ],
      }
    },
  }
</script>
```

:::

### cascader パネル

`CascaderPanel` は `Cascader` のコアコンポーネントであり、単一選択、複数選択、動的読み込みなど様々な機能を持っています。

:::demo `tj-cascader` と同様に、`options` で代替オプションを設定したり、`props` で他の機能を有効にしたりすることができます。

```html
<tj-cascader-panel :options="options"></tj-cascader-panel>

<script>
  export default {
    data() {
      return {
        options: [
          {
            value: 'guide',
            label: 'Guide',
            children: [
              {
                value: 'disciplines',
                label: 'Disciplines',
                children: [
                  {
                    value: 'consistency',
                    label: 'Consistency',
                  },
                  {
                    value: 'feedback',
                    label: 'Feedback',
                  },
                  {
                    value: 'efficiency',
                    label: 'Efficiency',
                  },
                  {
                    value: 'controllability',
                    label: 'Controllability',
                  },
                ],
              },
              {
                value: 'navigation',
                label: 'Navigation',
                children: [
                  {
                    value: 'side nav',
                    label: 'Side Navigation',
                  },
                  {
                    value: 'top nav',
                    label: 'Top Navigation',
                  },
                ],
              },
            ],
          },
          {
            value: 'component',
            label: 'Component',
            children: [
              {
                value: 'basic',
                label: 'Basic',
                children: [
                  {
                    value: 'layout',
                    label: 'Layout',
                  },
                  {
                    value: 'color',
                    label: 'Color',
                  },
                  {
                    value: 'typography',
                    label: 'Typography',
                  },
                  {
                    value: 'icon',
                    label: 'Icon',
                  },
                  {
                    value: 'button',
                    label: 'Button',
                  },
                ],
              },
              {
                value: 'form',
                label: 'Form',
                children: [
                  {
                    value: 'radio',
                    label: 'Radio',
                  },
                  {
                    value: 'checkbox',
                    label: 'Checkbox',
                  },
                  {
                    value: 'input',
                    label: 'Input',
                  },
                  {
                    value: 'input-number',
                    label: 'InputNumber',
                  },
                  {
                    value: 'select',
                    label: 'Select',
                  },
                  {
                    value: 'cascader',
                    label: 'Cascader',
                  },
                  {
                    value: 'switch',
                    label: 'Switch',
                  },
                  {
                    value: 'slider',
                    label: 'Slider',
                  },
                  {
                    value: 'time-picker',
                    label: 'TimePicker',
                  },
                  {
                    value: 'date-picker',
                    label: 'DatePicker',
                  },
                  {
                    value: 'datetime-picker',
                    label: 'DateTimePicker',
                  },
                  {
                    value: 'upload',
                    label: 'Upload',
                  },
                  {
                    value: 'rate',
                    label: 'Rate',
                  },
                  {
                    value: 'form',
                    label: 'Form',
                  },
                ],
              },
              {
                value: 'data',
                label: 'Data',
                children: [
                  {
                    value: 'table',
                    label: 'Table',
                  },
                  {
                    value: 'tag',
                    label: 'Tag',
                  },
                  {
                    value: 'progress',
                    label: 'Progress',
                  },
                  {
                    value: 'tree',
                    label: 'Tree',
                  },
                  {
                    value: 'pagination',
                    label: 'Pagination',
                  },
                  {
                    value: 'badge',
                    label: 'Badge',
                  },
                ],
              },
              {
                value: 'notice',
                label: 'Notice',
                children: [
                  {
                    value: 'alert',
                    label: 'Alert',
                  },
                  {
                    value: 'loading',
                    label: 'Loading',
                  },
                  {
                    value: 'message',
                    label: 'Message',
                  },
                  {
                    value: 'message-box',
                    label: 'MessageBox',
                  },
                  {
                    value: 'notification',
                    label: 'Notification',
                  },
                ],
              },
              {
                value: 'navigation',
                label: 'Navigation',
                children: [
                  {
                    value: 'menu',
                    label: 'NavMenu',
                  },
                  {
                    value: 'tabs',
                    label: 'Tabs',
                  },
                  {
                    value: 'breadcrumb',
                    label: 'Breadcrumb',
                  },
                  {
                    value: 'dropdown',
                    label: 'Dropdown',
                  },
                  {
                    value: 'steps',
                    label: 'Steps',
                  },
                ],
              },
              {
                value: 'others',
                label: 'Others',
                children: [
                  {
                    value: 'dialog',
                    label: 'Dialog',
                  },
                  {
                    value: 'tooltip',
                    label: 'Tooltip',
                  },
                  {
                    value: 'popover',
                    label: 'Popover',
                  },
                  {
                    value: 'card',
                    label: 'Card',
                  },
                  {
                    value: 'carousel',
                    label: 'Carousel',
                  },
                  {
                    value: 'collapse',
                    label: 'Collapse',
                  },
                ],
              },
            ],
          },
          {
            value: 'resource',
            label: 'Resource',
            children: [
              {
                value: 'axure',
                label: 'Axure Components',
              },
              {
                value: 'sketch',
                label: 'Sketch Templates',
              },
              {
                value: 'docs',
                label: 'Design Documentation',
              },
            ],
          },
        ],
      }
    },
  }
</script>
```

:::

### Cascader 属性

| Attribute       | Description                                                                                                                                                                                                               | Type                    | Accepted Values       | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | --------------------- | ------- |
| value / v-model | バインディング値                                                                                                                                                                                                          | -                       | —                     | —       |
| options         | オプションのデータ、`Props`によって `value` と `label` のキーをカスタマイズすることができます。                                                                                                                           | array                   | —                     | —       |
| props           | 構成オプションについては、次の表を参照してください。                                                                                                                                                                      | object                  | —                     | —       |
| size            | インプットサイズ                                                                                                                                                                                                          | string                  | medium / small / mini | —       |
| placeholder     | インプットプレースホルダ                                                                                                                                                                                                  | string                  | —                     | Select  |
| disabled        | cascader が無効化されているかどうか                                                                                                                                                                                       | boolean                 | —                     | false   |
| clearable       | 選択値をクリアできるかどうか                                                                                                                                                                                              | boolean                 | —                     | false   |
| show-all-levels | 選択された値のすべてのレベルを入力に表示するかどうか                                                                                                                                                                      | boolean                 | —                     | true    |
| collapse-tags   | 複数選択モードでタグを折りたたむかどうか                                                                                                                                                                                  | boolean                 | -                     | false   |
| separator       | オプションラベルセパレーター                                                                                                                                                                                              | string                  | —                     | ' / '   |
| filterable      | オプションを検索できるかどうか                                                                                                                                                                                            | boolean                 | —                     | —       |
| filter-method   | 検索ロジックをカスタマイズ、最初のパラメータは `node`、2 番目のパラメータは `keyword` で、ヒットしたかどうかを示すブール値を返す必要があります。                                                                          | function(node, keyword) | -                     | -       |
| debounce        | フィルタキーワードを入力したときのデバウンスの遅延時間をミリ秒単位で指定します。                                                                                                                                          | number                  | —                     | 300     |
| before-filter   | フック関数を用いてフィルタリングを行う場合、フィルタリングしたい値をパラメータとしてフィルタリングを行う前に `false` を返します。`false` が返されるか、`Promise` が返され、拒否された場合、フィルタリングは中止されます。 | function(value)         | —                     | —       |
| popper-class    | cascader ロップダウンのカスタムクラス名                                                                                                                                                                                   | string                  | —                     | —       |

### Cascader イベント

| Event Name     | Description                                               | Parameters                                    |
| -------------- | --------------------------------------------------------- | --------------------------------------------- |
| change         | バインディング値が変更された場合にトリガされます。        | value                                         |
| expand-change  | 拡張オプションが変更された場合のトリガー                  | an array of the expanding node's parent nodes |
| blur           | cascader がぼやけたときにトリガー                         | (event: Event)                                |
| focus          | Cascader がフォーカスしたときにトリガー                   | (event: Event)                                |
| visible-change | ドロップダウンが表示/非表示になったときにトリガされます。 | true when it appears, and false otherwise     |
| remove-tag     | 複数選択モードでタグを削除した場合のトリガー              | the value of the tag which is removed         |

### Cascader メソッド

| Method Name     | Description                                | Parameters                                                                |
| --------------- | ------------------------------------------ | ------------------------------------------------------------------------- |
| getCheckedNodes | 現在選択されているノードの配列を取得します | (leafOnly) whether only return the leaf checked nodes, default is `false` |

### Cascader スロット

| Slot Name | Description                                                                                                             |
| --------- | ----------------------------------------------------------------------------------------------------------------------- |
| -         | cascader ノードのカスタムコンテンツ、パラメータは{ node, data }で、それぞれ現在のノードオブジェクトとノードデータです。 |
| empty     | マッチするオプションがない場合のコンテンツ                                                                              |

### CascaderPanel の属性

| Attribute       | Description                                                                                       | Type   | Accepted Values | Default |
| --------------- | ------------------------------------------------------------------------------------------------- | ------ | --------------- | ------- |
| value / v-model | バインディング値                                                                                  | -      | —               | —       |
| options         | オプションのデータは、`Props`によって `value` と `label` のキーをカスタマイズすることができます。 | array  | —               | —       |
| props           | 構成オプションについては、Props の表を参照してください。                                          | object | —               | —       |

### CascaderPanel イベント

| Event Name    | Description                                        | Parameters                                    |
| ------------- | -------------------------------------------------- | --------------------------------------------- |
| change        | バインディング値が変更されたときにトリガされます。 | value                                         |
| expand-change | 拡張オプションが変更された場合のトリガー           | an array of the expanding node's parent nodes |

### CascaderPanel メソッド

| Method Name       | Description                                | Parameters                                                                |
| ----------------- | ------------------------------------------ | ------------------------------------------------------------------------- |
| getCheckedNodes   | 現在選択されているノードの配列を取得します | (leafOnly) whether only return the leaf checked nodes, default is `false` |
| clearCheckedNodes | チェック済みノードをクリア                 | -                                                                         |

### CascaderPanel スロット

| Slot Name | Description                                                                        |
| --------- | ---------------------------------------------------------------------------------- |
| -         | パラメータは{ node, data }で、それぞれ現在のノードオブジェクトとノードデータです。 |

### Props

| Attribute     | Description                                                                                                            | Type                    | Accepted Values | Default    |
| ------------- | ---------------------------------------------------------------------------------------------------------------------- | ----------------------- | --------------- | ---------- |
| expandTrigger | オプション拡大トリガモード                                                                                             | string                  | click / hover   | 'click'    |
| multiple      | 複数選択が可能かどうか                                                                                                 | boolean                 | -               | false      |
| checkStrictly | ノードの状態が親子ノードに影響しないかどうかをチェックする                                                             | boolean                 | -               | false      |
| emitPath      | チェックしたノードが変更された場合に、ノードのパスの配列を表示するかどうか、false の場合はノードの値のみを表示します。 | boolean                 | -               | true       |
| lazy          | 子ノードを動的にロードするかどうか、`lazyload` 属性と一緒に使用します。                                                | boolean                 | -               | false      |
| lazyLoad      | 子ノードデータ読み込みメソッド、メソッドは `lazy` が真の場合にのみ動作します。                                         | function(node, resolve) | -               | -          |
| value         | ノードオブジェクトのどのキーをノードの値として使用するかを指定します。                                                 | string                  | —               | 'value'    |
| label         | ノードオブジェクトのどのキーをノードのラベルとして使用するかを指定します。                                             | string                  | —               | 'label'    |
| children      | ノードオブジェクトのどのキーをノードの子として使用するかを指定します。                                                 | string                  | —               | 'children' |
| disabled      | ノードオブジェクトのどのキーがノードの無効化されたキーとして使用されるかを指定します。                                 | string                  | —               | 'disabled' |
| leaf          | ノードオブジェクトのどのキーをノードのリーフフィールドとして使用するかを指定します。                                   | string                  | —               | 'leaf'     |
