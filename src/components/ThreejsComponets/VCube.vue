<template>
    <div class="cube-container">
      <canvas ref="canvas"></canvas>
    </div>
  </template>
  
  <script setup>
  import * as THREE from 'three';
  import { onMounted, onBeforeUnmount, ref } from 'vue';
  
  const canvas = ref(null);
  let scene, camera, renderer, cube, mouseX, mouseY, animationFrameId;
  
  function init() {
    // Scene
    scene = new THREE.Scene();
  
    // Camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
  
    // Renderer
    renderer = new THREE.WebGLRenderer({ canvas: canvas.value, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
  
    // Cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({
      color: 0x0078d4,
      roughness: 0.5,
      metalness: 0.5,
    });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
  
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(ambientLight, pointLight);
  }
  
  function animate() {
    animationFrameId = requestAnimationFrame(animate);
  
    // Add rotation based on mouse movement
    cube.rotation.x += (mouseY / 200 - cube.rotation.x) * 0.05;
    cube.rotation.y += (mouseX / 200 - cube.rotation.y) * 0.05;
  
    renderer.render(scene, camera);
  }
  
  function onMouseMove(event) {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = (event.clientY / window.innerHeight) * 2 - 1;
  }
  
  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  
  onMounted(() => {
    init();
    animate();
  
    // Event listeners
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onResize);
  });
  
  onBeforeUnmount(() => {
    cancelAnimationFrame(animationFrameId);
  
    // Cleanup
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('resize', onResize);
  
    // Dispose of scene objects to prevent memory leaks
    scene.traverse((object) => {
      if (object.geometry) object.geometry.dispose();
      if (object.material) object.material.dispose();
    });
    renderer.dispose();
  });
  </script>
  
  <style scoped>
  .cube-container {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(120deg, #f6d365, #fda085);
  }
  
  canvas {
    display: block;
  }
  </style>
  