<template>
  <header class="app-header">
    <Logo :class="{ 'app-header__logo--light': themeStore.theme === 'light' }" />
    <button class="app-header__theme" @click="toggleTheme">
      <ThemeLight v-if="themeStore.theme === 'dark'" />
      <ThemeDark v-if="themeStore.theme === 'light'" />
    </button>
  </header>
</template>
<script lang="ts" setup>
import Logo from '@/assets/logo.svg'
import ThemeLight from '@/assets/theme-light.svg'
import ThemeDark from '@/assets/theme-dark.svg'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()

const toggleTheme = () => {
  themeStore.toggleTheme(themeStore.theme === 'dark' ? 'light' : 'dark')
}
</script>
<style lang="scss" scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;

  &__logo {
    &--light {
      fill: #575757;
    }
  }

  &__theme {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: var(--theme-button-background);
    cursor: pointer;
  }
}
</style>
