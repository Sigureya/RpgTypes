import {
  TRAIT_ACTION_PLUS,
  TRAIT_ATTACK_ELEMENT,
  TRAIT_ATTACK_SKILL,
  TRAIT_ATTACK_SPEED,
  TRAIT_ATTACK_STATE,
  TRAIT_ATTACK_TIMES,
  TRAIT_SKILL_ADD,
  TRAIT_SKILL_SEAL,
  TRAIT_SKILL_TYPE_ADD,
  TRAIT_SKILL_TYPE_SEAL,
} from "./core";
import { someTraitMatched, traitSet, traitSum, traitSumAll } from "./trait";
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

export const traitActionPlusSet = (traits: ReadonlyArray<Trait>): number[] => {
  // filter().map() は中間配列を 1 つ余分に作る。
  // 実測で 105ns → 45ns (特徴 24 個)。performance.md [FOLD]
  return traits.reduce<number[]>((acc, trait) => {
    if (trait.code === TRAIT_ACTION_PLUS) {
      acc.push(trait.value);
    }
    return acc;
  }, []);
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

export const attackSkillNumRepeats = (
  sklllId: number,
  traits: ReadonlyArray<Trait>,
): number => {
  let repeats = 0;
  let isNormalAttack = false;
  for (const trait of traits) {
    if (trait.dataId !== sklllId) {
      continue;
    }
    if (trait.code === TRAIT_ATTACK_SKILL) {
      isNormalAttack = true;
    }
    if (trait.code === TRAIT_ATTACK_TIMES) {
      repeats += trait.value;
    }
  }
  return isNormalAttack ? repeats : 0;
};
