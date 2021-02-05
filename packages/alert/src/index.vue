<template>
  <transition name="tj-alert-fade">
    <div
      v-show="visible"
      class="tj-alert"
      :class="[typeClass, center ? 'is-center' : '', 'is-' + effect]"
      role="alert"
    >
      <i
        v-if="showIcon"
        class="tj-alert__icon"
        :class="[iconClass, isBigIcon]"
      ></i>
      <div class="tj-alert__content">
        <span
          v-if="title || $slots.title"
          class="tj-alert__title"
          :class="[isBoldTitle]"
        >
          <slot name="title">{{ title }}</slot>
        </span>
        <p v-if="$slots.default || !!description" class="tj-alert__description">
          <slot>
            {{ description }}
          </slot>
        </p>
        <i
          v-if="closable"
          class="tj-alert__closebtn"
          :class="{
            'is-customed': closeText !== '',
            'tj-icon-close': closeText === '',
          }"
          @click="close"
        >
          {{ closeText }}
        </i>
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
import { defineComponent, computed, ref, PropType } from 'vue'

const TYPE_CLASSES_MAP = {
  success: 'tj-icon-success',
  warning: 'tj-icon-warning',
  error: 'tj-icon-error',
}

export default defineComponent({
  name: 'TjAlert',
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    type: {
      type: String as PropType<'success' | 'info' | 'error' | 'warning'>,
      default: 'info',
    },
    closable: {
      type: Boolean,
      default: true,
    },
    closeText: {
      type: String,
      default: '',
    },
    showIcon: Boolean,
    center: Boolean,
    effect: {
      type: String,
      default: 'light',
      validator: (value: string): boolean =>
        ['light', 'dark'].indexOf(value) > -1,
    },
  },
  emits: ['close'],
  setup(props, ctx) {
    // state
    const visible = ref(true)

    // computed
    const typeClass = computed(() => `tj-alert--${props.type}`)
    const iconClass = computed(
      () => TYPE_CLASSES_MAP[props.type] || 'tj-icon-info',
    )
    const isBigIcon = computed(() =>
      props.description || ctx.slots.default ? 'is-big' : '',
    )
    const isBoldTitle = computed(() =>
      props.description || ctx.slots.default ? 'is-bold' : '',
    )

    // methods
    const close = evt => {
      visible.value = false
      ctx.emit('close', evt)
    }

    return {
      visible,
      typeClass,
      iconClass,
      isBigIcon,
      isBoldTitle,
      close,
    }
  },
})
</script>
