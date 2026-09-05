import { applyEasingToTransform } from "./apply";
import type { Picture_EasingFn } from "./easing";
import { resolveEasing } from "./easing";
import type { Picture_Target, Picture_Transform } from "./types";

export interface Picture_MoveResult {
  current: Picture_Transform;
  target: Picture_Target | null;
}

/**
 * 移動を1フレーム進める。
 * 最終フレームでは補間結果が目標値と一致するため、target を捨てて終了とする。
 *
 * @param easingFn 補間関数。省略時は target.easing (旧来の kindId 指定) から決める。
 */
export const updateMove = (
  current: Picture_Transform,
  target: Picture_Target | null,
  easingFn?: Picture_EasingFn,
): Picture_MoveResult => {
  if (!target || target.duration <= 0) {
    return { current, target };
  }
  const fn = easingFn ?? resolveEasing(target.easing);
  const next = applyEasingToTransform(fn, target, current);
  const duration = target.duration - 1;
  return {
    current: next,
    target: duration > 0 ? { ...target, duration } : null,
  };
};
