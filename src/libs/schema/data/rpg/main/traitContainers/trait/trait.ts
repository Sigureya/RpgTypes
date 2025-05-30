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
} from "./options";
import {
  sourceIdCollaps,
  sourceIdRegularParam,
  sourceIdPartyAbility,
  sourceIdSpecialFlag,
  sourceIdSpecialParam,
} from "./options";
import type { TraitDescriptor } from "./types";

const xxx = (labels: TraitLabelSet): TraitDescriptor[] => {
  return [
    collaps(labels.collaps),
    regularParam(labels.regularParam),
    specialParam(labels.specialParam),
    partyAbility(labels.partyAbility),
    specialFlag(labels.specialFlag),
    debuffRate(labels.debuffRate),
  ];
};

const collaps = (
  label: TraitLabelWithOption<CollapsOptionLabels>
): TraitDescriptor => ({
  format: label.format,
  label: label.domainName,
  code: TRAIT_COLLAPSE_TYPE,
  dataSource: sourceIdCollaps(),
});

const regularParam = (
  labels: TraitLabelWithOption<RegularParamLabels>
): TraitDescriptor => ({
  format: labels.format,
  label: labels.domainName,
  code: TRAIT_PARAM,
  dataSource: sourceIdRegularParam(),
});

const partyAbility = (
  labels: TraitLabelWithOption<PartyAbilityOptionLabels>
): TraitDescriptor => ({
  format: labels.format,
  label: labels.domainName,
  code: TRAIT_PARTY_ABILITY,
  dataSource: sourceIdPartyAbility(),
});

const specialFlag = (
  labels: TraitLabelWithOption<SpecialFlagOptions>
): TraitDescriptor => ({
  format: labels.format,
  label: labels.domainName,
  code: TRAIT_SPECIAL_FLAG,
  dataSource: sourceIdSpecialFlag(),
});

const specialParam = (
  labels: TraitLabelWithOption<SpecialParamLabels>
): TraitDescriptor => ({
  format: labels.format,
  label: labels.domainName,
  code: TRAIT_SPARAM,
  dataSource: sourceIdSpecialParam(),
});

const debuffRate = (label: RawTraitLabel): TraitDescriptor => ({
  format: label.format,
  label: label.domainName ?? "Debuff Rate",
  code: TRAIT_DEBUFF_RATE,
  dataSource: sourceIdRegularParam(),
});

const elementRate = (
  label: TraitLabelWithOption<RegularParamLabels>
): TraitDescriptor => ({
  format: label.format,
  label: label.domainName ?? "Element Rate",
  code: TRAIT_ELEMENT_RATE,
  dataSource: sourceIdRegularParam(),
});
// const stateRate = (
//   label: TraitLabelWithOption<RegularParamLabels>
// ): TraitDescriptor => ({
//   format: label.format,
//   label: label.domainName,
//   code: TRAIT_STATE_RATE,
//   dataSource: sour,
// });
