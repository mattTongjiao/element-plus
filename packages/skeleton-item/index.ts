import { App } from 'vue'
import SkeletonItem from './src/index.vue'
import type { SFCWithInstall } from '@tongjiaoui-plus/utils/types'

SkeletonItem.install = (app: App): void => {
  app.component(SkeletonItem.name, SkeletonItem)
}

const _SkeletonItem: SFCWithInstall<typeof SkeletonItem> = SkeletonItem

export default _SkeletonItem
