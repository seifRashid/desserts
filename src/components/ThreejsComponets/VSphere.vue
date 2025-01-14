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

// Initialize the texture loader
const textureLoader = new THREE.TextureLoader()
// Load the texture
const grassTexture = textureLoader.load('/desserts/public/assets/textures/space-cruiser-panels2-bl/space-cruiser-panels2_albedo.png')
grassTexture.repeat.set(5,5)
grassTexture.wrapS = THREE.RepeatWrapping
grassTexture.wrapT = THREE.RepeatWrapping

  const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
  const torusKnotGeometry = new THREE.TorusKnotGeometry(0.5, 0.15, 100, 16)
  const cylinder = new THREE.CylinderGeometry(0.5,0.1,1,30)
  
const material = new THREE.MeshPhysicalMaterial
material.map = grassTexture
material.metalness=0.1
material.roughness=0.5
material.reflectivity=0.5
material.clearcoat=0.9
// material.color = new THREE.Color('red');
// pane.addInput(material, 'shininess', {
//   min: 0,
//   max: 100,
//   step:1
// })
// const cube = new THREE.Mesh( geometry, material );
  const sphere = new THREE.Mesh(geometry, material)
  const cylinderShape = new THREE.Mesh(cylinder, material)
  const torusKnot = new THREE.Mesh(torusKnotGeometry, material)
  torusKnot.position.x = 2
  cylinderShape.position.x = -2
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
  // Add meshes/shapes to the scene
  scene.add(sphere)
  scene.add(torusKnot)
  scene.add(cylinderShape)

  const axeHelper = new THREE.AxesHelper(2)
  scene.add(axeHelper)

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.updateProjectionMatrix()
    camera.aspect = window.innerWidth / window.innerHeight
    console.log(window.devicePixelRatio)
  })

  function animate() {
    // scene.children.forEach((child)=>{
    //   if(child instanceof THREE.Mesh){
    //     child.rotation.x += 0.01
    //   }
    // })
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
