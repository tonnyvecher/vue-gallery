<template>
  <div class="gallery-list" :class="{ 'gallery-list--loading': isLoading }">
    <GalleryItem v-for="item in list" :key="item.id" :item="item" />
  </div>
</template>
<script lang="ts" setup>
import GalleryItem, { type GalleryItemProps } from './GalleryItem.vue'

interface Props {
  list: GalleryItemProps['item'][]
  isLoading: boolean
}

defineProps<Props>()
</script>
<style lang="scss" scoped>
.gallery-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  width: 100%;

  &--loading {
    filter: blur(4px);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
}
</style>
