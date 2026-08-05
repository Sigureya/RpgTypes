import type { Data_UsableItem } from "@RpgTypes/rmmz/rpg";
import {
  scopeIsForAliveFriend,
  scopeIsForDeadFriend,
  scopeIsForOne,
  scopeIsForUser,
  scopeRandomNumTargets,
} from "@RpgTypes/rmmz/rpg";
import {
  battlerIsAlive,
  battlerIsDead,
  smoothAliveTarget,
  smoothTarget,
} from "./support";
import { battlersRandomTarget } from "./randomSelect";
import type { Targetable } from "./types";

export const actionTargetsForOpponents = <T extends Targetable>(
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
    return battlersRandomTarget(opponentsUnit, randomFn, randomRepeat);
  }
  const single = smoothAliveTarget(opponentsUnit, targetIndex);
  return single ? [single] : [];
};

export const actionTargetsForFriends = <
  T extends Targetable,
  S extends Targetable,
>(
  subject: S,
  item: Data_UsableItem,
  friendsUnit: ReadonlyArray<T>,
  targetIndex: number,
): (S | T)[] => {
  if (scopeIsForUser(item)) {
    return [subject];
  }
  if (scopeIsForDeadFriend(item)) {
    return actionTargetsForDead(item, friendsUnit, targetIndex);
  }
  if (scopeIsForAliveFriend(item)) {
    return actionTargetsForAlive(item, friendsUnit, targetIndex);
  }
  return actionTargetsForDeadAndAlive(item, friendsUnit, targetIndex);
};

export const actionTargetsForDeadAndAlive = <T extends Targetable>(
  item: Data_UsableItem,
  unit: ReadonlyArray<T>,
  targetIndex: number,
): T[] => {
  if (scopeIsForOne(item)) {
    const target = smoothTarget(unit, targetIndex, () => true);
    return target ? [target] : [];
  }
  return Array.from(unit);
};

export const actionTargetsForAlive = <T extends Targetable>(
  item: Data_UsableItem,
  unit: ReadonlyArray<T>,
  targetIndex: number,
): T[] => {
  return actionTargets(item, unit, targetIndex, battlerIsAlive);
};

export const actionTargetsForDead = <T extends Targetable>(
  item: Data_UsableItem,
  unit: ReadonlyArray<T>,
  targetIndex: number,
): T[] => {
  return actionTargets(item, unit, targetIndex, battlerIsDead);
};

const actionTargets = <T extends Targetable>(
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
