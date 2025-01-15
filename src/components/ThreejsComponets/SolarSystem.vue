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
  camera.position.z = 50

  //Initialize renderer
  const renderer = new THREE.WebGLRenderer({ canvas: canvas.value, antialias: true })

  // instantiate controls with the canvas ref
  const controls = new OrbitControls(camera, canvas.value)
  renderer.setSize(window.innerWidth, window.innerHeight)

  // Initialize the texture loader
  const textureLoader = new THREE.TextureLoader()

  // Load the texture
  const grassAlbedo = textureLoader.load(
    '/desserts/public/assets/textures/whispy-grass-meadow-bl/wispy-grass-meadow_albedo.png'
  )

  grassAlbedo.repeat.set(1, 1)
  grassAlbedo.wrapS = THREE.RepeatWrapping
  grassAlbedo.wrapT = THREE.RepeatWrapping

  //create the solar system
  //create the geomentry
  const geometry = new THREE.SphereGeometry(1, 32, 32)

  const sunMaterial = new THREE.MeshBasicMaterial({
    color: 'yellow'
  })
  const earthMaterial = new THREE.MeshBasicMaterial({
    color: 'blue'
  })
  const moonMaterial = new THREE.MeshBasicMaterial({
    color: 'white'
  })

  //create the sun
  const sun = new THREE.Mesh(geometry, sunMaterial)
  sun.scale.setScalar(5)
  scene.add(sun)


  //create the earth
  const earth = new THREE.Mesh(geometry, earthMaterial)
  earth.position.x = 10
  earth.scale.setScalar(1)
  scene.add(earth)


  //create the moon mesh
  const moon = new THREE.Mesh(geometry, moonMaterial)
  moon.position.x = 2
  moon.scale.setScalar(0.5)
  earth.add(moon)


  //initialize light
  const light = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(light)
  // Point light
  const pointLight = new THREE.PointLight(0xffffff, 100)
  pointLight.position.set(2, 3, 1)
  scene.add(pointLight)

  // Add meshes/shapes to the scene

  const axeHelper = new THREE.AxesHelper(2)
  sun.add(axeHelper)

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.updateProjectionMatrix()
    camera.aspect = window.innerWidth / window.innerHeight
    console.log(window.devicePixelRatio)
  })

  function animate() {
    //create animations for the moon to orbit around the earth whereas the earth orbit around the sun
    earth.rotation.y += 0.01
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
