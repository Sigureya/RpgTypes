import type {
  FormatErrorLabels,
  FormatRule,
  FormatWithSource,
  Data_NamedItem,
  FormatErrorGroup,
  FormatInput,
} from "src/namedItemSource";
import {
  detectFormatErrors,
  applyFormatRule,
  compileFormatRule,
} from "src/namedItemSource";
import type { Trait } from "./types";

const RULE_TRAIT = {
  itemMapper: {
    placeHolder: "name",
    dataIdKey: "dataId",
    kindKey: "code",
    map: [],
  },
  placeHolders: ["value"],
  itemMappers: [],
} as const satisfies FormatRule<Trait>;

export const formatTraitText = (
  descriptor: FormatWithSource,
  trait: Trait,
  items: ReadonlyArray<Data_NamedItem>
): string => {
  const rule = compileFormatRule(RULE_TRAIT);
  return applyFormatRule(
    trait,
    items,
    rule,
    descriptor.pattern,
    (t) => t.dataId
  );
};

export const detectTraitFormatErrors = (
  format: FormatInput,
  errorTexts: FormatErrorLabels
): FormatErrorGroup => {
  return detectFormatErrors(format, RULE_TRAIT, errorTexts);
};
