import {
  systemArmorTypesSourceId,
  systemElementsSourceId,
  systemSkillTypesSourceId,
  systemEquipTypesSourceId,
  systemWeaponTypesSourceId,
} from "@RpgTypes/system";
import {
  TRAIT_ELEMENT_RATE,
  TRAIT_DEBUFF_RATE,
  TRAIT_STATE_RATE,
  TRAIT_STATE_RESIST,
  TRAIT_PARAM,
  TRAIT_XPARAM,
  TRAIT_SPARAM,
  TRAIT_ATTACK_ELEMENT,
  TRAIT_ATTACK_STATE,
  TRAIT_ATTACK_SPEED,
  TRAIT_ATTACK_TIMES,
  TRAIT_ATTACK_SKILL,
  TRAIT_ACTION_PLUS,
  TRAIT_SPECIAL_FLAG,
  TRAIT_COLLAPSE_TYPE,
  TRAIT_PARTY_ABILITY,
  TRAIT_EQUIP_ARMOR_TYPE,
  TRAIT_EQUIP_LOCK,
  TRAIT_EQUIP_SEAL,
  TRAIT_EQUIP_WEAPON_TYPE,
  TRAIT_SKILL_ADD,
  TRAIT_SKILL_SEAL,
  TRAIT_SLOT_TYPE,
  TRAIT_SKILL_TYPE_ADD,
  TRAIT_SKILL_TYPE_SEAL,
} from "./selectItems/constants";
import type {
  CollapsOptionLabels,
  RegularParamLabels,
  TraitLabelWithOption,
  TraitLabelSet,
  PartyAbilityOptionLabels,
  SpecialFlagOptions,
  SpecialParamLabels,
  RawTraitLabel,
  ExtraParamLabels,
} from "./selectItems";
import {
  collapsSourceId,
  regularParamSourceId,
  partyAbilitySourceId,
  sourceIdSpecialFlag,
  specialParamSourceId,
  extraParamSourceId,
} from "./selectItems";
import type { TraitLabelResolved } from "./types";
import { skillSourceId, stateSourceId } from "src/rpg";

export const resolveTraitLabels = (
  labels: TraitLabelSet
): TraitLabelResolved[] => {
  return [
    elementRate(labels.elementRate),
    debuffRate(labels.debuffRate),
    stateRate(labels.stateRate),
    stateResist(labels.stateResist),

    regularParam(labels.regularParam),
    extraParam(labels.extraParam),
    specialParam(labels.specialParam),
    attackElement(labels.attackElement),
    atttackState(labels.attackState),
    attackSpeed(labels.attackSpeed),
    attackTimes(labels.attackTimes),
    attackSkill(labels.attackSkill),

    skillTypeAdd(labels.skillTypeAdd),
    skillTypeSeal(labels.skillTypeSeal),
    skillAdd(labels.skillAdd),
    skillSeal(labels.skillAdd),

    equipWeaponType(labels.equipWeaponType),
    equipArmorType(labels.equipArmorType),
    equipLock(labels.equipLock),
    equipSeal(labels.equipSeal),
    slotType(labels.slotType),

    actionPlus(labels.actionPlus),
    specialFlag(labels.specialFlag),
    collaps(labels.collaps),
    partyAbility(labels.partyAbility),
  ];
};

const elementRate = (label: RawTraitLabel): TraitLabelResolved => ({
  format: label.format,
  label: label.domainName,
  code: TRAIT_ELEMENT_RATE,
  dataSource: systemElementsSourceId(),
});

const debuffRate = (label: RawTraitLabel): TraitLabelResolved => ({
  format: label.format,
  label: label.domainName,
  code: TRAIT_DEBUFF_RATE,
  dataSource: regularParamSourceId(),
});

const stateRate = (label: RawTraitLabel): TraitLabelResolved => ({
  format: label.format,
  label: label.domainName,
  code: TRAIT_STATE_RATE,
  dataSource: stateSourceId(),
});

const stateResist = (label: RawTraitLabel): TraitLabelResolved => ({
  format: label.format,
  label: label.domainName,
  code: TRAIT_STATE_RESIST,
  dataSource: stateSourceId(),
});

const regularParam = (
  labels: TraitLabelWithOption<RegularParamLabels>
): TraitLabelResolved => ({
  format: labels.format,
  label: labels.domainName,
  code: TRAIT_PARAM,
  dataSource: regularParamSourceId(),
});

const extraParam = (
  labels: TraitLabelWithOption<ExtraParamLabels>
): TraitLabelResolved => ({
  format: labels.format,
  label: labels.domainName,
  code: TRAIT_XPARAM,
  dataSource: extraParamSourceId(),
});

const specialParam = (
  labels: TraitLabelWithOption<SpecialParamLabels>
): TraitLabelResolved => ({
  format: labels.format,
  label: labels.domainName,
  code: TRAIT_SPARAM,
  dataSource: specialParamSourceId(),
});

const attackElement = (label: RawTraitLabel): TraitLabelResolved => ({
  format: label.format,
  label: label.domainName,
  code: TRAIT_ATTACK_ELEMENT,
  dataSource: systemElementsSourceId(),
});

const atttackState = (label: RawTraitLabel): TraitLabelResolved => ({
  format: label.format,
  label: label.domainName,
  code: TRAIT_ATTACK_STATE,
  dataSource: stateSourceId(),
});

const attackSpeed = (label: RawTraitLabel): TraitLabelResolved => ({
  format: label.format,
  label: label.domainName,
  code: TRAIT_ATTACK_SPEED,
});

const attackTimes = (label: RawTraitLabel): TraitLabelResolved => ({
  format: label.format,
  label: label.domainName,
  code: TRAIT_ATTACK_TIMES,
});

const attackSkill = (label: RawTraitLabel): TraitLabelResolved => ({
  format: label.format,
  label: label.domainName,
  code: TRAIT_ATTACK_SKILL,
});

const skillTypeAdd = (label: RawTraitLabel): TraitLabelResolved => ({
  format: label.format,
  label: label.domainName,
  code: TRAIT_SKILL_TYPE_ADD,
  dataSource: systemSkillTypesSourceId(),
});

const skillTypeSeal = (label: RawTraitLabel): TraitLabelResolved => ({
  format: label.format,
  label: label.domainName,
  code: TRAIT_SKILL_TYPE_SEAL,
  dataSource: systemSkillTypesSourceId(),
});

const skillAdd = (label: RawTraitLabel): TraitLabelResolved => ({
  format: label.format,
  label: label.domainName,
  code: TRAIT_SKILL_ADD,
  dataSource: skillSourceId(),
});

const skillSeal = (label: RawTraitLabel): TraitLabelResolved => ({
  format: label.format,
  label: label.domainName,
  code: TRAIT_SKILL_SEAL,
  dataSource: skillSourceId(),
});

const equipWeaponType = (label: RawTraitLabel): TraitLabelResolved => ({
  format: label.format,
  label: label.domainName,
  code: TRAIT_EQUIP_WEAPON_TYPE,
  dataSource: systemWeaponTypesSourceId(),
});

const equipArmorType = (label: RawTraitLabel): TraitLabelResolved => ({
  format: label.format,
  label: label.domainName,
  code: TRAIT_EQUIP_ARMOR_TYPE,
  dataSource: systemArmorTypesSourceId(),
});

const equipLock = (label: RawTraitLabel): TraitLabelResolved => ({
  format: label.format,
  label: label.domainName,
  code: TRAIT_EQUIP_LOCK,
  dataSource: systemEquipTypesSourceId(),
});

const equipSeal = (label: RawTraitLabel): TraitLabelResolved => ({
  format: label.format,
  label: label.domainName,
  code: TRAIT_EQUIP_SEAL,
  dataSource: systemEquipTypesSourceId(),
});

const slotType = (label: RawTraitLabel): TraitLabelResolved => ({
  format: label.format,
  label: label.domainName,
  code: TRAIT_SLOT_TYPE,
  dataSource: systemEquipTypesSourceId(),
});

const actionPlus = (label: RawTraitLabel): TraitLabelResolved => ({
  format: label.format,
  label: label.domainName,
  code: TRAIT_ACTION_PLUS,
});

const specialFlag = (
  labels: TraitLabelWithOption<SpecialFlagOptions>
): TraitLabelResolved => ({
  format: labels.format,
  label: labels.domainName,
  code: TRAIT_SPECIAL_FLAG,
  dataSource: sourceIdSpecialFlag(),
});

const collaps = (
  label: TraitLabelWithOption<CollapsOptionLabels>
): TraitLabelResolved => ({
  format: label.format,
  label: label.domainName,
  code: TRAIT_COLLAPSE_TYPE,
  dataSource: collapsSourceId(),
});

const partyAbility = (
  labels: TraitLabelWithOption<PartyAbilityOptionLabels>
): TraitLabelResolved => ({
  format: labels.format,
  label: labels.domainName,
  code: TRAIT_PARTY_ABILITY,
  dataSource: partyAbilitySourceId(),
});
