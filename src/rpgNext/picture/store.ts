import { initialRotation } from "./rotation";
import { PICTURE_ORIGIN_UPPER_LEFT } from "./setting";
import type { Store_Picture } from "./types";

export const createPictureStore = (id: number): Store_Picture => ({
  setting: {
    id,
    name: "",
    origin: PICTURE_ORIGIN_UPPER_LEFT,
    blendMode: 0,
  },
  current: { x: 0, y: 0, scaleX: 100, scaleY: 100, opacity: 255 },
  target: null,
  tone: null,
  rotation: initialRotation(),
});
