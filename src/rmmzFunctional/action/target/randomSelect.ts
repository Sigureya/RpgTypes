import type { Data_UsableItem } from "@RpgTypes/rmmz/rpg";
import {
  scopeIsForDeadFriend,
  scopeIsForAliveFriend,
} from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Battler } from "@RpgTypes/rmmzRuntime";
import { battlerIsAlive, battlerIsDead } from "./support";
import type { Provider_Battlers } from "./types";

export const battlersDecideRandomTarget = (
  item: Data_UsableItem,
  units: Provider_Battlers,
  randomValue: number,
): Rmmz_Battler | undefined => {
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

const mapTgrPairs = <T extends Rmmz_Battler>(
  battlers: ReadonlyArray<T>,
): TgrPair<T>[] => {
  return battlers.map(
    (battler): TgrPair<T> => ({
      battler,
      tgr: battler.tgr,
    }),
  );
};

const sumTgrPairs = (pairs: ReadonlyArray<TgrPair<unknown>>): number => {
  return pairs.reduce((sum, pair) => sum + pair.tgr, 0);
};

export const battlersRandomTarget = <T extends Rmmz_Battler>(
  battlers: ReadonlyArray<T>,
  randomValue: number,
): T | undefined => {
  if (battlers.length === 0) {
    return undefined;
  }
  if (battlers.length === 1) {
    return battlers[0];
  }
  const tgrPairs = mapTgrPairs(battlers);
  const tgrSum: number = sumTgrPairs(tgrPairs);
  // eslint-disable-next-line @functional/no-let
  let targetTgr = randomValue * tgrSum;
  // eslint-disable-next-line @functional/no-loop-statements
  for (const battler of tgrPairs) {
    targetTgr -= battler.tgr;
    if (targetTgr <= 0) {
      return battler.battler;
    }
  }
  return undefined;
};

export const battlersRandomDeadTarget = <T extends Rmmz_Battler>(
  battlers: ReadonlyArray<T>,
  randomValue: number,
): T | undefined => {
  const filted = battlers.filter(battlerIsDead);
  return battlersRandomTarget(filted, randomValue);
};

export const battlersRandomAliveTarget = <T extends Rmmz_Battler>(
  battlers: ReadonlyArray<T>,
  randomValue: number,
): T | undefined => {
  const filted = battlers.filter(battlerIsAlive);
  return battlersRandomTarget(filted, randomValue);
};

export const actionDecideRandomTarget = <
  B1 extends Rmmz_Battler,
  B2 extends Rmmz_Battler,
>(
  item: Data_UsableItem,
  friendsUnit: ReadonlyArray<B1>,
  opponentsUnit: ReadonlyArray<B2>,
  randomValue: number,
): B1 | B2 | undefined => {
  if (scopeIsForDeadFriend(item)) {
    return battlersRandomDeadTarget(friendsUnit, randomValue);
  }

  if (scopeIsForAliveFriend(item)) {
    return battlersRandomAliveTarget(friendsUnit, randomValue);
  }

  return battlersRandomAliveTarget(opponentsUnit, randomValue);
};
