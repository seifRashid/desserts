<!-- Sphere.vue -->
<template>
  <canvas ref="canvas"></canvas>
</template>

<script setup>
import * as THREE from 'three'
import { onMounted, ref } from 'vue'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
// import { Pane } from 'tweakpane'

const canvas = ref(null)
// const pane = new Pane()

onMounted(() => {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  // orthographic camera
  // const camera = new THREE.OrthographicCamera(-10, 10, 10,
  // -10, 0.1, 1000)
  camera.position.z = 5

  const renderer = new THREE.WebGLRenderer({ canvas: canvas.value, antialias: true })
  // instantiate controls with the canvas ref
  const controls = new OrbitControls(camera, canvas.value)
  renderer.setSize(window.innerWidth, window.innerHeight)

  // const geometry = new THREE.SphereGeometry(1, 32, 32)
  // const geometry = new THREE.BoxGeometry(2, 2, 2)
  // const material = new THREE.MeshBasicMaterial({ color: 'green', wireframe: true })
  const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
  const torusKnotGeometry = new THREE.TorusKnotGeometry(0.5, 0.15, 100, 16)
  
const material = new THREE.MeshStandardMaterial();
material.metalness=0.7
material.roughness=0.1
material.color = new THREE.Color('red');
// pane.addInput(material, 'shininess', {
//   min: 0,
//   max: 100,
//   step:1
// })
// const cube = new THREE.Mesh( geometry, material );
  const sphere = new THREE.Mesh(geometry, material)
  const sphere2 = new THREE.Mesh(torusKnotGeometry, material)
  sphere2.position.x = 2
  // const sphere3 = new THREE.Mesh(geometry, material)
  // sphere3.position.x = -4

  // const group = new THREE.Group()

  // group.add(sphere)
  // group.add(sphere2)
  // group.add(sphere3)
  // sphere.position.z = 5
  // const fog = new THREE.Fog(0xffffff, 1,10)
  // scene.fog = fog
  // scene.background = new THREE.Color('white')

  // instantiate light
  const light = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(light)
  // Point light
  const pointLight = new THREE.PointLight(0xffffff,100)
  pointLight.position.set(2,5,1)
  scene.add(pointLight)
  // sphere.rotation.z = THREE.MathUtils.degToRad(45)
  scene.add(sphere)
  scene.add(sphere2)

  const axeHelper = new THREE.AxesHelper(2)
  scene.add(axeHelper)

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.updateProjectionMatrix()
    camera.aspect = window.innerWidth / window.innerHeight
    console.log(window.devicePixelRatio)
  })

  function animate() {
    // sphere.rotation.x += 0.01
    // sphere.rotation.y += 0.01
    controls.update()
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  }
  animate()
})
// onMounted(
//   () => {
//     window.addEventListener('resize', () => {
//       console.log('resize')
//       })
//       }
// )
</script>

<style>
canvas {
  display: block;
  margin: 0 auto;
}
</style>
