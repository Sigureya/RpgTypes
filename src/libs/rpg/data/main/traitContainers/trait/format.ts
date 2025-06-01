import type { Data_NamedItem2 } from "@RpgTypes/schema";
import type { Trait, TraitLabelResolved } from "./types";

import { FORMAT_PARAM_VALUE, FORMAT_NAME } from "./options/default";

export const formatTraitText = (
  descriptor: TraitLabelResolved,
  trait: Trait,
  items: Data_NamedItem2[],
  maxNameLength: number = 100
): string => {
  const item = items[trait.dataId];
  const itemName: string = item
    ? item.name.slice(0, maxNameLength)
    : `?data[${trait.dataId}]`;
  return descriptor.format
    .replaceAll(FORMAT_PARAM_VALUE, trait.value.toString())
    .replaceAll(FORMAT_NAME, itemName);
};

export const invalidPlaceholders = (format: string): string[] => {
  const allowed: string[] = [FORMAT_PARAM_VALUE, FORMAT_NAME];
  const matches: RegExpExecArray[] = [...format.matchAll(/\{([^}]+)\}/g)];
  return matches.map((m) => m[1]).filter((key) => !allowed.includes(key));
};

export const detectTraitLabel = (descriptor: TraitLabelResolved): string[] => {
  descriptor.format.includes(FORMAT_NAME);
  return [];
};
