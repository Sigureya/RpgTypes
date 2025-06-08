import { skillSourceId, stateSourceId } from "src/rpg";
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
  SourceId_TraitCollaps,
  SourceId_TraitExtraParam,
  SourceId_TraitPartyAbility,
  SourceId_TraitRegularParam,
  SourceId_TraitSpecialFlag,
  SourceId_TraitSpecialParam,
  SpecialFlagOptions,
  SpecialParamLabels,
  TraitLabelWithOption,
} from "./items";
import type {
  SourceId_SystemArmorTypes,
  SourceId_SystemElements,
  SourceId_SystemEquipTypes,
  SourceId_SystemSkillTypes,
  SourceId_SystemWeaponTypes,
} from "@RpgTypes/system/sourceIdTypes";

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
const regularParamSourceId = (): SourceId_TraitRegularParam => ({
  author: "rmmz",
  module: "trait",
  kind: "params",
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
  dataSource: {
    author: "rmmz",
    module: "trait",
    kind: "xparams",
  } satisfies SourceId_TraitExtraParam,
});

const specialParam = (
  labels: TraitLabelWithOption<SpecialParamLabels>
): TraitFormat => ({
  pattern: labels.format,
  label: labels.domainName,
  kindId: TRAIT_SPARAM,
  dataSource: {
    author: "rmmz",
    module: "trait",
    kind: "sparams",
  } satisfies SourceId_TraitSpecialParam,
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
  dataSource: {
    author: "rmmz",
    module: "trait",
    kind: "sflag",
  } satisfies SourceId_TraitSpecialFlag,
});

const collaps = (
  label: TraitLabelWithOption<CollapsOptionLabels>
): TraitFormat => ({
  pattern: label.format,
  label: label.domainName,
  kindId: TRAIT_COLLAPSE_TYPE,
  dataSource: {
    author: "rmmz",
    module: "trait",
    kind: "collaps",
  } satisfies SourceId_TraitCollaps,
});

const partyAbility = (
  labels: TraitLabelWithOption<PartyAbilityOptionLabels>
): TraitFormat => ({
  pattern: labels.format,
  label: labels.domainName,
  kindId: TRAIT_PARTY_ABILITY,
  dataSource: {
    author: "rmmz",
    module: "trait",
    kind: "partyAbility",
  } satisfies SourceId_TraitPartyAbility,
});

const systemElementsSourceId = (): SourceId_SystemElements => ({
  author: "rmmz",
  module: "system",
  kind: "elements",
});

const systemSkillTypesSourceId = (): SourceId_SystemSkillTypes => ({
  author: "rmmz",
  module: "system",
  kind: "skillTypes",
});

const systemWeaponTypesSourceId = (): SourceId_SystemWeaponTypes => ({
  author: "rmmz",
  module: "system",
  kind: "weaponTypes",
});

const systemArmorTypesSourceId = (): SourceId_SystemArmorTypes => ({
  author: "rmmz",
  module: "system",
  kind: "armorTypes",
});

const systemEquipTypesSourceId = (): SourceId_SystemEquipTypes => ({
  author: "rmmz",
  module: "system",
  kind: "equipTypes",
});
