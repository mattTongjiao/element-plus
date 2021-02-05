<template>
  <div>
    <div
      class="tj-card"
      :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'"
    >
      <div v-if="$slots.header || header" class="tj-card__header">
        <slot name="header">{{ header }}</slot>
      </div>
      <div class="tj-card__body" :style="bodyStyle">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'TjCard',
  props: {
    header: {
      type: String,
      default: '',
    },
    bodyStyle: {
      type: [String, Object, Array],
      default: '',
    },
    shadow: {
      type: String,
      default: '',
    },
  },
})
</script>
