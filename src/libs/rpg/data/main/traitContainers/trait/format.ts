import type {
  FormatError,
  FormatErrorLabels,
  FormatRule,
  FormatWithSource,
  Data_NamedItem,
} from "src/namedItemSource";
import { detectFormatErrors, applyFormatRule } from "src/namedItemSource";
import type { Trait } from "./types";

const RULE_TRAIT = {
  itemNamePlaceHolder: "name",
  placeHolders: ["value"],
} as const satisfies FormatRule<Trait>;

export const formatTraitText = (
  descriptor: FormatWithSource,
  trait: Trait,
  items: Data_NamedItem[]
): string => {
  return applyFormatRule(trait, items, RULE_TRAIT, descriptor);
};

export const detectTraitFormatErrors = (
  format: FormatWithSource,
  errorTexts: FormatErrorLabels
): FormatError[] => {
  return detectFormatErrors(format, RULE_TRAIT, errorTexts);
};
