import {
  FLAG_ID_AUTO_BATTLE,
  FLAG_ID_GUARD,
  FLAG_ID_PRESERVE_TP,
  FLAG_ID_SUBSTITUTE,
} from "./constants";
import type { SpecialFlagOptions } from "./labels";
import type { Data_NamedItem2 } from "@RpgTypes/schema/namedItemSource";
import {
  SRC_TRAIT_SPECIAL_FLAG,
  type SourceIdentifier,
} from "@RpgTypes/schema/namedItemSource";
import { AUTHOR_RMMZ, MODULE_TRAIT } from "@RpgTypes/namedItemSource";

export const specialFlagSourceId = (): SourceIdentifier => ({
  author: AUTHOR_RMMZ,
  module: MODULE_TRAIT,
  kind: SRC_TRAIT_SPECIAL_FLAG,
});

export const specialFlagToArray = (
  label: SpecialFlagOptions
): Data_NamedItem2[] => {
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
