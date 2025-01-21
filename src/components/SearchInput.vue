<template>
  <label class="search-input">
    <Search class="search-input__icon" />
    <input type="text" class="search-input__input" placeholder="Painting title" v-model="model" />
    <button class="search-input__close-btn" v-if="model.length" @click="reset">
      <Close class="search-input__icon" />
    </button>
  </label>
</template>
<script lang="ts" setup>
import Search from '@/assets/search.svg'
import Close from '@/assets/close.svg'

const model = defineModel({ type: String, default: '' })

const reset = () => (model.value = '')
</script>
<style lang="scss" scoped>
.search-input {
  border-radius: 4px;
  border: 1px solid var(--input-search-border-color);
  padding: 8px 16px;
  background-color: var(--input-search-background);
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 12px;
  font-family: 'Inter' serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 19.6px;

  &:has(&__input:focus) {
    border-color: var(--input-search-color-border);
  }

  &__input {
    outline: none;
    border: none;
    background: none;
    color: var(--input-search-color);
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    &::placeholder {
      color: var(--input-search-placeholder);
    }
  }

  &__icon {
    fill: var(--input-search-color);
  }

  &__close-btn {
    display: flex;
    cursor: pointer;
    border: none;
    background: none;
  }
}
</style>
