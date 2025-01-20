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
  renderer.setSize(window.innerWidth, window.innerHeight)

  // instantiate controls with the canvas ref
  const controls = new OrbitControls(camera, canvas.value)

  // Initialize the texture loader
  const textureLoader = new THREE.TextureLoader()

  // Load the texture
  const grassAlbedo = textureLoader.load(
    '/desserts/public/assets/textures/whispy-grass-meadow-bl/wispy-grass-meadow_albedo.png'
  )

  grassAlbedo.repeat.set(1, 1)
  grassAlbedo.wrapS = THREE.RepeatWrapping
  grassAlbedo.wrapT = THREE.RepeatWrapping
  //initialize planet textures
  const sunTexture = textureLoader.load('/desserts/public/assets/textures/2k_sun.jpg')
  const earthTexture = textureLoader.load('/desserts/public/assets/textures/2k_earth_daymap.jpg')
  const marsTexture = textureLoader.load('/desserts/public/assets/textures/2k_mars.jpg')
  const mercuryTexture = textureLoader.load('/desserts/public/assets/textures/2k_mercury.jpg')
  const venusTexture = textureLoader.load('/desserts/public/assets/textures/2k_venus_surface.jpg')
  const jupiterTexture = textureLoader.load('/desserts/public/assets/textures/2k_jupiter.jpg')

  
  
  //create the solar system
  //create the geomentry
  const geometry = new THREE.SphereGeometry(1, 32, 32)

  const sunMaterial = new THREE.MeshStandardMaterial({
    map: sunTexture
  })
  const earthMaterial = new THREE.MeshStandardMaterial({
    map: earthTexture
  })
  const marsMaterial = new THREE.MeshStandardMaterial({
    map: marsTexture
  })
  const mercuryMaterial = new THREE.MeshStandardMaterial({
    map: mercuryTexture
  })
  const venusMaterial = new THREE.MeshStandardMaterial({
    map: venusTexture
  })
  const jupiterMaterial = new THREE.MeshStandardMaterial({
    map: jupiterTexture
  })

  //create the sun
  const sun = new THREE.Mesh(geometry, sunMaterial)
  sun.scale.setScalar(5)
  scene.add(sun)
  

  //Array to hold planets
  const planets = [
    {
      name: 'Mercury',
      radius: 0.3,
      distance: 10,
      speed: 0.005,
      material: mercuryMaterial,
      moons: []
    },
    {
      name: 'Venus',
      radius: 0.5,
      distance: 15,
      speed: 0.005,
      material: venusMaterial,
      moons: []
    },
    {
      name: 'Earth',
      radius: 1,
      distance: 20,
      speed: 0.005,
      material: earthMaterial,
      moons: [
        {
          name: 'Moon',
          radius: 0.3,
          distance: 3,
          speed: 0.015
        }
      ]
    },
    {
      name: 'Mars',
      radius: 0.8,
      distance: 25,
      speed: 0.005,
      material: marsMaterial,
      moons: []
    },
    {
      name: 'Jupiter',
      radius: 2,
      distance: 30,
      speed: 0.005,
      material: jupiterMaterial,
      moons: [
        {
          name: 'Io',
          radius: 0.5,
          distance: 3,
          speed: 0.015
        },
        {
          name: 'Europa',
          radius: 0.5,
          distance: 3,
          speed: 0.015
        }
      ]
    }
  ]

  //map through the planets and create meshes
  const planetsMeshes = planets.map((planet) => {
    const planetMesh = new THREE.Mesh(geometry, planet.material)
    planetMesh.scale.setScalar(planet.radius)
    planetMesh.position.x = planet.distance
    scene.add(planetMesh)
  })

  //initialize light
  const light = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(light)
  // Point light
  const pointLight = new THREE.PointLight(0xffffff, 100)
  pointLight.position.set(2, 3, 1)
  scene.add(pointLight)

  // Add meshes/shapes to the scene

  const axesHelper = new THREE.AxesHelper(2)
  sun.add(axesHelper)

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.updateProjectionMatrix()
    camera.aspect = window.innerWidth / window.innerHeight
    // console.log(window.devicePixelRatio)
  })

  //create a renderloop function then call it after
  function animate() {
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
