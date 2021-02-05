<template>
  <ul v-show="visible" class="tj-select-group__wrap">
    <li class="tj-select-group__title">{{ label }}</li>
    <li>
      <ul class="tj-select-group">
        <slot></slot>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, provide, inject, ref, reactive, toRefs } from 'vue'
import { selectGroupKey, selectKey, selectEvents } from './token'

export default defineComponent({
  name: 'TjOptionGroup',
  componentName: 'TjOptionGroup',

  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const visible = ref(true)

    provide(
      selectGroupKey,
      reactive({
        ...toRefs(props),
      }),
    )

    const select = inject(selectKey)

    const queryChange = () => {
      visible.value = select?.options?.some(option => option.visible === true)
    }
    select.selectEmitter.on(selectEvents.groupQueryChange, queryChange)

    return {
      visible,
    }
  },
})
</script>
