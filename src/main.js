import './assets/css/style-docs.css'
import './assets/css/tema-sae.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
