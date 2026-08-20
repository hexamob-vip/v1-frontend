import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SCROLLER = ".scroller";

function lexusScrollTrigger(config: ScrollTrigger.Vars) {
  return { ...config, scroller: SCROLLER };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function registerLexusScrollAnimations(scene: any) {
  if (window.innerWidth > 1024) {
    scene.position.set(-500, 0, 500);
    scene.rotation.y = -1;

    gsap.to(scene.rotation, {
      scrollTrigger: lexusScrollTrigger({ trigger: "#section-two", scrub: 0.2, start: "top 0", end: "bottom 20%" }),
      z: 0,
      y: -3.1416,
      ease: "power4.inOut",
      immediateRender: false,
    });
    gsap.to(scene.position, {
      scrollTrigger: lexusScrollTrigger({ trigger: "#section-two", scrub: 0.2, start: "top 0", end: "bottom 35%" }),
      x: 1752.92,
      z: -3704.91,
      y: 0,
      ease: "power4.inOut",
      immediateRender: false,
    });
    gsap.to(scene.position, {
      scrollTrigger: lexusScrollTrigger({ trigger: "#gap", scrub: 0.2, start: "top 60%", end: "top 0%" }),
      x: 1752.92,
      z: 3345.1,
      y: 0,
      ease: "power4.inOut",
      immediateRender: false,
    });
    gsap.to(scene.position, {
      scrollTrigger: lexusScrollTrigger({ trigger: "#punctuality", scrub: 0.2, start: "top 0%", end: "top -10%" }),
      x: 1637.2,
      z: 6500,
      y: -50,
      ease: "power4.inOut",
      immediateRender: false,
    });
    gsap.to(scene.rotation, {
      scrollTrigger: lexusScrollTrigger({ trigger: "#punctuality", scrub: 0.2, start: "top 0%", end: "top -10%" }),
      y: 0,
      ease: "power4.inOut",
      immediateRender: false,
    });
    gsap.to(scene.position, {
      scrollTrigger: lexusScrollTrigger({ trigger: "#mark2", scrub: 0.2, start: "top -10%", end: "top -100%" }),
      x: 1637.2,
      z: -2854.6,
      y: -50,
      ease: "power4.inOut",
      immediateRender: false,
    });
    gsap.to(scene.position, {
      scrollTrigger: lexusScrollTrigger({ trigger: "#marker", scrub: 0.2, start: "top 120%", end: "top 50%" }),
      y: -194.7,
      x: -1637.2,
      ease: "power4.inOut",
      immediateRender: false,
    });
    gsap.to(scene.rotation, {
      scrollTrigger: lexusScrollTrigger({ trigger: "#marker", scrub: 0.2, start: "top 120%", end: "top 50%" }),
      y: 0.9,
      z: 0,
      ease: "power4.inOut",
      immediateRender: false,
    });
    gsap.to(scene.position, {
      scrollTrigger: lexusScrollTrigger({ trigger: "#closing", scrub: 0.2, start: "top 90%", end: "top 50%" }),
      x: -1964.7,
      z: 0,
      y: 1280.2,
      ease: "power4.inOut",
      immediateRender: false,
    });
    gsap.to(scene.rotation, {
      scrollTrigger: lexusScrollTrigger({ trigger: "#closing", scrub: 0.2, start: "top 90%", end: "top 50%" }),
      y: Math.PI,
      z: 0.15,
      ease: "power4.inOut",
      immediateRender: false,
    });
  } else {
    scene.position.set(-760, 0, 1420);
    scene.rotation.y = -0.83;

    gsap.to(scene.position, {
      scrollTrigger: lexusScrollTrigger({ trigger: "#hero", scrub: 0.2, start: "bottom 25%", end: "bottom -45%" }),
      x: 4370,
      z: -3500,
      y: 0,
      ease: "power4.inOut",
      immediateRender: false,
    });
    gsap.to(scene.position, {
      scrollTrigger: lexusScrollTrigger({ trigger: "#hero", scrub: 0.2, start: "bottom -45%", end: "bottom -50%" }),
      x: -1620,
      z: -4880,
      y: 60,
      ease: "power4.inOut",
      immediateRender: false,
    });
    gsap.to(scene.rotation, {
      scrollTrigger: lexusScrollTrigger({ trigger: "#hero", scrub: 0.2, start: "bottom -45%", end: "bottom -50%" }),
      y: -3.1416,
      ease: "power4.inOut",
      immediateRender: false,
    });
    gsap.to(scene.position, {
      scrollTrigger: lexusScrollTrigger({ trigger: "#punctuality", scrub: 0.2, start: "start 90%", end: "start 50%" }),
      z: 4880,
      ease: "power4.inOut",
      immediateRender: false,
    });
    gsap.to(scene.position, {
      scrollTrigger: lexusScrollTrigger({ trigger: "#punctuality", scrub: 0.2, start: "start 40%", end: "start 40%" }),
      x: -1620,
      z: 4880,
      y: 60,
      ease: "power4.inOut",
      immediateRender: false,
    });
    gsap.to(scene.rotation, {
      scrollTrigger: lexusScrollTrigger({ trigger: "#punctuality", scrub: 0.2, start: "start 40%", end: "start 30%" }),
      y: 0,
      ease: "power4.inOut",
      immediateRender: false,
    });
    gsap.to(scene.position, {
      scrollTrigger: lexusScrollTrigger({ trigger: "#closing", scrub: 0.2, start: "start 95%", end: "start 75%" }),
      z: 1720,
      ease: "power4.inOut",
      immediateRender: false,
    });
  }
}

export async function initLexusScene(container: HTMLElement) {
  // Vendor bundle is Three.js r135 copied from the original HEXAMOB theme.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const THREE: any = await import("../vendor/three/build/three.module.js");
  const { OrbitControls } = await import("../vendor/three/jsm/controls/OrbitControls.js");
  const { GLTFLoader } = await import("../vendor/three/jsm/loaders/GLTFLoader.js");
  const { RGBELoader } = await import("../vendor/three/jsm/loaders/RGBELoader.js");
  const { DRACOLoader } = await import("../vendor/three/jsm/loaders/DRACOLoader.js");

  const clock = new THREE.Clock();
  let mixer: any = null;
  let frameId = 0;

  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 10, 20000);
  camera.position.set(5200, 300, 0);

  const scene = new THREE.Scene();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");

  new RGBELoader().load("/textures/hdr_opt.hdr", (texture: any) => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = texture;

    new GLTFLoader()
      .setDRACOLoader(dracoLoader)
      .load(
        "/models/Volvo%20FH_opt.glb",
        (gltf: any) => {
          mixer = new THREE.AnimationMixer(gltf.scene);
          if (gltf.animations[0]) {
            mixer.clipAction(gltf.animations[0]).play();
          }
          scene.add(gltf.scene);
          ScrollTrigger.refresh();
        },
        undefined,
        (error: ErrorEvent) => {
          console.error("GLTF load error", error);
        },
      );
  });

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.5;
  renderer.setClearColor(0, 0);

  Object.assign(renderer.domElement.style, {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    pointerEvents: "none",
  });

  container.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enableRotate = false;
  controls.enableZoom = false;
  controls.enablePan = false;
  controls.update();

  const onResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  const animate = () => {
    frameId = requestAnimationFrame(animate);
    if (mixer) mixer.update(clock.getDelta());
    controls.update();
    camera.lookAt(0, 700, 0);
    renderer.render(scene, camera);
  };

  window.addEventListener("resize", onResize);
  animate();

  return {
    scene,
    destroy: () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(frameId);
      renderer.dispose();
      container.innerHTML = "";
    },
  };
}
