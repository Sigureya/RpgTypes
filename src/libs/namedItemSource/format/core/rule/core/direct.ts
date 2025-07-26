import type { PickByTypeKeys } from "src/libs/templates";

export interface FormatPlaceholder<T, V> {
  dataKey: PickByTypeKeys<T, V>;
  placeHolder: `{${PickByTypeKeys<T, V>}}`;
}

export interface FormatArrayInput<T, SourceId> {
  dataIdKey: PickByTypeKeys<T, number>;
  sourceId: SourceId;
}

export interface FormatProperties<T> {
  numbers?: PickByTypeKeys<T, number>[];
  strings?: PickByTypeKeys<T, string>[];
}
export interface FormatPropertiesCompiled<T> {
  numbers: FormatPlaceholder<T, number>[];
  strings: FormatPlaceholder<T, string>[];
}
