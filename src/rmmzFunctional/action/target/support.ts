import type { Rmmz_Battler } from "@RpgTypes/rmmzRuntime";

export const unitTgrSum = (battlers: ReadonlyArray<Rmmz_Battler>): number => {
  return battlers.reduce((r, b) => r + b.tgr, 0);
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

export const smoothAliveTarget = <T extends Rmmz_Battler>(
  battlers: ReadonlyArray<T>,
  index: number,
): T | undefined => {
  return smoothTarget(battlers, index, (b) => b.isAlive());
};

export const smoothDeadTarget = <T extends Rmmz_Battler>(
  battlers: ReadonlyArray<T>,
  index: number,
): T | undefined => {
  return smoothTarget(battlers, index, (b) => b.isDead());
};
