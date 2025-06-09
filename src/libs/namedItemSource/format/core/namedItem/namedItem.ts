import type { Data_NamedItem } from "./types";

export const findItemById = <T extends Data_NamedItem>(
  dataId: number,
  list: ReadonlyArray<T>
): T | undefined => {
  const item: T = list[dataId];
  if (item) {
    if (item.id === dataId) {
      return item;
    }
  }

  return list.find((i) => i.id === dataId);
};

export const getItemName = (
  list: ReadonlyArray<Data_NamedItem>,
  dataId: number
): string => {
  const item = findItemById(dataId, list);
  return item ? item.name : `?data[${dataId}]`;
};
