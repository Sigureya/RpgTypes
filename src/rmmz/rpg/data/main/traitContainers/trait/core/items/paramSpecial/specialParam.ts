import type { Data_NamedItem, NamedItemSource } from "@RpgTypes/libs";
import type { SourceId_TraitSpecialParam } from "../sourceIdTypes";
import type { TraitLabelWithOption } from "../traitLabel";
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

export const defineTraitSpecialParam = (
  specialParam: TraitLabelWithOption<SpecialParamLabels>
): NamedItemSource => ({
  items: specialParamsToArray(specialParam.options),
  label: specialParam.title,
  source: {
    author: "rmmz",
    module: "trait",
    kind: "sparams",
  } satisfies SourceId_TraitSpecialParam,
});

export const specialParamsToArray = (
  specialParams: SpecialParamLabels
): Data_NamedItem[] => {
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
