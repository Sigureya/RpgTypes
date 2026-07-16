import type { TraitCode } from "./core";
import {
  TRAIT_PARAM,
  TRAIT_ELEMENT_RATE,
  TRAIT_DEBUFF_RATE,
  TRAIT_STATE_RATE,
  TRAIT_ATTACK_ELEMENT,
} from "./core";
import type { Trait } from "./types";

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
  return traitPi(traits, TRAIT_DEBUFF_RATE, paramId);
};

export const traitStateRate = (
  traits: ReadonlyArray<Trait>,
  stateId: number,
): number => {
  return traitPi(traits, TRAIT_STATE_RATE, stateId);
};

export const traitAttackElements = (traits: ReadonlyArray<Trait>): number[] => {
  return traitSet(traits, TRAIT_ATTACK_ELEMENT);
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

export const traitSet = (
  traits: ReadonlyArray<Trait>,
  code: number,
): number[] => {
  return traits
    .filter((trait) => trait.code === code)
    .map((trait) => trait.dataId);
};

export const someTraitMatched = (
  traits: ReadonlyArray<Trait>,
  code: TraitCode,
  etypeId: number,
): boolean => {
  return traits.some((trait) => {
    return trait.code === code && trait.dataId === etypeId;
  });
};
