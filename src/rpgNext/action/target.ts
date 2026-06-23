import type {
  Rmmz_Action,
  Rmmz_Battler,
  Rmmz_BattlerContainer,
} from "@RpgTypes/rmmzRuntime";

export const battlresRandomTarget = (
  battlers: ReadonlyArray<Rmmz_Battler>,
  randomValue: number,
): Rmmz_Battler | null => {
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

export const battlersRandomDeadTarget = (
  battlers: ReadonlyArray<Rmmz_Battler>,
  randomValue: number,
): Rmmz_Battler | null => {
  const b2 = battlers.filter((b) => b.isDead());
  return battlresRandomTarget(b2, randomValue);
};

export const battlersRandomAliveTarget = (
  battlers: ReadonlyArray<Rmmz_Battler>,
  randomValue: number,
): Rmmz_Battler | null => {
  const b2 = battlers.filter((b) => b.isAlive());
  return battlresRandomTarget(b2, randomValue);
};

export const actionDecideRandomTarget = <Battler>(
  action: Rmmz_Action,
  friendsUnit: Rmmz_BattlerContainer<Battler>,
  opponentsUnit: Rmmz_BattlerContainer<Battler>,
): Battler | null => {
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
