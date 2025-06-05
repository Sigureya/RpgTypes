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

export const execFormatRule = <T>(
  baseText: string,
  data: T,
  rule: FormatRuleCompiled<T>
): string => {
  return rule.properties.reduce(
    (text, r) => replacePlaceholder(text, data, r),
    baseText
  );
};

const replacePlaceholder = <T>(
  baseText: string,
  data: T,
  rule: FormatField<T>
): string => {
  const value = data[rule.dataKey];
  if (value === undefined || value === null) {
    return baseText;
  }
  return baseText.replaceAll(rule.placeHolder, String(value));
};
