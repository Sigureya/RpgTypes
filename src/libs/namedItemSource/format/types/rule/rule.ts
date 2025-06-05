import type { PickByType } from "src/rpg";
import type { FormatRule, FormatRuleCompiled } from "./types";

export const complieFormatRule = <T extends PickByType<T, string | number>>(
  rule: FormatRule<T>
): FormatRuleCompiled<T>[] => {
  return rule.placeHolders.map<FormatRuleCompiled<T>>((placeHolder) => ({
    dataKey: placeHolder,
    placeHolder: `{${placeHolder}}`,
  }));
};

const replacePlaceholder = <T>(
  baseText: string,
  data: T,
  rule: FormatRuleCompiled<T>
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
  rule: ReadonlyArray<FormatRuleCompiled<T>>
): string => {
  return rule.reduce((text, r) => replacePlaceholder(text, data, r), baseText);
};
