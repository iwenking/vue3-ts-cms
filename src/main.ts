import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElement from './element'
import './service/api'

const app = createApp(App)
installElement(app)
app.use(router)
app.use(store)
app.mount('#app')
// createApp(App).use(store).use(router).mount('#app')
