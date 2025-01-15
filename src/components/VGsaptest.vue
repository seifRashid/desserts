<template>
  <div class="box" ref="boxRef">Animate Me!</div>
  <button @click="animateBox">Animate</button>
</template>

<script setup>
import { ref } from 'vue'
import { gsap } from 'gsap'

const boxRef = ref(null)

const animateBox = () => {
  gsap.to(boxRef.value, {
    x: 400,
    rotation: 360,
    duration: 2,
    ease: 'power2.inOut',
  })
}
</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: coral;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
</style>
