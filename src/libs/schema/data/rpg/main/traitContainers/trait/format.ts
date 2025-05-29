import type { Data_NamedItem } from "@RpgTypes/schema";
import type { Trait } from "./types";

import { FORMAT_PARAM_VALUE, FORMAT_NAME } from "./options/default";

export const formatTraitText = (
  format: string,
  trait: Trait,
  items: Data_NamedItem[]
) => {
  const item = items[trait.dataId];
  const itemName: string = item ? item.name : `?data[${trait.dataId}]`;
  return format
    .replaceAll(FORMAT_PARAM_VALUE satisfies string, trait.value.toString())
    .replaceAll(FORMAT_NAME satisfies string, itemName);
};
