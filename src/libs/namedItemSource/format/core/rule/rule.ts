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

export const compileFormatRule = <T, SoruceKey extends SourceKeyConcept>(
  rule: FormatRule<T, SoruceKey>
): FormatRuleCompiled<T, SoruceKey> => ({
  properties: rule.placeHolders.map<FormatField<T>>((placeHolder) => ({
    dataKey: placeHolder satisfies keyof T,
    placeHolder: `{${placeHolder}}`,
  })),
  itemMappers: getItemMappersFromRule(rule).map(compileFormatItemMapper),
  fallbackFormat: fallbackFormatPattern(rule),
});

const compileFormatItemMapper = <T, SoruceKey extends SourceKeyConcept>(
  itemMappers: FormatItemMapper<T, SoruceKey>
): FormatItemMapperCompiled<T, SoruceKey> => {
  return {
    placeHolder: `{${itemMappers.placeHolder}}`,
    kindKey: itemMappers.kindKey,
    dataIdKey: itemMappers.dataIdKey,
    map: itemMappers.map.map((pair) => ({
      kindId: pair.kindId,
      sourceId: pair.sourceId satisfies SoruceKey,
    })),
  };
};

const fallbackFormatPattern = <T>(rule: FormatRule<T>): string => {
  if (rule.fallbackFormat) {
    return rule.fallbackFormat;
  }
  const keys: ReadonlySet<string & keyof T> = getDataKeysFromFormatRule(rule);
  return Array.from(keys)
    .map((item) => `${item}:{${item}}`)
    .join(", ");
};

export const execFormatRule = <Schema, Data extends Schema>(
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
