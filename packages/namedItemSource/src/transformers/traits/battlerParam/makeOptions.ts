import type {
  CollapsOptionLabels,
  Data_NamedItem,
  ExtraParamLabels,
  PartyAbilityOptionLabels,
  SpecialParamLabels,
  GlobalLabel,
  RegularParamLabels,
} from "@sigureya/rpgtypes";
import {
  COLLAPS_NORMAL,
  COLLAPS_BOSS,
  COLLAPS_INSTANT,
  COLLAPS_NONE,
  PARTY_ABILITY_CANCEL_SURPRISE,
  PARTY_ABILITY_DROP_ITEM_DOUBLE,
  PARTY_ABILITY_ENCOUNTER_HALF,
  PARTY_ABILITY_ENCOUNTER_NONE,
  PARTY_ABILITY_GOLD_DOUBLE,
  PARTY_ABILITY_RAISE_PREEMPTIVE,
  EXTRA_PARAM_TRG,
  EXTRA_PARAM_CEV,
  EXTRA_PARAM_CNT,
  EXTRA_PARAM_CRI,
  EXTRA_PARAM_EVA,
  EXTRA_PARAM_HIT,
  EXTRA_PARAM_HRG,
  EXTRA_PARAM_MEV,
  EXTRA_PARAM_MRF,
  EXTRA_PARAM_MRG,
  SPECIAL_PARAM_EXR,
  SPECIAL_PARAM_FDR,
  SPECIAL_PARAM_GRD,
  SPECIAL_PARAM_MCR,
  SPECIAL_PARAM_MDR,
  SPECIAL_PARAM_PDR,
  SPECIAL_PARAM_PHA,
  SPECIAL_PARAM_REC,
  SPECIAL_PARAM_TCR,
  SPECIAL_PARAM_TGR,
  REGULAR_PARAM_ATK,
  REGULAR_PARAM_MAX_HP,
  REGULAR_PARAM_MAX_MP,
  REGULAR_PARAM_DEF,
  REGULAR_PARAM_MATK,
  REGULAR_PARAM_MDEF,
  REGULAR_PARAM_AGI,
  REGULAR_PARAM_LUK,
} from "@sigureya/rpgtypes";

export const foldCollapsOptions = (
  options: CollapsOptionLabels,
  global: Pick<GlobalLabel, "normal">
): Data_NamedItem[] => {
  return [
    {
      id: COLLAPS_NORMAL,
      name: global.normal,
    },
    {
      id: COLLAPS_BOSS,
      name: options.bossCollaps,
    },
    {
      id: COLLAPS_INSTANT,
      name: options.instantCollaps,
    },
    {
      id: COLLAPS_NONE,
      name: options.noneCollaps,
    },
  ];
};

export const foldPartyAbilityOptions = (
  options: PartyAbilityOptionLabels
): Data_NamedItem[] => {
  return [
    {
      id: PARTY_ABILITY_ENCOUNTER_HALF,
      name: options.encounterHalf,
    },
    {
      id: PARTY_ABILITY_ENCOUNTER_NONE,
      name: options.encounterNone,
    },
    {
      id: PARTY_ABILITY_CANCEL_SURPRISE,
      name: options.cancelSurprise,
    },
    {
      id: PARTY_ABILITY_RAISE_PREEMPTIVE,
      name: options.raisePreemptive,
    },
    {
      id: PARTY_ABILITY_GOLD_DOUBLE,
      name: options.goldDouble,
    },
    {
      id: PARTY_ABILITY_DROP_ITEM_DOUBLE,
      name: options.dropItemDouble,
    },
  ];
};

export const foldRegularParam = (
  param: RegularParamLabels
): Data_NamedItem[] => {
  return [
    { id: REGULAR_PARAM_MAX_HP, name: param.maxHp },
    { id: REGULAR_PARAM_MAX_MP, name: param.maxMp },
    { id: REGULAR_PARAM_ATK, name: param.atk },
    { id: REGULAR_PARAM_DEF, name: param.def },
    { id: REGULAR_PARAM_MATK, name: param.matk },
    { id: REGULAR_PARAM_MDEF, name: param.mdef },
    { id: REGULAR_PARAM_AGI, name: param.agi },
    { id: REGULAR_PARAM_LUK, name: param.luk },
  ];
};

export const foldExtraParam = (xparam: ExtraParamLabels): Data_NamedItem[] => {
  return [
    {
      id: EXTRA_PARAM_HIT,
      name: xparam.hitRate,
    },
    {
      id: EXTRA_PARAM_EVA,
      name: xparam.evasionRate,
    },
    {
      id: EXTRA_PARAM_CRI,
      name: xparam.criticalRate,
    },
    {
      id: EXTRA_PARAM_CEV,
      name: xparam.criticalEvasionRate,
    },
    {
      id: EXTRA_PARAM_MEV,
      name: xparam.magicEvasionRate,
    },
    {
      id: EXTRA_PARAM_MRF,
      name: xparam.magicReflectionRate,
    },
    {
      id: EXTRA_PARAM_CNT,
      name: xparam.counterAttackRate,
    },
    {
      id: EXTRA_PARAM_HRG,
      name: xparam.hpRegenerationRate,
    },
    {
      id: EXTRA_PARAM_MRG,
      name: xparam.mpRegenerationRate,
    },
    {
      id: EXTRA_PARAM_TRG,
      name: xparam.tpRegenerationRate,
    },
  ];
};

export const foldSpecialParams = (
  specialParams: SpecialParamLabels
): Data_NamedItem[] => {
  return [
    {
      id: SPECIAL_PARAM_TGR,
      name: specialParams.targetRate,
    },
    {
      id: SPECIAL_PARAM_GRD,
      name: specialParams.guradEffectRate,
    },
    {
      id: SPECIAL_PARAM_REC,
      name: specialParams.recoveryEffectRate,
    },
    {
      id: SPECIAL_PARAM_PHA,
      name: specialParams.pharmacology,
    },
    {
      id: SPECIAL_PARAM_MCR,
      name: specialParams.mpCostRate,
    },
    {
      id: SPECIAL_PARAM_TCR,
      name: specialParams.tpChargeRate,
    },
    {
      id: SPECIAL_PARAM_PDR,
      name: specialParams.physicalDamageRate,
    },
    {
      id: SPECIAL_PARAM_MDR,
      name: specialParams.magicDamageRate,
    },
    {
      id: SPECIAL_PARAM_FDR,
      name: specialParams.floorDamageRate,
    },
    {
      id: SPECIAL_PARAM_EXR,
      name: specialParams.experienceRate,
    },
  ];
};
