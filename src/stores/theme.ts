import { defineStore } from 'pinia'
import { ref } from 'vue'
type Theme = 'dark' | 'light'
export const useThemeStore = defineStore('theme', () => {
  const theme = ref<Theme>('light')

  const toggleTheme = (value: Theme) => {
    document.documentElement.setAttribute('data-theme', value)
    theme.value = value
  }

  return { theme, toggleTheme }
})
