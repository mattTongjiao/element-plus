<template>
  <div :class="['tj-skeleton__item', `tj-skeleton__${variant}`]">
    <img-placeholder v-if="variant === 'image'" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ImgPlaceholder from './img-placeholder.vue'
import type { Variants } from './constants'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'TjSkeletonItem',
  components: {
    [ImgPlaceholder.name]: ImgPlaceholder,
  },
  props: {
    variant: {
      type: String as PropType<Variants>,
      default: 'text',
    },
  },
})
</script>
