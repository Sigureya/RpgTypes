import type { Rmmz_Battler_Targetable } from "@RpgTypes/rmmzRuntime/objects/core/battle/battler/base";

export const battlerIsAlive = (battler: Rmmz_Battler_Targetable): boolean => {
  return battler.isAlive();
};

export const battlerIsDead = (battler: Rmmz_Battler_Targetable): boolean => {
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

export const smoothAliveTarget = <T extends Rmmz_Battler_Targetable>(
  battlers: ReadonlyArray<T>,
  index: number,
): T | undefined => {
  return smoothTarget(battlers, index, battlerIsAlive);
};

export const smoothDeadTarget = <T extends Rmmz_Battler_Targetable>(
  battlers: ReadonlyArray<T>,
  index: number,
): T | undefined => {
  return smoothTarget(battlers, index, battlerIsDead);
};
