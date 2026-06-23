import type { Rmmz_Battler, Rmmz_Action } from "@RpgTypes/rmmzRuntime";
import { battlersRandomDeadTarget, battlersRandomAliveTarget } from "./target";

export const actionDecideRandomTarget = <
  B1 extends Rmmz_Battler,
  B2 extends Rmmz_Battler,
>(
  action: Rmmz_Action,
  friendsUnit: ReadonlyArray<B1>,
  opponentsUnit: ReadonlyArray<B2>,
  randomValue: number,
): B1 | B2 | null => {
  if (action.isForDeadFriend()) {
    return battlersRandomDeadTarget(friendsUnit, randomValue);
  }

  if (action.isForAliveFriend()) {
    return battlersRandomAliveTarget(friendsUnit, randomValue);
  }

  return battlersRandomAliveTarget(opponentsUnit, randomValue);
};

export const actionTargetsForOpponents = (
  action: Rmmz_Action,
): Rmmz_Battler[] => {
  const unit = action.opponentsUnit();
  if (action.isForRandom()) {
    return action.randomTargets(unit);
  }
  return action.targetsForAlive(unit);
};
