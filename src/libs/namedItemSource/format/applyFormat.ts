import type {
  Data_NamedItem,
  FinalFormatEntry,
  FormatResult,
  FormatRule,
  FormatRuleCompiled,
  FormatWithSource,
} from "./types";
import type { FormatLookupKeys } from "./types/accessor";
import { makeItemName } from "./types/namedItem/namedItem";
import { compileFormatRule, execFormatRule } from "./types/rule/rule";

export const formatUsingItemSourceMap = <Key, T>(
  data: T,
  rule: FormatRuleCompiled<T>,
  sourceMap: Map<Key, FinalFormatEntry>,
  fallback: FinalFormatEntry,
  lookup: FormatLookupKeys<T, Key>
): FormatResult => {
  const key: Key = lookup.extractMapKey(data);
  const entry: FinalFormatEntry = sourceMap.get(key) ?? fallback;

  return {
    label: entry.label,
    text: applyFormatRule2(data, entry.data, rule, entry, (d) =>
      lookup.extractDataId(d)
    ),
  };
};

export const applyFormatRule2 = <T>(
  data: T,
  list: ReadonlyArray<Data_NamedItem> | undefined,
  rule: FormatRuleCompiled<T>,
  format: FormatWithSource,
  getDataId: (data: T) => number
) => {
  const text: string = execFormatRule(format.format, data, rule);
  return list
    ? text.replaceAll(
        rule.itemName.placeHolder,
        makeItemName(list, getDataId(data))
      )
    : text;
};

export const applyFormatRule = <T>(
  data: T,
  list: ReadonlyArray<Data_NamedItem> | undefined,
  rule: FormatRule<T>,
  format: FormatWithSource,
  getDataId: (data: T) => number
): string => {
  const compiledRule = compileFormatRule(rule);
  return applyFormatRule2(data, list, compiledRule, format, getDataId);
};
