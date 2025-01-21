<template>
  <div class="app-pagination">
    <button class="app-pagination__arrow-btn" @click="changeActive(active - 1)" v-if="active !== 1">
      <ArrowLeft />
    </button>
    <div class="app-pagination__btn-list">
      <template v-for="n in count" :key="n">
        <div v-show="n !== 1 && n !== count && n - 2 === active">...</div>
        <button
          class="app-pagination__btn"
          :class="{ 'app-pagination__btn--active': n === active }"
          @click="changeActive(n)"
          v-show="show(n)"
        >
          {{ n }}
        </button>
        <div v-show="n !== 1 && n !== count && n + 2 === active">...</div>
      </template>
    </div>
    <button
      class="app-pagination__arrow-btn"
      @click="changeActive(active + 1)"
      v-if="active !== count"
    >
      <ArrowLeft class="app-pagination__arrow--right" />
    </button>
  </div>
</template>
<script lang="ts" setup>
import ArrowLeft from '@/assets/arrow-left.svg'
import { computed } from 'vue'

interface Props {
  total: number
  limit: number
}

const props = defineProps<Props>()
const count = computed(() => Math.ceil(props.total / props.limit))
const active = defineModel({ type: Number, default: 1 })

const changeActive = (n: number) => (active.value = n)

const show = (n: number): boolean => {
  if (n === active.value) return true
  if (n === 1 || n === count.value) return true
  if (n + 1 === active.value || n - 1 === active.value) return true

  return false
}
</script>
<style lang="scss" scoped>
.app-pagination {
  display: flex;
  align-items: center;
  gap: 20px;
  font-family: 'Inter' serif;

  &__btn-list {
    display: flex;
    gap: 4px;
  }

  &__btn {
    width: 24px;
    height: 24px;
    background: none;
    border: 1px solid transparent;
    cursor: pointer;
    padding: 0;
    color: var(--pagination-color-btn);

    &--active {
      background-color: var(--pagination-color-btn-active);
      border-radius: 4px;
    }

    &:hover {
      border-bottom-color: var(--pagination-color-btn-hover-border-bottom);
    }
  }

  &__arrow {
    &--right {
      transform: rotate(180deg);
    }
  }

  &__arrow-btn {
    display: flex;
    align-items: center;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    color: var(--pagination-color-btn);

    &:hover {
      background-color: var(--pagination-arrow-btn);
      border-radius: 4px;
    }
  }
}
</style>
