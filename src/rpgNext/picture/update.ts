import { updateRotation } from "./rotation";
import { updateTone } from "./tone";
import { updateMove, type Picture_EasingFn } from "./transform";
import type { Store_Picture } from "./types";

/**
 * 1フレーム進める。
 *
 * @param easingFn 補間関数。省略時は target.easing (旧来の kindId 指定) から決める。
 */
export const updatePicture = (
  store: Store_Picture,
  easingFn?: Picture_EasingFn,
): Store_Picture => {
  const moved = updateMove(store.current, store.target, easingFn);
  return {
    setting: store.setting,
    current: moved.current,
    target: moved.target,
    tone: updateTone(store.tone),
    rotation: updateRotation(store.rotation),
  };
};
