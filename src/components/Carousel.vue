<template>
  <div class="relative overflow-hidden">
    <!-- Carousel Container -->
    <div
      class="flex space-x-4 transition-transform duration-500"
      :style="{ transform: `translateX(-${scrollPosition}px)` }"
      ref="carouselContainer"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        class="min-w-[300px] bg-gray-300 rounded-md flex-shrink-0"
      >
        <div class="p-4 text-center">{{ item }}</div>
      </div>
    </div>

    <!-- Optional Controls -->
    <button
      @click="scrollLeft"
      class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white px-2 py-1 rounded-md"
    >
      &lt;
    </button>
    <button
      @click="scrollRight"
      class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white px-2 py-1 rounded-md"
    >
      &gt;
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
const scrollPosition = ref(0)
const carouselContainer = ref(null)

const scrollHandler = () => {
  if (carouselContainer.value) {
    scrollPosition.value = window.scrollY % carouselContainer.value.scrollWidth
  }
}

onMounted(() => {
  window.addEventListener('scroll', scrollHandler)
})

onUnmounted(() => {
  window.removeEventListener('scroll', scrollHandler)
})

const scrollLeft = () => {
  scrollPosition.value = Math.max(scrollPosition.value - 300, 0)
}

const scrollRight = () => {
  scrollPosition.value = Math.min(scrollPosition.value + 300, carouselContainer.value.scrollWidth)
}
</script>

<style scoped>
/* Add custom styling if needed */
</style>
