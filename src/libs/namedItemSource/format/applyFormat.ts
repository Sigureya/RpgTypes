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
  SourceIdentifier,
  SourceKeyConcept,
} from "./core";
import {
  compileFormatRule,
  applyPlaceholdersToText,
  getItemName,
} from "./core";
import type { FormatLookupKeys } from "./core/accessor";
import { collectFormatErrors } from "./core/detectErrors";
import { mergeItemsSource } from "./mergeItemsSource";

export const compileFormatBundle = <T extends object, Key>(
  rule: FormatRule<T, SourceIdentifier>,
  formatList: ReadonlyArray<FormatLabelResolved<Key>>,
  namedItemSources: ReadonlyArray<NamedItemSource>,
  errorTexts: FormatErrorLabels
): CompiledFormatBundle<T, Key, SourceIdentifier> => {
  return {
    soruceMap: mergeItemsSource(formatList, namedItemSources),
    errors: collectFormatErrors(formatList, rule, errorTexts),
    compiledRule: compileFormatRule(rule),
  };
};

export const isValidFormatBundle = <
  T extends object,
  Key,
  Source extends SourceKeyConcept
>(
  bundle: CompiledFormatBundle<T, Key, Source>
): boolean => {
  return bundle.errors.length === 0;
};

export const formatWithCompiledBundle = <
  T extends object,
  Key,
  Source extends SourceKeyConcept
>(
  data: T,
  bundle: CompiledFormatBundle<T, Key, Source>,
  lookup: FormatLookupKeys<T, Key>
): FormatResult => {
  const key: Key = lookup.extractMapKey(data);
  const entry = bundle.soruceMap.get(key);
  return entry
    ? formatTextForMatchedEntry(data, bundle.compiledRule, entry, (d) =>
        lookup.extractDataId(d)
      )
    : formatTextForFallback(data, bundle.compiledRule, key, lookup);
};

const formatTextForMatchedEntry = <
  T extends object,
  Source extends SourceKeyConcept
>(
  data: T,
  rule: FormatRuleCompiled<T, Source>,
  format: FormatCompiled,
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
  data: T,
  rule: FormatRuleCompiled<T, Source>,
  key: Key,
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
  return list ? formatWithItemName(text, data, rule, list, getDataId) : text;
};

const formatWithItemName = <Schema, Data extends Schema>(
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
