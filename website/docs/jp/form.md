## フォーム

フォームは `input`, `radio`, `select`, `checkbox` などから構成されています。フォームを使うと、データを収集したり、検証したり、送信したりすることができます。

### 基本フォーム

これには、`input`, `select`, `radio`, `checkbox` などのあらゆる種類の入力項目が含まれます。

:::demo 各 `form` コンポーネントには、入力項目のコンテナとなる `form-item` フィールドが必要です。

```html
<tj-form ref="form" :model="form" label-width="120px">
  <tj-form-item label="Activity name">
    <tj-input v-model="form.name"></tj-input>
  </tj-form-item>
  <tj-form-item label="Activity zone">
    <tj-select v-model="form.region" placeholder="please select your zone">
      <tj-option label="Zone one" value="shanghai"></tj-option>
      <tj-option label="Zone two" value="beijing"></tj-option>
    </tj-select>
  </tj-form-item>
  <tj-form-item label="Activity time">
    <tj-col :span="11">
      <tj-date-picker
        type="date"
        placeholder="Pick a date"
        v-model="form.date1"
        style="width: 100%;"
      ></tj-date-picker>
    </tj-col>
    <tj-col class="line" :span="2">-</tj-col>
    <tj-col :span="11">
      <tj-time-picker
        placeholder="Pick a time"
        v-model="form.date2"
        style="width: 100%;"
      ></tj-time-picker>
    </tj-col>
  </tj-form-item>
  <tj-form-item label="Instant delivery">
    <tj-switch v-model="form.delivery"></tj-switch>
  </tj-form-item>
  <tj-form-item label="Activity type">
    <tj-checkbox-group v-model="form.type">
      <tj-checkbox label="Online activities" name="type"></tj-checkbox>
      <tj-checkbox label="Promotion activities" name="type"></tj-checkbox>
      <tj-checkbox label="Offline activities" name="type"></tj-checkbox>
      <tj-checkbox label="Simple brand exposure" name="type"></tj-checkbox>
    </tj-checkbox-group>
  </tj-form-item>
  <tj-form-item label="Resources">
    <tj-radio-group v-model="form.resource">
      <tj-radio label="Sponsor"></tj-radio>
      <tj-radio label="Venue"></tj-radio>
    </tj-radio-group>
  </tj-form-item>
  <tj-form-item label="Activity form">
    <tj-input type="textarea" v-model="form.desc"></tj-input>
  </tj-form-item>
  <tj-form-item>
    <tj-button type="primary" @click="onSubmit">Create</tj-button>
    <tj-button>Cancel</tj-button>
  </tj-form-item>
</tj-form>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!')
      },
    },
  }
</script>
```

:::

:::tip
[W3C](https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2) は規制しているのは

> <i>フォーム内に 1 つの単一行テキスト入力フィールドしかない場合、ユーザエージェントは、そのフィールドでの Enter をフォームの送信要求として受け入れるべきである。</i>

この動作を防ぐには、`<tj-form>` に `@submit.native.prevent` を追加します。
:::

### インラインフォーム

縦のスペースが限られていて、比較的シンプルな形の場合は、一行にまとめることができます。

:::demo `inline` 属性を `true` に設定すると、フォームがインラインになります。

```html
<tj-form :inline="true" :model="formInline" class="demo-form-inline">
  <tj-form-item label="Approved by">
    <tj-input v-model="formInline.user" placeholder="Approved by"></tj-input>
  </tj-form-item>
  <tj-form-item label="Activity zone">
    <tj-select v-model="formInline.region" placeholder="Activity zone">
      <tj-option label="Zone one" value="shanghai"></tj-option>
      <tj-option label="Zone two" value="beijing"></tj-option>
    </tj-select>
  </tj-form-item>
  <tj-form-item>
    <tj-button type="primary" @click="onSubmit">Query</tj-button>
  </tj-form-item>
</tj-form>
<script>
  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: '',
        },
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!')
      },
    },
  }
</script>
```

:::

### アライメント

デザインに応じて、ラベル要素を揃える方法はいくつかあります。

:::demo `label-position` 属性はラベルの配置を決定します。`top`に設定すると、ラベルはフォームフィールドの一番上に配置されます。

```html
<tj-radio-group v-model="labelPosition" size="small">
  <tj-radio-button label="left">Left</tj-radio-button>
  <tj-radio-button label="right">Right</tj-radio-button>
  <tj-radio-button label="top">Top</tj-radio-button>
</tj-radio-group>
<div style="margin: 20px;"></div>
<tj-form
  :label-position="labelPosition"
  label-width="100px"
  :model="formLabelAlign"
>
  <tj-form-item label="Name">
    <tj-input v-model="formLabelAlign.name"></tj-input>
  </tj-form-item>
  <tj-form-item label="Activity zone">
    <tj-input v-model="formLabelAlign.region"></tj-input>
  </tj-form-item>
  <tj-form-item label="Activity form">
    <tj-input v-model="formLabelAlign.type"></tj-input>
  </tj-form-item>
</tj-form>
<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: '',
        },
      }
    },
  }
</script>
```

:::

### バリデーション

フォームコンポーネントを使用すると、データを検証してエラーを発見したり修正したりすることができます。

:::demo `Form` コンポーネントに `rules` 属性を追加して検証ルールを渡し、`Form-Item`に `prop` 属性を検証が必要な特定のキーとして設定するだけです。詳細は [async-validator](https://github.com/yiminghe/async-validator) を参照してください。

```html
<tj-form
  :model="ruleForm"
  :rules="rules"
  ref="ruleForm"
  label-width="120px"
  class="demo-ruleForm"
>
  <tj-form-item label="Activity name" prop="name">
    <tj-input v-model="ruleForm.name"></tj-input>
  </tj-form-item>
  <tj-form-item label="Activity zone" prop="region">
    <tj-select v-model="ruleForm.region" placeholder="Activity zone">
      <tj-option label="Zone one" value="shanghai"></tj-option>
      <tj-option label="Zone two" value="beijing"></tj-option>
    </tj-select>
  </tj-form-item>
  <tj-form-item label="Activity time" required>
    <tj-col :span="11">
      <tj-form-item prop="date1">
        <tj-date-picker
          type="date"
          placeholder="Pick a date"
          v-model="ruleForm.date1"
          style="width: 100%;"
        ></tj-date-picker>
      </tj-form-item>
    </tj-col>
    <tj-col class="line" :span="2">-</tj-col>
    <tj-col :span="11">
      <tj-form-item prop="date2">
        <tj-time-picker
          placeholder="Pick a time"
          v-model="ruleForm.date2"
          style="width: 100%;"
        ></tj-time-picker>
      </tj-form-item>
    </tj-col>
  </tj-form-item>
  <tj-form-item label="Instant delivery" prop="delivery">
    <tj-switch v-model="ruleForm.delivery"></tj-switch>
  </tj-form-item>
  <tj-form-item label="Activity type" prop="type">
    <tj-checkbox-group v-model="ruleForm.type">
      <tj-checkbox label="Online activities" name="type"></tj-checkbox>
      <tj-checkbox label="Promotion activities" name="type"></tj-checkbox>
      <tj-checkbox label="Offline activities" name="type"></tj-checkbox>
      <tj-checkbox label="Simple brand exposure" name="type"></tj-checkbox>
    </tj-checkbox-group>
  </tj-form-item>
  <tj-form-item label="Resources" prop="resource">
    <tj-radio-group v-model="ruleForm.resource">
      <tj-radio label="Sponsorship"></tj-radio>
      <tj-radio label="Venue"></tj-radio>
    </tj-radio-group>
  </tj-form-item>
  <tj-form-item label="Activity form" prop="desc">
    <tj-input type="textarea" v-model="ruleForm.desc"></tj-input>
  </tj-form-item>
  <tj-form-item>
    <tj-button type="primary" @click="submitForm('ruleForm')">Create</tj-button>
    <tj-button @click="resetForm('ruleForm')">Reset</tj-button>
  </tj-form-item>
</tj-form>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
        rules: {
          name: [
            {
              required: true,
              message: 'Please input Activity name',
              trigger: 'blur',
            },
            {
              min: 3,
              max: 5,
              message: 'Length should be 3 to 5',
              trigger: 'blur',
            },
          ],
          region: [
            {
              required: true,
              message: 'Please select Activity zone',
              trigger: 'change',
            },
          ],
          date1: [
            {
              type: 'date',
              required: true,
              message: 'Please pick a date',
              trigger: 'change',
            },
          ],
          date2: [
            {
              type: 'date',
              required: true,
              message: 'Please pick a time',
              trigger: 'change',
            },
          ],
          type: [
            {
              type: 'array',
              required: true,
              message: 'Please select at least one activity type',
              trigger: 'change',
            },
          ],
          resource: [
            {
              required: true,
              message: 'Please select activity resource',
              trigger: 'change',
            },
          ],
          desc: [
            {
              required: true,
              message: 'Please input activity form',
              trigger: 'blur',
            },
          ],
        },
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      },
    },
  }
</script>
```

:::

### カスタムバリデーションルール

この例では、独自の検証ルールをカスタマイズして、2 ファクタのパスワード検証を完了させる方法を示しています。

:::demo ここでは、検証結果をアイコンとして反映させるために `status-icon` を用いる。

```html
<tj-form
  :model="ruleForm"
  status-icon
  :rules="rules"
  ref="ruleForm"
  label-width="120px"
  class="demo-ruleForm"
>
  <tj-form-item label="Password" prop="pass">
    <tj-input
      type="password"
      v-model="ruleForm.pass"
      autocomplete="off"
    ></tj-input>
  </tj-form-item>
  <tj-form-item label="Confirm" prop="checkPass">
    <tj-input
      type="password"
      v-model="ruleForm.checkPass"
      autocomplete="off"
    ></tj-input>
  </tj-form-item>
  <tj-form-item label="Age" prop="age">
    <tj-input v-model.number="ruleForm.age"></tj-input>
  </tj-form-item>
  <tj-form-item>
    <tj-button type="primary" @click="submitForm('ruleForm')">Submit</tj-button>
    <tj-button @click="resetForm('ruleForm')">Reset</tj-button>
  </tj-form-item>
</tj-form>
<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('Please input the age'))
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('Please input digits'))
          } else {
            if (value < 18) {
              callback(new Error('Age must be greater than 18'))
            } else {
              callback()
            }
          }
        }, 1000)
      }
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'))
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass')
          }
          callback()
        }
      }
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password again'))
        } else if (value !== this.ruleForm.pass) {
          callback(new Error("Two inputs don't match!"))
        } else {
          callback()
        }
      }
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          age: '',
        },
        rules: {
          pass: [{ validator: validatePass, trigger: 'blur' }],
          checkPass: [{ validator: validatePass2, trigger: 'blur' }],
          age: [{ validator: checkAge, trigger: 'blur' }],
        },
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      },
    },
  }
</script>
```

:::

:::tip
カスタムバリデートコールバック関数を呼び出す必要があります。より高度な使い方は [async-validator](https://github.com/yiminghe/async-validator) を参照してください。
:::

### フォーム項目を動的に削除または追加

:::demo フォームコンポーネントにすべてのバリデーションルールを一度に渡すことに加えて、単一のフォームフィールドにバリデーションルールを動的に渡したり削除したりすることもできます。

```html
<tj-form
  :model="dynamicValidateForm"
  ref="dynamicValidateForm"
  label-width="120px"
  class="demo-dynamic"
>
  <tj-form-item
    prop="email"
    label="Email"
    :rules="[
      { required: true, message: 'Please input email address', trigger: 'blur' },
      { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
    ]"
  >
    <tj-input v-model="dynamicValidateForm.email"></tj-input>
  </tj-form-item>
  <tj-form-item
    v-for="(domain, index) in dynamicValidateForm.domains"
    :label="'Domain' + index"
    :key="domain.key"
    :prop="'domains.' + index + '.value'"
    :rules="{
      required: true, message: 'domain can not be null', trigger: 'blur'
    }"
  >
    <tj-input v-model="domain.value"></tj-input
    ><tj-button @click.prevent="removeDomain(domain)">Delete</tj-button>
  </tj-form-item>
  <tj-form-item>
    <tj-button type="primary" @click="submitForm('dynamicValidateForm')"
      >Submit</tj-button
    >
    <tj-button @click="addDomain">New domain</tj-button>
    <tj-button @click="resetForm('dynamicValidateForm')">Reset</tj-button>
  </tj-form-item>
</tj-form>
<script>
  export default {
    data() {
      return {
        dynamicValidateForm: {
          domains: [
            {
              key: 1,
              value: '',
            },
          ],
          email: '',
        },
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          key: Date.now(),
          value: '',
        })
      },
    },
  }
</script>
```

:::

### ナンバーの検証(Number Validate)

:::demo Number Validate では、入力された `v-model` バインディングに `.number` という修飾子を追加する必要がありますが、これは文字列の値を Vuejs が提供する数値に変換するために使われます。

```html
<tj-form
  :model="numberValidateForm"
  ref="numberValidateForm"
  label-width="100px"
  class="demo-ruleForm"
>
  <tj-form-item
    label="age"
    prop="age"
    :rules="[
      { required: true, message: 'age is required'},
      { type: 'number', message: 'age must be a number'}
    ]"
  >
    <tj-input
      type="age"
      v-model.number="numberValidateForm.age"
      autocomplete="off"
    ></tj-input>
  </tj-form-item>
  <tj-form-item>
    <tj-button type="primary" @click="submitForm('numberValidateForm')"
      >Submit</tj-button
    >
    <tj-button @click="resetForm('numberValidateForm')">Reset</tj-button>
  </tj-form-item>
</tj-form>
<script>
  export default {
    data() {
      return {
        numberValidateForm: {
          age: '',
        },
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      },
    },
  }
</script>
```

:::

:::tip
`tj-form-item` が別の `tj-form-item` に入れ子になっている場合、そのラベルの幅は `0` になります。必要であれば、その `tj-form-item` に `label-width` を設定することもできる。
:::

### サイズコントロール

フォームのすべてのコンポーネントはそのフォームから `size` 属性を継承します。同様に、FormItem にも `size` 属性があります。

:::demo それでも、コンポーネントのサイズを From や FormIten から継承させたくない場合は、各コンポーネントの `size` を微調整することができます。

```html
<tj-form ref="form" :model="sizeForm" label-width="120px" size="mini">
  <tj-form-item label="Activity name">
    <tj-input v-model="sizeForm.name"></tj-input>
  </tj-form-item>
  <tj-form-item label="Activity zone">
    <tj-select v-model="sizeForm.region" placeholder="please select your zone">
      <tj-option label="Zone one" value="shanghai"></tj-option>
      <tj-option label="Zone two" value="beijing"></tj-option>
    </tj-select>
  </tj-form-item>
  <tj-form-item label="Activity time">
    <tj-col :span="11">
      <tj-date-picker
        type="date"
        placeholder="Pick a date"
        v-model="sizeForm.date1"
        style="width: 100%;"
      ></tj-date-picker>
    </tj-col>
    <tj-col class="line" :span="2">-</tj-col>
    <tj-col :span="11">
      <tj-time-picker
        placeholder="Pick a time"
        v-model="sizeForm.date2"
        style="width: 100%;"
      ></tj-time-picker>
    </tj-col>
  </tj-form-item>
  <tj-form-item label="Activity type">
    <tj-checkbox-group v-model="sizeForm.type">
      <tj-checkbox-button
        label="Online activities"
        name="type"
      ></tj-checkbox-button>
      <tj-checkbox-button
        label="Promotion activities"
        name="type"
      ></tj-checkbox-button>
    </tj-checkbox-group>
  </tj-form-item>
  <tj-form-item label="Resources">
    <tj-radio-group v-model="sizeForm.resource" size="medium">
      <tj-radio border label="Sponsor"></tj-radio>
      <tj-radio border label="Venue"></tj-radio>
    </tj-radio-group>
  </tj-form-item>
  <tj-form-item size="large">
    <tj-button type="primary" @click="onSubmit">Create</tj-button>
    <tj-button>Cancel</tj-button>
  </tj-form-item>
</tj-form>

<script>
  export default {
    data() {
      return {
        sizeForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!')
      },
    },
  }
</script>
```

:::

### フォーム属性

| Attribute               | Description                                                                                                                                                               | Type    | Accepted Values       | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | --------------------- | ------- |
| model                   | フォームコンポーネントのデータ                                                                                                                                            | object  | —                     | —       |
| rules                   | フォームのバリデーションルール                                                                                                                                            | object  | —                     | —       |
| inline                  | フォームがインラインであるかどうか                                                                                                                                        | boolean | —                     | false   |
| label-position          | ラベルの位置。’left'、’right’ もしくは`label-width`が設定されている場合は prop も必要です。                                                                               | string  | left / right / top    | right   |
| label-width             | ラベルの幅、例えば '50px'。直接の子フォーム項目はすべてこの値を継承します。Width `auto` がサポートされています。                                                          | string  | —                     | —       |
| label-suffix            | ラベルの接尾辞                                                                                                                                                            | string  | —                     | —       |
| hide-required-asterisk  | 必須フィールドのラベルの横に赤いアスタリスク（星）を付けるかどうか                                                                                                        | boolean | —                     | false   |
| show-message            | エラーメッセージを表示するかどうか                                                                                                                                        | boolean | —                     | true    |
| inline-message          | エラーメッセージをフォーム項目とインラインで表示するかどうか。                                                                                                            | boolean | —                     | false   |
| status-icon             | バリデーション結果を示すアイコンを表示するかどうか                                                                                                                        | boolean | —                     | false   |
| validate-on-rule-change | `rules` prop が変更されたときにバリデーションをトリガするかどうか。                                                                                                       | boolean | —                     | true    |
| size                    | コンポーネントのサイズを制御する形式                                                                                                                                      | string  | medium / small / mini | —       |
| disabled                | このフォームのすべてのコンポーネントを無効にするかどうかを指定します。true に設定されている場合、内部のコンポーネントの `disabled` プロップで上書きすることはできません。 | boolean | —                     | false   |

### フォームメソッド

| Method        | Description                                                                                                                                                                                                                                               | Parameters                                                                 |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| validate      | バリデートはフォーム全体を検証します。パラメータとしてコールバックを受け取ります。バリデーションが通過したかどうかを示すブール値と、バリデーションに失敗したすべてのフィールドを含むオブジェクトです。コールバックが省略された場合は promise を返します。 | Function(callback: Function(boolean, object))                              |
| validateField | フォーム項目を検証する                                                                                                                                                                                                                                    | Function(props: string \| array, callback: Function(errorMessage: string)) |
| resetFields   | すべてのフィールドをリセットし、検証結果を削除します。                                                                                                                                                                                                    | —                                                                          |
| clearValidate | 特定のフィールドのバリデーションメッセージをクリアします。パラメータは prop 名、または検証メッセージが削除されるフォーム項目の prop 名の配列です。省略された場合、すべてのフィールドのバリデーションメッセージがクリアされます。                          | Function(props: string \| array)                                           |

### フォームイベント

| Event Name | Description                                    | Parameters                                                                                            |
| ---------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| validate   | フォーム項目バリデーション後にトリガされます。 | prop name of the form item being validated, whether validation is passed and the error message if not |

### フォームアイテム属性

| Attribute      | Description                                                                                                  | Type    | Accepted Values                     | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------ | ------- | ----------------------------------- | ------- |
| prop           | `model` のキーです。validate メソッドと resetFields メソッドを利用する際には、この属性が必須です。           | string  | keys of model that passed to `form` |
| label          | ラベル                                                                                                       | string  | —                                   | —       |
| label-width    | ラベルの幅。Width `auto` がサポートされています。                                                            | string  | —                                   | —       |
| required       | フィールドが必須かどうか、省略された場合はバリデーションルールによって決定されます。                         | boolean | —                                   | false   |
| rules          | フォームのバリデーションルール                                                                               | object  | —                                   | —       |
| error          | フィールドのエラーメッセージ、値を設定すると、フィールドはエラーを検証し、このメッセージをすぐに表示します。 | string  | —                                   | —       |
| show-message   | エラーメッセージを表示するかどうか                                                                           | boolean | —                                   | true    |
| inline-message | インラインスタイルバリデートメッセージ                                                                       | boolean | —                                   | false   |
| size           | フォームアイテムのコンポーネントのサイズを制御します。                                                       | string  | medium / small / mini               | -       |

### フォームアイテムスロット

| Name  | Description            |
| ----- | ---------------------- |
| —     | フォームアイテムの内容 |
| label | ラベルの内容           |

### フォームアイテムのスコープスロット

| Name  | Description                                                                    |
| ----- | ------------------------------------------------------------------------------ |
| error | Custom content to display validation message. The scope parameter is { error } |

### フォームアイテムのメソッド

| Method        | Description                                                | Parameters |
| ------------- | ---------------------------------------------------------- | ---------- |
| resetField    | 現在のフィールドをリセットしてバリデーション結果を削除する | —          |
| clearValidate | フィールドのバリデーションステータスを削除する             | -          |
