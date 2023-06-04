import { createApp } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './assets/css/index.css'
import { setupStore } from './store/index'
import { globalRegister } from './global/index'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
//窗口缩小的时候报错的问题
// window.ResizeObserver = class _NewResizeObserver extends ResizeObserver {
//   constructor(callback: any) {
//     super(() =>
//       window.requestAnimationFrame(() => callback.apply(this, arguments))
//     )
//   }
// }
app.use(globalRegister)
app.use(store)
setupStore()
app.use(router)
app.mount('#app')
