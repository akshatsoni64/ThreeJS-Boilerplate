/**
 * For a ThreeJS App, following are very important elements:
 * - Scene: I create the animation, like screen for 2D objects
 * - Camera: I help user view the animation
 * - - Set the position of the camera to make it visible to the user
 * - Renderer: I ship the animation to the browser for users to view
 * - Light: I make the elements bright enough to view wherever required
 * - [GridHelper, AxisHelper]: I help users figure out where and how the elements will appear on the scene
 * - animate(): I keep loading the new changes on the scene
 */
import "./style.css";

import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
// IMPORTANT: Set the position of camera to set the initial point of view
camera.position.setZ(30);

// The renderer element (canvas) to place the animation on the browser
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// Orbit Controls to navigate the screen
const controls = new OrbitControls(camera, renderer.domElement);

// Plane
const planeGeometry = new THREE.PlaneGeometry(750, 750);
planeGeometry.rotateX( - Math.PI / 2);
const planeMaterial = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide,
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);

// Footer: Animate method to keep refreshing the screen
function animate() {
  requestAnimationFrame(animate);
  
  controls.update();

  renderer.render(scene, camera);
}

animate();
