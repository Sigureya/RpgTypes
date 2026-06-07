import type { Data_Animation } from "./animation";

export const makeAnimation = (
  data: Partial<Data_Animation>,
): Data_Animation => {
  return {
    name: data.name ?? "",
    id: data.id ?? 0,
    effectName: data.effectName ?? "",
    displayType: data.displayType ?? 0,
    offsetX: data.offsetX ?? 0,
    offsetY: data.offsetY ?? 0,
    scale: data.scale ?? 100,
    speed: data.speed ?? 100,
    rotation: data.rotation ?? { x: 0, y: 0, z: 0 },
    soundTimings: data.soundTimings ?? [],
    flashTimings: data.flashTimings ?? [],
  };
};
