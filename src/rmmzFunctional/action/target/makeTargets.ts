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
import {
  actionTargetsForFriends,
  actionTargetsForOpponents,
} from "./targetFor";
import type { Provider_Battlers, Targetable } from "./types";
import { battlerIsAlive, battlerIsDead, repeatTargets } from "./support";
import { battlersRandomTarget } from "./randomSelect";

export const itemTargetCandidates = <T extends Targetable>(
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

export const actionMakeTargets = <T extends Targetable, S extends Targetable>(
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
  subject: Targetable,
): number => {
  return item.repeats + attackSkillNumRepeats(item.id, subject.allTraits());
};

const confusionTargets = <T extends Targetable>(
  provider: Provider_Battlers<T>,
  confusedLevel: number,
  randomFn: () => number,
): T[] => {
  if (confusedLevel <= 1) {
    return battlersRandomTarget(provider.opponentsUnit(), randomFn);
  }
  return battlersRandomTarget(provider.friendsUnit(), randomFn);
};

const normalTarget = <T extends Targetable, S extends Targetable>(
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

const actionTargetsEveryone = <T extends Targetable>(
  provider: Provider_Battlers<T>,
): T[] => {
  // 2 つの隊列を 1 つの配列へ集める。
  // filter した配列を spread / concat で繋ぐと配列を 2〜3 個作ることになり、
  // 実測で 62ns → 109ns / 180ns と遅くなる (performance.md [JOIN])。
  // for である必要は無く、reduce でも同じ速さ。配列を 1 つしか作らないことが要点。
  const result: T[] = [];
  for (const battler of provider.friendsUnit()) {
    if (battlerIsAlive(battler)) {
      result.push(battler);
    }
  }
  for (const battler of provider.opponentsUnit()) {
    if (battlerIsAlive(battler)) {
      result.push(battler);
    }
  }
  return result;
};
