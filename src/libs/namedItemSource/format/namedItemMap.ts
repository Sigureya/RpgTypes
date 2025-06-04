import { joinSoruceId } from "./sourceId";
import type { Data_NamedItem, NamedItemSource } from "./types";

export const mappingNamedItems = (
  list: ReadonlyArray<NamedItemSource>
): Map<string, NamedItemSource> => {
  return list.reduce<Map<string, NamedItemSource>>((map, item) => {
    const newItem: NamedItemSource = {
      items: cloneItems(item.items), // 余計な情報の削除を兼ねてコピー
      source: item.source,
      label: item.label,
    };
    map.set(joinSoruceId(item.source), newItem);
    return map;
  }, new Map());
};

const cloneItems = (list: ReadonlyArray<Data_NamedItem>): Data_NamedItem[] => {
  return list.map<Data_NamedItem>((item) => ({ id: item.id, name: item.name }));
};
