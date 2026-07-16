import type { ParamArray } from "@RpgTypes/rmmz";
import type { Rmmz_BattlerBase } from "@RpgTypes/rmmzRuntime";

interface BattlerValues {
  paramPlus: ParamArray;
}

const battlerLuk = (battler: Rmmz_BattlerBase) => {
  const traits = battler.allTraits();
};
