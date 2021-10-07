import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'nes.css/css/nes.min.css'
import '@/assets/scss/base.scss'
import 'animate.css'

createApp(App).use(store).use(router).mount('#app')
