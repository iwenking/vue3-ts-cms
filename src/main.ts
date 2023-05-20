import { createApp } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElement from './element'
import hyRequest from './service'
import 'normalize.css'
import './assets/css/index.css'
import { setupStore } from './store/index'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
installElement(app)
app.use(router)
app.use(store)
setupStore()
app.mount('#app')
