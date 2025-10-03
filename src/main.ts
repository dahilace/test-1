import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import '@/assets/styles/main.css';
import 'virtual:svg-icons-register'

import { useListStore } from './stores/listStore';

const app = createApp(App)

app.use(createPinia())

const listStore = useListStore()
listStore.getFromLocalStorage()

app.mount('#app')
