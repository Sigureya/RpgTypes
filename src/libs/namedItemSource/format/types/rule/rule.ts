import type { PickByType } from "src/rpg";
import type { FormatRule, FormatPropety, FormatRuleCompiled } from "./types";

export const complieFormatRule = <T extends PickByType<T, string | number>>(
  rule: FormatRule<T>
): FormatRuleCompiled<T> => {
  return {
    properties: rule.placeHolders.map<FormatPropety<T>>((placeHolder) => ({
      dataKey: placeHolder,
      placeHolder: `{${placeHolder}}`,
    })),
  };
};

const replacePlaceholder = <T>(
  baseText: string,
  data: T,
  rule: FormatPropety<T>
): string => {
  const value = data[rule.dataKey];
  if (value === undefined || value === null) {
    return baseText;
  }
  return baseText.replaceAll(rule.placeHolder, String(value));
};

export const replacePlaceholders = <T>(
  baseText: string,
  data: T,
  rule: ReadonlyArray<FormatPropety<T>>
): string => {
  return rule.reduce((text, r) => replacePlaceholder(text, data, r), baseText);
};
