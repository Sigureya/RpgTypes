import type {
  CollapsOptionLabels,
  GlobalLabel,
  NamedItemSource,
  PartyAbilityOptionLabels,
  RegularParamLabels,
  DomainLabel,
} from "@RpgTypes/schema";
import {
  SRC_PARAMS_REGULAR,
  SRC_TRAIT_COLLAPS,
  SRC_TRAIT_PARTY_ABILITY,
} from "@RpgTypes/schema";
import { AUTHOR_RMMZ, MODULE_TRAIT } from "./traits/constants";
import {
  foldCollapsOptions,
  foldPartyAbilityOptions,
  foldRegularParam,
} from "./traits/battlerParam";

export const traitDomain = <T>(
  labels: DomainLabel<T>,
  sourceKey: string,
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
  return traitDomain(labels, SRC_TRAIT_COLLAPS, (col) =>
    foldCollapsOptions(col, global)
  );
};

export const buildPartyAbilitySource = (
  labels: DomainLabel<PartyAbilityOptionLabels>
): NamedItemSource => {
  return traitDomain(labels, SRC_TRAIT_PARTY_ABILITY, foldPartyAbilityOptions);
};

export const buildRegularParamSource = (
  label: DomainLabel<RegularParamLabels>
): NamedItemSource => {
  return traitDomain(label, SRC_PARAMS_REGULAR, foldRegularParam);
};
