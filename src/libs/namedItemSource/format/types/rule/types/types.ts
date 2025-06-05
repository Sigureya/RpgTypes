import type { PickByType } from "@RpgTypes/templates";
import type { SoruceKeyConcept, FormatItemMapper } from "./itemMappert";

type PrimitiveProperties<T> = Extract<
  keyof PickByType<T, number | string>,
  string
>;

export interface FormatRule<T, SoruceKey extends SoruceKeyConcept = never> {
  itemName: { placeHolder: string };
  placeHolders: PrimitiveProperties<T>[];
  itemMappers: FormatItemMapper<T, SoruceKey>[];
}

export interface FormatField<T> {
  dataKey: PrimitiveProperties<T>;
  placeHolder: `{${PrimitiveProperties<T>}}`;
}

export interface FormatRuleCompiled<T> {
  properties: FormatField<T>[];
  itemName: { placeHolder: `{${string}}`; dataKey: "dataId" };
}
