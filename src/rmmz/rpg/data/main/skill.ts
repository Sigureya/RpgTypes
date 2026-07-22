import type { Data_Weapon, Trait } from "./traitContainers";
import {
  SPARAM_MCR_MAGIC_COST_RATE,
  TRAIT_SKILL_SEAL,
  TRAIT_SKILL_TYPE_SEAL,
  TRAIT_SPARAM,
  traitMpCostRate,
} from "./traitContainers";
import type { Data_Skill } from "./usableItems";

export interface Battler_SkillUser {
  mp: number;
  tp: number;
}

export interface UsableSkillInfo {
  skill: Data_Skill;
  usable: boolean;
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
  const mpCost: number = skillMpCost(traits, skill);
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
    if (
      trait.code === TRAIT_SKILL_TYPE_SEAL &&
      trait.dataId === skill.stypeId
    ) {
      // 出現頻度が高そうな条件を先にチェック
      return true;
    }
    if (trait.code === TRAIT_SKILL_SEAL && trait.dataId === skill.id) {
      return true;
    }
    // 後で条件を書き足しやすいようにこの書き方
    return false;
  });
};

const filterSkillConditionTraits = (traits: ReadonlyArray<Trait>): Trait[] => {
  // スキルの使用条件判定に関わる特徴だけに絞り込む
  return traits.filter(isSkillConditionTrait);
};

const isSkillConditionTrait = (trait: Trait): boolean => {
  // 出現頻度が高そうな種類を先にチェック
  return (
    trait.code === TRAIT_SKILL_TYPE_SEAL ||
    (trait.code === TRAIT_SPARAM &&
      trait.dataId === SPARAM_MCR_MAGIC_COST_RATE) ||
    trait.code === TRAIT_SKILL_SEAL
  );
};

const isSkillUsable = (
  mcr: number,
  battler: Battler_SkillUser,
  skill: Data_Skill,
  traits: ReadonlyArray<Trait>,
): boolean => {
  // 計算コストが軽いものを先にチェック
  if (battler.tp < skill.tpCost) {
    return false;
  }
  const mpCost = Math.floor(skill.mpCost * mcr);
  if (battler.mp < mpCost) {
    return false;
  }
  return !isSkillSealed(traits, skill);
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
  const skillConditionTraits: Trait[] = filterSkillConditionTraits(traits);
  const mcr: number = traitMpCostRate(skillConditionTraits);
  return skills.filter((skill): boolean => {
    return isSkillUsable(mcr, battler, skill, skillConditionTraits);
  });
};

export const mapUsableSkills = (
  skills: ReadonlyArray<Data_Skill>,
  traits: ReadonlyArray<Trait>,
  battler: Battler_SkillUser,
): UsableSkillInfo[] => {
  const skillConditionTraits: Trait[] = filterSkillConditionTraits(traits);
  const mcr: number = traitMpCostRate(skillConditionTraits);
  return skills.map(
    (skill): UsableSkillInfo => ({
      skill: skill,
      usable: isSkillUsable(mcr, battler, skill, skillConditionTraits),
    }),
  );
};
