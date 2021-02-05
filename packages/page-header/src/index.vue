<template>
  <div class="tj-page-header">
    <div class="tj-page-header__left" @click="handleClick">
      <i class="tj-icon-back"></i>
      <div class="tj-page-header__title">
        <slot name="title">{{ title }}</slot>
      </div>
    </div>
    <div class="tj-page-header__content">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { t } from '@element-plus/locale'

export default defineComponent({
  name: 'TjPageHeader',
  props: {
    title: {
      type: String,
      default: () => t('el.pageHeader.title'),
    },
    content: {
      type: String,
      default: '',
    },
  },
  emits: ['back'],
  setup(props, { emit }) {
    function handleClick() {
      emit('back')
    }

    return {
      handleClick,
    }
  },
})
</script>
