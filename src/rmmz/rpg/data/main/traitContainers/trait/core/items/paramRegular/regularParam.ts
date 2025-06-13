import type { Data_NamedItem, NamedItemSource } from "src/namedItemSource";
import type { SourceId_TraitRegularParam } from "../sourceIdTypes";
import type { TraitLabelWithOption } from "../traitLabel";
import {
  REGULAR_PARAM_MAX_HP,
  REGULAR_PARAM_MAX_MP,
  REGULAR_PARAM_ATK,
  REGULAR_PARAM_DEF,
  REGULAR_PARAM_MATK,
  REGULAR_PARAM_MDEF,
  REGULAR_PARAM_AGI,
  REGULAR_PARAM_LUK,
} from "./constants";
import type { RegularParamLabels } from "./labels";

export const defineTraitRegularParam = (
  param: TraitLabelWithOption<RegularParamLabels>
): NamedItemSource => ({
  items: regularParamsToArray(param.options),
  label: param.domainName,
  source: {
    author: "rmmz",
    module: "trait",
    kind: "params",
  } satisfies SourceId_TraitRegularParam,
});

export const regularParamsToArray = (
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
