import type { PickByType } from "@RpgTypes/templates";

type PrimitiveProperties<T> = Extract<
  keyof PickByType<T, number | string>,
  string
>;
export interface FormatRule<T> {
  itemName: { placeHolder?: string };
  placeHolders: PrimitiveProperties<T>[];
}

export interface FormatField<T> {
  dataKey: PrimitiveProperties<T>;
  placeHolder: `{${PrimitiveProperties<T>}}`;
}

export interface FormatRuleCompiled<T> {
  properties: FormatField<T>[];
  itemName: { placeHolder: `{${string}}` };
}
