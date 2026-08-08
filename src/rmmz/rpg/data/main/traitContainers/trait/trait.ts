import type { TraitCode } from "./core";
import { TRAIT_ATTACK_STATE } from "./core";
import type { Trait, Trait_AttackState } from "./types";

export const isTraitAttackState = (
  trait: Trait,
): trait is Trait_AttackState => {
  return trait.code === TRAIT_ATTACK_STATE;
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
