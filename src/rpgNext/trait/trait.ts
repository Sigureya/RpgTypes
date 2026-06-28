import type { Trait } from "@RpgTypes/rmmz";
import {
  TRAIT_DEBUFF_RATE,
  TRAIT_ELEMENT_RATE,
  TRAIT_PARAM,
} from "@RpgTypes/rmmz";

export const traitParamRate = (
  traits: ReadonlyArray<Trait>,
  paramId: number,
): number => {
  return traitPi(traits, TRAIT_PARAM, paramId);
};

export const traitElementRate = (
  traits: ReadonlyArray<Trait>,
  elementId: number,
): number => {
  return traitPi(traits, TRAIT_ELEMENT_RATE, elementId);
};

export const traitDebuffRate = (
  traits: ReadonlyArray<Trait>,
  paramId: number,
): number => {
  return traitPi(traits, TRAIT_DEBUFF_RATE, paramId + 8);
};

export const traitPi = (
  traits: ReadonlyArray<Trait>,
  code: number,
  id: number,
): number => {
  return traits.reduce((product, trait) => {
    if (trait.code === code && trait.dataId === id) {
      return product * trait.value;
    }
    return product;
  }, 1);
};

export const traitSum = (
  traits: ReadonlyArray<Trait>,
  code: number,
  id: number,
): number => {
  return traits.reduce((sum, trait) => {
    if (trait.code === code && trait.dataId === id) {
      return sum + trait.value;
    }
    return sum;
  }, 0);
};

export const traitSumAll = (
  traits: ReadonlyArray<Trait>,
  code: number,
): number => {
  return traits.reduce((sum, trait) => {
    if (trait.code === code) {
      return sum + trait.value;
    }
    return sum;
  }, 0);
};
