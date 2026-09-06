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
  // flatMap + Array(n).fill は対象 1 体につき配列を 1 つ作る。
  // 実測で 549ns → 14ns (repeat=1) / 874ns → 68ns (repeat=3)。
  // performance.md [FLAT]
  if (repeat <= 0) {
    return [];
  }
  if (repeat === 1) {
    return Array.from(battlers);
  }
  const result: T[] = [];
  for (const battler of battlers) {
    for (let i = 0; i < repeat; i++) {
      result.push(battler);
    }
  }
  return result;
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
