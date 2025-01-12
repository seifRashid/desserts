<!-- Sphere.vue -->
<template>
  <canvas ref="canvas"></canvas>
</template>

<script setup>
import * as THREE from 'three'
import { onMounted, ref } from 'vue'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const canvas = ref(null)

onMounted(() => {
  const scene = new THREE.Scene()
  // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  // orthographic camera
  const camera = new THREE.OrthographicCamera(-10, 10, 10, -10, 0.1, 1000)
  camera.position.z = 5

  const renderer = new THREE.WebGLRenderer({ canvas: canvas.value })
  // instantiate controls with the canvas ref
  const controls = new OrbitControls(camera, canvas.value)
  // renderer.setSize(window.innerWidth, window.innerHeight)

  // const geometry = new THREE.SphereGeometry(1, 32, 32)
  const geometry = new THREE.BoxGeometry(2, 2, 2)
  const material = new THREE.MeshBasicMaterial({ color: 'green', wireframe: true })
  const sphere = new THREE.Mesh(geometry, material)
  scene.add(sphere)

  function animate() {
    camera.setSize(window.innerWidth / window.innerHeight)
    renderer.setSize(window.innerWidth, window.innerHeight)
    sphere.rotation.x += 0.01
    sphere.rotation.y += 0.01
    controls.update()
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  }
  animate()
})
</script>

<style>
canvas {
  display: block;
  margin: 0 auto;
}
</style>
