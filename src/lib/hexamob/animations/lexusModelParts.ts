/**
 * All 134 meshes from hexamob/src/components/home/Content.tsx,
 * in the same order and group structure.
 */

import { MathUtils } from "../vendor/three/build/three.module.js";

const MESH_ROTATION_X_DEG = 90;
const MESH_ROTATION_Y_DEG = 0;
const MESH_ROTATION_Z_DEG = -90;

const BODY_MESHES_BEFORE_WHEELS = [
  "parebrise-av",
  "fenetres-ext",
  "toit-vitre",
  "portes-cadre",
  "toit-cadre",
  "toit-metal",
  "parebrise-ar",
  "parebrise-ar-cadre",
  "fenetres-contour",
  "toit-contour",
  "cadre-ar",
  "fenetres-cadre",
  "capot",
  "portes-av",
  "ailes-av",
  "aile-av-cli-01",
  "ailes-av-cli-02",
  "portes-ar",
  "portes-ar-lg-hyb",
  "parebrise-av-cadre",
  "parebrise-av-contour",
  "eg-l-bot",
  "eg-r-top",
  "eg-r-bot",
  "eg-l-top",
  "retro-int-mir",
  "retro-int",
  "calandre-av-01",
  "calandre-av-02",
  "parechoc-av",
  "parechoc-av-chrome",
  "parechoc-av-aer",
  "coffre-ar-top",
  "parechoc-ar",
  "parechoc-ar-01",
  "parechoc-ar-02",
  "coffre-ar-bot",
  "coffre-ar-chrome",
  "coffre-ar-baquette",
  "lexus-ar",
  "basdecaisse",
  "chassis",
  "parechoc-av-contour",
  "parechoc-av-int",
  "calaandre-av-int-01",
  "calaandre-av-int-02",
  "plaque-av",
  "plaque--ar",
  "parechoc-ar-rad",
  "stop-ar-glass",
  "stop-ar-light",
  "stop-ar-contour",
  "retro-av-top",
  "retro-av-miroir",
  "retro-av-coque",
  "retro-av-chrome",
  "retro-av-circle",
  "retro-av-01",
  "retro-av-02",
  "logo-lexus-av-black",
  "logo-lexus-av-chrome",
  "logo-lexus-av-blue",
  "logo-lexus-ar-black",
  "logo-lexus-ar-chrome",
  "logo-lexus-ar-blue",
  "es300h-blue",
  "es300h-chrome",
  "black_m_14_black_m_0",
  "chrome_13_chrome_0",
  "black_m_10_black_m_0",
  "glasses-av-global",
  "glass_12_glass_0",
  "lights_01_lights_0",
  "silver_10_silver_0",
  "chrome_10_chrome_0",
  "glass_02_glass_0",
  "o_glass_02_o_glass_0",
  "silver_11_silver_0",
  "glass_03_glass_0",
  "glass_07_glass_0",
  "o_glass_01_o_glass_0",
  "glasses-global",
  "r_lights_01_r_lights_0",
  "glasses-global-03",
  "glasses-global-02",
  "glass_09_glass_0",
  "red_02_red_0",
  "red_01_red_0",
] as const;

const FRONT_WHEEL_MESHES = [
  "silver_06_silver_0",
  "tire_mat5_03_tire_mat5_0",
  "gum_11_gum_0",
  "tire_mat5_04_tire_mat5_0",
  "silver_02_silver_0",
  "gum_17_gum_0",
] as const;

const REAR_WHEEL_MESHES = [
  "tire_mat5_01_tire_mat5_0",
  "silver_08_silver_0",
  "gum_05_gum_0",
  "tire_mat5_02_tire_mat5_0",
  "silver_07_silver_0",
  "gum_08_gum_0",
] as const;

const BODY_MESHES_AFTER_WHEELS = [
  "black_m_15_black_m_0",
  "black_m_16_black_m_0",
  "brakes1_03_brakes1_0",
  "brakes1_04_brakes1_0",
  "gum_13_gum_0",
  "gum_14_gum_0",
  "gum_15_gum_0",
  "gum_16_gum_0",
  "gum_18_gum_0",
  "gum_19_gum_0",
  "silver_09_silver_0",
  "silver_12_silver_0",
  "silver_13_silver_0",
  "silver_14_silver_0",
  "silver_d_09_silver_d_0",
  "silver_d_10_silver_d_0",
  "silver_d_11_silver_d_0",
  "silver_d_12_silver_d_0",
  "black_m_08_black_m_0",
  "black_m_09_black_m_0",
  "brakes1_01_brakes1_0",
  "brakes1_02_brakes1_0",
  "gum_01_gum_0",
  "gum_02_gum_0",
  "gum_03_gum_0",
  "gum_04_gum_0",
  "silver_01_silver_0",
  "silver_03_silver_0",
  "silver_04_silver_0",
  "silver_05_silver_0",
  "silver_d_01_silver_d_0",
  "silver_d_02_silver_d_0",
  "silver_d_06_silver_d_0",
  "silver_d_07_silver_d_0",
] as const;

type LexusMeshGroup = "body" | "frontWheels" | "rearWheels";

type LexusMeshPart = {
  node: string;
  group: LexusMeshGroup;
};

export const LEXUS_MESH_PARTS: LexusMeshPart[] = [
  ...BODY_MESHES_BEFORE_WHEELS.map((node) => ({ node, group: "body" as const })),
  ...FRONT_WHEEL_MESHES.map((node) => ({ node, group: "frontWheels" as const })),
  ...REAR_WHEEL_MESHES.map((node) => ({ node, group: "rearWheels" as const })),
  ...BODY_MESHES_AFTER_WHEELS.map((node) => ({ node, group: "body" as const })),
];

export const LEXUS_WHEEL_GROUPS = {
  front: {
    position: [148.78, 34, 0] as const,
    pivot: [-148.78, -34, 0] as const,
  },
  rear: {
    position: [-138.18, 34, 0] as const,
    pivot: [138.18, -34, 0] as const,
  },
} as const;

export type LexusDecomposedModel = {
  car: any;
  body: any;
  frontWheels: any;
  rearWheels: any;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function collectNodes(root: any) {
  const nodes = new Map<string, any>();

  root.traverse((object: any) => {
    if (object.isMesh && object.name) {
      nodes.set(object.name, object);
    }
  });

  return nodes;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createWheelGroup(
  THREE: any,
  config: { position: readonly [number, number, number]; pivot: readonly [number, number, number] },
) {
  const wheels = new THREE.Group();
  wheels.position.set(...config.position);

  const pivot = new THREE.Group();
  pivot.position.set(...config.pivot);
  wheels.add(pivot);

  return { wheels, pivot };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createPartMesh(THREE: any, source: any, nodeName: string) {
  const material = Array.isArray(source.material) ? source.material[0] : source.material;
  const mesh = new THREE.Mesh(source.geometry, material);
  mesh.name = nodeName;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.rotation.set(
    MathUtils.degToRad(MESH_ROTATION_X_DEG),
    MathUtils.degToRad(MESH_ROTATION_Y_DEG),
    MathUtils.degToRad(MESH_ROTATION_Z_DEG),
  );
  return mesh;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function decomposeLexusModel(gltf: any, THREE: any): LexusDecomposedModel {
  const nodes = collectNodes(gltf.scene);

  const car = new THREE.Group();
  car.name = "lexus-car";

  const body = new THREE.Group();
  body.name = "lexus-body";
  car.add(body);

  const { wheels: frontWheels, pivot: frontPivot } = createWheelGroup(THREE, LEXUS_WHEEL_GROUPS.front);
  frontWheels.name = "lexus-front-wheels";
  car.add(frontWheels);

  const { wheels: rearWheels, pivot: rearPivot } = createWheelGroup(THREE, LEXUS_WHEEL_GROUPS.rear);
  rearWheels.name = "lexus-rear-wheels";
  car.add(rearWheels);

  const targets = {
    body,
    frontWheels: frontPivot,
    rearWheels: rearPivot,
  };

  for (const part of LEXUS_MESH_PARTS) {
    const source = nodes.get(part.node);
    if (!source) {
      console.warn(`[lexusModelParts] Missing mesh node: ${part.node}`);
      continue;
    }

    targets[part.group].add(createPartMesh(THREE, source, part.node));
  }

  return { car, body, frontWheels, rearWheels };
}
