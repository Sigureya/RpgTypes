import type { PickByTypeKeys } from "@RpgTypes/templates";

export interface FormatPlaceholder<T, V> {
  dataKey: PickByTypeKeys<T, V>;
  placeHolder: `{${PickByTypeKeys<T, V>}}`;
}

export interface FormatArrayInput<T, SourceId> {
  dataIdKey: PickByTypeKeys<T, number>;
  sourceId: SourceId;
}

export interface FormatArrayIndex<T, SourceId>
  extends FormatPlaceholder<T, number> {
  dataKey: PickByTypeKeys<T, number>;
  placeHolder: `{${PickByTypeKeys<T, number>}}`;
  sourceId: SourceId;
}
export interface FormatItemMapper2<T> {
  placeHolder: string;
  kindKey: PickByTypeKeys<T, number>;
  dataIdKey: PickByTypeKeys<T, number>;
}

export interface FormatItemMapperCompiled2<T> {
  placeHolder: `{${string}}`;
  kindKey: PickByTypeKeys<T, number>;
  dataIdKey: PickByTypeKeys<T, number>;
}
