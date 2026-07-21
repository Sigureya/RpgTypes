import type { Trait } from "@RpgTypes/rmmz";
import { TRAIT_PARAM, traitPi } from "@RpgTypes/rmmz";

export const traitParamRate = (
  traits: ReadonlyArray<Trait>,
  paramId: number,
): number => {
  return traitPi(traits, TRAIT_PARAM, paramId);
};
