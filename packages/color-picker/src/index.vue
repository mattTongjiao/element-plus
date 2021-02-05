<template>
  <tj-popper
    ref="popper"
    v-model:visible="showPicker"
    effect="light"
    manual-mode
    trigger="click"
    :show-arrow="false"
    :offset="0"
    transition="tj-zoom-in-top"
    :gpu-acceleration="false"
    :popper-class="`tj-color-picker__panel tj-color-dropdown ${popperClass}`"
    :stop-popper-mouse-event="false"
  >
    <template #default>
      <div v-click-outside="hide">
        <div class="tj-color-dropdown__main-wrapper">
          <hue-slider ref="hue" class="hue-slider" :color="color" vertical />
          <sv-panel ref="svPanel" :color="color" />
        </div>
        <alpha-slider v-if="showAlpha" ref="alpha" :color="color" />
        <predefine
          v-if="predefine"
          ref="predefine"
          :color="color"
          :colors="predefine"
        />
        <div class="tj-color-dropdown__btns">
          <span class="tj-color-dropdown__value">
            <tj-input
              v-model="customInput"
              :validate-event="false"
              size="mini"
              @keyup.enter="handleConfirm"
              @blur="handleConfirm"
            />
          </span>
          <tj-button
            size="mini"
            type="text"
            class="tj-color-dropdown__link-btn"
            @click="clear"
          >
            {{ t('el.colorpicker.clear') }}
          </tj-button>
          <tj-button
            plain
            size="mini"
            class="tj-color-dropdown__btn"
            @click="confirmValue"
          >
            {{ t('el.colorpicker.confirm') }}
          </tj-button>
        </div>
      </div>
    </template>
    <template #trigger>
      <div
        :class="[
          'tj-color-picker',
          colorDisabled ? 'is-disabled' : '',
          colorSize ? `tj-color-picker--${colorSize}` : '',
        ]"
      >
        <div v-if="colorDisabled" class="tj-color-picker__mask"></div>
        <div class="tj-color-picker__trigger" @click="handleTrigger">
          <span
            class="tj-color-picker__color"
            :class="{ 'is-alpha': showAlpha }"
          >
            <span
              class="tj-color-picker__color-inner"
              :style="{
                backgroundColor: displayedColor,
              }"
            ></span>
            <span
              v-if="!modelValue && !showPanelColor"
              class="tj-color-picker__empty tj-icon-close"
            ></span>
          </span>
          <span
            v-show="modelValue || showPanelColor"
            class="tj-color-picker__icon tj-icon-arrow-down"
          ></span>
        </div>
      </div>
    </template>
  </tj-popper>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { computed, defineComponent, inject, nextTick, onMounted, provide, reactive, ref, watch } from 'vue'
import type { ComputedRef } from '@vue/reactivity'
import { ClickOutside } from '@tongjiaoui-plus/directives'
import Color from './color'
import SvPanel from './components/sv-panel.vue'
import HueSlider from './components/hue-slider.vue'
import AlphaSlider from './components/alpha-slider.vue'
import Predefine from './components/predefine.vue'
import TjPopper from '@tongjiaoui-plus/popper'
import TjButton from '@tongjiaoui-plus/button'
import TjInput from '@tongjiaoui-plus/input'
import { t } from '@tongjiaoui-plus/locale'
import { UPDATE_MODEL_EVENT } from '@tongjiaoui-plus/utils/constants'
import { useGlobalConfig } from '@tongjiaoui-plus/utils/util'
import { isValidComponentSize } from '@tongjiaoui-plus/utils/validators'
import type { TjFormContext, TjFormItemContext } from '@tongjiaoui-plus/form'
import { elFormItemKey, elFormKey } from '@tongjiaoui-plus/form'
import debounce from 'lodash/debounce'

interface IUseOptions {
  currentColor: ComputedRef<string>
}

const OPTIONS_KEY = Symbol()

export const useOptions = () => {
  return inject<IUseOptions>(OPTIONS_KEY)
}

export default defineComponent({
  name: 'TjColorPicker',
  components: {
    TjPopper,
    TjInput,
    SvPanel,
    HueSlider,
    AlphaSlider,
    TjButton,
    Predefine,
  },
  directives: {
    ClickOutside,
  },
  props: {
    modelValue: String,
    showAlpha: Boolean,
    colorFormat: String,
    disabled: Boolean,
    size: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
    popperClass: String,
    predefine: Array,
  },
  emits: ['change', 'active-change', UPDATE_MODEL_EVENT],
  setup(props, { emit }) {
    const ELEMENT = useGlobalConfig()
    const elForm = inject(elFormKey, {} as TjFormContext)
    const elFormItem = inject(elFormItemKey, {} as TjFormItemContext)

    const hue = ref(null)
    const svPanel = ref(null)
    const alpha = ref(null)
    const popper = ref(null)
    // data
    const color = reactive(new Color({
      enableAlpha: props.showAlpha,
      format: props.colorFormat,
    }))
    const showPicker = ref(false)
    const showPanelColor = ref(false)
    const customInput = ref('')
    // computed
    const displayedColor = computed(() => {
      if (!props.modelValue && !showPanelColor.value) {
        return 'transparent'
      }
      return displayedRgb(color, props.showAlpha)
    })
    const colorSize = computed(() => {
      return props.size || elFormItem.size || ELEMENT.size
    })
    const colorDisabled = computed(() => {
      return props.disabled || elForm.disabled
    })

    const currentColor = computed(() => {
      return !props.modelValue && !showPanelColor.value ? '' : color.value
    })
    // watch
    watch(() => props.modelValue, newVal => {
      if (!newVal) {
        showPanelColor.value = false
      } else if (newVal && newVal !== color.value) {
        color.fromString(newVal)
      }
    })
    watch(() => currentColor.value, val => {
      customInput.value = val
      emit('active-change', val)
      // showPanelColor.value = true
    })

    watch(() => color.value, () => {
      if (!props.modelValue && !showPanelColor.value) {
        showPanelColor.value = true
      }
    })

    // methods
    function displayedRgb(color, showAlpha) {
      if (!(color instanceof Color)) {
        throw Error('color should be instance of _color Class')
      }

      const { r, g, b } = color.toRgb()
      return showAlpha
        ? `rgba(${ r }, ${ g }, ${ b }, ${ color.get('alpha') / 100 })`
        : `rgb(${ r }, ${ g }, ${ b })`
    }

    function setShowPicker(value) {
      showPicker.value = value
    }

    const debounceSetShowPicker = debounce(setShowPicker, 100)

    function hide() {
      debounceSetShowPicker(false)
      resetColor()
    }

    function resetColor() {
      nextTick(() => {
        if (props.modelValue) {
          color.fromString(props.modelValue)
        } else {
          showPanelColor.value = false
        }
      })
    }

    function handleTrigger() {
      if (colorDisabled.value) return
      debounceSetShowPicker(!showPicker.value)
    }

    function handleConfirm() {
      color.fromString(customInput.value)
    }

    function confirmValue() {
      const value = color.value
      emit(UPDATE_MODEL_EVENT, value)
      emit('change', value)
      elFormItem.formItemMitt?.emit('el.form.change', value)
      debounceSetShowPicker(false)
      // check if modelValue change, if not change, then reset color.
      nextTick(() => {
        const newColor = new Color({
          enableAlpha: props.showAlpha,
          format: props.colorFormat,
        })
        newColor.fromString(props.modelValue)
        if (!color.compare(newColor)) {
          resetColor()
        }
      })
    }

    function clear() {
      debounceSetShowPicker(false)
      emit(UPDATE_MODEL_EVENT, null)
      emit('change', null)
      if (props.modelValue !== null) {
        elFormItem.formItemMitt?.emit('el.form.change', null)
      }
      resetColor()
    }

    onMounted(() => {
      if (props.modelValue) {
        color.fromString(props.modelValue)
        customInput.value = currentColor.value
      }
    })
    watch(() => showPicker.value, () => {
      nextTick(() => {
        hue.value?.update()
        svPanel.value?.update()
        alpha.value?.update()
      })
    })

    provide<IUseOptions>(OPTIONS_KEY, {
      currentColor,
    })

    return {
      color,
      colorDisabled,
      colorSize,
      displayedColor,
      showPanelColor,
      showPicker,
      customInput,
      handleConfirm,
      hide,
      handleTrigger,
      clear,
      confirmValue,
      t,
      hue,
      svPanel,
      alpha,
      popper,
    }
  },
})
</script>
