import type { CompiledFormatBundle } from "./bundle";
import type {
  Data_NamedItem,
  FormatCompiled,
  FormatErrorLabels,
  FormatLabelResolved,
  FormatResult,
  FormatRule,
  FormatRuleCompiled,
  NamedItemSource,
  SourceKeyConcept,
} from "./core";
import {
  compileFormatRule,
  applyPlaceholdersToText,
  getItemName,
} from "./core";
import type { FormatLookupKeys } from "./core/accessor";
import { detectFormatErrors } from "./core/detectErrors";
import { joinItemsSource } from "./joinItemsSource";

export const compileFormatBundle = <
  T extends object,
  Key,
  Source extends SourceKeyConcept
>(
  rule: FormatRule<T, Source>,
  formatList: ReadonlyArray<FormatLabelResolved<Key>>,
  namedItemSources: ReadonlyArray<NamedItemSource>,
  errorTexts: FormatErrorLabels
): CompiledFormatBundle<T, Key, Source> => {
  return {
    soruceMap: joinItemsSource(formatList, namedItemSources),
    errors: formatList.map((fmt) => detectFormatErrors(fmt, rule, errorTexts)),
    compiledRule: compileFormatRule(rule),
  };
};

export const formatWithCompiledBundle = <
  T extends object,
  Key,
  Source extends SourceKeyConcept
>(
  bundle: CompiledFormatBundle<T, Key, Source>,
  data: T,
  lookup: FormatLookupKeys<T, Key>
): FormatResult => {
  const key: Key = lookup.extractMapKey(data);
  const entry = bundle.soruceMap.get(key);
  return entry
    ? formatTextForMatchedEntry(entry, bundle.compiledRule, data, (d) =>
        lookup.extractDataId(d)
      )
    : formatTextForFallback(key, bundle.compiledRule, data, lookup);
};

const formatTextForMatchedEntry = <
  T extends object,
  Source extends SourceKeyConcept
>(
  format: FormatCompiled,
  rule: FormatRuleCompiled<T, Source>,
  data: T,
  getDataId: (data: T) => number
): FormatResult => {
  return {
    label: format.label,
    text: applyFormatRule(
      data,
      format.data,
      rule,
      format.patternCompiled,
      getDataId
    ),
  };
};

const formatTextForFallback = <
  T extends object,
  Key,
  Source extends SourceKeyConcept
>(
  key: Key,
  rule: FormatRuleCompiled<T, Source>,
  data: T,
  lookup: FormatLookupKeys<T, Key>
): FormatResult => {
  return {
    label: lookup.unknownKey(key),
    text: applyFormatRule(data, undefined, rule, rule.fallbackFormat, (d) =>
      lookup.extractDataId(d)
    ),
  };
};

export const applyFormatRule = <Schema, Data extends Schema>(
  data: Data,
  list: ReadonlyArray<Data_NamedItem> | undefined,
  rule: FormatRuleCompiled<Schema>,
  format: string,
  getDataId: (data: Data) => number
): string => {
  const text: string = applyPlaceholdersToText(format, data, rule);
  return list ? foramtWithItemName(text, data, rule, list, getDataId) : text;
};

const foramtWithItemName = <Schema, Data extends Schema>(
  text: string,
  data: Data,
  rule: FormatRuleCompiled<Schema>,
  list: ReadonlyArray<Data_NamedItem>,
  getDataId: (data: Data) => number
): string => {
  const itemName: string = getItemName(list, getDataId(data));
  return rule.itemMappers.reduce((currentText, itemMapper) => {
    return currentText.replaceAll(itemMapper.placeHolder, itemName);
  }, text);
};
