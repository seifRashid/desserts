<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

// Create a ref to target the paragraph
const paragraphRef = ref(null)

onMounted(() => {
  gsap.to(paragraphRef.value, {
    x: 400,       // Move 100px to the right
    duration: 1,  // Animation lasts 1 second
    ease: 'power2.out' // Smooth easing
  })
})
</script>

<template>
  <p ref="paragraphRef" class="w-screen">
    Hello one two testing
  </p>
</template>
