import type { Data_UsableItem } from "@RpgTypes/rmmz/rpg";
import {
  confusionLevel,
  scopeIsForEveryone,
  scopeIsForFriend,
  scopeIsForOpponent,
} from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Battler } from "@RpgTypes/rmmzRuntime";
import {
  actionTargetsForFriends,
  actionTargetsForOpponents,
} from "./targetFor";
import type { Provider_Battlers } from "./types";
import { battlerIsAlive, repeatTargets } from "./support";
import { battlersRandomTarget } from "./randomSelect";

export const actionMakeTargets = (
  item: Data_UsableItem,
  subject: Rmmz_Battler,
  targetIndex: number,
  provider: Provider_Battlers,
  randomFn: () => number,
): Rmmz_Battler[] => {
  const confuse: number = confusionLevel(subject.states());
  const targets: Rmmz_Battler[] =
    confuse > 0
      ? confusionTargets(provider, confuse, randomFn)
      : normalTarget(subject, item, targetIndex, provider, randomFn);
  return applyRepeats(item, targets);
};

const applyRepeats = <T extends Rmmz_Battler>(
  item: Data_UsableItem,
  targets: ReadonlyArray<T>,
): T[] => {
  return item.repeats > 1 ? repeatTargets(targets, item.repeats) : [...targets];
};

const confusionTargets = (
  provider: Provider_Battlers,
  confusedLevel: number,
  randomFn: () => number,
): Rmmz_Battler[] => {
  if (confusedLevel <= 1) {
    return battlersRandomTarget(provider.opponentsUnit(), randomFn);
  }
  return battlersRandomTarget(provider.friendsUnit(), randomFn);
};

const normalTarget = (
  subject: Rmmz_Battler,
  item: Data_UsableItem,
  targetIndex: number,
  provider: Provider_Battlers,
  randomFn: () => number,
): Rmmz_Battler[] => {
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

const actionTargetsEveryone = (provider: Provider_Battlers): Rmmz_Battler[] => {
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
