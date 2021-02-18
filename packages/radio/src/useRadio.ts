import { ref, computed, inject, WritableComputedRef } from 'vue'
import { tjFormKey, tjFormItemKey } from '@tongjiaoui-plus/form'
import { useGlobalConfig } from '@tongjiaoui-plus/utils/util'
import radioGroupKey from './token'

import type { ComputedRef } from 'vue'
import type { TjFormContext, TjFormItemContext } from '@tongjiaoui-plus/form'
import type { RadioGroupContext } from './token'

export const useRadio = () => {

  const ELEMENT = useGlobalConfig()
  const tjForm = inject(tjFormKey, {} as TjFormContext)
  const tjFormItem = inject(tjFormItemKey, {} as TjFormItemContext)
  const radioGroup = inject(radioGroupKey, {} as RadioGroupContext)
  const focus = ref(false)
  const isGroup = computed(() => radioGroup?.name === 'TjRadioGroup')
  const tjFormItemSize = computed(() => tjFormItem.size || ELEMENT.size)

  return {
    isGroup,
    focus,
    radioGroup,
    tjForm,
    ELEMENT,
    tjFormItemSize,
  }
}

interface IUseRadioAttrsProps {
  disabled?: boolean
  label: string | number | boolean
}

interface IUseRadioAttrsState {
  isGroup: ComputedRef<boolean>
  radioGroup: RadioGroupContext
  tjForm: TjFormContext
  model: WritableComputedRef<string | number | boolean>
}

export const useRadioAttrs = (props: IUseRadioAttrsProps, {
  isGroup,
  radioGroup,
  tjForm,
  model,
}: IUseRadioAttrsState) => {
  const isDisabled = computed(() => {
    return isGroup.value
      ? radioGroup.disabled || props.disabled || tjForm.disabled
      : props.disabled || tjForm.disabled
  })

  const tabIndex = computed(() => {
    return (isDisabled.value || (isGroup.value && model.value !== props.label)) ? -1 : 0
  })

  return {
    isDisabled,
    tabIndex,
  }

}
