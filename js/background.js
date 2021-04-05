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
    renderer.setClearColor(0x081836, 1);
    threeJsScene.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );

    if (window.innerWidth > 1500) {
      scene.position.x = -7;
      camera.position.set(-17, 7, -25);
    } else {
      scene.position.y = -7;
      scene.position.x = -7;
      camera.position.set(-70, 7, -90);
    }

    RectAreaLightUniformsLib.init();

    const rectLight1 = new THREE.RectAreaLight(0x432cb2, 1, 4, 10);
    rectLight1.position.set(-5, 5, 5);
    scene.add(rectLight1);

    const rectLight2 = new THREE.RectAreaLight(0x432cb2, 0.6, 4, 10);
    rectLight2.position.set(0, 5, 5);
    scene.add(rectLight2);

    const rectLight3 = new THREE.RectAreaLight(0x432cb2, 0.4, 4, 10);
    rectLight3.position.set(5, 5, 5);
    scene.add(rectLight3);

    const rectLight4 = new THREE.RectAreaLight(0x432cb2, 0.2, 4, 10);
    rectLight4.position.set(10, 5, 5);
    scene.add(rectLight4);

    const rectLight5 = new THREE.RectAreaLight(0x432cb2, 0.11, 4, 10);
    rectLight5.position.set(15, 5, 5);
    scene.add(rectLight5);

    const rectLight6 = new THREE.RectAreaLight(0x432cb2, 0.09, 4, 10);
    rectLight6.position.set(20, 5, 5);
    scene.add(rectLight6);

    const rectLight7 = new THREE.RectAreaLight(0x432cb2, 0.07, 4, 10);
    rectLight7.position.set(25, 5, 5);
    scene.add(rectLight7);

    const rectLight8 = new THREE.RectAreaLight(0x432cb2, 0.05, 4, 10);
    rectLight8.position.set(30, 5, 5);
    scene.add(rectLight8);

    const rectLight9 = new THREE.RectAreaLight(0x432cb2, 0.03, 4, 10);
    rectLight9.position.set(35, 5, 5);
    scene.add(rectLight9);

    const rectLight10 = new THREE.RectAreaLight(0x432cb2, 0.01, 4, 10);
    rectLight10.position.set(40, 5, 5);
    scene.add(rectLight10);

    const rectLight11 = new THREE.RectAreaLight(0x432cb2, 1.5, 4, 10);
    rectLight11.position.set(-10, 5, 5);
    scene.add(rectLight11);

    scene.add(new RectAreaLightHelper(rectLight1));
    scene.add(new RectAreaLightHelper(rectLight2));
    scene.add(new RectAreaLightHelper(rectLight3));
    scene.add(new RectAreaLightHelper(rectLight4));
    scene.add(new RectAreaLightHelper(rectLight5));
    scene.add(new RectAreaLightHelper(rectLight6));
    scene.add(new RectAreaLightHelper(rectLight7));
    scene.add(new RectAreaLightHelper(rectLight8));
    scene.add(new RectAreaLightHelper(rectLight9));
    scene.add(new RectAreaLightHelper(rectLight10));
    scene.add(new RectAreaLightHelper(rectLight11));

    const geoFloor = new THREE.BoxGeometry(100, 0.1, 2000);
    const matStdFloor = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.1,
      metalness: 0
    });
    const mshStdFloor = new THREE.Mesh(geoFloor, matStdFloor);
    scene.add(mshStdFloor);

    const geoKnot = new THREE.TorusKnotGeometry(1.5, 0.5, 1, 1);
    const matKnot = new THREE.MeshStandardMaterial({
      color: 0x432cb2,
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
