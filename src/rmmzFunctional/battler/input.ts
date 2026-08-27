import { canInputByStates, traitsIsAutoBattle } from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Battler } from "@RpgTypes/rmmzRuntime";

export const battlerCanInput = (battler: Rmmz_Battler): boolean => {
  const states = battler.states();
  if (!canInputByStates(states)) {
    return false;
  }
  const traits = battler.allTraits();
  if (traitsIsAutoBattle(traits)) {
    return false;
  }
  return true;
};
