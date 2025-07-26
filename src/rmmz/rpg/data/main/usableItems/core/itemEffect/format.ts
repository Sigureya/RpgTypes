import type { Data_NamedItem } from "@RpgTypes/libs";
import type { ItemEffect } from "./itemEffect";
import type { EffectDefinitionResolved } from "./labels";
const FORMAT_NAME = "{name}" as const;
const FORMAT_VALUE1 = "{value1}" as const;
const FORMAT_VALUE2 = "{value2}" as const;

export const formatItemEffectText = (
  effectDefine: EffectDefinitionResolved,
  effect: ItemEffect,
  items: Data_NamedItem[]
): string => {
  const item = items.find((item) => item.id === effect.dataId);
  const name: string = item ? item.name : "Unknown Item";
  return effectDefine.pattern
    .replaceAll(FORMAT_VALUE1, effect.value1.toString())
    .replaceAll(FORMAT_VALUE2, effect.value2.toString())
    .replaceAll(FORMAT_NAME, name);
};
