import type { CompiledFormatBundle } from "./bundle";
import type {
  FormatErrorLabels,
  FormatLabelResolved,
  FormatRule,
  NamedItemSource,
  SourceKeyConcept,
} from "./core";
import { compileFormatRule } from "./core";
import type { FormatLookupKeys } from "./core/accessor";
import { detectFormatErrors } from "./core/detectErrors";
import { joinItemsSoruce } from "./joinItemsSource";

export const compileFormatBundle = <
  T extends object,
  Key,
  Source extends SourceKeyConcept
>(
  rule: FormatRule<T, Source>,
  formatList: ReadonlyArray<FormatLabelResolved<Key>>,
  namedItemSources: ReadonlyArray<NamedItemSource>,
  errorTexts: FormatErrorLabels
): CompiledFormatBundle<T, Key, Source> => {
  return {
    soruceMap: joinItemsSoruce(formatList, namedItemSources),
    errors: formatList.map((fmt) => detectFormatErrors(fmt, rule, errorTexts)),
    compiledRule: compileFormatRule(rule),
  };
};

const xxxx = <T extends object, Key, Source extends SourceKeyConcept>(
  bundle: CompiledFormatBundle<T, Key, Source>,
  data: T,
  lookup: FormatLookupKeys<T, Key>
) => {
  const key = lookup.extractMapKey(data);
  const entry = bundle.soruceMap.get(key);
};
