import type { Data_Weapon, Trait } from "./traitContainers";
import {
  someTraitMatched,
  TRAIT_SKILL_SEAL,
  TRAIT_SKILL_TYPE_SEAL,
} from "./traitContainers";
import { traitMpCostRate } from "./traitContainers/trait/sparam";
import type { Data_Skill } from "./usableItems";

export interface BattleerXXCost {
  mp: number;
  tp: number;
}

export const skillMpCost = (
  traits: ReadonlyArray<Trait>,
  skill: Data_Skill,
): number => {
  const mcr = traitMpCostRate(traits);
  return skill.mpCost * mcr;
};

export const canPaySkillCostBasic = (
  battler: BattleerXXCost,
  traits: ReadonlyArray<Trait>,
  skill: Data_Skill,
): boolean => {
  const mpCost = skillMpCost(traits, skill);
  return battler.mp >= mpCost && battler.tp >= skill.tpCost;
};

export const isSkillRequiredWeaponTypeOk = (
  weapons: ReadonlyArray<Data_Weapon>,
  skill: Data_Skill,
): boolean => {
  if (skill.requiredWtypeId1 === 0 && skill.requiredWtypeId2 === 0) {
    return true;
  }
  return weapons.some((w) => {
    return (
      w.wtypeId === skill.requiredWtypeId1 ||
      w.wtypeId === skill.requiredWtypeId2
    );
  });
};

export const isSkillIdSealed = (
  traits: ReadonlyArray<Trait>,
  skill: Data_Skill,
): boolean => {
  return someTraitMatched(traits, TRAIT_SKILL_SEAL, skill.id);
};

export const isSkillTypeSealed = (
  traits: ReadonlyArray<Trait>,
  skill: Data_Skill,
): boolean => {
  return someTraitMatched(traits, TRAIT_SKILL_TYPE_SEAL, skill.stypeId);
};

export const isSkillSealed = (
  traits: ReadonlyArray<Trait>,
  skill: Data_Skill,
): boolean => {
  return traits.some((trait): boolean => {
    if (trait.code === TRAIT_SKILL_SEAL && trait.dataId === skill.id) {
      return true;
    }
    if (
      trait.code === TRAIT_SKILL_TYPE_SEAL &&
      trait.dataId === skill.stypeId
    ) {
      return true;
    }
    return false;
  });
};
