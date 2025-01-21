<template>
  <div class="app">
    <div class="app__container">
      <AppHeader />
      <AppMain />
    </div>
  </div>
</template>
<script lang="ts" setup>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
</script>
<style lang="scss" scoped>
.app {
  padding-inline: 20px;

  &__container {
    max-width: 1240px;
    margin-inline: auto;
    display: grid;
    gap: 44px;
  }
}
</style>
