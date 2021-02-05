import { App } from 'vue'
import TjCollapseTransition from './collapse-transition/index.vue'

export default (app: App): void => {
  app.component(TjCollapseTransition.name, TjCollapseTransition)
}


export { TjCollapseTransition }
