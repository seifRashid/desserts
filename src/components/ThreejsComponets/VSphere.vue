<!-- Sphere.vue -->
<template>
    <canvas ref="canvas"></canvas>
  </template>
  
  <script setup>
  import * as THREE from 'three';
  import { onMounted, ref } from 'vue';
  
  const canvas = ref(null);
  
  onMounted(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 500, 0.1, 1000);
    camera.position.z = 5;
  
    const renderer = new THREE.WebGLRenderer({ canvas: canvas.value });
    renderer.setSize(window.innerWidth, 500);
  
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xff6347, wireframe: true });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
  
    function animate() {
      requestAnimationFrame(animate);
  
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
  
      renderer.render(scene, camera);
    }
    animate();
  });
  </script>
  
  <style>
  canvas {
    display: block;
    margin: 0 auto;
  }
  </style>
  