import type { Data_UsableItem } from "@RpgTypes/rmmz/rpg";
import {
  confusionLevel,
  scopeIsForFriend,
  scopeIsForOpponent,
} from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Battler } from "@RpgTypes/rmmzRuntime";
import {
  actionTargetsForFriends,
  actionTargetsForOpponents,
} from "./targetFor";
import type { Provider_Battlers } from "./types";
import { repeatTargets } from "./support";
import { battlresRandomTarget } from "./randomSelect";

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
  return item.repeats > 1 ? repeatTargets(targets, item.repeats) : targets;
};

const confusionTargets = (
  provider: Provider_Battlers,
  confusedLevel: number,
  randomFn: () => number,
): Rmmz_Battler[] => {
  const target = confSS(provider, confusedLevel, randomFn);
  return target ? [target] : [];
};

const confSS = (
  provider: Provider_Battlers,
  confusedLevel: number,
  randomFn: () => number,
): Rmmz_Battler | undefined => {
  const targetRandomValue: number = randomFn();
  if (confusedLevel <= 1) {
    return battlresRandomTarget(provider.opponentsUnit(), targetRandomValue);
  }
  // TODO:confusionLevel 2の処理を追加する
  // 乱数の扱いを決める必要があり、やや複雑

  return battlresRandomTarget(provider.friendsUnit(), targetRandomValue);
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

  return [];
};
