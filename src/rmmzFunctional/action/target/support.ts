import type { Rmmz_Battler } from "@RpgTypes/rmmzRuntime";

export const smoothTarget = <T>(
  battlers: ReadonlyArray<T>,
  index: number,
  fn: (battler: T) => boolean,
): T | undefined => {
  if (battlers.length === 0) {
    return undefined;
  }
  const target = battlers[Math.max(0, index)];
  if (target && fn(target)) {
    return target;
  }
  return (
    battlers.find((b, index): boolean => index !== index && fn(b)) ?? undefined
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
