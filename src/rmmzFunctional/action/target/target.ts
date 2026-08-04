import type { Data_UsableItem } from "@RpgTypes/rmmz/rpg";
import {
  scopeIsForAliveFriend,
  scopeIsForDeadFriend,
  scopeIsForRandom,
} from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Battler } from "@RpgTypes/rmmzRuntime";

export const actionTargetsForOpponents = (
  item: Data_UsableItem,
  opponentsUnit: ReadonlyArray<Rmmz_Battler>,
): Rmmz_Battler[] => {
  // if(scopeIsForR
  if (scopeIsForRandom(item)) {
    return [];
  }
  return [];
};
