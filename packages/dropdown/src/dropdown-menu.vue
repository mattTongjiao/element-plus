<template>
  <ul
    v-clickOutside:[triggerElm]="innerHide"
    :class="[size && `tj-dropdown-menu--${size}`]"
    class="tj-dropdown-menu"
    @mouseenter.stop="show"
    @mouseleave.stop="hide"
  >
    <slot></slot>
  </ul>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted } from 'vue'
import { ClickOutside } from '@tongjiaoui-plus/directives'
import { useDropdown, initDropdownDomEvent } from './useDropdown'

export default defineComponent({
  name: 'TjDropdownMenu',
  directives: {
    ClickOutside,
  },
  setup() {
    const { _tjDropdownSize, tjDropdown } = useDropdown()
    const size = _tjDropdownSize.value

    function show() {
      tjDropdown.show?.()
    }
    function hide() {
      if (['click', 'contextmenu'].includes(tjDropdown.trigger.value)) return
      _hide()
    }
    function _hide() {
      tjDropdown.hide?.()
    }

    onMounted(() => {
      const dropdownMenu = getCurrentInstance()
      initDropdownDomEvent(
        dropdownMenu,
        tjDropdown.triggerElm.value,
        tjDropdown.instance,
      )
    })

    return {
      size,
      show,
      hide,
      innerHide: _hide,
      triggerElm: tjDropdown.triggerElm,
    }
  },
})
</script>
