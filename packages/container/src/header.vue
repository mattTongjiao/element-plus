<template>
  <header class="tj-header" :style="{ height }">
    <slot></slot>
  </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TjHeader',
  props: {
    height: {
      type: String,
      default: '60px',
    },
  },
})
</script>
