import { joinSoruceId } from "./sourceId";
import type { NamedItemSource } from "./types";

export const mappingNamedItems = (
  list: ReadonlyArray<NamedItemSource>
): Map<string, NamedItemSource> => {
  return list.reduce<Map<string, NamedItemSource>>((map, item) => {
    map.set(joinSoruceId(item.source), item);
    return map;
  }, new Map());
};
