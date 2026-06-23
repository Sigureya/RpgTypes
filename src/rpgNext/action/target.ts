import type { Rmmz_Battler } from "@RpgTypes/rmmzRuntime";

export const battlresRandomTarget = <T extends Rmmz_Battler>(
  battlers: ReadonlyArray<T>,
  randomValue: number,
): T | null => {
  const tgrSum = battlers.reduce((r, b) => r + b.tgr, 0);
  // eslint-disable-next-line @functional/no-let
  let targetTgr = randomValue * tgrSum;
  // eslint-disable-next-line @functional/no-loop-statements
  for (const battler of battlers) {
    targetTgr -= battler.tgr;
    if (targetTgr <= 0) {
      return battler;
    }
  }
  return null;
};

export const battlersRandomDeadTarget = <T extends Rmmz_Battler>(
  battlers: ReadonlyArray<T>,
  randomValue: number,
): T | null => {
  const filted = battlers.filter((b) => b.isDead());
  return battlresRandomTarget(filted, randomValue);
};

export const battlersRandomAliveTarget = <T extends Rmmz_Battler>(
  battlers: ReadonlyArray<T>,
  randomValue: number,
): T | null => {
  const filted = battlers.filter((b) => b.isAlive());
  return battlresRandomTarget(filted, randomValue);
};

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
