import type { SourceIdentifier } from "@RpgTypes/schema/namedItemSource";
import {
  SRC_DATA_SKILL,
  SRC_DATA_STATE,
  SRC_ELEMENTS,
  SRC_PARAMS_EXTRA,
  SRC_PARAMS_REGULAR,
  SRC_PARAMS_SPECIAL,
  SRC_TRAIT_COLLAPS,
  SRC_TRAIT_PARTY_ABILITY,
  SRC_TRAIT_SPECIAL_FLAG,
} from "@RpgTypes/schema/namedItemSource";
import type { TraitLabelResolved, TraitLabel } from "./options";
import {
  LABELS_TRAIT_ELEMENT_RATE,
  LABELS_TRAIT_DEBUFF_RATE,
  LABELS_TRAIT_STATE_RATE,
  LABELS_TRAIT_STATE_RESIST,
  LABELS_TRAIT_ATTACK_STATE,
  LABELS_TRAIT_ATTACK_SKILL,
  LABELS_TRAIT_ACTION_PLUS,
  LABELS_EXTRA_PARAM,
  LABELS_PARAM_SPECIAL,
  LABLES_TRAIT_ATTACK_ELEMENT,
  LABELS_TRAIT_ATTACK_SPEED,
  LABELS_TRAIT_SPECIALFLAG,
  LABELS_TRAIT_ATTACK_TIMES,
  LABELS_COLLAPS,
  LABELS_PARTY_ABILITY,
  LABELS_PARAM_REGULAR,
} from "./options";
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
} from "./constants";
import {
  AUTHOR_RMMZ,
  MODULE_DATA,
  MODULE_SYSTEM,
  MODULE_TRAIT,
} from "@RpgTypes/namedItemSource";

const defineTrait = (
  code: number,
  base: TraitLabel,
  override: Partial<TraitLabel>,
  dataSource?: SourceIdentifier
): TraitLabelResolved => {
  return {
    codeId: code,
    label: override.domainName ?? base.domainName,
    format: override.format ?? base.format,
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

export const defineTraitElementRate = (label: Partial<TraitLabel>) =>
  defineTrait(
    TRAIT_ELEMENT_RATE,
    LABELS_TRAIT_ELEMENT_RATE,
    label,
    srcElement()
  );

export const defineTraitDebuffRate = (label: Partial<TraitLabel>) =>
  defineTrait(
    TRAIT_DEBUFF_RATE,
    LABELS_TRAIT_DEBUFF_RATE,
    label,
    srcTrait(SRC_PARAMS_REGULAR)
  );

export const defineTraitStateRate = (label: Partial<TraitLabel>) =>
  defineTrait(
    TRAIT_STATE_RATE,
    LABELS_TRAIT_STATE_RATE,
    label,
    srcTrait(SRC_PARAMS_REGULAR)
  );

export const defineTraitStateResist = (label: Partial<TraitLabel>) =>
  defineTrait(
    TRAIT_STATE_RESIST,
    LABELS_TRAIT_STATE_RESIST,
    label,
    srcData(SRC_DATA_STATE)
  );

export const defineTraitRegularParam = (label: Partial<TraitLabel>) =>
  defineTrait(
    TRAIT_PARAM,
    LABELS_PARAM_REGULAR,
    label,
    srcTrait(SRC_PARAMS_REGULAR)
  );

export const defineTraitExtraParam = (label: Partial<TraitLabel>) =>
  defineTrait(
    TRAIT_XPARAM,
    LABELS_EXTRA_PARAM,
    label,
    srcTrait(SRC_PARAMS_EXTRA)
  );

export const defineTraitSpecialParam = (label: Partial<TraitLabel>) =>
  defineTrait(
    TRAIT_SPARAM,
    LABELS_PARAM_SPECIAL,
    label,
    srcTrait(SRC_PARAMS_SPECIAL)
  );

export const defineTraitAttackElement = (label: Partial<TraitLabel>) =>
  defineTrait(
    TRAIT_ATTACK_ELEMENT,
    LABLES_TRAIT_ATTACK_ELEMENT,
    label,
    srcElement()
  );

export const defineTraitAttackState = (label: Partial<TraitLabel>) =>
  defineTrait(
    TRAIT_ATTACK_STATE,
    LABELS_TRAIT_ATTACK_STATE,
    label,

    srcTrait(SRC_DATA_STATE)
  );

export const defineTraitAttackSpeed = (label: Partial<TraitLabel>) =>
  defineTrait(TRAIT_ATTACK_SPEED, LABELS_TRAIT_ATTACK_SPEED, label);

export const defineTraitAttackTimes = (label: Partial<TraitLabel>) =>
  defineTrait(TRAIT_ATTACK_TIMES, LABELS_TRAIT_ATTACK_TIMES, label);

export const defineTraitAttackSkill = (label: Partial<TraitLabel>) =>
  defineTrait(
    TRAIT_ATTACK_SKILL,
    LABELS_TRAIT_ATTACK_SKILL,
    label,
    srcData(SRC_DATA_SKILL)
  );

export const defineTraitActionPlus = (label: Partial<TraitLabel>) =>
  defineTrait(TRAIT_ACTION_PLUS, LABELS_TRAIT_ACTION_PLUS, label);

export const defineTraitSpecialFlag = (label: Partial<TraitLabel>) =>
  defineTrait(
    TRAIT_SPECIAL_FLAG,
    LABELS_TRAIT_SPECIALFLAG,
    label,
    srcTrait(SRC_TRAIT_SPECIAL_FLAG)
  );

export const defineTraitCollapseType = (label: Partial<TraitLabel>) =>
  defineTrait(
    TRAIT_COLLAPSE_TYPE,
    LABELS_COLLAPS,
    label,
    srcTrait(SRC_TRAIT_COLLAPS)
  );

export const defineTraitPartyAbility = (label: Partial<TraitLabel>) =>
  defineTrait(
    TRAIT_PARTY_ABILITY,
    LABELS_PARTY_ABILITY,
    label,
    srcTrait(SRC_TRAIT_PARTY_ABILITY)
  );
