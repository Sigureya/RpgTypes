import {
  getDataKeysFromFormatRule,
  getItemMappersFromRule,
} from "./getPlaceHolders";
import type {
  FormatRule,
  FormatField,
  FormatRuleCompiled,
  FormatItemMapper,
  FormatItemMapperCompiled,
} from "./types";

export const compileFormatRule = <T>(
  rule: FormatRule<T>,
  extraItems: ReadonlyArray<FormatItemMapper<T>> = []
): FormatRuleCompiled<T> => ({
  properties: rule.placeHolders.map<FormatField<T, number>>((placeHolder) => ({
    dataKey: placeHolder satisfies keyof T,
    placeHolder: `{${placeHolder}}`,
  })),
  itemMappers: [...getItemMappersFromRule(rule), ...extraItems].map(
    compileItemMapper
  ),
  fallbackFormat: generateFallbackFormat(rule),
  properties2: {
    numbers: [],
    strings: [],
  },
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
  return rule.properties.reduce(
    (text, field) => replacePlaceholder(text, data, field),
    baseText
  );
};

const replacePlaceholder = <Schema, Data extends Schema>(
  baseText: string,
  data: Data,
  field: FormatField<Schema, number>
): string => {
  const value = data[field.dataKey satisfies keyof Data];
  if (value === undefined || value === null) {
    return baseText;
  }
  return baseText.replaceAll(field.placeHolder, String(value));
};
