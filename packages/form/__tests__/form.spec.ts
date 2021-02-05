import { nextTick } from 'vue'
import { mount, VueWrapper } from '@vue/test-utils'
import Form from '../src/form.vue'
import FormItem from '../src/form-item.vue'
import installStyle from '@element-plus/test-utils/style-plugin'
import Input from '@element-plus/input/src/index.vue'
import Checkbox from '@element-plus/checkbox/src/checkbox.vue'
import CheckboxGroup from '@element-plus/checkbox/src/checkbox-group.vue'

type Methods = Record<string, () => any>
function mountForm<D, M extends Methods, C>(
  config: C & {data?(): D; methods?: M;},
) {
  return mount({
    components: {
      [Form.name]: Form,
      [FormItem.name]: FormItem,
      [Input.name]: Input,
      [Checkbox.name]: Checkbox,
      [CheckboxGroup.name]: CheckboxGroup,
    },
    ...config,
  })
}

function findStyle(wrapper: VueWrapper<any>, selector: string) {
  return wrapper.find<HTMLElement>(selector).element.style
}

describe('Form', () => {
  beforeAll(installStyle)

  test('label width', async () => {
    const wrapper = mountForm({
      template: `
        <tj-form ref="form" :model="form" label-width="80px">
          <tj-form-item label="Activity Name">
            <tj-input v-model="form.name"></tj-input>
          </tj-form-item>
        </tj-form>
      `,
      data() {
        return {
          form: {
            name: '',
          },
        }
      },
    })
    expect(findStyle(wrapper, '.tj-form-item__label').width).toBe('80px')
    expect(findStyle(wrapper, '.tj-form-item__content').marginLeft).toBe('80px')
  })

  /*
  // commented out because no style support in JSDOM
  test('auto label width', async() => {
    const wrapper = mountForm({
      template: `
        <tj-form ref="form" :model="form" label-width="auto">
          <tj-form-item label="Name">
            <tj-input v-model="form.name"></tj-input>
          </tj-form-item>
          <tj-form-item label="Intro" v-if="display">
            <tj-input v-model="form.intro"></tj-input>
          </tj-form-item>
        </tj-form>
      `,
      data() {
        return {
          display: true,
          form: {
            name: '',
            intro: ''
          }
        }
      }
    })

    await nextTick()

    const formItems = wrapper.findAll<HTMLElement>('.tj-form-item__content')
    const marginLeft = parseInt(formItems[0].element.style.marginLeft, 10)
    const marginLeft1 = parseInt(formItems[1].element.style.marginLeft, 10)
    expect(marginLeft).toEqual(marginLeft1)

    wrapper.vm.display = false
    await nextTick()

    const formItemStyle = findStyle(wrapper, '.tj-form-item__content')
    const newMarginLeft = parseInt(formItemStyle.marginLeft, 10)
    expect(newMarginLeft).toBeLessThan(marginLeft)
  })
  */

  test('inline form', () => {
    const wrapper = mountForm({
      template: `
        <tj-form ref="form" :model="form" inline>
          <tj-form-item>
            <tj-input v-model="form.name"></tj-input>
          </tj-form-item>
          <tj-form-item>
            <tj-input v-model="form.address"></tj-input>
          </tj-form-item>
        </tj-form>
      `,
      data() {
        return {
          form: {
            name: '',
            address: '',
          },
        }
      },
    })
    expect(wrapper.classes()).toContain('tj-form--inline')
  })

  test('label position', () => {
    const wrapper = mountForm({
      template: `
        <div>
          <tj-form :model="form" label-position="top" ref="labelTop">
            <tj-form-item>
              <tj-input v-model="form.name"></tj-input>
            </tj-form-item>
            <tj-form-item>
              <tj-input v-model="form.address"></tj-input>
            </tj-form-item>
          </tj-form>
          <tj-form :model="form" label-position="left" ref="labelLeft">
            <tj-form-item>
              <tj-input v-model="form.name"></tj-input>
            </tj-form-item>
            <tj-form-item>
              <tj-input v-model="form.address"></tj-input>
            </tj-form-item>
          </tj-form>
        </div>
      `,
      data() {
        return {
          form: {
            name: '',
            address: '',
          },
        }
      },
    })
    expect(wrapper.findComponent({ ref: 'labelTop' }).classes()).toContain('tj-form--label-top')
    expect(wrapper.findComponent({ ref: 'labelLeft' }).classes()).toContain('tj-form--label-left')
  })

  test('label size', () => {
    const wrapper = mountForm({
      template: `
        <div>
          <tj-form :model="form" size="mini" ref="labelMini">
            <tj-form-item>
              <tj-input v-model="form.name"></tj-input>
            </tj-form-item>
          </tj-form>
        </div>
      `,
      data() {
        return {
          form: {
            name: '',
          },
        }
      },
    })
    expect(wrapper.findComponent(FormItem).classes()).toContain('tj-form-item--mini')
  })

  test('show message', done => {
    const wrapper = mountForm({
      template: `
        <tj-form :model="form" ref="form">
          <tj-form-item label="Name" prop="name" :show-message="false"
            :rules="{
              required: true,
              message: 'Please input name',
              trigger: 'change',
              min: 3,
              max: 6
            }"
          >
            <tj-input v-model="form.name"></tj-input>
          </tj-form-item>
        </tj-form>
      `,
      data() {
        return {
          form: {
            name: '',
          },
        }
      },
    })
    const form: any = wrapper.findComponent(Form).vm
    form.validate(async valid => {
      expect(valid).toBe(false)
      await nextTick()
      expect(wrapper.find('.tj-form-item__error').exists()).toBe(false)
      done()
    })
  })

  test('reset field', async () => {
    const wrapper = mountForm({
      template: `
        <tj-form ref="form" :model="form" :rules="rules">
          <tj-form-item label="name" prop="name">
            <tj-input v-model="form.name" ref="fieldName"></tj-input>
          </tj-form-item>
          <tj-form-item label="address" prop="address">
            <tj-input v-model="form.address" ref="fieldAddr"></tj-input>
          </tj-form-item>
          <tj-form-item label="type" prop="type">
            <tj-checkbox-group v-model="form.type">
              <tj-checkbox label="type1" name="type"></tj-checkbox>
              <tj-checkbox label="type2" name="type"></tj-checkbox>
              <tj-checkbox label="type3" name="type"></tj-checkbox>
              <tj-checkbox label="type4" name="type"></tj-checkbox>
            </tj-checkbox-group>
          </tj-form-item>
        </tj-form>
      `,
      data() {
        return {
          form: {
            name: '',
            address: '',
            type: [],
          },
          rules: {
            name: [
              { required: true, message: 'Please input name', trigger: 'blur' },
            ],
            address: [
              { required: true, message: 'Please input address', trigger: 'change' },
            ],
            type: [
              { type: 'array', required: true, message: 'Please input type', trigger: 'change' },
            ],
          },
        }
      },
      methods: {
        setValue() {
          this.form.name = 'jack'
          this.form.address = 'aaaa'
          this.form.type.push('type1')
        },
      },
    })
    const vm = wrapper.vm
    vm.setValue()
    const form: any = wrapper.findComponent({ ref: 'form' }).vm
    form.resetFields()
    await nextTick()
    expect(vm.form.name).toBe('')
    expect(vm.form.address).toBe('')
    expect(vm.form.type.length).toBe(0)
  })

  test('clear validate', async () => {
    const wrapper = mountForm({
      template: `
        <tj-form ref="form" :model="form" :rules="rules">
          <tj-form-item label="name" prop="name" ref="name">
            <tj-input v-model="form.name"></tj-input>
          </tj-form-item>
          <tj-form-item label="address" prop="address" ref="address">
            <tj-input v-model="form.address"></tj-input>
          </tj-form-item>
          <tj-form-item label="type" prop="type">
            <tj-checkbox-group v-model="form.type">
              <tj-checkbox label="type1" name="type"></tj-checkbox>
              <tj-checkbox label="type2" name="type"></tj-checkbox>
              <tj-checkbox label="type3" name="type"></tj-checkbox>
              <tj-checkbox label="type4" name="type"></tj-checkbox>
            </tj-checkbox-group>
          </tj-form-item>
        </tj-form>
      `,
      data() {
        return {
          form: {
            name: '',
            address: '',
            type: [],
          },
          rules: {
            name: [
              { required: true, message: 'Please input name', trigger: 'blur' },
            ],
            address: [
              { required: true, message: 'Please input address', trigger: 'change' },
            ],
            type: [
              { type: 'array', required: true, message: 'Please input type', trigger: 'change' },
            ],
          },
        }
      },
    })
    const form: any = wrapper.findComponent({ ref: 'form' }).vm
    const nameField: any = wrapper.findComponent({ ref: 'name' }).vm
    const addressField: any = wrapper.findComponent({ ref: 'address' }).vm
    form.validate()
    await nextTick()
    expect(nameField.validateMessage).toBe('Please input name')
    expect(addressField.validateMessage).toBe('Please input address')
    form.clearValidate(['name'])
    await nextTick()
    expect(nameField.validateMessage).toBe('')
    expect(addressField.validateMessage).toBe('Please input address')
    form.clearValidate()
    await nextTick()
    expect(addressField.validateMessage).toBe('')
  })

  /*
  test('form item nest', done => {
    const wrapper = mountForm({
      template: `
        <tj-form ref="form" :model="form" :rules="rules">
          <tj-form-item label="活动时间" required>
            <tj-col :span="11">
              <tj-form-item prop="date1">
                <tj-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%"></tj-date-picker>
              </tj-form-item>
            </tj-col>
            <tj-col class="line" :span="2">-</tj-col>
            <tj-col :span="11">
              <tj-form-item prop="date2">
                <tj-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%"></tj-time-picker>
              </tj-form-item>
            </tj-col>
          </tj-form-item>
        </tj-form>
      `,
      data() {
        return {
          form: {
            date1: '',
            date2: ''
          },
          rules: {
            date1: [
              { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
            ]
          }
        }
      },
      methods: {
        setValue() {
          this.name = 'jack'
          this.address = 'aaaa'
        }
      }
    })
    vm.$refs.form.validate(valid => {
      expect(valid).to.not.true
      done()
    })
  })
  */


  /*
  test('validate event', async done => {
    const wrapper = mountForm({
      template: `
          <tj-form :model="form" :rules="rules" ref="form" @validate="onValidate">
            <tj-form-item label="name" prop="name" ref="name">
              <tj-input v-model="form.name"></tj-input>
            </tj-form-item>
            <tj-form-item label="活动地点" prop="addr" ref="addr">
              <tj-input v-model="form.addr"></tj-input>
            </tj-form-item>
          </tj-form>
        `,
      data() {
        return {
          form: {
            name: '',
            addr: ''
          },
          valid: {
            name: null,
            addr: null
          },
          error: {
            name: null,
            addr: null
          },
          rules: {
            name: [
              { required: true, message: 'Please input name', trigger: 'change', min: 3, max: 6 }
            ],
            addr: [
              { required: true, message: 'Please input name', trigger: 'change' }
            ]
          }
        }
      },
      methods: {
        onValidate(prop, valid, msg) {
          this.valid[prop] = valid
          this.error[prop] = msg
        },
        setValue(prop, value) {
          this.form[prop] = value
        }
      }
    })
    const vm = wrapper.vm
    vm.setValue('name', '1')
    await nextTick()
    expect(vm.valid.name).toBe(false)
    expect(vm.error.name).toBe('Please input name')
    vm.setValue('addr', '1')
    await nextTick()
    expect(vm.valid.addr).toBe(true)
    expect(vm.error.addr).toBe(null)
    vm.setValue('name', '111')
    await nextTick()
    expect(vm.valid.name).toBe(true)
    expect(vm.error.name).toBe(null)
    done()
  })
  */
})

/*
awaiting other components complete
describe('validate', () => {
  test('input', async () => {
    const wrapper = mountForm({
      template: `
        <tj-form :model="form" :rules="rules" ref="form">
          <tj-form-item label="name" prop="name" ref="field">
            <tj-input v-model="form.name"></tj-input>
          </tj-form-item>
        </tj-form>
      `,
      data() {
        return {
          form: {
            name: ''
          },
          rules: {
            name: [
              { required: true, message: 'Please input name', trigger: 'change', min: 3, max: 6 }
            ]
          }
        }
      },
      methods: {
        setValue(value) {
          this.form.name = value
        }
      }
    })
    const vm = wrapper.vm
    const form: any = wrapper.findComponent({ref: 'form'}).vm
    const valid = await form.validate()
      .then(() => true)
      .catch(e => false)
    expect(valid).toBe(false)
    const field: any = wrapper.findComponent({ref: 'field'}).vm
    expect(field.validateMessage).toBe('Please input name')
    vm.setValue('aaaaa')
    await nextTick()
    expect(field.validateMessage).toBe('')
    vm.setValue('aa')
    await nextTick()
    expect(field.validateMessage).toBe('Please input name')
  })

  test('textarea', async () => {
    const wrapper = mountForm({
      template: `
        <tj-form :model="form" :rules="rules" ref="form">
          <tj-form-item label="name" prop="name" ref="field">
            <tj-input type="textarea" v-model="form.name"></tj-input>
          </tj-form-item>
        </tj-form>
      `,
      data() {
        return {
          form: {
            name: ''
          },
          rules: {
            name: [
              { required: true, message: 'Please input name', trigger: 'change', min: 3, max: 6 }
            ]
          }
        }
      },
      methods: {
        setValue(value) {
          this.form.name = value
        }
      }
    })
    const vm = wrapper.vm
    const form: any = wrapper.findComponent({ref: 'form'}).vm
    const valid = await form.validate()
      .then(() => true)
      .catch(e => false)
    expect(valid).toBe(false)
    const field: any = wrapper.findComponent({ref: 'field'}).vm
    await nextTick()
    expect(field.validateMessage).toBe('Please input name')
    vm.setValue('aaaaa')
    await nextTick()
    expect(field.validateMessage).toBe('')
    vm.setValue('aa')
    await nextTick()
    expect(field.validateMessage).toBe('Please input name')
  })

  test('selector', done => {
    const wrapper = mountForm({
      template: `
        <tj-form :model="form" :rules="rules" ref="form">
          <tj-form-item label="记住密码" prop="region" ref="field">
            <tj-select v-model="form.region" placeholder="请选择活动区域">
              <tj-option label="区域一" value="shanghai"></tj-option>
              <tj-option label="区域二" ref="opt" value="beijing"></tj-option>
            </tj-select>
          </tj-form-item>
        </tj-form>
      `,
      data() {
        return {
          form: {
            region: ''
          },
          rules: {
            region: [
              {required: true, message: '请选择活动区域', trigger: 'change' }
            ]
          }
        }
      }
    })
    vm.$refs.form.validate(valid => {
      let field = vm.$refs.field
      expect(valid).to.false
      setTimeout(_ => {
        expect(field.validateMessage).toBe('请选择活动区域')
        // programatic modification triggers change validation
        vm.form.region = 'shanghai'
        setTimeout(_ => {
          expect(field.validateMessage).toBe('')
          vm.form.region = ''
          setTimeout(_ => {
            expect(field.validateMessage).toBe('请选择活动区域')
            // user modification of bound value triggers change validation
            vm.$refs.opt.$el.click()
            setTimeout(_ => {
              expect(field.validateMessage).toBe('')
              done()
            }, 100)
          }, 100)
        }, 100)
      }, 100)
    })
  })
  test('datepicker', done => {
    const wrapper = mountForm({
      template: `
        <tj-form :model="form" :rules="rules" ref="form">
          <tj-form-item label="记住密码" prop="date" ref="field">
            <tj-date-picker type="date" ref="picker" placeholder="选择日期" v-model="form.date" style="width: 100%"></tj-date-picker>
          </tj-form-item>
        </tj-form>
      `,
      data() {
        return {
          form: {
            date: ''
          },
          rules: {
            date: [
              {type: 'date', required: true, message: '请选择日期', trigger: 'change' }
            ]
          }
        }
      }
    })
    vm.$refs.form.validate(valid => {
      let field = vm.$refs.field
      expect(valid).to.not.true
      setTimeout(_ => {
        expect(field.validateMessage).toBe('请选择日期')
        // programatic modification triggers change validation
        vm.form.date = new Date()
        setTimeout(_ => {
          expect(field.validateMessage).toBe('')
          vm.form.date = ''
          // user modification triggers change
          const input = vm.$refs.picker.$el.querySelector('input')
          input.blur()
          input.focus()
          setTimeout(_ => {
            const keyDown = (el, keyCode) => {
              const evt = document.createEvent('Events')
              evt.initEvent('keydown')
              evt.keyCode = keyCode
              el.dispatchEvent(evt)
            }
            keyDown(input, 37)
            setTimeout(_ => {
              keyDown(input, 13)
              setTimeout(_ => {
                expect(field.validateMessage).toBe('')
                done()
              }, DELAY)
            }, DELAY)
          }, DELAY)
        }, DELAY)
      }, DELAY)
    })
  })
  test('timepicker', done => {
    const wrapper = mountForm({
      template: `
        <tj-form :model="form" :rules="rules" ref="form">
          <tj-form-item label="记住密码" prop="date" ref="field">
            <tj-time-picker ref="picker" placeholder="选择时间" v-model="form.date" style="width: 100%"></tj-time-picker>
          </tj-form-item>
        </tj-form>
      `,
      data() {
        return {
          form: {
            date: ''
          },
          rules: {
            date: [
              {type: 'date', required: true, message: '请选择时间', trigger: 'change' }
            ]
          }
        }
      }
    })
    vm.$refs.form.validate(valid => {
      let field = vm.$refs.field
      expect(valid).to.not.true
      setTimeout(_ => {
        expect(field.validateMessage).toBe('请选择时间')
        // programatic modification does not trigger change
        vm.value = new Date()
        setTimeout(_ => {
          expect(field.validateMessage).toBe('请选择时间')
          vm.value = ''
          // user modification triggers change
          const input = vm.$refs.picker.$el.querySelector('input')
          input.blur()
          input.focus()
          setTimeout(_ => {
            vm.$refs.picker.picker.$el.querySelector('.confirm').click()
            setTimeout(_ => {
              expect(field.validateMessage).toBe('')
              done()
            }, DELAY)
          }, DELAY)
        }, DELAY)
      }, DELAY)
    })
  })
  test('checkbox', async done => {
    const wrapper = mountForm({
      template: `
        <tj-form :model="form" :rules="rules" ref="form">
          <tj-form-item label="Accept Term" prop="accept" ref="field">
            <tj-checkbox v-model="form.accept">
              <span>Accept</span>
            </tj-checkbox>
          </tj-form-item>
        </tj-form>
      `,
      data() {
        return {
          form: {
            accept: true
          },
          rules: {
            accept: [
              {
                validator: (rule, value, callback) => {
                  value ? callback() : callback(new Error('You need accept terms'))
                },
                trigger: 'change'
              }
            ]
          }
        }
      },
      methods: {
        setValue(value) {
          this.form.accept = value
        }
      }
    })
    const vm = wrapper.vm
    vm.form.accept = false
    await nextTick()
    expect(vm.$refs.field.validateMessage).toBe('You need accept terms')
    const valid = await vm.$refs.form.validate()
      .then(() => true, () => false)
      expect(valid).toBe(false)
      let field: any = vm.$refs.field
      expect(field.validateMessage).toBe('You need accept terms')
      await nextTick()
      vm.setValue(true)
      await nextTick()
      expect(field.validateMessage).toBe('')
  })

  test('checkbox group', done => {
    const wrapper = mountForm({
      template: `
        <tj-form :model="form" :rules="rules" ref="form">
          <tj-form-item label="name" prop="type" ref="field">
            <tj-checkbox-group v-model="form.type">
              <tj-checkbox label="type1" name="type"></tj-checkbox>
              <tj-checkbox label="type2" name="type"></tj-checkbox>
              <tj-checkbox label="type3" name="type"></tj-checkbox>
              <tj-checkbox label="type4" name="type"></tj-checkbox>
            </tj-checkbox-group>
          </tj-form-item>
        </tj-form>
      `,
      data() {
        return {
          form: {
            type: []
          },
          rules: {
            type: [
              { type: 'array', required: true, message: 'Please select type', trigger: 'change' }
            ]
          }
        }
      },
      methods: {
        setValue(value) {
          this.form.type = value
        }
      }
    })
    const vm = wrapper.vm
    const form: any = wrapper.findComponent({ref: 'form'}).vm
    form.validate(async valid => {
      let field: any = vm.$refs.field
      expect(valid).toBe(false)
      await nextTick()
      expect(field.validateMessage).toBe('Please select type')
      vm.setValue(['type4'])
      await nextTick()
      expect(field.validateMessage).toBe('')
      done()
    })
  })

  test('radio group', done => {
    const wrapper = mountForm({
      template: `
        <tj-form :model="form" :rules="rules" ref="form">
          <tj-form-item label="name" prop="type" ref="field">
            <tj-radio-group v-model="form.type">
              <tj-radio label="type1"></tj-radio>
              <tj-radio label="type2"></tj-radio>
            </tj-radio-group>
          </tj-form-item>
        </tj-form>
      `,
      data() {
        return {
          form: {
            type: ''
          },
          rules: {
            type: [
              { required: true, message: 'Please select type', trigger: 'change' }
            ]
          }
        }
      },
      methods: {
        setValue(value) {
          this.form.type = value
        }
      }
    })
    const vm = wrapper.vm
    const form: any = wrapper.findComponent({ref: 'form'}).vm
    form.validate(async valid => {
      let field: any = vm.$refs.field
      expect(valid).toBe(false)
      await nextTick()
      expect(field.validateMessage).toBe('Please select type')
      vm.setValue(['type2'])
      await nextTick()
      expect(field.validateMessage).toBe('')
      done()
    })
  })

  test('validate field', done => {
    const wrapper = mountForm({
      template: `
        <tj-form :model="form" :rules="rules" ref="form">
          <tj-form-item label="name" prop="name" ref="field">
            <tj-input v-model="form.name"></tj-input>
          </tj-form-item>
        </tj-form>
      `,
      data() {
        return {
          form: {
            name: ''
          },
          rules: {
            name: [
              { required: true, message: 'Please input name', trigger: 'change', min: 3, max: 6 }
            ]
          }
        }
      },
      methods: {
        setValue(value) {
          this.form.name = value
        }
      }
    })
    const vm: any = wrapper.vm
    vm.$refs.form.validateField('name', valid => {
      expect(valid).toBe(false)
      done()
    })
  })

  test('custom validate', done => {
    var checkName = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('length must be at least 5'))
      } else {
        callback()
      }
    }
    const wrapper = mountForm({
      template: `
        <tj-form :model="form" :rules="rules" ref="form">
          <tj-form-item label="name" prop="name" ref="field">
            <tj-input v-model="form.name"></tj-input>
          </tj-form-item>
        </tj-form>
      `,
      data() {
        return {
          form: {
            name: ''
          },
          rules: {
            name: [
              { validator: checkName, trigger: 'change' }
            ]
          }
        }
      },
      methods: {
        setValue(value) {
          this.form.name = value
        }
      }
    })
    const vm: any = wrapper.vm

    vm.$refs.form.validate(async valid => {
      let field = vm.$refs.field
      expect(valid).toBe(false)
      await nextTick()
      expect(field.validateMessage).toBe('length must be at least 5')
      vm.setValue('aaaaaa')
      await nextTick()
      expect(field.validateMessage).toBe('')
      done()
    })
  })

  test('error', done => {
    const wrapper = mountForm({
      template: `
        <tj-form :model="form" :rules="rules" ref="form">
          <tj-form-item label="name" prop="name" :error="error" ref="field">
            <tj-input v-model="form.name"></tj-input>
          </tj-form-item>
        </tj-form>
      `,
      data() {
        return {
          error: 'dsad',
          form: {
            name: 'sada'
          },
          rules: {
            name: [
              { required: true, message: 'Please input name', trigger: 'change', min: 3, max: 6 }
            ]
          }
        }
      },
      methods: {
        setValue(value) {
          this.form.name = value
        }
      }
    })
    const vm: any = wrapper.vm
    vm.$refs.form.validate(async valid => {
      let field = vm.$refs.field
      expect(valid).toBe(true)
      vm.error = 'illegal input'
      await nextTick()
      expect(field.validateState).toBe('error')
      expect(field.validateMessage).toBe('illegal input')
      done()
    })
  })

  test('invalid fields', done => {
    var checkName = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('length must be at least 5'))
      } else {
        callback()
      }
    }
    const wrapper = mountForm({
      template: `
        <tj-form :model="form" :rules="rules" ref="form">
          <tj-form-item label="name" prop="name" ref="field">
            <tj-input v-model="form.name"></tj-input>
          </tj-form-item>
        </tj-form>
      `,
      data() {
        return {
          form: {
            name: ''
          },
          rules: {
            name: [
              { validator: checkName, trigger: 'change' }
            ]
          }
        }
      }
    })
    const vm: any = wrapper.vm
    vm.$refs.form.validate((valid, invalidFields) => {
      expect(invalidFields.name.length).toBe(1)
      done()
    })
  })

  test('validate return promise', async done => {
    var checkName = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('length must be at least 5'))
      } else {
        callback()
      }
    }
    const wrapper = mountForm({
      template: `
        <tj-form :model="form" :rules="rules" ref="form">
          <tj-form-item label="name" prop="name" ref="field">
            <tj-input v-model="form.name"></tj-input>
          </tj-form-item>
        </tj-form>
      `,
      data() {
        return {
          form: {
            name: ''
          },
          rules: {
            name: [
              { validator: checkName, trigger: 'change' }
            ]
          }
        }
      }
    })
    const vm: any = wrapper.vm
    try {
      vm.$refs.form.validate()
    } catch (e) {
      expect(e).toBeDefined()
      done()
    }
  })
})
*/
