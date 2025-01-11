<template>
  <div class="button-container">
    <canvas ref="canvas">Helloo Man</canvas>
  </div>
</template>

<script setup>
import * as THREE from 'three'
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { gsap } from 'gsap'

const canvas = ref(null)
let scene, camera, renderer, buttonMesh, raycaster, mouse, animationFrameId

function init() {
  // Scene
  scene = new THREE.Scene()

  // Camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 5

  // Renderer
  renderer = new THREE.WebGLRenderer({ canvas: canvas.value, antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio)

  // Button Geometry
  const geometry = new THREE.BoxGeometry(2, 0.5, 0.2)
  const material = new THREE.MeshStandardMaterial({
    color: 0x0078d4,
    roughness: 0.3,
    metalness: 0.7
  })
  buttonMesh = new THREE.Mesh(geometry, material)
  scene.add(buttonMesh)

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
  const pointLight = new THREE.PointLight(0xffffff, 1)
  pointLight.position.set(5, 5, 5)
  scene.add(ambientLight, pointLight)

  // Raycaster and Mouse
  raycaster = new THREE.Raycaster()
  mouse = new THREE.Vector2()

  // Animation Loop
  animate()
}

function animate() {
  animationFrameId = requestAnimationFrame(animate)

  // Check for mouse intersection
  raycaster.setFromCamera(mouse, camera)
  const intersects = raycaster.intersectObject(buttonMesh)

  if (intersects.length > 0) {
    // Scale up on hover
    gsap.to(buttonMesh.scale, { x: 1.1, y: 1.1, z: 1.1, duration: 0.2 })
  } else {
    // Reset scale
    gsap.to(buttonMesh.scale, { x: 1, y: 1, z: 1, duration: 0.2 })
  }

  renderer.render(scene, camera)
}

function onMouseMove(event) {
  // Update mouse position for raycaster
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
}

function onClick(event) {
  // Check for button click
  raycaster.setFromCamera(mouse, camera)
  const intersects = raycaster.intersectObject(buttonMesh)

  if (intersects.length > 0) {
    // Change color on click
    const newColor = new THREE.Color(Math.random(), Math.random(), Math.random())
    gsap.to(buttonMesh.material.color, {
      r: newColor.r,
      g: newColor.g,
      b: newColor.b,
      duration: 0.5
    })
  }
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

onMounted(() => {
  init()

  // Event Listeners
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('click', onClick)
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrameId)

  // Cleanup
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('click', onClick)
  window.removeEventListener('resize', onResize)

  // Dispose of scene objects
  scene.traverse((object) => {
    if (object.geometry) object.geometry.dispose()
    if (object.material) object.material.dispose()
  })
  renderer.dispose()
})
</script>

<style scoped>
.button-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
}

canvas {
  display: block;
}
</style>
