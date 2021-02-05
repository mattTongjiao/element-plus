## Checkbox

複数の選択肢がある場合の選択肢グループ

### 基本的な使い方

checkbox 単独で使用して 2 つの状態を切り替えることができます。

:::demo `tj-checkbox` の `v-model` バインド変数)を定義する。デフォルト値は単一の `checkbox` の場合、 `Boolean` で、チェックを選択した場合は `true` になります。tj-checkbox`タグ内の内容は、checkbox のボタンに続く説明文になります。

```html
<template>
  <!-- `checked` should be true or false -->
  <tj-checkbox v-model="checked">Option</tj-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        checked: true,
      }
    },
  }
</script>
```

:::

### 無効状態

checkbox を無効にした状態。

:::demo `disabled` 属性を設定する。

```html
<template>
  <tj-checkbox v-model="checked1" disabled>Option</tj-checkbox>
  <tj-checkbox v-model="checked2" disabled>Option</tj-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        checked1: false,
        checked2: true,
      }
    },
  }
</script>
```

:::

### Checkbox グループ

1 つのグループに固定された複数の checkbox に使用され、選択肢が選択されているかどうかをチェックして表示します。

:::demo `checkbox-group` 要素は `Array` としてバインドされた `v-model` を用いて複数の checkbox を一つのグループにまとめて管理することができる。`tj-checkbox` 要素の内部では、`label` が checkbox の値である。このタグにコンテンツが入れ子になっていない場合、`label` は checkbox のボタンに続く説明文としてレンダリングされます。`label` は配列の要素の値にも対応する。 指定された値が配列に存在する場合は選択され、その逆(指定されていない値は選択されない)も同様である。

```html
<template>
  <tj-checkbox-group v-model="checkList">
    <tj-checkbox label="Option A"></tj-checkbox>
    <tj-checkbox label="Option B"></tj-checkbox>
    <tj-checkbox label="Option C"></tj-checkbox>
    <tj-checkbox label="disabled" disabled></tj-checkbox>
    <tj-checkbox label="selected and disabled" disabled></tj-checkbox>
  </tj-checkbox-group>
</template>

<script>
  export default {
    data() {
      return {
        checkList: ['selected and disabled', 'Option A'],
      }
    },
  }
</script>
```

:::

### 不確定

`indeterminate`プロパティは「すべてをチェックする」効果を加えるのに役立ちます。

:::demo

```html
<template>
  <tj-checkbox
    :indeterminate="isIndeterminate"
    v-model="checkAll"
    @change="handleCheckAllChange"
    >Check all</tj-checkbox
  >
  <div style="margin: 15px 0;"></div>
  <tj-checkbox-group
    v-model="checkedCities"
    @change="handleCheckedCitiesChange"
  >
    <tj-checkbox v-for="city in cities" :label="city" :key="city"
      >{{city}}</tj-checkbox
    >
  </tj-checkbox-group>
</template>
<script>
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']
  export default {
    data() {
      return {
        checkAll: false,
        checkedCities: ['Shanghai', 'Beijing'],
        cities: cityOptions,
        isIndeterminate: true,
      }
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : []
        this.isIndeterminate = false
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length
        this.checkAll = checkedCount === this.cities.length
        this.isIndeterminate =
          checkedCount > 0 && checkedCount < this.cities.length
      },
    },
  }
</script>
```

:::

### 最小/最大チェック項目

`min` と `max` プロパティは、チェックする項目の数を制限するのに役立つ。

:::demo

```html
<template>
  <tj-checkbox-group v-model="checkedCities" :min="1" :max="2">
    <tj-checkbox v-for="city in cities" :label="city" :key="city"
      >{{city}}</tj-checkbox
    >
  </tj-checkbox-group>
</template>
<script>
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']
  export default {
    data() {
      return {
        checkedCities: ['Shanghai', 'Beijing'],
        cities: cityOptions,
      }
    },
  }
</script>
```

:::

### ボタンスタイル

ボタンスタイルの checkbox。

:::demo `EL-CHECKBOX` 要素を `EL-CHECKBOX-BUTTON` 要素に変更すればよい。また、`size` 属性も提供されています。

```html
<template>
  <div>
    <tj-checkbox-group v-model="checkboxGroup1">
      <tj-checkbox-button v-for="city in cities" :label="city" :key="city"
        >{{city}}</tj-checkbox-button
      >
    </tj-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <tj-checkbox-group v-model="checkboxGroup2" size="medium">
      <tj-checkbox-button v-for="city in cities" :label="city" :key="city"
        >{{city}}</tj-checkbox-button
      >
    </tj-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <tj-checkbox-group v-model="checkboxGroup3" size="small">
      <tj-checkbox-button
        v-for="city in cities"
        :label="city"
        :disabled="city === 'Beijing'"
        :key="city"
        >{{city}}</tj-checkbox-button
      >
    </tj-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <tj-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
      <tj-checkbox-button v-for="city in cities" :label="city" :key="city"
        >{{city}}</tj-checkbox-button
      >
    </tj-checkbox-group>
  </div>
</template>
<script>
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']

  export default {
    data() {
      return {
        checkboxGroup1: ['Shanghai'],
        checkboxGroup2: ['Shanghai'],
        checkboxGroup3: ['Shanghai'],
        checkboxGroup4: ['Shanghai'],
        cities: cityOptions,
      }
    },
  }
</script>
```

:::

### 境界線をつける

:::demo `border`属性は checkbox に境界線を追加することができます。

```html
<template>
  <div>
    <tj-checkbox v-model="checked1" label="Option1" border></tj-checkbox>
    <tj-checkbox v-model="checked2" label="Option2" border></tj-checkbox>
  </div>
  <div style="margin-top: 20px">
    <tj-checkbox
      v-model="checked3"
      label="Option1"
      border
      size="medium"
    ></tj-checkbox>
    <tj-checkbox
      v-model="checked4"
      label="Option2"
      border
      size="medium"
    ></tj-checkbox>
  </div>
  <div style="margin-top: 20px">
    <tj-checkbox-group v-model="checkboxGroup1" size="small">
      <tj-checkbox label="Option1" border></tj-checkbox>
      <tj-checkbox label="Option2" border disabled></tj-checkbox>
    </tj-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <tj-checkbox-group v-model="checkboxGroup2" size="mini" disabled>
      <tj-checkbox label="Option1" border></tj-checkbox>
      <tj-checkbox label="Option2" border></tj-checkbox>
    </tj-checkbox-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked1: true,
        checked2: false,
        checked3: false,
        checked4: true,
        checkboxGroup1: [],
        checkboxGroup2: [],
      }
    },
  }
</script>
```

:::

### Checkbox 属性

| Attribute       | Description                                                  | Type                      | Options               | Default |
| --------------- | ------------------------------------------------------------ | ------------------------- | --------------------- | ------- |
| value / v-model | バインディング値                                             | string / number / boolean | —                     | —       |
| label           | `checkbox-group` の中で使われる場合の checkbox の値          | string / number / boolean | —                     | —       |
| true-label      | checkbox がチェックされている場合は、checkbox の値           | string / number           | —                     | —       |
| false-label     | checkbox がチェックされていない場合の checkbox の値          | string / number           | —                     | —       |
| disabled        | checkbox を無効にするかどうか                                | boolean                   | —                     | false   |
| border          | checkbox の周りにボーダーを追加するかどうか                  | boolean                   | —                     | false   |
| size            | checkbox のサイズ、`border` が true の場合にのみ動作します。 | string                    | medium / small / mini | —       |
| name            | ネイティブ 'name' 属性                                       | string                    | —                     | —       |
| checked         | checkbox がチェックされているかどうか                        | boolean                   | —                     | false   |
| indeterminate   | ネイティブ checkbox の `indeterminate` と同じ                | boolean                   | —                     | false   |

### Checkbox のイベント

| Event Name | Description                                        | Parameters        |
| ---------- | -------------------------------------------------- | ----------------- |
| change     | バインディング値が変更された場合にトリガされます。 | the updated value |

### Checkbox グループの属性

| Attribute       | Description                                | Type    | Options               | Default |
| --------------- | ------------------------------------------ | ------- | --------------------- | ------- |
| value / v-model | バインディング値                           | array   | —                     | —       |
| size            | checkbox のボタンや枠線の大きさ            | string  | medium / small / mini | —       |
| disabled        | ネスティング checkbox を無効にするかどうか | boolean | —                     | false   |
| min             | checkbox の最小チェック数                  | number  | —                     | —       |
| max             | checkbox の最大チェック数                  | number  | —                     | —       |
| text-color      | ボタンがアクティブなときのフォント色       | string  | —                     | #ffffff |
| fill            | ボタンがアクティブなときの境界線と背景色   | string  | —                     | #409EFF |

### Checkbox グループのイベント

| Event Name | Description                                        | Parameters        |
| ---------- | -------------------------------------------------- | ----------------- |
| change     | バインディング値が変更された場合にトリガされます。 | the updated value |

### Checkbox ボタンの属性

| Attribute   | Description                                         | Type                      | Options | Default |
| ----------- | --------------------------------------------------- | ------------------------- | ------- | ------- |
| label       | `checkbox-group` の中で使われる場合の checkbox の値 | string / number / boolean | —       | —       |
| true-label  | チェックされている場合の、checkbox の値             | string / number           | —       | —       |
| false-label | チェックされていない場合の、checkbox の値           | string / number           | —       | —       |
| disabled    | checkbox を無効にするかどうか                       | boolean                   | —       | false   |
| name        | ネイティブ 'name' 属性                              | string                    | —       | —       |
| checked     | checkbox がチェックされているかどうか               | boolean                   | —       | false   |
