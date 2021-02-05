<template>
  <tj-scrollbar
    :id="menuId"
    tag="ul"
    role="menu"
    class="tj-cascader-menu"
    wrap-class="tj-cascader-menu__wrap"
    :view-class="['tj-cascader-menu__list', isEmpty && 'is-empty']"
    @mousemove="handleMouseMove"
    @mouseleave="clearHoverZone"
  >
    <tj-cascader-node
      v-for="node in nodes"
      :key="node.uid"
      :node="node"
      :menu-id="menuId"
      @expand="handleExpand"
    />
    <div v-if="isEmpty" class="tj-cascader-menu__empty-text">
      {{ t('el.cascader.noData') }}
    </div>
    <svg
      v-else-if="panel.isHoverMenu"
      ref="hoverZone"
      class="tj-cascader-menu__hover-zone"
    />
  </tj-scrollbar>
</template>

<script lang="ts">
import {
  computed, defineComponent, getCurrentInstance,
  inject, ref,
} from 'vue'
import TjScrollbar from '@element-plus/scrollbar'
import TjCascaderNode from './node.vue'
import { t } from '@element-plus/locale'
import { generateId } from '@element-plus/utils/util'
import {
  CascaderNode,
  CASCADER_PANEL_INJECTION_KEY,
} from './types'

import type { PropType } from 'vue'

export default defineComponent({
  name: 'TjCascaderMenu',

  components: {
    TjScrollbar,
    TjCascaderNode,
  },

  props: {
    nodes: {
      type: Array as PropType< CascaderNode[]>,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },

  setup (props) {
    const instance = getCurrentInstance()
    const id = generateId()
    let activeNode: Nullable<HTMLElement> = null
    let hoverTimer: Nullable<TimeoutHandle> = null

    const panel = inject(CASCADER_PANEL_INJECTION_KEY)

    const hoverZone = ref(null)

    const isEmpty = computed(() => !props.nodes.length)
    const menuId = computed(() => `cascader-menu-${id}-${props.index}`)

    const handleExpand = (e: MouseEvent) => {
      activeNode = e.target as HTMLElement
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!panel.isHoverMenu || !activeNode || !hoverZone.value) return

      if (activeNode.contains(e.target as HTMLElement)) {
        clearHoverTimer()

        const el = instance.vnode.el as HTMLElement
        const { left } = el.getBoundingClientRect()
        const { offsetWidth, offsetHeight } = el
        const startX = e.clientX - left
        const top = activeNode.offsetTop
        const bottom = top + activeNode.offsetHeight

        hoverZone.value.innerHTML = `
          <path style="pointer-events: auto;" fill="transparent" d="M${startX} ${top} L${offsetWidth} 0 V${top} Z" />
          <path style="pointer-events: auto;" fill="transparent" d="M${startX} ${bottom} L${offsetWidth} ${offsetHeight} V${bottom} Z" />
        `
      } else if (!hoverTimer) {
        hoverTimer = window.setTimeout(clearHoverZone, panel.config.hoverThreshold)
      }
    }

    const clearHoverTimer = () => {
      if (!hoverTimer) return
      clearTimeout(hoverTimer)
      hoverTimer = null
    }

    const clearHoverZone = () => {
      if (!hoverZone.value) return
      hoverZone.value.innerHTML = ''
      clearHoverTimer()
    }

    return {
      panel,
      hoverZone,
      isEmpty,
      menuId,
      t,
      handleExpand,
      handleMouseMove,
      clearHoverZone,
    }
  },
})
</script>
