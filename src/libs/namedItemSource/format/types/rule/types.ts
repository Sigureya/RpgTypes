import type { PickByType } from "@RpgTypes/templates";

type PrimitiveProperties<T> = Extract<
  keyof PickByType<T, number | string>,
  string
>;

type NumberProperties<T> = Extract<keyof PickByType<T, number>, string>;

export type SoruceKeyConcept =
  | string
  | number
  | Record<string, string | number>;

export interface FormatRule<T, SoruceKey extends SoruceKeyConcept = never> {
  itemName: FormatItemMapper<T, SoruceKey>;
  placeHolders: PrimitiveProperties<T>[];
  itemMappers: FormatItemMapper<T, SoruceKey>[];
}

export interface FormatItemMapper<T, SoruceKey extends SoruceKeyConcept> {
  placeHolder: string;
  // 他のパラメータはこれから用意するので、書き終わるまで任意要素にする
  kindKey?: NumberProperties<T>;
  dataIdKey?: NumberProperties<T>;
  map?: [{ kindId: number; sourceId: SoruceKey }];
}

export interface FormatField<T> {
  dataKey: PrimitiveProperties<T>;
  placeHolder: `{${PrimitiveProperties<T>}}`;
}

export interface FormatRuleCompiled<T> {
  properties: FormatField<T>[];
  itemName: { placeHolder: `{${string}}`; dataKey: "dataId" };
}
