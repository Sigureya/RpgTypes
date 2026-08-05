import type { Data_UsableItem } from "@RpgTypes/rmmz/rpg";
import {
  attackSkillNumRepeats,
  confusionLevel,
  scopeIsForDeadFriend,
  scopeIsForEveryone,
  scopeIsForFriend,
  scopeIsForOpponent,
  scopeIsForUser,
} from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Battler_Targetable } from "@RpgTypes/rmmzRuntime";
import {
  actionTargetsForFriends,
  actionTargetsForOpponents,
} from "./targetFor";
import type { Provider_Battlers } from "./types";
import { battlerIsAlive, battlerIsDead, repeatTargets } from "./support";
import { battlersRandomTarget } from "./randomSelect";

export const itemTargetCandidates = <T extends Rmmz_Battler_Targetable>(
  subject: T,
  item: Data_UsableItem,
  provider: Provider_Battlers<T>,
): T[] => {
  if (scopeIsForUser(item)) {
    return [subject];
  }
  if (scopeIsForOpponent(item)) {
    return provider.opponentsUnit().filter(battlerIsAlive);
  }
  if (scopeIsForDeadFriend(item)) {
    return provider.friendsUnit().filter(battlerIsDead);
  }
  if (scopeIsForFriend(item)) {
    return provider.friendsUnit().filter(battlerIsAlive);
  }
  return [];
};

export const actionMakeTargets = <
  T extends Rmmz_Battler_Targetable,
  S extends Rmmz_Battler_Targetable,
>(
  item: Data_UsableItem,
  isItem: boolean,
  subject: S,
  targetIndex: number,
  provider: Provider_Battlers<T>,
  randomFn: () => number,
): (T | S)[] => {
  const confuse: number = confusionLevel(subject.states());
  const targets: (T | S)[] =
    confuse > 0
      ? confusionTargets(provider, confuse, randomFn)
      : normalTarget(subject, item, targetIndex, provider, randomFn);

  const repeat: number = isItem
    ? item.repeats
    : calcNomalAttackRepeat(item, subject);

  return repeat > 0 ? repeatTargets(targets, repeat) : targets;
};

const calcNomalAttackRepeat = (
  item: Data_UsableItem,
  subject: Rmmz_Battler_Targetable,
): number => {
  return item.repeats + attackSkillNumRepeats(item.id, subject.traits());
};

const confusionTargets = <T extends Rmmz_Battler_Targetable>(
  provider: Provider_Battlers<T>,
  confusedLevel: number,
  randomFn: () => number,
): T[] => {
  if (confusedLevel <= 1) {
    return battlersRandomTarget(provider.opponentsUnit(), randomFn);
  }
  return battlersRandomTarget(provider.friendsUnit(), randomFn);
};

const normalTarget = <
  T extends Rmmz_Battler_Targetable,
  S extends Rmmz_Battler_Targetable,
>(
  subject: S,
  item: Data_UsableItem,
  targetIndex: number,
  provider: Provider_Battlers<T>,
  randomFn: () => number,
): (S | T)[] => {
  if (scopeIsForFriend(item)) {
    return actionTargetsForFriends(
      subject,
      item,
      provider.friendsUnit(),
      targetIndex,
    );
  }
  if (scopeIsForOpponent(item)) {
    return actionTargetsForOpponents(
      item,
      provider.opponentsUnit(),
      targetIndex,
      randomFn,
    );
  }
  if (scopeIsForEveryone(item)) {
    return actionTargetsEveryone(provider);
  }

  return [];
};

const actionTargetsEveryone = <T extends Rmmz_Battler_Targetable>(
  provider: Provider_Battlers<T>,
): T[] => {
  // 最適化のためにforループ。
  const result = [];
  // eslint-disable-next-line @functional/no-loop-statements
  for (const battler of provider.friendsUnit()) {
    if (battlerIsAlive(battler)) {
      result.push(battler);
    }
  }
  // eslint-disable-next-line @functional/no-loop-statements
  for (const battler of provider.opponentsUnit()) {
    if (battlerIsAlive(battler)) {
      result.push(battler);
    }
  }
  return result;
};
