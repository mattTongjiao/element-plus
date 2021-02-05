<template>
  <ul
    v-clickOutside:[triggerTjm]="innerHide"
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
import { ClickOutside } from '@element-plus/directives'
import { useDropdown, initDropdownDomEvent } from './useDropdown'

export default defineComponent({
  name: 'TjDropdownMenu',
  directives: {
    ClickOutside,
  },
  setup() {
    const { _elDropdownSize, elDropdown } = useDropdown()
    const size = _elDropdownSize.value

    function show() {
      elDropdown.show?.()
    }
    function hide() {
      if (['click', 'contextmenu'].includes(elDropdown.trigger.value)) return
      _hide()
    }
    function _hide() {
      elDropdown.hide?.()
    }

    onMounted(() => {
      const dropdownMenu = getCurrentInstance()
      initDropdownDomEvent(
        dropdownMenu,
        elDropdown.triggerTjm.value,
        elDropdown.instance,
      )
    })

    return {
      size,
      show,
      hide,
      innerHide: _hide,
      triggerTjm: elDropdown.triggerTjm,
    }
  },
})
</script>
