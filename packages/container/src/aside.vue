<template>
  <aside class="tj-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TjAside',
  props: {
    width: {
      type: String,
      default: '300px',
    },
  },
})
</script>
