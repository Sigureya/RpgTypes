import {
  FORMAT_PLACEHOLDER_KEY,
  DEFAULT_LABEL,
  DEFAULT_TEXT,
} from "./constants";
import type {
  FormatItemMapper,
  FormatItemMapperCompiled,
  FormatPlaceholder,
  FormatRule,
  FormatRuleCompiled,
} from "./core";
import { compileArrayPlaceholderEX, compileFormatPropeties } from "./core";
import {
  getDataKeysFromFormatRule,
  getItemMappersFromRule,
} from "./getPlaceHolders";

export const compileFormatRule = <T>(
  rule: FormatRule<T>,
  extraItems: ReadonlyArray<FormatItemMapper<T>> = []
): FormatRuleCompiled<T> => ({
  itemMappers: [...getItemMappersFromRule(rule), ...extraItems].map(
    compileItemMapper
  ),
  fallbackFormat: {
    text: generateFallbackFormatText(rule),
    label: generateFallbackLabel(rule),
  },
  properties: compileFormatPropeties(rule.placeHolder ?? {}),
  arrayIndex: rule.arrayIndex
    ? rule.arrayIndex.map(compileArrayPlaceholderEX)
    : [],
});

const compileItemMapper = <T>(
  itemMappers: FormatItemMapper<T>
): FormatItemMapperCompiled<T> => {
  return {
    placeHolder: `{${itemMappers.placeHolder}}`,
    kindKey: itemMappers.kindKey,
    dataIdKey: itemMappers.dataIdKey,
  };
};

const generateFallbackFormatText = <T>(rule: FormatRule<T>): string => {
  if (rule.fallbackFormat) {
    if (rule.fallbackFormat.text !== undefined) {
      return rule.fallbackFormat.text;
    }
  }
  const set: ReadonlySet<string & keyof T> = getDataKeysFromFormatRule(rule);
  if (set.size === 0) {
    return DEFAULT_TEXT;
  }

  return Array.from(set)
    .map((item) => `${item}:{${item}}`)
    .join(", ");
};

const generateFallbackLabel = <T>(rule: FormatRule<T>): string => {
  if (rule.fallbackFormat?.label !== undefined) {
    return rule.fallbackFormat.label;
  }
  return DEFAULT_LABEL;
};

export const resolveUnknownLabel = <T>(
  rule: FormatRuleCompiled<T>,
  key: string
): string => {
  return rule.fallbackFormat.label.replace(FORMAT_PLACEHOLDER_KEY, key);
};

export const applyPlaceholdersToText = <Schema, Data extends Schema>(
  baseText: string,
  data: Data,
  rule: FormatRuleCompiled<Schema>
): string => {
  const numText: string = rule.properties.numbers.reduce(
    (text, field) => replacePlaceholder(text, data, field),
    baseText
  );
  return rule.properties.strings.reduce(
    (text, field) => replacePlaceholder(text, data, field),
    numText
  );
};

const replacePlaceholder = <
  Schema,
  Data extends Schema,
  Value extends number | string
>(
  baseText: string,
  data: Data,
  field: FormatPlaceholder<Schema, Value>
): string => {
  const value = data[field.dataKey satisfies keyof Data];
  if (value === undefined || value === null) {
    return baseText;
  }
  return baseText.replaceAll(field.placeHolder, String(value));
};
