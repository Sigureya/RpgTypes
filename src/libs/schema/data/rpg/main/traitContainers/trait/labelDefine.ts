import type { SourceIdentifier } from "@RpgTypes/schema/namedItemSource";
import {
  SRC_ARMOR_TYPES,
  SRC_DATA_SKILL,
  SRC_DATA_STATE,
  SRC_ELEMENTS,
  SRC_PARAMS_EXTRA,
  SRC_PARAMS_REGULAR,
  SRC_PARAMS_SPECIAL,
  SRC_TRAIT_COLLAPS,
  SRC_TRAIT_PARTY_ABILITY,
  SRC_TRAIT_SPECIAL_FLAG,
  SRC_WEAPON_TYPES,
} from "@RpgTypes/schema/namedItemSource";
import type { TraitLabelResolved, TraitLabel } from "./options";
import { LABEL_SET_TRAIT2 } from "./options";
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
import {
  AUTHOR_RMMZ,
  MODULE_DATA,
  MODULE_SYSTEM,
  MODULE_TRAIT,
} from "@RpgTypes/namedItemSource";
import type { Trait } from "./types";

export const formatTraitText = (
  traitDefine: TraitLabelResolved,
  trait: Trait,
  name: string
): string => {
  return traitDefine.format
    .replaceAll(`{value}`, trait.value.toString())
    .replaceAll("{name}", name);
};

const validate = (base: string, override: string | undefined) =>
  typeof override === "string" ? override : base;

const defineTrait = (
  code: number,
  base: TraitLabel,
  override: Partial<TraitLabel>,
  dataSource?: SourceIdentifier
): TraitLabelResolved => {
  return {
    code: code,
    label: validate(base.domainName, override.domainName),
    format: validate(base.format, override.format),
    dataSource,
  };
};

const srcElement = (): SourceIdentifier => {
  return {
    module: MODULE_SYSTEM,
    author: AUTHOR_RMMZ,
    sourceKey: SRC_ELEMENTS,
  };
};

const srcData = (key: string): SourceIdentifier => {
  return {
    module: MODULE_DATA,
    author: AUTHOR_RMMZ,
    sourceKey: key,
  };
};

const srcTrait = (src: string): SourceIdentifier => ({
  author: AUTHOR_RMMZ,
  module: MODULE_TRAIT,
  sourceKey: src,
});

const srcSystem = (src: string): SourceIdentifier => ({
  author: AUTHOR_RMMZ,
  module: MODULE_SYSTEM,
  sourceKey: src,
});

export const defineTraitElementRate = (label: TraitLabel) =>
  defineTrait(
    TRAIT_ELEMENT_RATE,
    LABEL_SET_TRAIT2.options.elementRate,
    label,
    srcElement()
  );

export const defineTraitDebuffRate = (label: Partial<TraitLabel>) =>
  defineTrait(
    TRAIT_DEBUFF_RATE,
    LABEL_SET_TRAIT2.options.debuffRate,
    label,
    srcTrait(SRC_PARAMS_REGULAR)
  );

export const defineTraitStateRate = (label: Partial<TraitLabel>) =>
  defineTrait(
    TRAIT_STATE_RATE,
    LABEL_SET_TRAIT2.options.stateRate,
    label,
    srcTrait(SRC_PARAMS_REGULAR)
  );

export const defineTraitStateResist = (label: Partial<TraitLabel>) =>
  defineTrait(
    TRAIT_STATE_RESIST,
    LABEL_SET_TRAIT2.options.stateResist,
    label,
    srcData(SRC_DATA_STATE)
  );

export const defineTraitRegularParam = (label: Partial<TraitLabel>) =>
  defineTrait(
    TRAIT_PARAM,
    LABEL_SET_TRAIT2.options.regularParam,
    label,
    srcTrait(SRC_PARAMS_REGULAR)
  );

export const defineTraitExtraParam = (label: Partial<TraitLabel>) =>
  defineTrait(
    TRAIT_XPARAM,
    LABEL_SET_TRAIT2.options.extraParam,
    label,
    srcTrait(SRC_PARAMS_EXTRA)
  );

export const defineTraitSpecialParam = (label: Partial<TraitLabel>) =>
  defineTrait(
    TRAIT_SPARAM,
    LABEL_SET_TRAIT2.options.specialParam,
    label,
    srcTrait(SRC_PARAMS_SPECIAL)
  );

export const defineTraitAttackElement = (label: Partial<TraitLabel>) =>
  defineTrait(
    TRAIT_ATTACK_ELEMENT,
    LABEL_SET_TRAIT2.options.attackElement,
    label,
    srcElement()
  );

export const defineTraitAttackState = (label: Partial<TraitLabel>) =>
  defineTrait(
    TRAIT_ATTACK_STATE,
    LABEL_SET_TRAIT2.options.attackState,
    label,
    srcTrait(SRC_DATA_STATE)
  );

export const defineTraitAttackSpeed = (label: Partial<TraitLabel>) =>
  defineTrait(TRAIT_ATTACK_SPEED, LABEL_SET_TRAIT2.options.attackSpeed, label);

export const defineTraitAttackTimes = (label: Partial<TraitLabel>) =>
  defineTrait(TRAIT_ATTACK_TIMES, LABEL_SET_TRAIT2.options.attackTimes, label);

export const defineTraitAttackSkill = (label: Partial<TraitLabel>) =>
  defineTrait(
    TRAIT_ATTACK_SKILL,
    LABEL_SET_TRAIT2.options.attackSkill,
    label,
    srcData(SRC_DATA_SKILL)
  );

export const defineTraitActionPlus = (label: Partial<TraitLabel>) =>
  defineTrait(TRAIT_ACTION_PLUS, LABEL_SET_TRAIT2.options.actionPlus, label);

export const defineTraitSpecialFlag = (label: Partial<TraitLabel>) =>
  defineTrait(
    TRAIT_SPECIAL_FLAG,
    LABEL_SET_TRAIT2.options.specialFlag,
    label,
    srcTrait(SRC_TRAIT_SPECIAL_FLAG)
  );

export const defineTraitCollapseType = (label: Partial<TraitLabel>) =>
  defineTrait(
    TRAIT_COLLAPSE_TYPE,
    LABEL_SET_TRAIT2.options.collaps,
    label,
    srcTrait(SRC_TRAIT_COLLAPS)
  );

export const defineTraitPartyAbility = (label: Partial<TraitLabel>) =>
  defineTrait(
    TRAIT_PARTY_ABILITY,
    LABEL_SET_TRAIT2.options.partyAbility,
    label,
    srcTrait(SRC_TRAIT_PARTY_ABILITY)
  );

export const defineTraitEquipWeaponType = (label: Partial<TraitLabel>) =>
  defineTrait(
    TRAIT_EQUIP_WEAPON_TYPE,
    LABEL_SET_TRAIT2.options.equipWeaponType,
    label,
    srcSystem(SRC_WEAPON_TYPES)
  );

export const defineTraitEquipArmorType = (label: Partial<TraitLabel>) =>
  defineTrait(
    TRAIT_EQUIP_ARMOR_TYPE,
    LABEL_SET_TRAIT2.options.equipArmorType,
    label,
    srcSystem(SRC_ARMOR_TYPES)
  );

export const defineTraitEquipLock = (label: Partial<TraitLabel>) =>
  defineTrait(TRAIT_EQUIP_LOCK, LABEL_SET_TRAIT2.options.equipLock, label);

export const defineTraitEquipSeal = (label: Partial<TraitLabel>) =>
  defineTrait(TRAIT_EQUIP_SEAL, LABEL_SET_TRAIT2.options.equipSeal, label);

export const defineTraitSkillAdd = (label: Partial<TraitLabel>) =>
  defineTrait(TRAIT_SKILL_ADD, LABEL_SET_TRAIT2.options.skillAdd, label);

export const defineTraitSkillSeal = (label: Partial<TraitLabel>) =>
  defineTrait(TRAIT_SKILL_SEAL, LABEL_SET_TRAIT2.options.skillSeal, label);

export const defineTraitSlotType = (label: Partial<TraitLabel>) =>
  defineTrait(TRAIT_SLOT_TYPE, LABEL_SET_TRAIT2.options.slotType, label);

export const defineTraitSkillTypeAdd = (label: Partial<TraitLabel>) =>
  defineTrait(
    TRAIT_SKILL_TYPE_ADD,
    LABEL_SET_TRAIT2.options.skillTypeAdd,
    label
  );

export const defineTraitSkillTypeSeal = (label: Partial<TraitLabel>) =>
  defineTrait(
    TRAIT_SKILL_TYPE_SEAL,
    LABEL_SET_TRAIT2.options.skillTypeSeal,
    label
  );
