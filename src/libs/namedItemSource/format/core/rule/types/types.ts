import type { PickByType } from "@RpgTypes/templates";
import type { FormatItemMapper, FormatItemMapperCompiled } from "./itemMappert";

type PrimitiveProperties<T> = Extract<
  keyof PickByType<T, number | string>,
  string
>;

export interface FormatRule<T> {
  itemMapper?: FormatItemMapper<T>;
  placeHolders: PrimitiveProperties<T>[];
  itemMappers?: FormatItemMapper<T>[];
  fallbackFormat?: string;
}

export interface FormatField<T> {
  dataKey: PrimitiveProperties<T>;
  placeHolder: `{${PrimitiveProperties<T>}}`;
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
