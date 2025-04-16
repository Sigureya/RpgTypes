import type {
  RegularParamLabels,
  ExtraParamLabels,
  SpecialParamLabels,
} from "@sigureya/rpgtypes";
import {
  REGULAR_PARAM_AGI,
  REGULAR_PARAM_ATK,
  REGULAR_PARAM_DEF,
  REGULAR_PARAM_LUK,
  REGULAR_PARAM_MATK,
  REGULAR_PARAM_MAX_HP,
  REGULAR_PARAM_MAX_MP,
  REGULAR_PARAM_MDEF,
  EXTRA_PARAM_CEV,
  EXTRA_PARAM_EVA,
  EXTRA_PARAM_CNT,
  EXTRA_PARAM_CRI,
  EXTRA_PARAM_HIT,
  EXTRA_PARAM_HRG,
  EXTRA_PARAM_MEV,
  EXTRA_PARAM_MRF,
  EXTRA_PARAM_MRG,
  EXTRA_PARAM_TRG,
  SPECIAL_PARAM_EXR,
  SPECIAL_PARAM_TGR,
  SPECIAL_PARAM_FDR,
  SPECIAL_PARAM_GRD,
  SPECIAL_PARAM_MCR,
  SPECIAL_PARAM_TCR,
  SPECIAL_PARAM_PDR,
  SPECIAL_PARAM_MDR,
  SPECIAL_PARAM_PHA,
  SPECIAL_PARAM_REC,
} from "@sigureya/rpgtypes";

export const regularParamName = (
  paramIndex: number,
  labels: RegularParamLabels
): string => {
  switch (paramIndex) {
    case REGULAR_PARAM_MAX_HP:
      return labels.maxHp;
    case REGULAR_PARAM_MAX_MP:
      return labels.maxMp;
    case REGULAR_PARAM_ATK:
      return labels.atk;
    case REGULAR_PARAM_DEF:
      return labels.def;
    case REGULAR_PARAM_MATK:
      return labels.matk;
    case REGULAR_PARAM_MDEF:
      return labels.mdef;
    case REGULAR_PARAM_AGI:
      return labels.agi;
    case REGULAR_PARAM_LUK:
      return labels.luk;
    default:
      return `?rparams[${paramIndex}]`;
  }
};

export const extraParamName = (
  paramIndex: number,
  labels: ExtraParamLabels
): string => {
  switch (paramIndex) {
    case EXTRA_PARAM_CEV:
      return labels.criticalEvasionRate;
    case EXTRA_PARAM_EVA:
      return labels.evasionRate;
    case EXTRA_PARAM_CNT:
      return labels.counterAttackRate;
    case EXTRA_PARAM_CRI:
      return labels.criticalRate;
    case EXTRA_PARAM_HIT:
      return labels.hitRate;
    case EXTRA_PARAM_HRG:
      return labels.hpRegenerationRate;
    case EXTRA_PARAM_MEV:
      return labels.magicEvasionRate;
    case EXTRA_PARAM_MRF:
      return labels.magicReflectionRate;
    case EXTRA_PARAM_MRG:
      return labels.mpRegenerationRate;
    case EXTRA_PARAM_TRG:
      return labels.tpRegenerationRate;
  }
  return `?xparams[${paramIndex}]`;
};

export const specialParamName = (
  paramIndex: number,
  labels: SpecialParamLabels
): string => {
  switch (paramIndex) {
    case SPECIAL_PARAM_EXR:
      return labels.experienceRate;
    case SPECIAL_PARAM_TGR:
      return labels.targetRate;
    case SPECIAL_PARAM_FDR:
      return labels.floorDamageRate;
    case SPECIAL_PARAM_GRD:
      return labels.guradEffectRate;
    case SPECIAL_PARAM_MCR:
      return labels.mpCostRate;
    case SPECIAL_PARAM_TCR:
      return labels.tpChargeRate;
    case SPECIAL_PARAM_PDR:
      return labels.physicalDamageRate;
    case SPECIAL_PARAM_MDR:
      return labels.magicDamageRate;
    case SPECIAL_PARAM_PHA:
      return labels.pharmacology;
    case SPECIAL_PARAM_REC:
      return labels.recoveryEffectRate;
  }
  return `?sparams[${paramIndex}]`;
};
