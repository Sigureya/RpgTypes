import type { Data_NamedItem, FormatRule, FormatWithSource } from "./types";

const makePlaceHolder = (key: string) => {
  return `{${key}}`;
};

const makeItemName = (list: ReadonlyArray<Data_NamedItem>, dataId: number) => {
  const item = list[dataId];
  return item ? item.name : `?data[${dataId}]`;
};

export const applyFormatRule = <T extends Record<keyof T, string | number>>(
  data: T & { dataId: number },
  list: ReadonlyArray<Data_NamedItem>,
  rule: FormatRule<T>,
  format: FormatWithSource
) => {
  const itemName: string = makeItemName(list, data.dataId);
  const nameR = makePlaceHolder(rule.itemNamePlaceHolder ?? "name");
  return rule.placeHolders.reduce<string>((acc, key: string & keyof T) => {
    const value: string | number = data[key];
    return value
      ? (acc = acc.replaceAll(makePlaceHolder(key), value.toString()))
      : acc;
  }, format.format.replaceAll(nameR, itemName));
};
