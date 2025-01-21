<template>
  <div class="gallery-skeletons">
    <div class="gallery-skeletons__element" v-for="n in 6" :key="n"></div>
  </div>
</template>
<style lang="scss" scoped>
.gallery-skeletons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  width: 100%;

  &__element {
    aspect-ratio: 3/2;
    background-color: lightgray;
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
}
</style>
