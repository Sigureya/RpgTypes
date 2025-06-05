import type { FormatRule, FormatField, FormatRuleCompiled } from "./types";

export const compileFormatRule = <T>(
  rule: FormatRule<T>
): FormatRuleCompiled<T> => {
  return {
    itemName: {
      dataKey: "dataId",
      placeHolder: `{${rule.itemName.placeHolder ?? "name"}}`,
    },
    properties: rule.placeHolders.map<FormatField<T>>((placeHolder) => ({
      dataKey: placeHolder,
      placeHolder: `{${placeHolder}}`,
    })),
  };
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
  const value = data[rule.dataKey];
  if (value === undefined || value === null) {
    return baseText;
  }
  return baseText.replaceAll(rule.placeHolder, String(value));
};
