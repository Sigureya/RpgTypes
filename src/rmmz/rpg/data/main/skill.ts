import type { Data_Weapon, Trait } from "./traitContainers";
import {
  SPARAM_MCR_MAGIC_COST_RATE,
  TRAIT_SPARAM,
  TRAIT_SKILL_SEAL,
  TRAIT_SKILL_TYPE_SEAL,
} from "./traitContainers";
import { traitMpCostRate } from "./traitContainers/trait/sparam";
import type { Data_Skill } from "./usableItems";

export interface Battler_SkillUser {
  mp: number;
  tp: number;
}

export const skillMpCost = (
  traits: ReadonlyArray<Trait>,
  skill: Data_Skill,
): number => {
  const mcr: number = traitMpCostRate(traits);
  return Math.floor(skill.mpCost * mcr);
};

export const canPaySkillCostBasic = (
  battler: Battler_SkillUser,
  traits: ReadonlyArray<Trait>,
  skill: Data_Skill,
): boolean => {
  const mcr: number = traitMpCostRate(traits);
  const mpCost: number = skill.mpCost * mcr;
  return battler.mp >= mpCost && battler.tp >= skill.tpCost;
};

export const isSkillRequiredWeaponTypeOk = (
  weapons: ReadonlyArray<Data_Weapon>,
  skill: Data_Skill,
): boolean => {
  if (skill.requiredWtypeId1 === 0 && skill.requiredWtypeId2 === 0) {
    return true;
  }
  if (weapons.length === 0) {
    return false;
  }
  return weapons.some((w): boolean => {
    return (
      w.wtypeId === skill.requiredWtypeId1 ||
      w.wtypeId === skill.requiredWtypeId2
    );
  });
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

const filterSkillConditionTraits = (traits: ReadonlyArray<Trait>): Trait[] => {
  return traits.filter(isSkillConditionTrait);
};

const isSkillConditionTrait = (trait: Trait): boolean => {
  return (
    trait.code === TRAIT_SKILL_SEAL ||
    trait.code === TRAIT_SKILL_TYPE_SEAL ||
    (trait.code === TRAIT_SPARAM && trait.dataId === SPARAM_MCR_MAGIC_COST_RATE)
  );
};

export const filterUsableSkillsWithWeapon = (
  skills: ReadonlyArray<Data_Skill>,
  traits: ReadonlyArray<Trait>,
  weapons: ReadonlyArray<Data_Weapon>,
  battler: Battler_SkillUser,
): Data_Skill[] => {
  const w = skills.filter((skill): boolean => {
    return isSkillRequiredWeaponTypeOk(weapons, skill);
  });
  if (w.length === 0) {
    return [];
  }
  return filterUsableSkills(w, traits, battler);
};

export const filterUsableSkills = (
  skills: ReadonlyArray<Data_Skill>,
  traits: ReadonlyArray<Trait>,
  battler: Battler_SkillUser,
): Data_Skill[] => {
  const skillCondtionTraits: Trait[] = filterSkillConditionTraits(traits);
  const mcr: number = traitMpCostRate(skillCondtionTraits);
  return skills.filter((skill): boolean => {
    const mpCost = Math.floor(skill.mpCost * mcr);
    if (battler.mp < mpCost) {
      return false;
    }
    return !isSkillSealed(skillCondtionTraits, skill);
  });
};
