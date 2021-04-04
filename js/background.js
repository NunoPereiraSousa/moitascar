import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper.js";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib.js";

// ShadowMap + LightMap Res and Number of Directional Lights
export function background() {
  let renderer, scene, camera;
  let threeJsScene = document.querySelector(".scene");

  init();

  function init() {
    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(threeJsScene.clientWidth, threeJsScene.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setAnimationLoop(animation);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.setClearColor(0x0c1820, 1);
    threeJsScene.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );

    if (window.innerWidth > 1700) {
      camera.position.set(0, 10, -40);
    } else {
      scene.position.x = -7;
      camera.position.set(-17, 7, -25);
    }

    RectAreaLightUniformsLib.init();

    const rectLight1 = new THREE.RectAreaLight(0x1ed62d, 3, 4, 10);
    rectLight1.position.set(-5, 5, 5);
    scene.add(rectLight1);

    const rectLight2 = new THREE.RectAreaLight(0xdbdb16, 3, 4, 10);
    rectLight2.position.set(0, 5, 5);
    scene.add(rectLight2);

    const rectLight3 = new THREE.RectAreaLight(0xed1823, 3, 4, 10);
    rectLight3.position.set(5, 5, 5);
    scene.add(rectLight3);

    scene.add(new RectAreaLightHelper(rectLight1));
    scene.add(new RectAreaLightHelper(rectLight2));
    scene.add(new RectAreaLightHelper(rectLight3));

    const geoFloor = new THREE.BoxGeometry(2000, 0.1, 2000);
    const matStdFloor = new THREE.MeshStandardMaterial({
      color: 0x0c1820,
      roughness: 0.1,
      metalness: 0
    });
    const mshStdFloor = new THREE.Mesh(geoFloor, matStdFloor);
    scene.add(mshStdFloor);

    const geoKnot = new THREE.TorusKnotGeometry(1.5, 0.5, 200, 16);
    const matKnot = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0,
      metalness: 0
    });
    const meshKnot = new THREE.Mesh(geoKnot, matKnot);
    meshKnot.name = "meshKnot";
    meshKnot.position.set(0, 5, 0);
    scene.add(meshKnot);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.copy(meshKnot.position);
    controls.update();

    window.addEventListener("resize", onWindowResize);
  }

  function onWindowResize() {
    camera.aspect = threeJsScene.clientWidth / threeJsScene.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(threeJsScene.clientWidth, threeJsScene.clientHeight);
  }

  function animation(time) {
    const mesh = scene.getObjectByName("meshKnot");
    mesh.rotation.y = time / 2000;

    renderer.render(scene, camera);
  }
}
