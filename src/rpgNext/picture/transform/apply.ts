import type { Picture_EasingFn } from "./easing";
import type { Picture_Target, Picture_Transform } from "./types";

/**
 * 現在値を1フレーム分だけ目標値へ近づける。
 * 開始値を保持せず、現在値と経過率から逆算する RMMZ の方式をそのまま使う。
 */
export const applyEasing = (
  fn: Picture_EasingFn,
  target: Picture_Target,
  current: number,
  goal: number,
): number => {
  const d = target.duration;
  const wd = target.wholeDuration;
  const lt = fn((wd - d) / wd);
  const t = fn((wd - d + 1) / wd);
  const start = (current - goal * lt) / (1 - lt);
  return start + (goal - start) * t;
};

export const applyEasingToTransform = (
  fn: Picture_EasingFn,
  target: Picture_Target,
  current: Picture_Transform,
): Picture_Transform => ({
  x: applyEasing(fn, target, current.x, target.value.x),
  y: applyEasing(fn, target, current.y, target.value.y),
  scaleX: applyEasing(fn, target, current.scaleX, target.value.scaleX),
  scaleY: applyEasing(fn, target, current.scaleY, target.value.scaleY),
  opacity: applyEasing(fn, target, current.opacity, target.value.opacity),
});
