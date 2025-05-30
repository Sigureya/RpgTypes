import { stateSourceId } from "@RpgTypes/schema";
import { systemElementsSourceId } from "@RpgTypes/system";
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
} from "./constants";
import type {
  CollapsOptionLabels,
  RegularParamLabels,
  TraitLabelWithOption,
  TraitLabelSet,
  PartyAbilityOptionLabels,
  SpecialFlagOptions,
  SpecialParamLabels,
  RawTraitLabel,
  TraitLabelResolved,
  ExtraParamLabels,
} from "./options";
import {
  collapsSourceId,
  regularParamSourceId,
  partyAbilitySourceId,
  sourceIdSpecialFlag,
  specialParamSourceId,
  extraParamSourceId,
} from "./options";

export const resolveTraitLabels = (
  labels: TraitLabelSet
): TraitLabelResolved[] => {
  return [
    collaps(labels.collaps),
    regularParam(labels.regularParam),
    extraParam(labels.extraParam),
    specialParam(labels.specialParam),
    partyAbility(labels.partyAbility),
    specialFlag(labels.specialFlag),
    debuffRate(labels.debuffRate),
    elementRate(labels.elementRate),
    stateRate(labels.stateRate),
    atttackState(labels.attackState),
    attackElement(labels.attackElement),
    attackSpeed(labels.attackSpeed),
    attackTimes(labels.attackTimes),
    equipWeaponType(labels.equipWeaponType),
    equipArmorType(labels.equipArmorType),
    equipLock(labels.equipLock),
    stateResist(labels.stateResist),
  ];
};

const collaps = (
  label: TraitLabelWithOption<CollapsOptionLabels>
): TraitLabelResolved => ({
  format: label.format,
  label: label.domainName,
  code: TRAIT_COLLAPSE_TYPE,
  dataSource: collapsSourceId(),
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

const partyAbility = (
  labels: TraitLabelWithOption<PartyAbilityOptionLabels>
): TraitLabelResolved => ({
  format: labels.format,
  label: labels.domainName,
  code: TRAIT_PARTY_ABILITY,
  dataSource: partyAbilitySourceId(),
});

const specialFlag = (
  labels: TraitLabelWithOption<SpecialFlagOptions>
): TraitLabelResolved => ({
  format: labels.format,
  label: labels.domainName,
  code: TRAIT_SPECIAL_FLAG,
  dataSource: sourceIdSpecialFlag(),
});

const specialParam = (
  labels: TraitLabelWithOption<SpecialParamLabels>
): TraitLabelResolved => ({
  format: labels.format,
  label: labels.domainName,
  code: TRAIT_SPARAM,
  dataSource: specialParamSourceId(),
});

const debuffRate = (label: RawTraitLabel): TraitLabelResolved => ({
  format: label.format,
  label: label.domainName,
  code: TRAIT_DEBUFF_RATE,
  dataSource: regularParamSourceId(),
});

const elementRate = (label: RawTraitLabel): TraitLabelResolved => ({
  format: label.format,
  label: label.domainName,
  code: TRAIT_ELEMENT_RATE,
  dataSource: systemElementsSourceId(),
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

const equipLock = (label: RawTraitLabel): TraitLabelResolved => ({
  format: label.format,
  label: label.domainName,
  code: TRAIT_EQUIP_LOCK,
  // dataSource: equipLockSourceId(),
});

const equipArmorType = (label: RawTraitLabel): TraitLabelResolved => ({
  format: label.format,
  label: label.domainName,
  code: TRAIT_EQUIP_ARMOR_TYPE,
  // dataSource: equipArmorTypeSourceId(),
});

const equipWeaponType = (label: RawTraitLabel): TraitLabelResolved => ({
  format: label.format,
  label: label.domainName,
  code: TRAIT_EQUIP_WEAPON_TYPE,
  //  dataSource: equipWeaponTyp
});

const atttackState = (label: RawTraitLabel): TraitLabelResolved => ({
  format: label.format,
  label: label.domainName,
  code: TRAIT_ATTACK_STATE,
  dataSource: stateSourceId(),
});

const attackSkill = (label: RawTraitLabel): TraitLabelResolved => ({
  format: label.format,
  label: label.domainName,
  code: TRAIT_ATTACK_SKILL,
});

const attackSpeed = (label: RawTraitLabel): TraitLabelResolved => ({
  format: label.format,
  label: label.domainName,
  code: TRAIT_ATTACK_SPEED,
});

const attackElement = (label: RawTraitLabel): TraitLabelResolved => ({
  format: label.format,
  label: label.domainName,
  code: TRAIT_ATTACK_ELEMENT,
  dataSource: systemElementsSourceId(),
});

const attackTimes = (label: RawTraitLabel): TraitLabelResolved => ({
  format: label.format,
  label: label.domainName,
  code: TRAIT_ATTACK_TIMES,
});
