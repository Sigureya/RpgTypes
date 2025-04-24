import * as DEF from "./labelDefine";
import type { TraitLabelSet } from "./labelSet";
import type { TraitLabelResolved } from "./options";

export const resolveTraitLabel = (
  labels: TraitLabelSet
): TraitLabelResolved[] => {
  return [
    DEF.defineTraitElementRate(labels.elementRate),
    DEF.defineTraitDebuffRate(labels.debuffRate),
    DEF.defineTraitStateRate(labels.stateRate),
    DEF.defineTraitStateResist(labels.stateResist),
    DEF.defineTraitRegularParam(labels.regularParam),
    DEF.defineTraitExtraParam(labels.extraParam),
    DEF.defineTraitSpecialParam(labels.specialParam),
    DEF.defineTraitAttackElement(labels.attackElement),
    DEF.defineTraitAttackState(labels.attackState),
    DEF.defineTraitAttackSpeed(labels.attackSpeed),
    DEF.defineTraitAttackTimes(labels.attackTimes),
    DEF.defineTraitAttackSkill(labels.attackSkill),
    DEF.defineTraitSkillTypeAdd(labels.skillTypeAdd),
    DEF.defineTraitSkillTypeSeal(labels.skillTypeSeal),
    DEF.defineTraitSkillAdd(labels.skillAdd),
    DEF.defineTraitSkillSeal(labels.skillSeal),
    DEF.defineTraitEquipWeaponType(labels.equipWeaponType),
    DEF.defineTraitEquipArmorType(labels.equipArmorType),
    DEF.defineTraitEquipLock(labels.equipLock),
    DEF.defineTraitEquipSeal(labels.equipSeal),
    DEF.defineTraitSlotType(labels.slotType),
    DEF.defineTraitActionPlus(labels.actionPlus),
    DEF.defineTraitSpecialFlag(labels.specialFlag),
    DEF.defineTraitCollapseType(labels.collaps),
    DEF.defineTraitPartyAbility(labels.partyAbility),
  ];
};
