import {
  TRAIT_ATTACK_SKILL,
  TRAIT_SKILL_ADD,
  TRAIT_SKILL_SEAL,
  TRAIT_SKILL_TYPE_ADD,
  TRAIT_SKILL_TYPE_SEAL,
} from "./core";
import { someTraitMatched, traitSet } from "./trait";
import type { Trait } from "./types";

export const traitsAttackSkillId = (traits: ReadonlyArray<Trait>): number => {
  const set: number[] = traitSet(traits, TRAIT_ATTACK_SKILL);
  return set.length > 0 ? Math.max(...set) : 1;
};

export const traitsAddedSkillTypes = (
  traits: ReadonlyArray<Trait>,
): number[] => {
  return traitSet(traits, TRAIT_SKILL_TYPE_ADD);
};

export const isSkillTypeSealed = (
  traits: ReadonlyArray<Trait>,
  stypeId: number,
): boolean => {
  return someTraitMatched(traits, TRAIT_SKILL_TYPE_SEAL, stypeId);
};

export const traitAddedSkills = (traits: ReadonlyArray<Trait>): number[] => {
  return traitSet(traits, TRAIT_SKILL_ADD);
};

export const isSkillIdSealed = (
  traits: ReadonlyArray<Trait>,
  skillId: number,
): boolean => {
  return someTraitMatched(traits, TRAIT_SKILL_SEAL, skillId);
};
