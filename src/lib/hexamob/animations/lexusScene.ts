import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MathUtils } from "../vendor/three/build/three.module.js";
import { decomposeLexusModel } from "./lexusModelParts";
import { getScrollbar } from "./setupScroll";

gsap.registerPlugin(ScrollTrigger);

const SCROLLER = ".scroller";
const WHEEL_ROTATION_DEG_PER_UNIT = 0.046;
const MODEL_SCALE = 9;
const MD_BREAKPOINT = 768;
const MOBILE_SCALE_RATIO = 0.75;
const MODEL_POSITION_X = 0;
const MODEL_POSITION_Y = 0;
const MODEL_POSITION_Z = 0;
const MOBILE_MODEL_POSITION_X = -1950;
const MOBILE_MODEL_POSITION_Y = 0;
const MOBILE_MODEL_POSITION_Z = 300;
const MODEL_ROTATION_X_DEG = 0;
const MODEL_ROTATION_Y_DEG = 80;
const MODEL_ROTATION_Z_DEG = 0;
const SHADOW_TEXTURE_PATH = "/models/lexus-shadow.png";
const SHADOW_WIDTH = 420;
const SHADOW_DEPTH = 180;
const SHADOW_Y_OFFSET = 0;
const SHADOW_OPACITY = 0.3;
const SHADOW_SCALE = 1.2;

function isBelowMdViewport() {
  return window.innerWidth < MD_BREAKPOINT;
}

function getResponsiveScale(baseScale: number) {
  return isBelowMdViewport() ? baseScale * MOBILE_SCALE_RATIO : baseScale;
}

function getResponsiveModelPosition() {
  if (isBelowMdViewport()) {
    return {
      x: MOBILE_MODEL_POSITION_X,
      y: MOBILE_MODEL_POSITION_Y,
      z: MOBILE_MODEL_POSITION_Z,
    };
  }

  return {
    x: MODEL_POSITION_X,
    y: MODEL_POSITION_Y,
    z: MODEL_POSITION_Z,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function applyModelGroupLayout(modelGroup: any) {
  const scale = getResponsiveScale(MODEL_SCALE);
  const position = getResponsiveModelPosition();
  modelGroup.scale.set(scale, scale, scale);
  modelGroup.position.set(position.x, position.y, position.z);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function applyModelGroupScale(modelGroup: any) {
  applyModelGroupLayout(modelGroup);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function applyShadowScale(shadow: any) {
  if (!shadow) return;
  shadow.scale.setScalar(getResponsiveScale(SHADOW_SCALE));
}

function lexusScrollTrigger(config: ScrollTrigger.Vars) {
  return { ...config, scroller: SCROLLER };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function initLexusWheelTracking(scene: any) {
  if (!scene.userData.lexusWheels) {
    const scrollTop = getScrollbar()?.scrollTop ?? 0;
    scene.userData.lexusWheels = {
      front: null,
      rear: null,
      last: {
        x: scene.position.x,
        y: scene.position.y,
        z: scene.position.z,
      },
      lastScrollTop: scrollTop,
      lastScrollSign: 1,
    };
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function updateLexusWheelsFromGsap(scene: any) {
  const wheels = scene.userData.lexusWheels;
  if (!wheels?.front || !wheels?.rear) return;

  const { x, y, z } = scene.position;
  const scrollTop = getScrollbar()?.scrollTop ?? wheels.lastScrollTop ?? 0;
  const scrollDelta = scrollTop - wheels.lastScrollTop;
  if (scrollDelta !== 0) {
    const newSign = scrollDelta > 0 ? 1 : -1;
    if (newSign !== wheels.lastScrollSign) {
      wheels.last.x = x;
      wheels.last.y = y;
      wheels.last.z = z;
    }
    wheels.lastScrollSign = newSign;
    wheels.lastScrollTop = scrollTop;
  }

  const dx = x - wheels.last.x;
  const dy = y - wheels.last.y;
  const dz = z - wheels.last.z;
  const distance = Math.hypot(dx, dy, dz);

  if (distance === 0) return;

  // Skip wheel spin when GSAP snaps between overlapping scroll segments.
  if (distance > 800) {
    wheels.last.x = x;
    wheels.last.y = y;
    wheels.last.z = z;
    return;
  }

  const rotation = MathUtils.degToRad(distance * WHEEL_ROTATION_DEG_PER_UNIT);
  const scrollSign = wheels.lastScrollSign ?? 1;

  if (scrollSign > 0) {
    wheels.front.rotation.z -= rotation;
    wheels.rear.rotation.z -= rotation;
  } else {
    wheels.front.rotation.z += rotation;
    wheels.rear.rotation.z += rotation;
  }

  wheels.last.x = x;
  wheels.last.y = y;
  wheels.last.z = z;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addLexusShadowPlane(
  THREE: any,
  parent: any,
  onShadowReady?: (shadow: any) => void,
) {
  const textureLoader = new THREE.TextureLoader();
  textureLoader.load(SHADOW_TEXTURE_PATH, (texture: any) => {
    texture.encoding = THREE.sRGBEncoding;

    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: SHADOW_OPACITY,
      depthWrite: false,
    });

    const shadow = new THREE.Mesh(
      new THREE.PlaneGeometry(SHADOW_WIDTH, SHADOW_DEPTH),
      material,
    );
    shadow.name = "lexus-shadow";
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = SHADOW_Y_OFFSET;
    shadow.scale.setScalar(getResponsiveScale(SHADOW_SCALE));
    shadow.renderOrder = -1;
    parent.add(shadow);
    onShadowReady?.(shadow);
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function lexusGsapVars(scene: any, vars: gsap.TweenVars): gsap.TweenVars {
  return {
    ...vars,
    onUpdate: () => updateLexusWheelsFromGsap(scene),
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function registerLexusScrollAnimations(scene: any) {
  initLexusWheelTracking(scene);

  if (window.innerWidth > 1024) {
    scene.position.set(-500, 0, 500);
    scene.rotation.y = MathUtils.degToRad(-40);
    scene.scale.set(1, 1, 1);


    gsap.to(scene.rotation, lexusGsapVars(scene, {
      scrollTrigger: lexusScrollTrigger({ trigger: "#section-two", scrub: 0.2, start: "top 0", end: "bottom 20%" }),
      z: MathUtils.degToRad(0),
      y: MathUtils.degToRad(-160),
      ease: "power4.inOut",
      immediateRender: false,
    }));
    gsap.to(scene.position, lexusGsapVars(scene, {
      scrollTrigger: lexusScrollTrigger({ trigger: "#section-two", scrub: 0.2, start: "top 0", end: "bottom 35%" }),
      x: 1052.92,
      z: -3004.91,
      y: 0,
      ease: "power4.inOut",
      immediateRender: false,
    }));
    gsap.to(scene.position, lexusGsapVars(scene, {
      scrollTrigger: lexusScrollTrigger({ trigger: "#gap", scrub: 0.2, start: "top 60%", end: "top 0%" }),
      x: 1752.92,
      z: 3345.1,
      y: 0,
      ease: "power4.inOut",
      immediateRender: false,
    }));
    gsap.to(scene.position, lexusGsapVars(scene, {
      scrollTrigger: lexusScrollTrigger({ trigger: "#punctuality", scrub: 0.2, start: "top 0%", end: "top -10%" }),
      x: 1637.2,
      z: 6500,
      y: -50,
      ease: "power4.inOut",
      immediateRender: false,
    }));
    gsap.to(scene.rotation, lexusGsapVars(scene, {
      scrollTrigger: lexusScrollTrigger({ trigger: "#punctuality", scrub: 0.2, start: "top 0%", end: "top -10%" }),
      y: MathUtils.degToRad(0),
      ease: "power4.inOut",
      immediateRender: false,
    }));

    // Single timeline avoids x/y conflicts when marker + closing triggers overlap on reverse scroll.
    gsap
      .timeline({
        scrollTrigger: lexusScrollTrigger({
          trigger: "#mark2",
          endTrigger: "#closing",
          scrub: 0.2,
          start: "top -10%",
          end: "top 50%",
          invalidateOnRefresh: true,
        }),
      })
      .to(
        scene.position,
        lexusGsapVars(scene, {
          x: 1637.2,
          z: -2854.6,
          y: -50,
          ease: "power4.inOut",
          duration: 3,
        }),
      )
      .to(
        scene.position,
        lexusGsapVars(scene, {
          y: -194.7,
          x: -1637.2,
          ease: "power4.inOut",
          duration: 1,
        }),
      )
      .to(
        scene.rotation,
        lexusGsapVars(scene, {
          y: MathUtils.degToRad(51.6),
          z: MathUtils.degToRad(0),
          ease: "power4.inOut",
          duration: 1,
        }),
        "<",
      )
      .to(
        scene.position,
        lexusGsapVars(scene, {
          x: -1964.7,
          z: 0,
          y: 1280.2,
          ease: "power4.inOut",
          duration: 1,
        }),
      );

    gsap.to(scene.rotation, lexusGsapVars(scene, {
      scrollTrigger: lexusScrollTrigger({
        trigger: "#closing",
        scrub: 0.2,
        start: "top 90%",
        end: "top 50%",
      }),
      x: MathUtils.degToRad(1.4),
      y: MathUtils.degToRad(190),
      z: MathUtils.degToRad(8.6),
      ease: "power4.inOut",
      immediateRender: false,
    }));
  } else {
    scene.position.set(-760, 0, 1420);
    scene.rotation.y = MathUtils.degToRad(-47.6);

    gsap.to(scene.position, lexusGsapVars(scene, {
      scrollTrigger: lexusScrollTrigger({ trigger: "#hero", scrub: 0.2, start: "bottom 25%", end: "bottom -45%" }),
      x: 4370,
      z: -3500,
      y: 0,
      ease: "power4.inOut",
      immediateRender: false,
    }));
    gsap.to(scene.position, lexusGsapVars(scene, {
      scrollTrigger: lexusScrollTrigger({ trigger: "#hero", scrub: 0.2, start: "bottom -45%", end: "bottom -50%" }),
      x: -1620,
      z: -4880,
      y: 60,
      ease: "power4.inOut",
      immediateRender: false,
    }));
    gsap.to(scene.rotation, lexusGsapVars(scene, {
      scrollTrigger: lexusScrollTrigger({ trigger: "#hero", scrub: 0.2, start: "bottom -45%", end: "bottom -50%" }),
      y: MathUtils.degToRad(-185),
      ease: "power4.inOut",
      immediateRender: false,
    }));
    gsap.to(scene.position, lexusGsapVars(scene, {
      scrollTrigger: lexusScrollTrigger({ trigger: "#punctuality", scrub: 0.2, start: "start 90%", end: "start 50%" }),
      z: 4880,
      ease: "power4.inOut",
      immediateRender: false,
    }));
    gsap.to(scene.position, lexusGsapVars(scene, {
      scrollTrigger: lexusScrollTrigger({ trigger: "#punctuality", scrub: 0.2, start: "start 45%", end: "start 35%" }),
      x: -1620,
      z: 4880,
      y: 60,
      ease: "power4.inOut",
      immediateRender: false,
    }));
    gsap.to(scene.rotation, lexusGsapVars(scene, {
      scrollTrigger: lexusScrollTrigger({ trigger: "#punctuality", scrub: 0.2, start: "start 40%", end: "start 30%" }),
      y: MathUtils.degToRad(0),
      ease: "power4.inOut",
      immediateRender: false,
    }));
    gsap.to(scene.position, lexusGsapVars(scene, {
      scrollTrigger: lexusScrollTrigger({ trigger: "#closing", scrub: 0.2, start: "start 95%", end: "start 75%" }),
      z: 520,
      ease: "power4.inOut",
      immediateRender: false,
    }));
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
  let frontWheels: any = null;
  let rearWheels: any = null;
  let lexusShadow: any = null;

  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 10, 20000);
  camera.position.set(5200, 300, 0);

  const scene = new THREE.Scene();
  const modelGroup = new THREE.Group();
  applyModelGroupLayout(modelGroup);
  modelGroup.rotation.set(
    MathUtils.degToRad(MODEL_ROTATION_X_DEG),
    MathUtils.degToRad(MODEL_ROTATION_Y_DEG),
    MathUtils.degToRad(MODEL_ROTATION_Z_DEG),
  );
  scene.add(modelGroup);
  initLexusWheelTracking(scene);

  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");

  new RGBELoader().load("/textures/hdr_opt.hdr", (texture: any) => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = texture;

    new GLTFLoader()
      .setDRACOLoader(dracoLoader)
      .load(
        "/models/lexus.glb",
        (gltf: any) => {
          const decomposed = decomposeLexusModel(gltf, THREE);
          frontWheels = decomposed.frontWheels;
          rearWheels = decomposed.rearWheels;
          scene.userData.lexusWheels.front = frontWheels;
          scene.userData.lexusWheels.rear = rearWheels;
          scene.userData.lexusWheels.last = {
            x: scene.position.x,
            y: scene.position.y,
            z: scene.position.z,
          };
          scene.userData.lexusWheels.lastScrollTop =
            getScrollbar()?.scrollTop ?? scene.userData.lexusWheels.lastScrollTop ?? 0;
          scene.userData.lexusWheels.lastScrollSign = 1;

          mixer = new THREE.AnimationMixer(decomposed.car);
          if (gltf.animations[0]) {
            mixer.clipAction(gltf.animations[0]).play();
          }
          modelGroup.add(decomposed.car);
          addLexusShadowPlane(THREE, decomposed.car, (shadow) => {
            lexusShadow = shadow;
          });
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
    applyModelGroupLayout(modelGroup);
    applyShadowScale(lexusShadow);
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
