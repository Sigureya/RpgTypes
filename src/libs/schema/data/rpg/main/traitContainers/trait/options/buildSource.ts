import type { GlobalLabel, NamedItemSource } from "@RpgTypes/schema";
import type {
  CollapsOptionLabels,
  ExtraParamLabels,
  PartyAbilityOptionLabels,
  RegularParamLabels,
  SpecialParamLabels,
} from "./types";
import {
  SRC_TRAIT_COLLAPS,
  SRC_PARAMS_EXTRA,
  SRC_PARAMS_REGULAR,
  SRC_PARAMS_SPECIAL,
  SRC_TRAIT_PARTY_ABILITY,
} from "@RpgTypes/schema";

import {
  foldCollapsOptions,
  foldExtraParam,
  foldPartyAbilityOptions,
  foldRegularParam,
  foldSpecialParams,
} from "./makeOptions";
import type { DomainLabel } from "@RpgTypes/templates";
import { AUTHOR_RMMZ, MODULE_TRAIT } from "@RpgTypes/namedItemSource";

export const traitDomain = <T>(
  sourceKey: string,
  labels: DomainLabel<T>,
  fn: (options: T) => { name: string; id: number }[]
): NamedItemSource => {
  return {
    items: fn(labels.options),
    label: labels.domainName,
    source: {
      author: AUTHOR_RMMZ,
      module: MODULE_TRAIT,
      sourceKey,
    },
  };
};

export const buildCollapsSource = (
  labels: DomainLabel<CollapsOptionLabels>,
  global: Pick<GlobalLabel, "normal">
): NamedItemSource => {
  return traitDomain(SRC_TRAIT_COLLAPS, labels, (col) =>
    foldCollapsOptions(col, global)
  );
};

export const buildPartyAbilitySource = (
  labels: DomainLabel<PartyAbilityOptionLabels>
): NamedItemSource => {
  return traitDomain(SRC_TRAIT_PARTY_ABILITY, labels, foldPartyAbilityOptions);
};

export const buildRegularParamSource = (
  label: DomainLabel<RegularParamLabels>
): NamedItemSource => {
  return traitDomain(SRC_PARAMS_REGULAR, label, foldRegularParam);
};

export const buildExtraParamSource = (
  label: DomainLabel<ExtraParamLabels>
): NamedItemSource => {
  return traitDomain(SRC_PARAMS_EXTRA, label, foldExtraParam);
};

export const buildSpecialParamSource = (
  label: DomainLabel<SpecialParamLabels>
): NamedItemSource => {
  return traitDomain(SRC_PARAMS_SPECIAL, label, foldSpecialParams);
};
