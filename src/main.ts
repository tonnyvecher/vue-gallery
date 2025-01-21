import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { useThemeStore } from './stores/theme'

const app = createApp(App)

app.use(createPinia())

const themeStore = useThemeStore()
const mediaQuery = window.matchMedia('prefers-color-scheme: dark')
themeStore.toggleTheme(mediaQuery.matches ? 'dark' : 'light')
mediaQuery.addEventListener('change', (event) => {
  themeStore.toggleTheme(event.matches ? 'dark' : 'light')
})

app.mount('#app')
