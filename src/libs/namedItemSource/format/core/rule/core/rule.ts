import type {
  FormatItemMapper,
  FormatItemMapperCompiled,
} from "./arrayWithKind";
import type { FormatProperties, FormatPropertiesCompiled } from "./direct";

export interface FormatRule<T> {
  itemMapper?: FormatItemMapper<T>;
  itemMappers?: FormatItemMapper<T>[];
  fallbackFormat?: string;
  placeHolder?: FormatProperties<T>;
}

export interface FormatRuleCompiled<T> {
  itemMappers: FormatItemMapperCompiled<T>[];
  fallbackFormat: string;
  properties: FormatPropertiesCompiled<T>;
}

export interface FormatCompiledSimple {
  patternCompiled: string;
  label: string;
}
