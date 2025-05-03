import type { SourceIdentifier } from "src/libs";
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
} from "src/libs";
import type { RawTraitLabel, TraitLabelSet } from "./options";
import { LABEL_SET_TRAIT } from "./options";
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
import { TraitDescriptor } from "./traitLabelDescriptor";

export const resolveTraitLabels = (
  labels: TraitLabelSet
): TraitDescriptor[] => {
  return [
    defineTraitElementRate(labels.elementRate),
    defineTraitDebuffRate(labels.debuffRate),
    defineTraitStateRate(labels.stateRate),
    defineTraitStateResist(labels.stateResist),
    defineTraitRegularParam(labels.regularParam),
    defineTraitExtraParam(labels.extraParam),
    defineTraitSpecialParam(labels.specialParam),
    defineTraitAttackElement(labels.attackElement),
    defineTraitAttackState(labels.attackState),
    defineTraitAttackSpeed(labels.attackSpeed),
    defineTraitAttackTimes(labels.attackTimes),
    defineTraitAttackSkill(labels.attackSkill),
    defineTraitSkillTypeAdd(labels.skillTypeAdd),
    defineTraitSkillTypeSeal(labels.skillTypeSeal),
    defineTraitSkillAdd(labels.skillAdd),
    defineTraitSkillSeal(labels.skillSeal),
    defineTraitEquipWeaponType(labels.equipWeaponType),
    defineTraitEquipArmorType(labels.equipArmorType),
    defineTraitEquipLock(labels.equipLock),
    defineTraitEquipSeal(labels.equipSeal),
    defineTraitSlotType(labels.slotType),
    defineTraitActionPlus(labels.actionPlus),
    defineTraitSpecialFlag(labels.specialFlag),
    defineTraitCollapseType(labels.collaps),
    defineTraitPartyAbility(labels.partyAbility),
  ];
};

const validate = (base: string, override: string | undefined) =>
  typeof override === "string" ? override : base;

const defineTrait = (
  code: number,
  base: RawTraitLabel,
  override: Partial<RawTraitLabel>,
  dataSource?: SourceIdentifier
): TraitDescriptor => {
  const label = validate(base.domainName, override.domainName);
  const format = validate(base.format, override.format);
  return new TraitDescriptor(code, label, format, dataSource);
};

const srcElement = (): SourceIdentifier => {
  return {
    module: MODULE_SYSTEM,
    author: AUTHOR_RMMZ,
    kind: SRC_ELEMENTS,
  };
};

const srcData = (key: string): SourceIdentifier => {
  return {
    module: MODULE_DATA,
    author: AUTHOR_RMMZ,
    kind: key,
  };
};

const srcTrait = (src: string): SourceIdentifier => ({
  author: AUTHOR_RMMZ,
  module: MODULE_TRAIT,
  kind: src,
});

const srcSystem = (src: string): SourceIdentifier => ({
  author: AUTHOR_RMMZ,
  module: MODULE_SYSTEM,
  kind: src,
});

export const defineTraitElementRate = (label: Partial<RawTraitLabel>) =>
  defineTrait(
    TRAIT_ELEMENT_RATE,
    LABEL_SET_TRAIT.options.elementRate,
    label,
    srcElement()
  );

export const defineTraitDebuffRate = (label: Partial<RawTraitLabel>) =>
  defineTrait(
    TRAIT_DEBUFF_RATE,
    LABEL_SET_TRAIT.options.debuffRate,
    label,
    srcTrait(SRC_PARAMS_REGULAR)
  );

export const defineTraitStateRate = (label: Partial<RawTraitLabel>) =>
  defineTrait(
    TRAIT_STATE_RATE,
    LABEL_SET_TRAIT.options.stateRate,
    label,
    srcTrait(SRC_PARAMS_REGULAR)
  );

export const defineTraitStateResist = (label: Partial<RawTraitLabel>) =>
  defineTrait(
    TRAIT_STATE_RESIST,
    LABEL_SET_TRAIT.options.stateResist,
    label,
    srcData(SRC_DATA_STATE)
  );

export const defineTraitRegularParam = (label: Partial<RawTraitLabel>) =>
  defineTrait(
    TRAIT_PARAM,
    LABEL_SET_TRAIT.options.regularParam,
    label,
    srcTrait(SRC_PARAMS_REGULAR)
  );

export const defineTraitExtraParam = (label: Partial<RawTraitLabel>) =>
  defineTrait(
    TRAIT_XPARAM,
    LABEL_SET_TRAIT.options.extraParam,
    label,
    srcTrait(SRC_PARAMS_EXTRA)
  );

export const defineTraitSpecialParam = (label: Partial<RawTraitLabel>) =>
  defineTrait(
    TRAIT_SPARAM,
    LABEL_SET_TRAIT.options.specialParam,
    label,
    srcTrait(SRC_PARAMS_SPECIAL)
  );

export const defineTraitAttackElement = (label: Partial<RawTraitLabel>) =>
  defineTrait(
    TRAIT_ATTACK_ELEMENT,
    LABEL_SET_TRAIT.options.attackElement,
    label,
    srcElement()
  );

export const defineTraitAttackState = (label: Partial<RawTraitLabel>) =>
  defineTrait(
    TRAIT_ATTACK_STATE,
    LABEL_SET_TRAIT.options.attackState,
    label,
    srcTrait(SRC_DATA_STATE)
  );

export const defineTraitAttackSpeed = (label: Partial<RawTraitLabel>) =>
  defineTrait(TRAIT_ATTACK_SPEED, LABEL_SET_TRAIT.options.attackSpeed, label);

export const defineTraitAttackTimes = (label: Partial<RawTraitLabel>) =>
  defineTrait(TRAIT_ATTACK_TIMES, LABEL_SET_TRAIT.options.attackTimes, label);

export const defineTraitAttackSkill = (label: Partial<RawTraitLabel>) =>
  defineTrait(
    TRAIT_ATTACK_SKILL,
    LABEL_SET_TRAIT.options.attackSkill,
    label,
    srcData(SRC_DATA_SKILL)
  );

export const defineTraitActionPlus = (label: Partial<RawTraitLabel>) =>
  defineTrait(TRAIT_ACTION_PLUS, LABEL_SET_TRAIT.options.actionPlus, label);

export const defineTraitSpecialFlag = (label: Partial<RawTraitLabel>) =>
  defineTrait(
    TRAIT_SPECIAL_FLAG,
    LABEL_SET_TRAIT.options.specialFlag,
    label,
    srcTrait(SRC_TRAIT_SPECIAL_FLAG)
  );

export const defineTraitCollapseType = (label: Partial<RawTraitLabel>) =>
  defineTrait(
    TRAIT_COLLAPSE_TYPE,
    LABEL_SET_TRAIT.options.collaps,
    label,
    srcTrait(SRC_TRAIT_COLLAPS)
  );

export const defineTraitPartyAbility = (label: Partial<RawTraitLabel>) =>
  defineTrait(
    TRAIT_PARTY_ABILITY,
    LABEL_SET_TRAIT.options.partyAbility,
    label,
    srcTrait(SRC_TRAIT_PARTY_ABILITY)
  );

export const defineTraitEquipWeaponType = (label: Partial<RawTraitLabel>) =>
  defineTrait(
    TRAIT_EQUIP_WEAPON_TYPE,
    LABEL_SET_TRAIT.options.equipWeaponType,
    label,
    srcSystem(SRC_WEAPON_TYPES)
  );

export const defineTraitEquipArmorType = (label: Partial<RawTraitLabel>) =>
  defineTrait(
    TRAIT_EQUIP_ARMOR_TYPE,
    LABEL_SET_TRAIT.options.equipArmorType,
    label,
    srcSystem(SRC_ARMOR_TYPES)
  );

export const defineTraitEquipLock = (label: Partial<RawTraitLabel>) =>
  defineTrait(TRAIT_EQUIP_LOCK, LABEL_SET_TRAIT.options.equipLock, label);

export const defineTraitEquipSeal = (label: Partial<RawTraitLabel>) =>
  defineTrait(TRAIT_EQUIP_SEAL, LABEL_SET_TRAIT.options.equipSeal, label);

export const defineTraitSkillAdd = (label: Partial<RawTraitLabel>) =>
  defineTrait(TRAIT_SKILL_ADD, LABEL_SET_TRAIT.options.skillAdd, label);

export const defineTraitSkillSeal = (label: Partial<RawTraitLabel>) =>
  defineTrait(TRAIT_SKILL_SEAL, LABEL_SET_TRAIT.options.skillSeal, label);

export const defineTraitSlotType = (label: Partial<RawTraitLabel>) =>
  defineTrait(TRAIT_SLOT_TYPE, LABEL_SET_TRAIT.options.slotType, label);

export const defineTraitSkillTypeAdd = (label: Partial<RawTraitLabel>) =>
  defineTrait(
    TRAIT_SKILL_TYPE_ADD,
    LABEL_SET_TRAIT.options.skillTypeAdd,
    label
  );

export const defineTraitSkillTypeSeal = (label: Partial<RawTraitLabel>) =>
  defineTrait(
    TRAIT_SKILL_TYPE_SEAL,
    LABEL_SET_TRAIT.options.skillTypeSeal,
    label
  );
