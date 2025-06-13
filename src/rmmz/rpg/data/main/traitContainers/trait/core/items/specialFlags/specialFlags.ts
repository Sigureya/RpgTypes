import type { Data_NamedItem, NamedItemSource } from "src/namedItemSource";
import type { DomainLabel } from "src/templates";
import type { SourceId_TraitSpecialFlag } from "../sourceIdTypes";
import {
  FLAG_ID_AUTO_BATTLE,
  FLAG_ID_GUARD,
  FLAG_ID_PRESERVE_TP,
  FLAG_ID_SUBSTITUTE,
} from "./constants";
import type { SpecialFlagOptions } from "./labels";

export const defineTraitSpecialFlag = (
  label: DomainLabel<SpecialFlagOptions>
): NamedItemSource => ({
  items: specialFlagToArray(label.options),
  label: label.domainName,
  source: {
    author: "rmmz",
    module: "trait",
    kind: "sflag",
  } satisfies SourceId_TraitSpecialFlag,
});

export const specialFlagToArray = (
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
