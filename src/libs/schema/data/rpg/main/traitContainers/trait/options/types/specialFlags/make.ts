import type { Data_NamedItem } from "@RpgTypes/schema/data/rpg/main";
import {
  FLAG_ID_AUTO_BATTLE,
  FLAG_ID_GUARD,
  FLAG_ID_PRESERVE_TP,
  FLAG_ID_SUBSTITUTE,
} from "./constants";
import type { SpecialFlagOptions } from "./specialFlag";

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
