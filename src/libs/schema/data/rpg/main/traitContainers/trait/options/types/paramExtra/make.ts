import type { Data_NamedItem } from "@RpgTypes/schema/data/rpg/main/entitys";
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
import type { ExtraParamLabels } from "./xparamLabels";

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
