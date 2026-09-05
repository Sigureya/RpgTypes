import type { Picture_Rotation } from "./types";

export const initialRotation = (): Picture_Rotation => ({ angle: 0, speed: 0 });

export const setRotationSpeed = (
  rotation: Picture_Rotation,
  speed: number,
): Picture_Rotation => ({ ...rotation, speed });

export const updateRotation = (
  rotation: Picture_Rotation,
): Picture_Rotation => {
  if (rotation.speed === 0) {
    return rotation;
  }
  return { ...rotation, angle: rotation.angle + rotation.speed / 2 };
};
