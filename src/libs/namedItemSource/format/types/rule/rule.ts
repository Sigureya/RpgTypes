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
): FormatRuleCompiled<T, SoruceKey> => {
  return {
    properties: rule.placeHolders.map<FormatField<T>>((placeHolder) => ({
      dataKey: placeHolder,
      placeHolder: `{${placeHolder}}`,
    })),
    itemMappers: [compileFormatItemMapper(rule.itemMapper)],
  };
};

export const compileFormatItemMapper = <T, SoruceKey extends SourceKeyConcept>(
  itemMappers: FormatItemMapper<T, SoruceKey>
): FormatItemMapperCompiled<T, SoruceKey> => {
  return {
    placeHolder: `{${itemMappers.placeHolder}}`,
    kindKey: itemMappers.kindKey,
    dataIdKey: itemMappers.dataIdKey,
    map: itemMappers.map.map((pair) => ({
      kindId: pair.kindId,
      sourceId: pair.sourceId,
    })),
  };
};

export const execFormatRule = <
  Schema,
  Data extends Schema,
  SoruceKey extends SourceKeyConcept
>(
  baseText: string,
  data: Data,
  rule: FormatRuleCompiled<Schema, SoruceKey>
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
  const value = data[rule.dataKey];
  if (value === undefined || value === null) {
    return baseText;
  }
  return baseText.replaceAll(rule.placeHolder, String(value));
};
