<template>
	<div>
	  <div ref="container" class="three-container"></div>
	  <div id="info">
		<a href="https://threejs.org" target="_blank" rel="noopener">three.js</a> - Skeletal Animation Blending
		(model from <a href="https://www.mixamo.com/" target="_blank" rel="noopener">mixamo.com</a>)<br />
		Note: crossfades are possible with blend weights being set to (1,0,0), (0,1,0) or (0,0,1)
	  </div>
	</div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import * as THREE from 'three';
  import Stats from 'three/examples/jsm/libs/stats.module.js';
  import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
  
  const container = ref(null);
  
  let scene, renderer, camera, stats, model, skeleton, mixer, clock;
  let idleAction, walkAction, runAction;
  let actions = [];
  let settings = {};
  let singleStepMode = false;
//   let sizeOfNextStep = 0;
  
  onMounted(() => {
	init();
	window.addEventListener('resize', onWindowResize);
  });
  
  onBeforeUnmount(() => {
	window.removeEventListener('resize', onWindowResize);
	renderer.dispose();
  });
  
  function init() {
	camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100);
	camera.position.set(1, 2, -3);
	camera.lookAt(0, 1, 0);
  
	clock = new THREE.Clock();
  
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0xa0a0a0);
	scene.fog = new THREE.Fog(0xa0a0a0, 10, 50);
  
	const hemiLight = new THREE.HemisphereLight(0xffffff, 0x8d8d8d, 3);
	hemiLight.position.set(0, 20, 0);
	scene.add(hemiLight);
  
	const dirLight = new THREE.DirectionalLight(0xffffff, 3);
	dirLight.position.set(-3, 10, -10);
	dirLight.castShadow = true;
	scene.add(dirLight);
  
	const ground = new THREE.Mesh(
	  new THREE.PlaneGeometry(100, 100),
	  new THREE.MeshPhongMaterial({ color: 0xcbcbcb, depthWrite: false })
	);
	ground.rotation.x = -Math.PI / 2;
	ground.receiveShadow = true;
	scene.add(ground);
  
	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.shadowMap.enabled = true;
	container.value.appendChild(renderer.domElement);
  
	stats = new Stats();
	container.value.appendChild(stats.dom);
  
	const loader = new GLTFLoader();
	loader.load('models/gltf/Soldier.glb', (gltf) => {
	  model = gltf.scene;
	  scene.add(model);
  
	  model.traverse((object) => {
		if (object.isMesh) object.castShadow = true;
	  });
  
	  skeleton = new THREE.SkeletonHelper(model);
	  skeleton.visible = false;
	  scene.add(skeleton);
  
	  mixer = new THREE.AnimationMixer(model);
	  idleAction = mixer.clipAction(gltf.animations[0]);
	  walkAction = mixer.clipAction(gltf.animations[3]);
	  runAction = mixer.clipAction(gltf.animations[1]);
  
	  actions = [idleAction, walkAction, runAction];
	  activateAllActions();
  
	  createPanel();
	  renderer.setAnimationLoop(animate);
	});
  }
  
  function createPanel() {
	const panel = new GUI({ width: 310 });
	settings = {
	  'show model': true,
	  'show skeleton': false,
	  'deactivate all': deactivateAllActions,
	  'activate all': activateAllActions,
	  'pause/continue': pauseContinue,
	  'modify time scale': 1.0,
	};
  
	panel.add(settings, 'show model').onChange((v) => (model.visible = v));
	panel.add(settings, 'show skeleton').onChange((v) => (skeleton.visible = v));
	panel.add(settings, 'pause/continue');
	panel.add(settings, 'modify time scale', 0.0, 1.5, 0.01).onChange((v) => (mixer.timeScale = v));
  }
  
  function activateAllActions() {
	actions.forEach((action) => action.play());
  }
  
  function deactivateAllActions() {
	actions.forEach((action) => action.stop());
  }
  
  function pauseContinue() {
	if (singleStepMode) {
	  singleStepMode = false;
	  unPauseAllActions();
	} else {
	  actions.forEach((action) => (action.paused = !action.paused));
	}
  }
  
  function unPauseAllActions() {
	actions.forEach((action) => (action.paused = false));
  }
  
  function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
  }
  
  function animate() {
	const delta = clock.getDelta();
	mixer.update(delta);
	stats.update();
	renderer.render(scene, camera);
  }
  </script>
  
  <style scoped>
  .three-container {
	width: 100vw;
	height: 100vh;
	display: block;
  }
  #info {
	position: absolute;
	top: 10px;
	width: 100%;
	text-align: center;
	z-index: 100;
	color: #fff;
  }
  a {
	color: #f00;
  }
  </style>
  