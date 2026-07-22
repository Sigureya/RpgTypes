import {
  FLAG_ID_AUTO_BATTLE,
  FLAG_ID_GUARD,
  TRAIT_ACTION_PLUS,
  TRAIT_SPECIAL_FLAG,
} from "./core";
import type { Trait } from "./types";

export const traitActionPlusSet = (traits: ReadonlyArray<Trait>): number[] => {
  return traits
    .filter((trait) => trait.code === TRAIT_ACTION_PLUS)
    .map((trait) => trait.value);
};

export const traitIsAutoBattle = (traits: ReadonlyArray<Trait>): boolean => {
  return traits.some(
    (trait) =>
      trait.code === TRAIT_SPECIAL_FLAG && trait.value === FLAG_ID_AUTO_BATTLE,
  );
};

export const traitIsGuardTrait = (traits: ReadonlyArray<Trait>): boolean => {
  return traits.some(
    (trait) =>
      trait.code === TRAIT_SPECIAL_FLAG && trait.value === FLAG_ID_GUARD,
  );
};
