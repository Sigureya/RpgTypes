import type { Data_UsableItem } from "@RpgTypes/rmmz/rpg";
import { scopeIsForOne, scopeRandomNumTargets } from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Battler } from "@RpgTypes/rmmzRuntime";
import { battlresRandomTarget } from "./randomSelect";
import { smoothAliveTarget, smoothTarget } from "./support";

const actionMakeTargets = (subject: Rmmz_Battler) => {};

export const repeatTargets = <T extends Rmmz_Battler>(
  battlers: ReadonlyArray<T>,
  repeat: number,
): T[] => {
  return battlers.flatMap((b) => Array(repeat).fill(b));
};

export const actionTargestForDeadAndAlive = <T extends Rmmz_Battler>(
  item: Data_UsableItem,
  unit: Array<T>,
  targetIndex: number,
): T[] => {
  if (scopeIsForOne(item)) {
    const target = smoothTarget(unit, targetIndex, () => true);
    return target ? [target] : [];
  }
  return unit;
};

export const actionTargetsForAlive = <T extends Rmmz_Battler>(
  item: Data_UsableItem,
  unit: ReadonlyArray<T>,
  targetIndex: number,
): T[] => {
  return actionTarget(item, unit, targetIndex, (b) => b.isAlive());
};

export const actionTargetsForDead = <T extends Rmmz_Battler>(
  item: Data_UsableItem,
  unit: ReadonlyArray<T>,
  targetIndex: number,
): T[] => {
  return actionTarget(item, unit, targetIndex, (b) => b.isDead());
};

const actionTarget = <T extends Rmmz_Battler>(
  item: Data_UsableItem,
  unit: ReadonlyArray<T>,
  targetIndex: number,
  fn: (battler: T) => boolean,
): T[] => {
  if (scopeIsForOne(item)) {
    const target = smoothTarget(unit, targetIndex, fn);
    return target ? [target] : [];
  }
  return unit.filter(fn);
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
