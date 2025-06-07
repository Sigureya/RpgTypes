import type { PickByTypeKeys } from "@RpgTypes/templates";
import type {
  FormatItemMapper,
  FormatItemMapperCompiled,
} from "./arrayWithKind";
import type {
  FormatPlaceholder,
  FormatProperties,
  FormatPropertiesCompiled,
} from "./direct";

export interface FormatRule<T> {
  itemMapper?: FormatItemMapper<T>;
  placeHolders: PickByTypeKeys<T, number>[];
  itemMappers?: FormatItemMapper<T>[];
  fallbackFormat?: string;
  placeHolder2?: FormatProperties<T>;
}

export interface FormatRuleCompiled<T> {
  properties: FormatPlaceholder<T, number>[];
  itemMappers: FormatItemMapperCompiled<T>[];
  fallbackFormat: string;
  properties2: FormatPropertiesCompiled<T>;
}

export interface FormatCompiledSimple {
  patternCompiled: string;
  label: string;
}
