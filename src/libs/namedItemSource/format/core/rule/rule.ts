import {
  getDataKeysFromFormatRule,
  getItemMappersFromRule,
} from "./getPlaceHolders";
import type {
  FormatRule,
  FormatField,
  FormatRuleCompiled,
  SourceKeyConcept,
  FormatItemMapper,
  FormatItemMapperCompiled,
} from "./types";

export const compileFormatRule = <T, SourceKey extends SourceKeyConcept>(
  rule: FormatRule<T, SourceKey>,
  extraItems: ReadonlyArray<FormatItemMapper<T, SourceKey>> = []
): FormatRuleCompiled<T, SourceKey> => ({
  properties: rule.placeHolders.map<FormatField<T>>((placeHolder) => ({
    dataKey: placeHolder satisfies keyof T,
    placeHolder: `{${placeHolder}}`,
  })),
  itemMappers: [...getItemMappersFromRule(rule), ...extraItems].map(
    compileItemMapper
  ),
  fallbackFormat: generateFallbackFormat(rule),
});

const compileItemMapper = <T, SourceKey extends SourceKeyConcept>(
  itemMappers: FormatItemMapper<T, SourceKey>
): FormatItemMapperCompiled<T, SourceKey> => {
  return {
    placeHolder: `{${itemMappers.placeHolder}}`,
    kindKey: itemMappers.kindKey,
    dataIdKey: itemMappers.dataIdKey,
    map: itemMappers.map.map((pair) => ({
      kindId: pair.kindId,
      sourceId: pair.sourceId satisfies SourceKey,
    })),
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
    (text, r) => replacePlaceholder(text, data, r),
    baseText
  );
};

const replacePlaceholder = <Schema, Data extends Schema>(
  baseText: string,
  data: Data,
  rule: FormatField<Schema>
): string => {
  const value = data[rule.dataKey satisfies keyof Data];
  if (value === undefined || value === null) {
    return baseText;
  }
  return baseText.replaceAll(rule.placeHolder, String(value));
};
