import type { Data_NamedItem } from "@RpgTypes/schema";
import type { Trait, TraitDescriptor } from "./types";

import { FORMAT_PARAM_VALUE, FORMAT_NAME } from "./options/default";

export const formatTraitText = (
  descriptor: TraitDescriptor,
  trait: Trait,
  items: Data_NamedItem[]
): string => {
  const item = items[trait.dataId];
  const itemName: string = item ? item.name : `?data[${trait.dataId}]`;
  return descriptor.format
    .replaceAll(FORMAT_PARAM_VALUE, trait.value.toString())
    .replaceAll(FORMAT_NAME, itemName);
};
