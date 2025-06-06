import type {
  FormatErrorLabels,
  FormatLabelResolved,
  FormatRule,
  FormatWithSource,
  SourceIdentifier,
  SourceKeyConcept,
} from "./core";
import { compileFormatRule } from "./core";
import { detectFormatErrors } from "./core/detectErrors";

const compile = <T extends object, Key, S extends SourceKeyConcept>(
  rule: FormatRule<T, S>,
  formats: ReadonlyArray<FormatLabelResolved<Key>>,
  errorTexts: FormatErrorLabels
) => {
  const compiledRule = compileFormatRule(rule);
  formats.flatMap((fmt) => {
    return detectFormatErrors(fmt, rule, errorTexts);
  });
};
