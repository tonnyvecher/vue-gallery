<template>
  <div class="gallery-item">
    <img class="gallery-item__image" :src="item.imageUrl" />
    <div class="gallery-item__content">
      <div class="gallery-item__content-container">
        <div class="gallery-item__content-hr" />
        <div class="gallery-item__content-about">
          <div class="gallery-item__title">{{ item.name }}</div>
          <div class="gallery-item__year">{{ item.created }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
interface Props {
  item: {
    authorId: number
    created: string
    id: number
    imageUrl: string
    locationId: number
    name: string
  }
}

export type GalleryItemProps = Props

defineProps<Props>()
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@300;400;500;600;700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Merriweather:wght@400;700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:wght@700&display=swap');
.gallery-item {
  display: grid;
  background-color: lightgray;
  aspect-ratio: 3/2;
  height: min-content;

  &__image {
    grid-area: 1/-1;
    display: block;
    object-fit: cover;
    max-width: 100%;
    height: 100%;
    min-height: 0;
    width: 100%;
  }

  &__content {
    grid-area: 1/-1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  &__content-container {
    display: flex;
    gap: 20px;
    max-width: 300px;
    background-color: var(--body-background);
    padding: 20px 20px 20px 0;
  }

  &__content-hr {
    border-left: 2px solid var(--gallery-item-accent);
  }

  &__content-about {
    display: grid;
    gap: 8px;
  }

  &__title {
    font-family: 'Cormorant SC', serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 19.38px;
    text-transform: uppercase;
  }

  &__year {
    font-family: 'Inter', serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 14.52px;
    color: var(--gallery-item-accent);
  }

  @media (max-width: 768px) {
    &__content-container {
      padding: 12px;
    }

    &__content-hr {
      display: none;
    }
  }

  @media (max-width: 320px) {
    &__content-container {
      padding: 8px 12px;
      max-width: 236px;
    }

    &__content-hr {
      display: none;
    }
  }
}
</style>
