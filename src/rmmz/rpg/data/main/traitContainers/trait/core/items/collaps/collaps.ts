import type { Data_NamedItem, NamedItemSource } from "@RpgTypes/libs";
import type { SourceId_TraitCollaps } from "@RpgTypes/rmmz/rpg";
import type { DomainLabel } from "src/libs/templates";
import {
  COLLAPS_NORMAL,
  COLLAPS_BOSS,
  COLLAPS_INSTANT,
  COLLAPS_NONE,
} from "./constants";
import type { CollapsOptionLabels, NormalLabel } from "./labels";

export const defineTraitCollapseType = (
  labels: DomainLabel<CollapsOptionLabels>,
  global: NormalLabel
): NamedItemSource => ({
  items: collapsOptionsToArray(labels.options, global),
  label: labels.title,
  source: {
    author: "rmmz",
    module: "trait",
    kind: "collaps",
  } satisfies SourceId_TraitCollaps,
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
