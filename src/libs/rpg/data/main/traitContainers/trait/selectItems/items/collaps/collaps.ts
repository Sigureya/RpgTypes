import type { DomainLabel } from "@RpgTypes/templates";
import {
  COLLAPS_NORMAL,
  COLLAPS_BOSS,
  COLLAPS_INSTANT,
  COLLAPS_NONE,
} from "./constants";
import type { CollapsOptionLabels, NormalLabel } from "./labels";
import type {
  Data_NamedItem,
  NamedItemSource,
  SourceIdentifier,
} from "src/namedItemSource";
import { AUTHOR_RMMZ } from "src/namedItemSource";
import { MODULE_TRAIT, SRC_TRAIT_COLLAPS } from "src/rpg";

export const collapsSourceId = (): SourceIdentifier => ({
  author: AUTHOR_RMMZ,
  module: MODULE_TRAIT,
  kind: SRC_TRAIT_COLLAPS,
});

export const defineTraitCollapseType = (
  labels: DomainLabel<CollapsOptionLabels>,
  global: NormalLabel
): NamedItemSource => ({
  items: collapsOptionsToArray(labels.options, global),
  label: labels.domainName,
  source: collapsSourceId(),
});

export const collapsOptionsToArray = (
  options: CollapsOptionLabels,
  global: NormalLabel
): Data_NamedItem[] => {
  return [
    {
      id: COLLAPS_NORMAL,
      name: global.normal,
    },
    {
      id: COLLAPS_BOSS,
      name: options.bossCollaps,
    },
    {
      id: COLLAPS_INSTANT,
      name: options.instantCollaps,
    },
    {
      id: COLLAPS_NONE,
      name: options.noneCollaps,
    },
  ];
};
