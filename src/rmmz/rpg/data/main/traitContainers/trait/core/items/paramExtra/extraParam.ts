import type { Data_NamedItem, NamedItemSource } from "src/namedItemSource";
import type { SourceId_TraitExtraParam } from "../sourceIdTypes";
import type { TraitLabelWithOption } from "../traitLabel";
import {
  EXTRA_PARAM_HIT,
  EXTRA_PARAM_EVA,
  EXTRA_PARAM_CRI,
  EXTRA_PARAM_CEV,
  EXTRA_PARAM_MEV,
  EXTRA_PARAM_MRF,
  EXTRA_PARAM_CNT,
  EXTRA_PARAM_HRG,
  EXTRA_PARAM_MRG,
  EXTRA_PARAM_TRG,
} from "./constants";
import type { ExtraParamLabels } from "./labels";

export const defineTraitExtraParam = (
  xparam: TraitLabelWithOption<ExtraParamLabels>
): NamedItemSource => ({
  items: extraParamsToArray(xparam.options),
  label: xparam.title,
  source: {
    author: "rmmz",
    module: "trait",
    kind: "xparams",
  } satisfies SourceId_TraitExtraParam,
});

export const extraParamsToArray = (
  xparam: ExtraParamLabels
): Data_NamedItem[] => {
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
