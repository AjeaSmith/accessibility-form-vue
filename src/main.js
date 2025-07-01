import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import VueAnnouncer from '@vue-a11y/announcer'
import '@vue-a11y/announcer/dist/style.css'

createApp(App).use(VueAnnouncer).mount('#app')
