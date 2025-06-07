import {
  getDataKeysFromFormatRule,
  getItemMappersFromRule,
} from "./getPlaceHolders";
import type {
  FormatItemMapper,
  FormatItemMapperCompiled,
  FormatPlaceholder,
  FormatRule,
  FormatRuleCompiled,
} from "./core";
import { compileFormatPropeties } from "./core";

export const compileFormatRule = <T>(
  rule: FormatRule<T>,
  extraItems: ReadonlyArray<FormatItemMapper<T>> = []
): FormatRuleCompiled<T> => ({
  itemMappers: [...getItemMappersFromRule(rule), ...extraItems].map(
    compileItemMapper
  ),
  fallbackFormat: generateFallbackFormat(rule),
  properties: compileFormatPropeties(rule.placeHolder ?? {}),
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

const generateFallbackFormat = <T>(rule: FormatRule<T>): string => {
  if (rule.fallbackFormat) {
    return rule.fallbackFormat;
  }
  const keys: ReadonlySet<string & keyof T> = getDataKeysFromFormatRule(rule);
  return Array.from(keys)
    .map((item) => `${item}:{${item}}`)
    .join(", ");
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
