<template>
  <div class="tj-form-item" :class="formItemClass">
    <LabelWrap
      :is-auto-width="labelStyle.width === 'auto'"
      :update-all="tjForm.labelWidth === 'auto'"
    >
      <label
        v-if="label || $slots.label"
        :for="labelFor"
        class="tj-form-item__label"
        :style="labelStyle"
      >
        <slot name="label">{{ label + tjForm.labelSuffix }}</slot>
      </label>
    </LabelWrap>
    <div class="tj-form-item__content" :style="contentStyle">
      <slot></slot>
      <transition name="tj-zoom-in-top">
        <slot v-if="shouldShowError" name="error" :error="validateMessage">
          <div
            class="tj-form-item__error"
            :class="{
              'tj-form-item__error--inline':
                typeof inlineMessage === 'boolean'
                  ? inlineMessage
                  : tjForm.inlineMessage || false,
            }"
          >
            {{ validateMessage }}
          </div>
        </slot>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  provide,
  inject,
  ref,
  watch,
  computed,
  nextTick,
  onMounted,
  onBeforeUnmount,
  getCurrentInstance,
  toRefs,
  reactive,
} from 'vue'
import { NOOP } from '@vue/shared'
import AsyncValidator from 'async-validator'
import { RuleItem } from 'async-validator'
import LabelWrap from './label-wrap'
import { getPropByPath, useGlobalConfig } from '@tongjiaoui-plus/utils/util'
import { isValidComponentSize } from '@tongjiaoui-plus/utils/validators'
import mitt from 'mitt'
import { tjFormKey, tjFormItemKey, tjFormEvents } from './token'

import type { PropType } from 'vue'
import type { TjFormContext, ValidateFieldCallback } from './token'

export default defineComponent({
  name: 'TjFormItem',
  componentName: 'TjFormItem',
  components: {
    LabelWrap,
  },
  props: {
    label: String,
    labelWidth: String,
    prop: String,
    required: {
      type: Boolean,
      default: undefined,
    },
    rules: [Object, Array] as PropType<RuleItem | RuleItem[]>,
    error: String,
    validateStatus: String,
    for: String,
    inlineMessage: {
      type: [String, Boolean],
      default: '',
    },
    showMessage: {
      type: Boolean,
      default: true,
    },
    size: {
      types: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
  },
  setup(props) {
    const formItemMitt = mitt()
    const $ELEMENT = useGlobalConfig()

    const tjForm = inject(tjFormKey, {} as TjFormContext)
    const validateState = ref('')
    const validateMessage = ref('')
    const validateDisabled = ref(false)

    const computedLabelWidth = ref('')

    const vm = getCurrentInstance()
    const isNested = computed(() => {
      let parent = vm.parent
      while (parent && parent.type.name !== 'TjForm') {
        if (parent.type.name === 'TjFormItem') {
          return true
        }
        parent = parent.parent
      }
      return false
    })


    let initialValue = undefined

    watch(
      () => props.error,
      val => {
        validateMessage.value = val
        validateState.value = val ? 'error' : ''
      }, {
        immediate: true,
      },
    )
    watch(
      () => props.validateStatus,
      val => {
        validateState.value = val
      },
    )

    const labelFor = computed(() => props.for || props.prop)
    const labelStyle = computed(() => {
      if (tjForm.labelPosition === 'top') return {}
      const labelWidth = props.labelWidth || tjForm.labelWidth
      if (labelWidth) {
        return {
          width: labelWidth,
        }
      }
      return {}
    })
    const contentStyle = computed(() => {
      if (tjForm.labelPosition === 'top' || tjForm.inline) {
        return {}
      }
      if (!props.label && !props.labelWidth && isNested.value) {
        return {}
      }
      const labelWidth = props.labelWidth || tjForm.labelWidth
      const ret: Partial<CSSStyleDeclaration> = {}
      if (labelWidth === 'auto') {
        if (props.labelWidth === 'auto') {
          ret.marginLeft = computedLabelWidth.value
        } else if (tjForm.labelWidth === 'auto') {
          ret.marginLeft = tjForm.autoLabelWidth
        }
      } else {
        ret.marginLeft = labelWidth
      }
      return ret
    })
    const fieldValue = computed(() => {
      const model = tjForm.model
      if (!model || !props.prop) {
        return
      }

      let path = props.prop
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.')
      }

      return getPropByPath(model, path, true).v
    })
    const isRequired = computed(() => {
      let rules = getRules()
      let required = false

      if (rules && rules.length) {
        rules.every(rule => {
          if (rule.required) {
            required = true
            return false
          }
          return true
        })
      }
      return required
    })
    const tjFormItemSize = computed(() => props.size || tjForm.size)
    const sizeClass = computed(() => {
      return tjFormItemSize.value || $ELEMENT.size
    })

    const validate = (trigger: string, callback: ValidateFieldCallback = NOOP) => {
      validateDisabled.value = false
      const rules = getFilteredRule(trigger)
      if ((!rules || rules.length === 0) && props.required === undefined) {
        callback()
        return
      }
      validateState.value = 'validating'
      const descriptor = {}
      if (rules && rules.length > 0) {
        rules.forEach(rule => {
          delete rule.trigger
        })
      }
      descriptor[props.prop] = rules
      const validator = new AsyncValidator(descriptor)
      const model = {}
      model[props.prop] = fieldValue.value
      validator.validate(
        model,
        { firstFields: true },
        (errors, invalidFields) => {
          validateState.value = !errors ? 'success' : 'error'
          validateMessage.value = errors ? errors[0].message : ''
          callback(validateMessage.value, invalidFields)
          tjForm.emit?.(
            'validate',
            props.prop,
            !errors,
            validateMessage.value || null,
          )
        },
      )
    }

    const clearValidate = () => {
      validateState.value = ''
      validateMessage.value = ''
      validateDisabled.value = false
    }
    const resetField = () => {
      validateState.value = ''
      validateMessage.value = ''
      let model = tjForm.model
      let value = fieldValue.value
      let path = props.prop
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.')
      }
      let prop = getPropByPath(model, path, true)
      validateDisabled.value = true
      if (Array.isArray(value)) {
        prop.o[prop.k] = [].concat(initialValue)
      } else {
        prop.o[prop.k] = initialValue
      }
      // reset validateDisabled after onFieldChange triggered
      nextTick(() => {
        validateDisabled.value = false
      })
    }

    const getRules = () => {
      const formRules = tjForm.rules
      const selfRules = props.rules
      const requiredRule =
        props.required !== undefined ? { required: !!props.required } : []

      const prop = getPropByPath(formRules, props.prop || '', false)
      const normalizedRule = formRules
        ? (prop.o[props.prop || ''] || prop.v)
        : []

      return [].concat(selfRules || normalizedRule || []).concat(requiredRule)
    }
    const getFilteredRule = trigger => {
      const rules = getRules()

      return rules
        .filter(rule => {
          if (!rule.trigger || trigger === '') return true
          if (Array.isArray(rule.trigger)) {
            return rule.trigger.indexOf(trigger) > -1
          } else {
            return rule.trigger === trigger
          }
        })
        .map(rule => ({ ...rule }))
    }

    const onFieldBlur = () => {
      validate('blur')
    }

    const onFieldChange = () => {
      if (validateDisabled.value) {
        validateDisabled.value = false
        return
      }

      validate('change')
    }
    const updateComputedLabelWidth = width => {
      computedLabelWidth.value = width ? `${width}px` : ''
    }

    const addValidateEvents = () => {
      const rules = getRules()

      if (rules.length || props.required !== undefined) {
        formItemMitt.on('el.form.blur', onFieldBlur)
        formItemMitt.on('el.form.change', onFieldChange)
      }
    }
    const removeValidateEvents = () => {
      formItemMitt.off('el.form.blur', onFieldBlur)
      formItemMitt.off('el.form.change', onFieldChange)
    }

    const tjFormItem = reactive({
      ...toRefs(props),
      size: sizeClass,
      validateState,
      removeValidateEvents,
      addValidateEvents,
      resetField,
      clearValidate,
      validate,
      formItemMitt,
      updateComputedLabelWidth,
    })

    onMounted(() => {
      if (props.prop) {
        tjForm.formMitt?.emit(tjFormEvents.addField, tjFormItem)

        let value = fieldValue.value
        initialValue = Array.isArray(value)
          ? [...value] : value

        addValidateEvents()
      }
    })
    onBeforeUnmount(() => {
      tjForm.formMitt?.emit(tjFormEvents.removeField, tjFormItem)
    })

    provide(tjFormItemKey, tjFormItem)

    const formItemClass = computed(() => [
      {
        'tj-form-item--feedback': tjForm.statusIcon,
        'is-error': validateState.value === 'error',
        'is-validating': validateState.value === 'validating',
        'is-success': validateState.value === 'success',
        'is-required': isRequired.value || props.required,
        'is-no-asterisk': tjForm.hideRequiredAsterisk,
      },
      sizeClass.value ? 'tj-form-item--' + sizeClass.value : '',
    ])

    const shouldShowError = computed(() => {
      return validateState.value === 'error' && props.showMessage && tjForm.showMessage
    })

    return {
      formItemClass,
      shouldShowError,
      tjForm,
      labelStyle,
      contentStyle,
      validateMessage,
      labelFor,
    }
  },
})
</script>
