import type { Data_NamedItem } from "./types";

export const findItem = <T extends Data_NamedItem>(
  dataId: number,
  list: ReadonlyArray<T>
): T | undefined => {
  const item = list[dataId];
  if (item) {
    if (item.id === dataId) {
      return item;
    }
  }

  return list.find((i) => i.id === dataId);
};
