import type { Rmmz_Battler } from "@RpgTypes/rmmzRuntime";

export interface Provider_Battlers {
  opponentsUnit(): ReadonlyArray<Rmmz_Battler>;
  friendsUnit(): ReadonlyArray<Rmmz_Battler>;
}
