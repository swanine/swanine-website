import { createApp } from 'vue'
import App from './App'
import store from './store/index'
import './assets/styles/index.scss'

createApp(App).use(store).mount('#swanine')
