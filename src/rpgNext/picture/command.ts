import type { ColorRGBA } from "@RpgTypes/libs";
import { initialRotation, setRotationSpeed } from "./rotation";
import type { Picture_BlendMode, Picture_Origin } from "./setting";
import { startTint } from "./tone";
import type { Picture_EasingKind } from "./transform";
import type { Store_Picture } from "./types";

/** move の指数。RMMZ では 2 固定。 */
const EASING_EXPONENT = 2;

/**
 * 表示。移動・色調・回転はすべて初期化される。
 *
 * 引数は RMMZ の Game_Picture.show と同じ並び。
 * 同じ型の引数が並ぶが、ここは最低レイヤーなので値のまま受け取る。
 * オブジェクトで渡したい場合は facade.ts を使う。
 */
export const showPictureValues = (
  store: Store_Picture,
  name: string,
  origin: Picture_Origin,
  x: number,
  y: number,
  scaleX: number,
  scaleY: number,
  opacity: number,
  blendMode: Picture_BlendMode,
): Store_Picture => ({
  setting: { id: store.setting.id, name, origin, blendMode },
  current: { x, y, scaleX, scaleY, opacity },
  target: null,
  tone: null,
  rotation: initialRotation(),
});

/**
 * 移動開始。origin と blendMode だけは即座に反映される。
 * duration が 0 の場合、目標値は保持されるが適用されない (RMMZ と同じ)。
 *
 * 引数は RMMZ の Game_Picture.move と同じ並び。
 */
export const movePictureValues = (
  store: Store_Picture,
  origin: Picture_Origin,
  x: number,
  y: number,
  scaleX: number,
  scaleY: number,
  opacity: number,
  blendMode: Picture_BlendMode,
  duration: number,
  easingType: Picture_EasingKind,
): Store_Picture => ({
  ...store,
  setting: { ...store.setting, origin, blendMode },
  target: {
    value: { x, y, scaleX, scaleY, opacity },
    easing: { kindId: easingType, exponent: EASING_EXPONENT },
    duration,
    wholeDuration: duration,
  },
});

export const rotatePicture = (
  store: Store_Picture,
  speed: number,
): Store_Picture => ({
  ...store,
  rotation: setRotationSpeed(store.rotation, speed),
});

/** 色調変更。duration が 0 なら即座に適用される。 */
export const tintPicture = (
  store: Store_Picture,
  tone: ColorRGBA,
  duration: number,
): Store_Picture => ({
  ...store,
  tone: startTint(store.tone, tone, duration),
});
