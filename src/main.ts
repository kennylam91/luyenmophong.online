import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'font-awesome/scss/font-awesome.scss'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
