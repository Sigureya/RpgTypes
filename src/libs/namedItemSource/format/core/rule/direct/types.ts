import type { PickByType } from "@RpgTypes/templates";

export type PrimitivePropertyKeys<T, V> = Extract<
  keyof PickByType<T, V>,
  string
>;

export interface FormatPlaceholder<T, V> {
  dataKey: PrimitivePropertyKeys<T, V>;
  placeHolder: `{${PrimitivePropertyKeys<T, V>}}`;
}

export interface FormatArrayInput<T, SourceId> {
  dataIdKey: PrimitivePropertyKeys<T, number>;
  sourceId: SourceId;
}

export interface FormatArrayIndex<T, SourceId>
  extends FormatPlaceholder<T, number> {
  dataKey: PrimitivePropertyKeys<T, number>;
  placeHolder: `{${PrimitivePropertyKeys<T, number>}}`;
  sourceId: SourceId;
}
