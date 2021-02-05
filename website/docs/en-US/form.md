## Form

Form consists of `input`, `radio`, `select`, `checkbox` and so on. With form, you can collect, verify and submit data.

### Basic form

It includes all kinds of input items, such as `input`, `select`, `radio` and `checkbox`.

:::demo In each `form` component, you need a `form-item` field to be the container of your input item.

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
[W3C](https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2) regulates that

> <i>When there is only one single-line text input field in a form, the user agent should accept Enter in that field as a request to submit the form.</i>

To prevent this behavior, you can add `@submit.native.prevent` on `<tj-form>`.
:::

### Inline form

When the vertical space is limited and the form is relatively simple, you can put it in one line.

:::demo Set the `inline` attribute to `true` and the form will be inline.

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

### Alignment

Depending on your design, there are several different ways to align your label element.

:::demo The `label-position` attribute decides how labels align, it can be `top` or `left`. When set to `top`, labels will be placed at the top of the form field.

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

### Validation

Form component allows you to verify your data, helping you find and correct errors.

:::demo Just add the `rules` attribute for `Form` component, pass validation rules, and set `prop` attribute for `Form-Item` as a specific key that needs to be validated. See more information at [async-validator](https://github.com/yiminghe/async-validator).

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

### Custom validation rules

This example shows how to customize your own validation rules to finish a two-factor password verification.

:::demo Here we use `status-icon` to reflect validation result as an icon.

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
Custom validate callback function must be called. See more advanced usage at [async-validator](https://github.com/yiminghe/async-validator).
:::

### Delete or add form items dynamically

:::demo In addition to passing all validation rules at once on the form component, you can also pass the validation rules or delete rules on a single form field dynamically.

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

### Number Validate

:::demo Number Validate need a `.number` modifier added on the input `v-model` binding，it's used to transform the string value to the number which is provided by Vuejs.

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
When an `tj-form-item` is nested in another `tj-form-item`, its label width will be `0`. You can set `label-width` on that `tj-form-item` if needed.
:::

### Size control

All components in a Form inherit their `size` attribute from that Form. Similarly, FormItem also has a `size` attribute.

:::demo Still you can fine tune each component's `size` if you don't want that component to inherit its size from From or FormIten.

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

### Form Attributes

| Attribute               | Description                                                                                                                       | Type    | Accepted Values       | Default |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- | --------------------- | ------- |
| model                   | data of form component                                                                                                            | object  | —                     | —       |
| rules                   | validation rules of form                                                                                                          | object  | —                     | —       |
| inline                  | whether the form is inline                                                                                                        | boolean | —                     | false   |
| label-position          | position of label. If set to 'left' or 'right', `label-width` prop is also required                                               | string  | left / right / top    | right   |
| label-width             | width of label, e.g. '50px'. All its direct child form items will inherit this value. Width `auto` is supported.                  | string  | —                     | —       |
| label-suffix            | suffix of the label                                                                                                               | string  | —                     | —       |
| hide-required-asterisk  | whether required fields should have a red asterisk (star) beside their labels                                                     | boolean | —                     | false   |
| show-message            | whether to show the error message                                                                                                 | boolean | —                     | true    |
| inline-message          | whether to display the error message inline with the form item                                                                    | boolean | —                     | false   |
| status-icon             | whether to display an icon indicating the validation result                                                                       | boolean | —                     | false   |
| validate-on-rule-change | whether to trigger validation when the `rules` prop is changed                                                                    | boolean | —                     | true    |
| size                    | control the size of components in this form                                                                                       | string  | medium / small / mini | —       |
| disabled                | whether to disabled all components in this form. If set to true, it cannot be overridden by its inner components' `disabled` prop | boolean | —                     | false   |

### Form Methods

| Method        | Description                                                                                                                                                                                                                                                                      | Parameters                                                                 |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| validate      | validate the whole form. Takes a callback as a param. After validation, the callback will be executed with two params: a boolean indicating if the validation has passed, and an object containing all fields that fail the validation. Returns a promise if callback is omitted | Function(callback: Function(boolean, object))                              |
| validateField | validate one or several form items                                                                                                                                                                                                                                               | Function(props: string \| array, callback: Function(errorMessage: string)) |
| resetFields   | reset all the fields and remove validation result                                                                                                                                                                                                                                | —                                                                          |
| clearValidate | clear validation message for certain fields. The parameter is prop name or an array of prop names of the form items whose validation messages will be removed. When omitted, all fields' validation messages will be cleared                                                     | Function(props: string \| array)                                           |

### Form Events

| Event Name | Description                             | Parameters                                                                                            |
| ---------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| validate   | triggers after a form item is validated | prop name of the form item being validated, whether validation is passed and the error message if not |

### Form-Item Attributes

| Attribute      | Description                                                                                            | Type    | Accepted Values                     | Default |
| -------------- | ------------------------------------------------------------------------------------------------------ | ------- | ----------------------------------- | ------- |
| prop           | a key of `model`. In the use of validate and resetFields method, the attribute is required             | string  | keys of model that passed to `form` |
| label          | label                                                                                                  | string  | —                                   | —       |
| label-width    | width of label, e.g. '50px'. Width `auto` is supported.                                                | string  | —                                   | —       |
| required       | whether the field is required or not, will be determined by validation rules if omitted                | boolean | —                                   | false   |
| rules          | validation rules of form                                                                               | object  | —                                   | —       |
| error          | field error message, set its value and the field will validate error and show this message immediately | string  | —                                   | —       |
| show-message   | whether to show the error message                                                                      | boolean | —                                   | true    |
| inline-message | inline style validate message                                                                          | boolean | —                                   | false   |
| size           | control the size of components in this form-item                                                       | string  | medium / small / mini               | -       |

### Form-Item Slot

| Name  | Description          |
| ----- | -------------------- |
| —     | content of Form Item |
| label | content of label     |

### Form-Item Scoped Slot

| Name  | Description                                                                    |
| ----- | ------------------------------------------------------------------------------ |
| error | Custom content to display validation message. The scope parameter is { error } |

### Form-Item Methods

| Method        | Description                                      | Parameters |
| ------------- | ------------------------------------------------ | ---------- |
| resetField    | reset current field and remove validation result | —          |
| clearValidate | remove validation status of the field            | -          |
