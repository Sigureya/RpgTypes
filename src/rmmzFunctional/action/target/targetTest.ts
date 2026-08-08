import type { Data_UsableItem } from "@RpgTypes/rmmz/rpg";
import {
  scopeIsForAliveFriend,
  scopeIsForDeadFriend,
  scopeIsForOpponent,
} from "@RpgTypes/rmmz/rpg";
import type { Targetable } from "./types";

export const actionTestLifeAndDeath = (
  item: Data_UsableItem,
  target: Targetable,
): boolean => {
  if (scopeIsForOpponent(item) || scopeIsForAliveFriend(item)) {
    return target.isAlive();
  }
  if (scopeIsForDeadFriend(item)) {
    return target.isDead();
  }
  return true;
};
