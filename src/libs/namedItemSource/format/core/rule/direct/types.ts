import type { PickByType } from "@RpgTypes/templates";

export type PrimitivePropertyKeys<T, V> = Extract<
  keyof PickByType<T, V>,
  string
>;

export interface FormatPlaceholder<T, V> {
  dataKey: PrimitivePropertyKeys<T, V>;
  placeHolder: `{${PrimitivePropertyKeys<T, V>}}`;
}
