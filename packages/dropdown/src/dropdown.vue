<template>
  <tj-popper
    ref="triggerVnode"
    v-model:visible="visible"
    :placement="placement"
    :effect="effect"
    pure
    :manual-mode="true"
    :trigger="[trigger]"
    popper-class="tj-dropdown__popper"
    append-to-body
    transition="tj-zoom-in-top"
    :stop-popper-mouse-event="false"
    :gpu-acceleration="false"
  >
    <template #default>
      <slot name="dropdown"></slot>
    </template>
    <template #trigger>
      <div
        :class="[
          'tj-dropdown',
          dropdownSize ? 'tj-dropdown--' + dropdownSize : '',
        ]"
      >
        <slot v-if="!splitButton" name="default"> </slot>
        <template v-else>
          <tj-button-group>
            <tj-button
              :size="dropdownSize"
              :type="type"
              @click="handlerMainButtonClick"
            >
              <slot name="default"></slot>
            </tj-button>
            <tj-button
              :size="dropdownSize"
              :type="type"
              class="tj-dropdown__caret-button"
            >
              <i class="tj-dropdown__icon tj-icon-arrow-down"></i>
            </tj-button>
          </tj-button-group>
        </template>
      </div>
    </template>
  </tj-popper>
</template>
<script lang="ts">
import {
  defineComponent,
  provide,
  getCurrentInstance,
  ref,
  computed,
  watch,
  onMounted,
  ComponentPublicInstance,
} from 'vue'
import { on, addClass, removeClass } from '@element-plus/utils/dom'
import TjButton from '@element-plus/button'
import TjButtonGroup from '@element-plus/button-group'
import TjPopper from '@element-plus/popper'
import { useDropdown } from './useDropdown'

export default defineComponent({
  name: 'TjDropdown',
  components: {
    TjButton,
    TjButtonGroup,
    TjPopper,
  },
  props: {
    trigger: {
      type: String,
      default: 'hover',
    },
    type: String,
    size: {
      type: String,
      default: '',
    },
    splitButton: Boolean,
    hideOnClick: {
      type: Boolean,
      default: true,
    },
    placement: {
      type: String,
      default: 'bottom',
    },
    showTimeout: {
      type: Number,
      default: 150,
    },
    hideTimeout: {
      type: Number,
      default: 150,
    },
    tabindex: {
      type: Number,
      default: 0,
    },
    effect: {
      type: String,
      default: 'light',
    },
  },
  emits: ['visible-change', 'click', 'command'],
  setup(props, { emit }) {
    const _instance = getCurrentInstance()
    const { ELEMENT } = useDropdown()

    const timeout = ref<Nullable<number>>(null)

    const visible = ref(false)
    watch(
      () => visible.value,
      val => {
        if (val) triggerTjmFocus()
        if (!val) triggerTjmBlur()
        emit('visible-change', val)
      },
    )

    const focusing = ref(false)
    watch(
      () => focusing.value,
      val => {
        const selfDefine = triggerTjm.value
        if (selfDefine) {
          if (val) {
            addClass(selfDefine, 'focusing')
          } else {
            removeClass(selfDefine, 'focusing')
          }
        }
      },
    )

    const triggerVnode = ref<Nullable<ComponentPublicInstance>>(null)
    const triggerTjm = computed<Nullable<HTMLButtonElement>>(() => {
      const _: any =
        (triggerVnode.value?.$refs.triggerRef as HTMLElement)?.children[0] ?? {}
      return !props.splitButton ? _ : _.children?.[1]
    })

    function handleClick() {
      if (triggerTjm.value?.disabled) return
      if (visible.value) {
        hide()
      } else {
        show()
      }
    }

    function show() {
      if (triggerTjm.value?.disabled) return
      timeout.value && clearTimeout(timeout.value)
      timeout.value = window.setTimeout(
        () => {
          visible.value = true
        },
        ['click', 'contextmenu'].includes(props.trigger)
          ? 0
          : props.showTimeout,
      )
    }

    function hide() {
      if (triggerTjm.value?.disabled) return
      removeTabindex()
      if (props.tabindex >= 0) {
        resetTabindex(triggerTjm.value)
      }
      clearTimeout(timeout.value)
      timeout.value = window.setTimeout(
        () => {
          visible.value = false
        },
        ['click', 'contextmenu'].includes(props.trigger)
          ? 0
          : props.hideTimeout,
      )
    }

    function removeTabindex() {
      triggerTjm.value?.setAttribute('tabindex', '-1')
    }

    function resetTabindex(ele) {
      removeTabindex()
      ele?.setAttribute('tabindex', '0')
    }

    function triggerTjmFocus() {
      triggerTjm.value?.focus?.()
    }
    function triggerTjmBlur() {
      triggerTjm.value?.blur?.()
    }

    const dropdownSize = computed(() => props.size || ELEMENT.size)
    function commandHandler(...args) {
      emit('command', ...args)
    }

    provide('elDropdown', {
      instance: _instance,
      dropdownSize,
      visible,
      handleClick,
      commandHandler,
      show,
      hide,
      trigger: computed(() => props.trigger),
      hideOnClick: computed(() => props.hideOnClick),
      triggerTjm,
    })

    onMounted(() => {
      if (!props.splitButton) {
        on(triggerTjm.value, 'focus', () => {
          focusing.value = true
        })
        on(triggerTjm.value, 'blur', () => {
          focusing.value = false
        })
        on(triggerTjm.value, 'click', () => {
          focusing.value = false
        })
      }
      if (props.trigger === 'hover') {
        on(triggerTjm.value, 'mouseenter', show)
        on(triggerTjm.value, 'mouseleave', hide)
      } else if (props.trigger === 'click') {
        on(triggerTjm.value, 'click', handleClick)
      } else if (props.trigger === 'contextmenu') {
        on(triggerTjm.value, 'contextmenu', e => {
          e.preventDefault()
          handleClick()
        })
      }

      Object.assign(_instance, {
        handleClick,
        hide,
        resetTabindex,
      })
    })

    const handlerMainButtonClick = event => {
      emit('click', event)
      hide()
    }

    return {
      visible,
      dropdownSize,
      handlerMainButtonClick,
      triggerVnode,
    }
  },
})
</script>
