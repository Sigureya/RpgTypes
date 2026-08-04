import type { Data_UsableItem } from "@RpgTypes/rmmz/rpg";
import { scopeRandomNumTargets } from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Battler } from "@RpgTypes/rmmzRuntime";
import { battlresRandomTarget } from "./randomSelect";
import { smoothAliveTarget } from "./support";

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
