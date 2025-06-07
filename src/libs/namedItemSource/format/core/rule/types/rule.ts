import type {
  FormatItemMapper,
  FormatItemMapperCompiled,
} from "./arrayWithKind";
import type { FormatProperties, FormatPropertiesCompiled } from "./direct";

export interface FormatRule<T> {
  itemMapper?: FormatItemMapper<T>;
  itemMappers?: FormatItemMapper<T>[];
  fallbackFormat?: string;
  placeHolder2?: FormatProperties<T>;
}

export interface FormatRuleCompiled<T> {
  itemMappers: FormatItemMapperCompiled<T>[];
  fallbackFormat: string;
  properties2: FormatPropertiesCompiled<T>;
}

export interface FormatCompiledSimple {
  patternCompiled: string;
  label: string;
}
