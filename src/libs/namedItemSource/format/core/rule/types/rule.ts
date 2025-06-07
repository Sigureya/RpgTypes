import type { PickByTypeKeys } from "@RpgTypes/templates";
import type {
  FormatItemMapper,
  FormatItemMapperCompiled,
} from "./arrayWithKind";

export interface FormatRule<T> {
  itemMapper?: FormatItemMapper<T>;
  placeHolders: PickByTypeKeys<T, number | string>[];
  itemMappers?: FormatItemMapper<T>[];
  fallbackFormat?: string;
}

export interface FormatField<T> {
  dataKey: PickByTypeKeys<T, number | string>;
  placeHolder: `{${PickByTypeKeys<T, number | string>}}`;
}

export interface FormatRuleCompiled<T> {
  properties: FormatField<T>[];
  itemMappers: FormatItemMapperCompiled<T>[];
  fallbackFormat: string;
}

export interface FormatCompiledSimple {
  patternCompiled: string;
  label: string;
}
