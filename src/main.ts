import "../src/assets/main.css"
import { createApp } from 'vue'
import AOS from "aos"
import App from './App.vue'





createApp(App).use(AOS.init).mount('#app')


