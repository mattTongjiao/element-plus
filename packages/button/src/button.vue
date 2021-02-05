<template>
  <button
    :class="[
      'tj-button',
      type ? 'tj-button--' + type : '',
      buttonSize ? 'tj-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
      },
    ]"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    @click="handleClick"
  >
    <i v-if="loading" class="tj-icon-loading"></i>
    <i v-if="icon && !loading" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { computed, inject, defineComponent } from 'vue'
import { useGlobalConfig } from '@tongjiaoui-plus/utils/util'
import { isValidComponentSize } from '@tongjiaoui-plus/utils/validators'
import { elFormKey, elFormItemKey } from '@tongjiaoui-plus/form'

import type { PropType } from 'vue'
import type { TjFormContext, TjFormItemContext } from '@tongjiaoui-plus/form'

type IButtonType = PropType<'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text' | 'default'>
type IButtonNativeType = PropType<'button' | 'submit' | 'reset'>

interface IButtonProps {
  type: string
  size: string
  icon: string
  nativeType: string
  loading: boolean
  disabled: boolean
  plain: boolean
  autofocus: boolean
  round: boolean
  circle: boolean
}

type EmitFn = (evt: Event) => void

export default defineComponent({
  name: 'TjButton',

  props: {
    type: {
      type: String as IButtonType,
      default: 'default',
      validator: (val: string) => {
        return [
          'default',
          'primary',
          'success',
          'warning',
          'info',
          'danger',
          'text',
        ].includes(val)
      },
    },
    size: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
    icon: {
      type: String,
      default: '',
    },
    nativeType: {
      type: String as IButtonNativeType,
      default: 'button',
      validator: (val: string) => {
        return ['button', 'submit', 'reset'].includes(val)
      },
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
  },

  emits: ['click'],

  setup(props, ctx) {
    const $ELEMENT = useGlobalConfig()

    const elForm = inject(elFormKey, {} as TjFormContext)
    const elFormItem = inject(elFormItemKey, {} as TjFormItemContext)

    const buttonSize = computed(() => {
      return props.size || elFormItem.size || $ELEMENT.size
    })
    const buttonDisabled = computed(() => {
      return props.disabled || elForm.disabled
    })

    //methods
    const handleClick = evt => {
      ctx.emit('click', evt)
    }

    return {
      buttonSize,
      buttonDisabled,
      handleClick,
    }
  },
})
</script>
