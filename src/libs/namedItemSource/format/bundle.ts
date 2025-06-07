import type {
  SourceKeyConcept,
  FormatCompiled,
  FormatErrorGroup,
  FormatRuleCompiled,
} from "./core";

export interface CompiledFormatBundle<
  T extends object,
  Key,
  SourceKey extends SourceKeyConcept
> {
  soruceMap: Map<Key, FormatCompiled>;
  errors: FormatErrorGroup[];
  compiledRule: FormatRuleCompiled<T>;
}
