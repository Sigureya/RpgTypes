import type {
  Data_NamedItem,
  FormatCompiled,
  FormatResult,
  FormatRuleCompiled,
} from "./core";
import { execFormatRule, makeItemName } from "./core";
import type { FormatLookupKeys } from "./core/accessor";

const xxxxx = <Key, Schema, Data extends Schema>(
  data: Data,
  rule: FormatRuleCompiled<Schema>,
  sourceMap: Map<Key, FormatCompiled>,
  fallback: FormatCompiled,
  lookup: FormatLookupKeys<Data, Key>
): FormatResult => {
  const key: Key = lookup.extractMapKey(data);
  const entry: FormatCompiled = sourceMap.get(key) ?? fallback;

  return {
    label: entry.label,
    text: applyFormatRule(data, entry.data, rule, entry.patternCompiled, (d) =>
      lookup.extractDataId(d)
    ),
  };
};

const formatItemName = <Schema, Data extends Schema>(
  text: string,
  data: Data,
  rule: FormatRuleCompiled<Schema>,
  list: ReadonlyArray<Data_NamedItem>,
  getDataId: (data: Data) => number
): string => {
  const itemName: string = makeItemName(list, getDataId(data));
  return rule.itemMappers.reduce((currentText, itemMapper) => {
    return currentText.replaceAll(itemMapper.placeHolder, itemName);
  }, text);
};

export const applyFormatRule = <Schema, Data extends Schema>(
  data: Data,
  list: ReadonlyArray<Data_NamedItem> | undefined,
  rule: FormatRuleCompiled<Schema>,
  format: string,
  getDataId: (data: Data) => number
): string => {
  const text: string = execFormatRule(format, data, rule);
  return list ? formatItemName(text, data, rule, list, getDataId) : text;
};
