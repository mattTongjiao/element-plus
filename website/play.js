import { createApp } from 'vue'
import TongjiaoUIPlus from 'tongjiaoui-plus'
import App from './play/index.vue'
import '../packages/theme-chalk/src/index.scss'

const app = createApp(App)
app.use(TongjiaoUIPlus)
app.mount('#app')
