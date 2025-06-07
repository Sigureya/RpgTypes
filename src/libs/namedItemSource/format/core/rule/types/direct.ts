import type { PickByTypeKeys } from "@RpgTypes/templates";

export interface FormatPlaceholder<T, V> {
  dataKey: PickByTypeKeys<T, V>;
  placeHolder: `{${PickByTypeKeys<T, V>}}`;
}

export interface FormatArrayInput<T, SourceId> {
  dataIdKey: PickByTypeKeys<T, number>;
  sourceId: SourceId;
}
