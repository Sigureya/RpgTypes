import type { Data_UsableItem } from "@RpgTypes/rmmz/rpg";
import {
  scopeIsForDeadFriend,
  scopeIsForAliveFriend,
} from "@RpgTypes/rmmz/rpg";
import { battlerIsAlive, battlerIsDead } from "./support";
import type { Provider_Battlers, Targetable } from "./types";

export const battlersDecideRandomTarget = <T extends Targetable>(
  item: Data_UsableItem,
  units: Provider_Battlers<T>,
  randomValue: number,
): T[] => {
  if (scopeIsForDeadFriend(item)) {
    return battlersRandomDeadTarget(units.friendsUnit(), randomValue);
  }
  if (scopeIsForAliveFriend(item)) {
    return battlersRandomAliveTarget(units.friendsUnit(), randomValue);
  }
  return battlersRandomAliveTarget(units.opponentsUnit(), randomValue);
};

interface TgrPair<T> {
  battler: T;
  tgr: number;
}

const makeTgrPair = <T extends Targetable>(battler: T): TgrPair<T> => ({
  tgr: battler.tgr,
  battler: battler,
});

const accumulateTgr = (acc: number, pair: TgrPair<unknown>): number => {
  return acc + pair.tgr;
};

export const battlersRandomTarget = <T extends Targetable>(
  battlers: ReadonlyArray<T>,
  randomFn: () => number,
  repeat: number = 1,
): T[] => {
  if (battlers.length === 0) {
    return [];
  }
  if (battlers.length === 1) {
    return Array(repeat).fill(battlers[0]);
  }
  const tgrPairs = battlers.map(makeTgrPair);
  const tgrSum: number = tgrPairs.reduce(accumulateTgr, 0);
  const result: T[] = [];
  // eslint-disable-next-line @functional/no-loop-statements, @functional/no-let
  for (let i = 0; i < repeat; i++) {
    const target = randomSelect(tgrPairs, randomFn() * tgrSum);
    result.push(target);
  }
  return result;
};

const randomSelect = <T>(
  list: readonly TgrPair<T>[],
  remainingTgr: number,
): T => {
  // eslint-disable-next-line @functional/no-let
  let targetTgr = remainingTgr;
  // eslint-disable-next-line @functional/no-loop-statements
  for (const pair of list) {
    targetTgr -= pair.tgr;
    if (targetTgr <= 0) {
      return pair.battler;
    }
  }
  const last = list[list.length - 1];
  return last.battler;
};

export const battlersRandomDeadTarget = <T extends Targetable>(
  battlers: ReadonlyArray<T>,
  randomValue: number,
): T[] => {
  const filted = battlers.filter(battlerIsDead);
  return battlersRandomTarget(filted, () => randomValue);
};

export const battlersRandomAliveTarget = <T extends Targetable>(
  battlers: ReadonlyArray<T>,
  randomValue: number,
): T[] => {
  const filted = battlers.filter(battlerIsAlive);
  return battlersRandomTarget(filted, () => randomValue);
};

export const actionDecideRandomTarget = <
  B1 extends Targetable,
  B2 extends Targetable,
>(
  item: Data_UsableItem,
  friendsUnit: ReadonlyArray<B1>,
  opponentsUnit: ReadonlyArray<B2>,
  randomValue: number,
): (B1 | B2)[] => {
  if (scopeIsForDeadFriend(item)) {
    return battlersRandomDeadTarget(friendsUnit, randomValue);
  }

  if (scopeIsForAliveFriend(item)) {
    return battlersRandomAliveTarget(friendsUnit, randomValue);
  }

  return battlersRandomAliveTarget(opponentsUnit, randomValue);
};
