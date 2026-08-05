import type { Rmmz_Battler } from "@RpgTypes/rmmzRuntime";

export interface Provider_Battlers<T extends Rmmz_Battler = Rmmz_Battler> {
  opponentsUnit(): ReadonlyArray<T>;
  friendsUnit(): ReadonlyArray<T>;
}
