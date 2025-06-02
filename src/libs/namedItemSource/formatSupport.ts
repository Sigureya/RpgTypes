import type { Data_NamedItem, FormatWithSource } from "./types";

export const findItem = <U extends Data_NamedItem>(
  dataId: number,
  list: ReadonlyArray<U>
): U | undefined => {
  const item = list[dataId];
  if (item) {
    if (item.id === dataId) {
      return item;
    }
  }

  return list.find((i) => i.id === dataId);
};

export const invalidPlaceHolders = (
  format: string,
  placeHoldes: string[]
): string[] => {
  const matched = Array.from(format.matchAll(/\{([a-zA-Z0-9]+)\}/g));
  return matched.reduce<string[]>((acc, item) => {
    const text: string = item[1];
    if (text && !placeHoldes.includes(text)) {
      acc.push(text);
    }
    return acc;
  }, []);
};

export const isFormatValidForSource = (
  data: FormatWithSource,
  namePlaceHolder: string
): boolean => {
  const includedName: boolean = data.format.includes(namePlaceHolder);
  if (data.dataSource) {
    return includedName;
  }
  return !includedName;
};
