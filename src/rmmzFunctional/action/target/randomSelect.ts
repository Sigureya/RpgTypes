import type { Data_UsableItem } from "@RpgTypes/rmmz/rpg";
import {
  scopeIsForDeadFriend,
  scopeIsForAliveFriend,
} from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Battler } from "@RpgTypes/rmmzRuntime";
import { battlerIsAlive, unitTgrSum } from "./support";
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

export const battlresRandomTarget = <T extends Rmmz_Battler>(
  battlers: ReadonlyArray<T>,
  randomValue: number,
): T | undefined => {
  const tgrSum: number = unitTgrSum(battlers);
  // eslint-disable-next-line @functional/no-let
  let targetTgr = randomValue * tgrSum;
  // eslint-disable-next-line @functional/no-loop-statements
  for (const battler of battlers) {
    targetTgr -= battler.tgr;
    if (targetTgr <= 0) {
      return battler;
    }
  }
  return undefined;
};

export const battlersRandomDeadTarget = <T extends Rmmz_Battler>(
  battlers: ReadonlyArray<T>,
  randomValue: number,
): T | undefined => {
  const filted = battlers.filter((b) => b.isDead());
  return battlresRandomTarget(filted, randomValue);
};

export const battlersRandomAliveTarget = <T extends Rmmz_Battler>(
  battlers: ReadonlyArray<T>,
  randomValue: number,
): T | undefined => {
  const filted = battlers.filter(battlerIsAlive);
  return battlresRandomTarget(filted, randomValue);
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
