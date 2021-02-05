<template>
  <i :class="`tj-icon-${name}`"></i>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TjIcon',
  props: {
    name: {
      type: String,
      default: '',
    },
  },
})
</script>
