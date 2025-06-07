import type { PickByTypeKeys } from "@RpgTypes/templates";
import type {
  FormatItemMapper,
  FormatItemMapperCompiled,
} from "./arrayWithKind";

export interface FormatRule<T> {
  itemMapper?: FormatItemMapper<T>;
  placeHolders: PickByTypeKeys<T, number>[];
  itemMappers?: FormatItemMapper<T>[];
  fallbackFormat?: string;
  placeHolder2?: PPP<T>;
}

export interface FormatField<T, V = string | number> {
  dataKey: PickByTypeKeys<T, V>;
  placeHolder: `{${PickByTypeKeys<T, V>}}`;
}

interface PPP<T> {
  numbers?: PickByTypeKeys<T, number>[];
  strings?: PickByTypeKeys<T, string>[];
}
interface PPPCompiled<T> {
  numbers: FormatField<T, number>[];
  strings: FormatField<T, string>[];
}

export interface FormatRuleCompiled<T> {
  properties: FormatField<T, number>[];
  itemMappers: FormatItemMapperCompiled<T>[];
  fallbackFormat: string;
  properties2: PPPCompiled<T>;
}

export interface FormatCompiledSimple {
  patternCompiled: string;
  label: string;
}
