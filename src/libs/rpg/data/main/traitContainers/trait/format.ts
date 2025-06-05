import type {
  FormatError,
  FormatErrorLabels,
  FormatRule,
  FormatWithSource,
  Data_NamedItem,
} from "src/namedItemSource";
import {
  detectFormatErrors,
  applyFormatRule,
  compileFormatRule,
} from "src/namedItemSource";
import type { Trait } from "./types";

const RULE_TRAIT = {
  itemName: { placeHolder: "name" },
  placeHolders: ["value"],
} as const satisfies FormatRule<Trait>;

export const formatTraitText = (
  descriptor: FormatWithSource,
  trait: Trait,
  items: ReadonlyArray<Data_NamedItem>
): string => {
  const rule = compileFormatRule(RULE_TRAIT);
  return applyFormatRule(trait, items, rule, descriptor, (t) => t.dataId);
};

export const detectTraitFormatErrors = (
  format: FormatWithSource,
  errorTexts: FormatErrorLabels
): FormatError[] => {
  return detectFormatErrors(format, RULE_TRAIT, errorTexts);
};
