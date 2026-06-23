import type {
  Rmmz_Action,
  Rmmz_Battler,
  Rmmz_Unit,
} from "@RpgTypes/rmmzRuntime";

export const actionDecideRandomTarget = (
  action: Rmmz_Action,
  friendsUnit: Rmmz_Unit,
  opponentsUnit: Rmmz_Unit,
): Rmmz_Battler | null => {
  if (action.isForDeadFriend()) {
    return friendsUnit.randomDeadTarget();
  }

  if (action.isForAliveFriend()) {
    return friendsUnit.randomTarget();
  }

  return opponentsUnit.randomTarget();
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
