<template>
  <tj-popper
    v-model:visible="visible"
    trigger="click"
    effect="light"
    popper-class="tj-popover"
    append-to-body
  >
    <div class="tj-popconfirm">
      <p class="tj-popconfirm__main">
        <i
          v-if="!hideIcon"
          :class="icon"
          class="tj-popconfirm__icon"
          :style="{ color: iconColor }"
        ></i>
        {{ title }}
      </p>
      <div class="tj-popconfirm__action">
        <tj-button size="mini" :type="cancelButtonType" @click="cancel">
          {{ cancelButtonText_ }}
        </tj-button>
        <tj-button size="mini" :type="confirmButtonType" @click="confirm">
          {{ confirmButtonText_ }}
        </tj-button>
      </div>
    </div>
    <template #trigger>
      <slot name="reference"></slot>
    </template>
  </tj-popper>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import TjButton from '@tongjiaoui-plus/button'
import TjPopper from '@tongjiaoui-plus/popper'
import { t } from '@tongjiaoui-plus/locale'

export default defineComponent({
  name: 'TjPopconfirm',

  components: {
    TjButton,
    TjPopper,
  },

  props: {
    title: {
      type: String,
    },
    confirmButtonText: {
      type: String,
    },
    cancelButtonText: {
      type: String,
    },
    confirmButtonType: {
      type: String,
      default: 'primary',
    },
    cancelButtonType: {
      type: String,
      default: 'text',
    },
    icon: {
      type: String,
      default: 'tj-icon-question',
    },
    iconColor: {
      type: String,
      default: '#f90',
    },
    hideIcon: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['confirm', 'cancel'],
  setup(props, { emit }) {
    const visible = ref(false)
    const confirm = () => {
      visible.value = false
      emit('confirm')
    }
    const cancel = () => {
      visible.value = false
      emit('cancel')
    }
    const confirmButtonText_ = computed(() => {
      return props.confirmButtonText || t('el.popconfirm.confirmButtonText')
    })
    const cancelButtonText_ = computed(() => {
      return props.cancelButtonText || t('el.popconfirm.cancelButtonText')
    })
    return {
      visible,
      confirm,
      cancel,
      confirmButtonText_,
      cancelButtonText_,
    }
  },
})
</script>
