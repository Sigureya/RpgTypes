import type { Data_UsableItem } from "@RpgTypes/rmmz/rpg";
import {
  scopeIsForDeadFriend,
  scopeIsForAliveFriend,
} from "@RpgTypes/rmmz/rpg";
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

export const actionDecideRandomTarget = <
  B1 extends Rmmz_Battler,
  B2 extends Rmmz_Battler,
>(
  item: Data_UsableItem,
  friendsUnit: ReadonlyArray<B1>,
  opponentsUnit: ReadonlyArray<B2>,
  randomValue: number,
): B1 | B2 | null => {
  if (scopeIsForDeadFriend(item)) {
    return battlersRandomDeadTarget(friendsUnit, randomValue);
  }

  if (scopeIsForAliveFriend(item)) {
    return battlersRandomAliveTarget(friendsUnit, randomValue);
  }

  return battlersRandomAliveTarget(opponentsUnit, randomValue);
};
