<template>
  <div class="tj-empty">
    <div class="tj-empty__image" :style="imageStyle">
      <img v-if="image" :src="image" ondragstart="return false" />
      <slot v-else name="image">
        <img-empty />
      </slot>
    </div>
    <div class="tj-empty__description">
      <slot v-if="$slots.description" name="description"></slot>
      <p v-else>{{ emptyDescription }}</p>
    </div>
    <div v-if="$slots.default" class="tj-empty__bottom">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import ImgEmpty from './img-empty.vue'
import { t } from '@element-plus/locale'

export default defineComponent({
  name: 'TjEmpty',
  components: {
    [ImgEmpty.name]: ImgEmpty,
  },
  props: {
    image: {
      type: String,
      default: '',
    },
    imageSize: Number,
    description: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const emptyDescription = computed(
      () => props.description || t('el.table.emptyText'),
    )
    const imageStyle = computed(() => {
      return {
        width: props.imageSize ? `${props.imageSize}px` : '',
      }
    })

    return {
      emptyDescription,
      imageStyle,
    }
  },
})
</script>
