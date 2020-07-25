const THREE = require('three');
const OrbitControls = require('three-orbit-controls')(THREE);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
const controls = new OrbitControls(camera);
const renderer = new THREE.WebGLRenderer();


renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.BasicShadowMapl;
document.body.appendChild(renderer.domElement);


const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshPhongMaterial({
    color: 0x9B339B,
  })
);


cube.receiveShadow = true;
cube.castShadow = true;
scene.add(cube);


const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(10, 100, 10, 1),
  new THREE.MeshPhongMaterial({
    color: 0xdddddd,
    wireframe: true
  })
);

floor.position.y += -1;
floor.rotation.x -= Math.PI / 2;
scene.add(floor);

const pLight = new THREE.PointLight(0xffffff, 2, 28);
pLight.position.set(-3, 3, 3);
pLight.castShadow = true;
pLight.shadow.camera.near = 1;
pLight.shadow.camera.far = 25;
scene.add(pLight);


camera.position.set(10, 2, 5);
camera.lookAt(new THREE.Vector3(10, 2.0, 0));

controls.autoRotate = true;


function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  controls.update();
  renderer.render(scene, camera);
}

animate();

