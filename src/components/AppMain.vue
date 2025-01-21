<template>
  <div class="app-main">
    <SearchInput class="app-main__search-input" v-model="searchText" />
    <div class="app-main__content">
      <GallerySkeletons v-if="!paintingsStore.data" />
      <GalleryEmpty v-else-if="!paintingsStore.data.length" />
      <template v-else>
        <GalleryList :list="paintingsStore.data" :isLoading="paintingsStore.isLoading" />
        <AppPagination :total="paintingsStore.total" :limit="LIMIT" v-model="page" />
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
import SearchInput from './SearchInput.vue'
import GalleryList from './GalleryList.vue'
import AppPagination from './AppPagination.vue'
import GalleryEmpty from './GalleryEmpty.vue'
import GallerySkeletons from './GallerySkeletons.vue'
import { usePaintingsStore } from '@/stores/paintings'
import { ref, watchEffect } from 'vue'
import { refDebounced } from '@vueuse/core'

const searchText = ref('')
const debouncedSearchText = refDebounced(searchText, 500)
const paintingsStore = usePaintingsStore()

const page = ref(1)
const LIMIT = 6

watchEffect(() =>
  paintingsStore.getData({ q: debouncedSearchText.value, _limit: LIMIT, _page: page.value }),
)
</script>
<style lang="scss" scoped>
.app-main {
  display: grid;
  grid-template-columns: 1fr 336px;
  row-gap: 20px;

  &__search-input {
    grid-column: 2/3;
  }

  &__content {
    display: grid;
    gap: 40px;
    grid-column: span 2;
    justify-items: center;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 296px;
  }

  @media (max-width: 320px) {
    grid-template-columns: 1fr;

    &__search-input,
    &__gallery-list {
      grid-column: auto;
    }
  }
}
</style>
