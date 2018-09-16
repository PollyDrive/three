
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);

var controls = new THREE.OrbitControls(camera);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.BasicShadowMapl
document.body.appendChild(renderer.domElement);


var cube = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshPhongMaterial({
		color: 0x9B339B,
	})
);
cube.receiveShadow = true;
cube.castShadow = true;
scene.add(cube);

var floor = new THREE.Mesh(
	new THREE.PlaneGeometry(10, 10, 100, 1),
	new THREE.MeshPhongMaterial({
		color: 0xdddddd ,
		wireframe: true
	})
);

floor.position.y += -1;
floor.rotation.x -= Math.PI / 2;
scene.add(floor);

var pLight = new THREE.PointLight(0xffffff, 2, 28);
pLight.position.set(-3, 5, -3);
pLight.castShadow = true;
pLight.shadow.camera.near = 1;
pLight.shadow.camera.far = 35;
scene.add(pLight);

camera.position.set(0, 2, 5);
camera.lookAt(new THREE.Vector3(0, 2.0 , 0 ));

controls.autoRotate = true;


function animate() {
	requestAnimationFrame(animate);

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	controls.update();

	renderer.render(scene, camera);
}

animate();