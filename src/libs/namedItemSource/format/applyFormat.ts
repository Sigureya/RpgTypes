import type {
  Data_NamedItem,
  FinalFormatEntry,
  FormatResult,
  FormatRule,
  FormatWithSource,
} from "./types";
import { complieFormatRule, execFormatRule } from "./types/rule/rule";

const makePlaceHolder = (key: string) => {
  return `{${key}}`;
};

const makeItemName = (
  list: ReadonlyArray<Data_NamedItem>,
  dataId: number
): string => {
  const item = findItem(dataId, list);
  return item ? item.name : `?data[${dataId}]`;
};

export const formatUsingItemSourceMap = <
  Key,
  T extends Record<keyof T, string | number>
>(
  data: T & { dataId: number },
  rule: FormatRule<T>,
  sourceMap: Map<Key, FinalFormatEntry>,
  fallback: FinalFormatEntry,
  getKey: (data: T) => Key
): FormatResult => {
  const key = getKey(data);
  const entry: FinalFormatEntry = sourceMap.get(key) ?? fallback;

  return {
    label: entry.label,
    text: applyFormatRule(
      data,
      entry.data ?? [],
      rule,
      entry,
      (t: any) => t.dataId // 暫定処置。
    ),
  };
};

const applyFormatRule2 = <T>(
  data: T,
  list: ReadonlyArray<Data_NamedItem>
) => {};

export const applyFormatRule = <T extends Record<keyof T, string | number>>(
  data: T,
  list: ReadonlyArray<Data_NamedItem>,
  rule: FormatRule<T>,
  format: FormatWithSource,
  getDataId: (data: T) => number
): string => {
  const compiledRule = complieFormatRule(rule);
  const itemName: string = makeItemName(list, getDataId(data));
  const nameR = makePlaceHolder(rule.itemNamePlaceHolder ?? "name");
  return execFormatRule(format.format, data, compiledRule).replaceAll(
    nameR,
    itemName
  );
};

const findItem = <T extends Data_NamedItem>(
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
