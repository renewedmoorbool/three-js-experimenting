import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

const Renderer = new THREE.WebGLRenderer();
Renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(Renderer.domElement);

const Scene = new THREE.Scene();
const Camera = new THREE.PerspectiveCamera(75, window.innerWidth / 
    window.innerHeight, 0.1, 1000
);

const Orbit = new OrbitControls(Camera, Renderer.domElement);

const AxesHelper = new THREE.AxesHelper(15);
Camera.position.set(0, 2, 5);
Orbit.update();

const BoxGeometry = new THREE.BoxGeometry();
const BoxMaterial = new THREE.MeshBasicMaterial({color: 0x00FF00});
const Box = new THREE.Mesh(BoxGeometry, BoxMaterial);

Scene.add(AxesHelper);
Scene.add(Box);

function animate(time) {
    Box.rotation.x = time / 1000;
    Box.rotation.y = time / 1000;
    Renderer.render(Scene, Camera);
}


Renderer.setAnimationLoop(animate);