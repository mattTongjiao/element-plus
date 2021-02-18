<template>
  <div class="tj-checkbox-group" role="group" aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch, provide, nextTick, toRefs } from 'vue'
import { UPDATE_MODEL_EVENT } from '@tongjiaoui-plus/utils/constants'
import { isValidComponentSize } from '@tongjiaoui-plus/utils/validators'
import { useCheckboxGroup } from './useCheckbox'

import type { PropType } from 'vue'

export default defineComponent({
  name: 'TjCheckboxGroup',

  props: {
    modelValue: {
      type: [Object, Boolean, Array],
      default: () => undefined,
    },
    disabled: Boolean,
    min: {
      type: Number,
      default: undefined,
    },
    max: {
      type: Number,
      default: undefined,
    },
    size: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
    fill: {
      type: String,
      default: undefined,
    },
    textColor: {
      type: String,
      default: undefined,
    },
  },

  emits: [UPDATE_MODEL_EVENT, 'change'],

  setup(props, ctx) {
    const { tjFormItem, tjFormItemSize, ELEMENT } = useCheckboxGroup()
    const checkboxGroupSize = computed(() => props.size || tjFormItemSize.value || ELEMENT.size)

    const changeEvent = value => {
      ctx.emit(UPDATE_MODEL_EVENT, value)
      nextTick(() => {
        ctx.emit('change', value)
      })
    }

    const modelValue = computed({
      get() {
        return props.modelValue
      },
      set(val) {
        changeEvent(val)
      },
    })

    provide('CheckboxGroup', {
      name: 'TjCheckboxGroup',
      modelValue,
      ...toRefs(props),
      checkboxGroupSize,
      changeEvent,
    })

    watch(() => props.modelValue, val => {
      tjFormItem.formItemMitt?.emit('el.form.change', [val])
    })
  },
})
</script>
