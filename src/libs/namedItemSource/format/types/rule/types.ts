import type { PickByType } from "src/rpg";

export interface FormatRule<T> {
  itemNamePlaceHolder?: string;
  placeHolders: Extract<keyof PickByType<T, number | string>, string>[];
}

export interface FormatRuleCompiled<T> {
  dataKey: string & keyof T;
  placeHolder: `{${string & keyof T}}`;
}
