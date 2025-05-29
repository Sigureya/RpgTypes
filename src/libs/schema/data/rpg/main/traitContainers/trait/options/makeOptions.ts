import type { Data_NamedItem, GlobalLabel } from "@RpgTypes/schema/";
import {
  FLAG_ID_GUARD,
  FLAG_ID_AUTO_BATTLE,
  FLAG_ID_PRESERVE_TP,
  FLAG_ID_SUBSTITUTE,
} from "./types/specialFlags";
import type {
  CollapsOptionLabels,
  ExtraParamLabels,
  PartyAbilityOptionLabels,
  RegularParamLabels,
  SpecialFlagOptions,
  SpecialParamLabels,
} from "./types";
import {
  COLLAPS_NORMAL,
  COLLAPS_BOSS,
  COLLAPS_INSTANT,
  COLLAPS_NONE,
} from "./types/collaps";

import {
  PARTY_ABILITY_CANCEL_SURPRISE,
  PARTY_ABILITY_DROP_ITEM_DOUBLE,
  PARTY_ABILITY_ENCOUNTER_HALF,
  PARTY_ABILITY_ENCOUNTER_NONE,
  PARTY_ABILITY_GOLD_DOUBLE,
  PARTY_ABILITY_RAISE_PREEMPTIVE,
} from "./types/partyAbility";

import {
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
} from "./types/paramExtra";
import {
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
} from "./types/paramSpecial";
import {
  REGULAR_PARAM_ATK,
  REGULAR_PARAM_MAX_HP,
  REGULAR_PARAM_MAX_MP,
  REGULAR_PARAM_DEF,
  REGULAR_PARAM_MATK,
  REGULAR_PARAM_MDEF,
  REGULAR_PARAM_AGI,
  REGULAR_PARAM_LUK,
} from "./types/paramRegular";

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

export const foldSpecialFlag = (
  label: SpecialFlagOptions
): Data_NamedItem[] => {
  return [
    {
      id: FLAG_ID_AUTO_BATTLE,
      name: label.autoBattle,
    },
    {
      id: FLAG_ID_GUARD,
      name: label.guard,
    },
    {
      id: FLAG_ID_SUBSTITUTE,
      name: label.substitute,
    },
    {
      id: FLAG_ID_PRESERVE_TP,
      name: label.preventEscape,
    },
  ];
};
