import {
  SPECIAL_PARAM_TGR,
  SPECIAL_PARAM_GRD,
  SPECIAL_PARAM_REC,
  SPECIAL_PARAM_PHA,
  SPECIAL_PARAM_MCR,
  SPECIAL_PARAM_TCR,
  SPECIAL_PARAM_PDR,
  SPECIAL_PARAM_MDR,
  SPECIAL_PARAM_FDR,
  SPECIAL_PARAM_EXR,
} from "./constants";
import type { SpecialParamLabels } from "./labels";
import type {
  Data_NamedItem2,
  SourceIdentifier,
} from "@RpgTypes/schema/namedItemSource";
import { SRC_PARAMS_SPECIAL } from "@RpgTypes/schema/namedItemSource";
import { AUTHOR_RMMZ, MODULE_TRAIT } from "@RpgTypes/namedItemSource";

export const sparamSourceId = (): SourceIdentifier => ({
  author: AUTHOR_RMMZ,
  module: MODULE_TRAIT,
  kind: SRC_PARAMS_SPECIAL,
});

export const specialParamsToArray = (
  specialParams: SpecialParamLabels
): Data_NamedItem2[] => {
  return [
    {
      id: SPECIAL_PARAM_TGR,
      name: specialParams.targetRate,
    },
    {
      id: SPECIAL_PARAM_GRD,
      name: specialParams.guardEffectRate,
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
      return labels.guardEffectRate;
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
