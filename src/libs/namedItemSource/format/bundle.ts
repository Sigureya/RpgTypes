import type {
  FormatCompiled,
  FormatErrorGroup,
  FormatRuleCompiled,
} from "./core";

export interface CompiledFormatBundle<T extends object, Key> {
  soruceMap: Map<Key, FormatCompiled>;
  errors: FormatErrorGroup[];
  compiledRule: FormatRuleCompiled<T>;
}
