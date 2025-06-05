import type { PickByType } from "@RpgTypes/templates";

export interface FormatRule<T> {
  itemNamePlaceHolder?: string;
  placeHolders: Extract<keyof PickByType<T, number | string>, string>[];
}

export interface FormatField<T> {
  dataKey: string & keyof PickByType<T, number | string>;
  placeHolder: `{${string & keyof PickByType<T, number | string>}}`;
}

export interface FormatRuleCompiled<T> {
  properties: FormatField<T>[];
}
