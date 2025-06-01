import type { GlobalLabel } from "@RpgTypes/rpg/labels";
import {
  COLLAPS_NORMAL,
  COLLAPS_BOSS,
  COLLAPS_INSTANT,
  COLLAPS_NONE,
} from "./constants";
import type { CollapsOptionLabels } from "./labels";
import type {
  Data_NamedItem2,
  NamedItemSource,
  SourceIdentifier,
} from "@RpgTypes/schema/namedItemSource";
import { AUTHOR_RMMZ } from "@RpgTypes/namedItemSource";
import { MODULE_TRAIT, SRC_TRAIT_COLLAPS } from "src/rpg";

export const collapsSourceId = (): SourceIdentifier => ({
  author: AUTHOR_RMMZ,
  module: MODULE_TRAIT,
  kind: SRC_TRAIT_COLLAPS,
});

export const defineTraitCollapseType = (
  options: CollapsOptionLabels,
  global: Pick<GlobalLabel, "normal">
): NamedItemSource => ({
  items: collapsOptionsToArray(options, global),
  label: global.normal,
  source: collapsSourceId(),
});

export const collapsOptionsToArray = (
  options: CollapsOptionLabels,
  global: Pick<GlobalLabel, "normal">
): Data_NamedItem2[] => {
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
