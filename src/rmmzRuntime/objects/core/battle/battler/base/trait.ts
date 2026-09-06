import type { Trait } from "@RpgTypes/rmmz/rpg";

export interface Rmmz_TraitContainer {
  traits(code: number): Trait[];
  allTraits(): Trait[];
  traitsWithId(code: number, id: number): Trait[];
  traitsPi(code: number, id: number): number;
  traitsSum(code: number, id: number): number;
  traitsSumAll(code: number): number;
  traitsSet(code: number): number[];
  elementRate(elementId: number): number;
  debuffRate(paramId: number): number;
  stateRate(stateId: number): number;
  addedSkills(): number[];
  attackTimesAdd(): number;
  attackSkillId(): number;
  attackElements(): number[];
  attackStates(): number[];
  attackStatesRate(stateId: number): number;
  addedSkillTypes(): number[];
  actionPlusSet(): number[];
  stateResistSet(): number[];
  isStateResist(stateId: number): boolean;
  isEquipWtypeOk(wtypeId: number): boolean;
  isEquipAtypeOk(atypeId: number): boolean;
  isEquipTypeLocked(etypeId: number): boolean;
  isEquipTypeSealed(etypeId: number): boolean;
  isSkillTypeSealed(stypeId: number): boolean;
  isSkillSealed(skillId: number): boolean;
  specialFlag(flagId: number): boolean;
  collapseType(): number;
  isAutoBattle(): boolean;
  /** 特徴に加えて canMove() も見る */
  isGuard(): boolean;
  /** 特徴に加えて canMove() も見る */
  isSubstitute(): boolean;
  isPreserveTp(): boolean;
  paramRate(paramId: number): number;
  xparam(paramId: number): number;
  sparam(paramId: number): number;
}
