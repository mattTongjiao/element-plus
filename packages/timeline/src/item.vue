<template>
  <li class="tj-timeline-item">
    <div class="tj-timeline-item__tail"></div>

    <div
      v-if="!$slots.dot"
      class="tj-timeline-item__node"
      :class="[
        `tj-timeline-item__node--${size || ''}`,
        `tj-timeline-item__node--${type || ''}`,
      ]"
      :style="{
        backgroundColor: color,
      }"
    >
      <i v-if="icon" class="tj-timeline-item__icon" :class="icon"></i>
    </div>
    <div v-if="$slots.dot" class="tj-timeline-item__dot">
      <slot name="dot"></slot>
    </div>

    <div class="tj-timeline-item__wrapper">
      <div
        v-if="!hideTimestamp && placement === 'top'"
        class="tj-timeline-item__timestamp is-top"
      >
        {{ timestamp }}
      </div>

      <div class="tj-timeline-item__content">
        <slot></slot>
      </div>

      <div
        v-if="!hideTimestamp && placement === 'bottom'"
        class="tj-timeline-item__timestamp is-bottom"
      >
        {{ timestamp }}
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { inject, defineComponent } from 'vue'

interface ITimeLineItemProps {
  timestamp: string
  hideTimestamp: boolean
  placement: string
  type: string
  color: string
  size: string
  icon: string
}

export default defineComponent({
  name: 'TjTimelineItem',
  props: {
    timestamp: {
      type: String,
      default: '',
    },
    hideTimestamp: {
      type: Boolean,
      default: false,
    },
    placement: {
      type: String,
      default: 'bottom',
    },
    type: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'normal',
    },
    icon: {
      type: String,
      default: '',
    },
  },
  setup() {
    inject('timeline')
  },
})
</script>
