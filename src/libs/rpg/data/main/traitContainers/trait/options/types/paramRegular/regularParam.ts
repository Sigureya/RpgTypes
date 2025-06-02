import type {
  Data_NamedItem2,
  NamedItemSource,
  SourceIdentifier,
} from "src/namedItemSource";
import { AUTHOR_RMMZ } from "src/namedItemSource";

import { MODULE_TRAIT, SRC_PARAMS_REGULAR } from "src/rpg";
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

import type { TraitLabelWithOption } from "../traitLabel";

export const regularParamSourceId = (): SourceIdentifier => ({
  author: AUTHOR_RMMZ,
  module: MODULE_TRAIT,
  kind: SRC_PARAMS_REGULAR,
});

export const defineTraitRegularParam = (
  param: TraitLabelWithOption<RegularParamLabels>
): NamedItemSource => ({
  items: regularParamsToArray(param.options),
  label: param.domainName,
  source: regularParamSourceId(),
});

export const regularParamsToArray = (
  param: RegularParamLabels
): Data_NamedItem2[] => {
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
