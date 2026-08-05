import type { Rmmz_Battler_Targetable } from "@RpgTypes/rmmzRuntime/objects/core/battle/battler/base";

export interface Provider_Battlers<
  T extends Rmmz_Battler_Targetable = Rmmz_Battler_Targetable,
> {
  opponentsUnit(): ReadonlyArray<T>;
  friendsUnit(): ReadonlyArray<T>;
}
