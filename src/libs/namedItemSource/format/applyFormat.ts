import type {
  Data_NamedItem,
  FinalFormatEntry,
  FormatResult,
  FormatRule,
  FormatWithSource,
} from "./types";
import type { FormatLookupKeys } from "./types/accessor";
import { makeItemName } from "./types/namedItem/namedItem";
import { compileFormatRule, execFormatRule } from "./types/rule/rule";

export const formatUsingItemSourceMap = <Key, T>(
  data: T,
  rule: FormatRule<T>,
  sourceMap: Map<Key, FinalFormatEntry>,
  fallback: FinalFormatEntry,
  lookup: FormatLookupKeys<T, Key>
): FormatResult => {
  const key: Key = lookup.extractMapKey(data);
  const entry: FinalFormatEntry = sourceMap.get(key) ?? fallback;

  return {
    label: entry.label,
    text: applyFormatRule(data, entry.data ?? [], rule, entry, (d) =>
      lookup.extractDataId(d)
    ),
  };
};

export const applyFormatRule = <T>(
  data: T,
  list: ReadonlyArray<Data_NamedItem>,
  rule: FormatRule<T>,
  format: FormatWithSource,
  getDataId: (data: T) => number
): string => {
  const compiledRule = compileFormatRule(rule);
  const itemName: string = makeItemName(list, getDataId(data));
  return execFormatRule(format.format, data, compiledRule).replaceAll(
    compiledRule.itemName.placeHolder,
    itemName
  );
};
