import type { Data_UsableItem } from "@RpgTypes/rmmz/rpg";
import { scopeIsForOne, scopeRandomNumTargets } from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Battler } from "@RpgTypes/rmmzRuntime";
import { battlresRandomTarget } from "./randomSelect";
import { smoothAliveTarget, smoothDeadTarget } from "./support";

export const repeatTargets = <T extends Rmmz_Battler>(
  battlers: ReadonlyArray<T>,
  repeat: number,
): T[] => {
  return battlers.flatMap((b) => Array(repeat).fill(b));
};

export const actionTargetForDead = <T extends Rmmz_Battler>(
  item: Data_UsableItem,
  unit: ReadonlyArray<T>,
  targetIndex: number,
): T[] => {
  if (scopeIsForOne(item)) {
    return singleDeadTarget(unit, targetIndex);
  }
  return unit.filter((b) => b.isDead());
};

export const actionTargetForDeadAndAlive = <T extends Rmmz_Battler>(
  item: Data_UsableItem,
  unit: Array<T>,
  targetIndex: number,
): T[] => {
  if (scopeIsForOne(item)) {
    return singleTarget(unit, targetIndex);
  }
  return unit;
};

export const actionTargetForAlive = <T extends Rmmz_Battler>(
  item: Data_UsableItem,
  unit: ReadonlyArray<T>,
  targetIndex: number,
): T[] => {
  if (scopeIsForOne(item)) {
    return singleTarget(unit, targetIndex);
  }
  return unit.filter((b) => b.isAlive());
};

const singleDeadTarget = <T extends Rmmz_Battler>(
  unit: ReadonlyArray<T>,
  targetIndex: number,
): T[] => {
  if (targetIndex < 0) {
    const t = smoothDeadTarget(unit, 0);
    return t ? [t] : [];
  }
  const target = smoothDeadTarget(unit, targetIndex);
  return target ? [target] : [];
};

const singleTarget = <T extends Rmmz_Battler>(
  unit: ReadonlyArray<T>,
  targetIndex: number,
): T[] => {
  if (targetIndex < 0) {
    const t = smoothAliveTarget(unit, 0);
    return t ? [t] : [];
  }
  const target = smoothAliveTarget(unit, targetIndex);
  return target ? [target] : [];
};

export const actionTargetsForOpponents = <T extends Rmmz_Battler>(
  item: Data_UsableItem,
  opponentsUnit: ReadonlyArray<T>,
  targetIndex: number,
  randomFn: () => number,
): T[] => {
  if (opponentsUnit.length === 0) {
    return [];
  }
  const randomRepeat = scopeRandomNumTargets(item);
  if (randomRepeat > 0) {
    return randomTargets(opponentsUnit, randomRepeat, randomFn);
  }
  const single = smoothAliveTarget(opponentsUnit, targetIndex);
  return single ? [single] : [];
};

const randomTargets = <T extends Rmmz_Battler>(
  list: ReadonlyArray<T>,
  repeat: number,
  randomFn: () => number,
): T[] => {
  if (list.length === 1) {
    return Array(repeat).fill(list[0]);
  }
  const result: T[] = [];
  // eslint-disable-next-line @functional/no-loop-statements, @functional/no-let
  for (let i = 0; i < repeat; i++) {
    const rnd = randomFn();
    const target = battlresRandomTarget(list, rnd);
    if (target) {
      result.push(target);
    }
  }
  return result;
};
