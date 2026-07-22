import {
  TRAIT_ATTACK_ELEMENT,
  TRAIT_ATTACK_SKILL,
  TRAIT_ATTACK_SPEED,
  TRAIT_ATTACK_STATE,
  TRAIT_ATTACK_TIMES,
} from "./core";
import { traitSet, traitSum, traitSumAll } from "./trait";
import type { Trait } from "./types";

export const traitAttackElements = (traits: ReadonlyArray<Trait>): number[] => {
  return traitSet(traits, TRAIT_ATTACK_ELEMENT);
};

export const traitAttackStates = (traits: ReadonlyArray<Trait>): number[] => {
  return traitSet(traits, TRAIT_ATTACK_STATE);
};

export const traitAttackStateRate = (
  traits: ReadonlyArray<Trait>,
  stateId: number,
): number => {
  return traitSum(traits, TRAIT_ATTACK_STATE, stateId);
};

export const traitAtttackSpeed = (traits: ReadonlyArray<Trait>): number => {
  return traitSumAll(traits, TRAIT_ATTACK_SPEED);
};

export const traitAttackTimesAdd = (traits: ReadonlyArray<Trait>): number => {
  return Math.max(0, traitSumAll(traits, TRAIT_ATTACK_TIMES));
};

export const traitAttackSkillId = (traits: ReadonlyArray<Trait>): number => {
  return traits.reduce(skillIdAcc, 1);
};

const skillIdAcc = (skillId: number, trait: Trait): number => {
  if (trait.code === TRAIT_ATTACK_SKILL) {
    return Math.max(skillId, trait.dataId);
  }
  return skillId;
};
