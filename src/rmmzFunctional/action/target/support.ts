import type { Targetable } from "./types";

export const battlerIsAlive = (battler: Targetable): boolean => {
  return battler.isAlive();
};

export const battlerIsDead = (battler: Targetable): boolean => {
  return battler.isDead();
};

export const repeatTargets = <T>(
  battlers: ReadonlyArray<T>,
  repeat: number,
): T[] => {
  return battlers.flatMap((b) => Array(repeat).fill(b));
};

export const smoothTarget = <T>(
  battlers: ReadonlyArray<T>,
  targetIndex: number,
  fn: (battler: T) => boolean,
): T | undefined => {
  if (battlers.length === 0) {
    return undefined;
  }
  const finalIndex = Math.max(0, targetIndex);
  const target = battlers[finalIndex];
  if (target && fn(target)) {
    return target;
  }
  return (
    battlers.find((b, index): boolean => index !== targetIndex && fn(b)) ??
    undefined
  );
};

export const smoothAliveTarget = <T extends Targetable>(
  battlers: ReadonlyArray<T>,
  index: number,
): T | undefined => {
  return smoothTarget(battlers, index, battlerIsAlive);
};

export const smoothDeadTarget = <T extends Targetable>(
  battlers: ReadonlyArray<T>,
  index: number,
): T | undefined => {
  return smoothTarget(battlers, index, battlerIsDead);
};
