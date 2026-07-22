import { TRAIT_ACTION_PLUS } from "./core";
import type { Trait } from "./types";

export const traitActionPlusSet = (traits: ReadonlyArray<Trait>): number[] => {
  return traits
    .filter((trait) => trait.code === TRAIT_ACTION_PLUS)
    .map((trait) => trait.value);
};
