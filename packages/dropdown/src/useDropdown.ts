import { inject, computed, ref } from 'vue'
import { generateId, useGlobalConfig } from '@element-plus/utils/util'
import { EVENT_CODE } from '@element-plus/utils/aria'
import { on, addClass } from '@element-plus/utils/dom'
import { ITjDropdownInstance } from './dropdown'

export const useDropdown = () => {
  const ELEMENT = useGlobalConfig()
  const elDropdown = inject<ITjDropdownInstance>('elDropdown', {})
  const _elDropdownSize = computed(() => elDropdown?.dropdownSize)

  return {
    ELEMENT,
    elDropdown,
    _elDropdownSize,
  }
}

export const initDropdownDomEvent = (dropdownChildren, triggerTjm, _instance) => {
  const menuItems = ref<Nullable<HTMLButtonElement[]>>(null)
  const menuItemsArray = ref<Nullable<HTMLElement[]>>(null)
  const dropdownTjm = ref<Nullable<HTMLElement>>(null)
  const listId = ref(`dropdown-menu-${generateId()}`)
  dropdownTjm.value = dropdownChildren?.subTree.el

  function removeTabindex() {
    triggerTjm.setAttribute('tabindex', '-1')
    menuItemsArray.value?.forEach(item => {
      item.setAttribute('tabindex', '-1')
    })
  }

  function resetTabindex(ele) {
    removeTabindex()
    ele?.setAttribute('tabindex', '0')
  }

  function handleTriggerKeyDown(ev: KeyboardEvent) {
    const code = ev.code
    if ([EVENT_CODE.up, EVENT_CODE.down].includes(code)) {
      removeTabindex()
      resetTabindex(menuItems.value[0])
      menuItems.value[0].focus()
      ev.preventDefault()
      ev.stopPropagation()
    } else if (code === EVENT_CODE.enter) {
      _instance.handleClick()
    } else if ([EVENT_CODE.tab, EVENT_CODE.esc].includes(code)) {
      _instance.hide()
    }
  }

  function handleItemKeyDown(ev) {
    const code = ev.code
    const target = ev.target
    const currentIndex = menuItemsArray.value.indexOf(target)
    const max = menuItemsArray.value.length - 1
    let nextIndex
    if ([EVENT_CODE.up, EVENT_CODE.down].includes(code)) {
      if (code === EVENT_CODE.up) {
        nextIndex = currentIndex !== 0 ? currentIndex - 1 : 0
      } else {
        nextIndex = currentIndex < max ? currentIndex + 1 : max
      }
      removeTabindex()
      resetTabindex(menuItems.value[nextIndex])
      menuItems.value[nextIndex].focus()
      ev.preventDefault()
      ev.stopPropagation()
    } else if (code === EVENT_CODE.enter) {
      triggerTjmFocus()
      target.click()
      if (_instance.props.hideOnClick) {
        _instance.hide()
      }
    } else if ([EVENT_CODE.tab, EVENT_CODE.esc].includes(code)) {
      _instance.hide()
      triggerTjmFocus()
    }
  }

  function initAria() {
    dropdownTjm.value.setAttribute('id', listId.value)
    triggerTjm.setAttribute('aria-haspopup', 'list')
    triggerTjm.setAttribute('aria-controls', listId.value)
    if (!_instance.props.splitButton) {
      triggerTjm.setAttribute('role', 'button')
      triggerTjm.setAttribute('tabindex', _instance.props.tabindex)
      addClass(triggerTjm, 'tj-dropdown-selfdefine')
    }
  }

  function initEvent() {
    on(triggerTjm, 'keydown', handleTriggerKeyDown)
    on(dropdownTjm.value, 'keydown', handleItemKeyDown, true)
  }

  function initDomOperation() {
    menuItems.value = dropdownTjm.value.querySelectorAll("[tabindex='-1']") as unknown as HTMLButtonElement[]
    menuItemsArray.value = [].slice.call(menuItems.value)

    initEvent()
    initAria()
  }

  function triggerTjmFocus() {
    triggerTjm.focus()
  }

  initDomOperation()
}
