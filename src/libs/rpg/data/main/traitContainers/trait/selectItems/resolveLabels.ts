import {
  systemArmorTypesSourceId,
  systemSkillTypesSourceId,
  systemEquipTypesSourceId,
  systemWeaponTypesSourceId,
} from "@RpgTypes/system";
import type { TraitSourceIdRegularParam } from "./sourceIdTypes";
import {
  MODULE_TRAIT,
  skillSourceId,
  SRC_PARAMS_REGULAR,
  stateSourceId,
} from "src/rpg";
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
import type { TraitFormat } from "./types";
import type { TraitLabelSet } from "./labelSet";
import type {
  CollapsOptionLabels,
  ExtraParamLabels,
  PartyAbilityOptionLabels,
  RawTraitLabel,
  RegularParamLabels,
  SpecialFlagOptions,
  SpecialParamLabels,
  TraitLabelWithOption,
} from "./items";
import {
  collapsSourceId,
  extraParamSourceId,
  partyAbilitySourceId,
  specialFlagSourceId,
  specialParamSourceId,
} from "./items";
import type { SourceIdentifier } from "src/namedItemSource";
import { AUTHOR_RMMZ } from "src/namedItemSource";
import {
  MODULE_SYSTEM,
  SRC_ELEMENTS,
} from "@RpgTypes/system/sourceId/constants";

export const resolveTraitLabels = (labels: TraitLabelSet): TraitFormat[] => {
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

const regularParamSourceId = (): TraitSourceIdRegularParam =>
  ({
    author: AUTHOR_RMMZ,
    module: MODULE_TRAIT,
    kind: SRC_PARAMS_REGULAR,
  } satisfies SourceIdentifier);
// TODO: typeを使った指定に切り替え、定数を消す
const systemElementsSourceId = (): SourceIdentifier => ({
  author: AUTHOR_RMMZ,
  module: MODULE_SYSTEM,
  kind: SRC_ELEMENTS,
});

const elementRate = (label: RawTraitLabel): TraitFormat => ({
  pattern: label.format,
  label: label.domainName,
  kindId: TRAIT_ELEMENT_RATE,
  dataSource: systemElementsSourceId(),
});

const debuffRate = (label: RawTraitLabel): TraitFormat => ({
  pattern: label.format,
  label: label.domainName,
  kindId: TRAIT_DEBUFF_RATE,
  dataSource: regularParamSourceId(),
});

const stateRate = (label: RawTraitLabel): TraitFormat => ({
  pattern: label.format,
  label: label.domainName,
  kindId: TRAIT_STATE_RATE,
  dataSource: stateSourceId(),
});

const stateResist = (label: RawTraitLabel): TraitFormat => ({
  pattern: label.format,
  label: label.domainName,
  kindId: TRAIT_STATE_RESIST,
  dataSource: stateSourceId(),
});

const regularParam = (
  labels: TraitLabelWithOption<RegularParamLabels>
): TraitFormat => ({
  pattern: labels.format,
  label: labels.domainName,
  kindId: TRAIT_PARAM,
  dataSource: regularParamSourceId(),
});

const extraParam = (
  labels: TraitLabelWithOption<ExtraParamLabels>
): TraitFormat => ({
  pattern: labels.format,
  label: labels.domainName,
  kindId: TRAIT_XPARAM,
  dataSource: extraParamSourceId(),
});

const specialParam = (
  labels: TraitLabelWithOption<SpecialParamLabels>
): TraitFormat => ({
  pattern: labels.format,
  label: labels.domainName,
  kindId: TRAIT_SPARAM,
  dataSource: specialParamSourceId(),
});

const attackElement = (label: RawTraitLabel): TraitFormat => ({
  pattern: label.format,
  label: label.domainName,
  kindId: TRAIT_ATTACK_ELEMENT,
  dataSource: systemElementsSourceId(),
});

const atttackState = (label: RawTraitLabel): TraitFormat => ({
  pattern: label.format,
  label: label.domainName,
  kindId: TRAIT_ATTACK_STATE,
  dataSource: stateSourceId(),
});

const attackSpeed = (label: RawTraitLabel): TraitFormat => ({
  pattern: label.format,
  label: label.domainName,
  kindId: TRAIT_ATTACK_SPEED,
});

const attackTimes = (label: RawTraitLabel): TraitFormat => ({
  pattern: label.format,
  label: label.domainName,
  kindId: TRAIT_ATTACK_TIMES,
});

const attackSkill = (label: RawTraitLabel): TraitFormat => ({
  pattern: label.format,
  label: label.domainName,
  kindId: TRAIT_ATTACK_SKILL,
});

const skillTypeAdd = (label: RawTraitLabel): TraitFormat => ({
  pattern: label.format,
  label: label.domainName,
  kindId: TRAIT_SKILL_TYPE_ADD,
  dataSource: systemSkillTypesSourceId(),
});

const skillTypeSeal = (label: RawTraitLabel): TraitFormat => ({
  pattern: label.format,
  label: label.domainName,
  kindId: TRAIT_SKILL_TYPE_SEAL,
  dataSource: systemSkillTypesSourceId(),
});

const skillAdd = (label: RawTraitLabel): TraitFormat => ({
  pattern: label.format,
  label: label.domainName,
  kindId: TRAIT_SKILL_ADD,
  dataSource: skillSourceId(),
});

const skillSeal = (label: RawTraitLabel): TraitFormat => ({
  pattern: label.format,
  label: label.domainName,
  kindId: TRAIT_SKILL_SEAL,
  dataSource: skillSourceId(),
});

const equipWeaponType = (label: RawTraitLabel): TraitFormat => ({
  pattern: label.format,
  label: label.domainName,
  kindId: TRAIT_EQUIP_WEAPON_TYPE,
  dataSource: systemWeaponTypesSourceId(),
});

const equipArmorType = (label: RawTraitLabel): TraitFormat => ({
  pattern: label.format,
  label: label.domainName,
  kindId: TRAIT_EQUIP_ARMOR_TYPE,
  dataSource: systemArmorTypesSourceId(),
});

const equipLock = (label: RawTraitLabel): TraitFormat => ({
  pattern: label.format,
  label: label.domainName,
  kindId: TRAIT_EQUIP_LOCK,
  dataSource: systemEquipTypesSourceId(),
});

const equipSeal = (label: RawTraitLabel): TraitFormat => ({
  pattern: label.format,
  label: label.domainName,
  kindId: TRAIT_EQUIP_SEAL,
  dataSource: systemEquipTypesSourceId(),
});

const slotType = (label: RawTraitLabel): TraitFormat => ({
  pattern: label.format,
  label: label.domainName,
  kindId: TRAIT_SLOT_TYPE,
  dataSource: systemEquipTypesSourceId(),
});

const actionPlus = (label: RawTraitLabel): TraitFormat => ({
  pattern: label.format,
  label: label.domainName,
  kindId: TRAIT_ACTION_PLUS,
});

const specialFlag = (
  labels: TraitLabelWithOption<SpecialFlagOptions>
): TraitFormat => ({
  pattern: labels.format,
  label: labels.domainName,
  kindId: TRAIT_SPECIAL_FLAG,
  dataSource: specialFlagSourceId(),
});

const collaps = (
  label: TraitLabelWithOption<CollapsOptionLabels>
): TraitFormat => ({
  pattern: label.format,
  label: label.domainName,
  kindId: TRAIT_COLLAPSE_TYPE,
  dataSource: collapsSourceId(),
});

const partyAbility = (
  labels: TraitLabelWithOption<PartyAbilityOptionLabels>
): TraitFormat => ({
  pattern: labels.format,
  label: labels.domainName,
  kindId: TRAIT_PARTY_ABILITY,
  dataSource: partyAbilitySourceId(),
});
