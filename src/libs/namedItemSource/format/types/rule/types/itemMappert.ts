import type { PickByType } from "@RpgTypes/templates";

export type SoruceKeyConcept =
  | string
  | number
  | Record<string, string | number>;

type NumberProperties<T> = Extract<keyof PickByType<T, number>, string>;

export interface FormatItemMapper<T, SoruceKey extends SoruceKeyConcept> {
  placeHolder: string;
  // 他のパラメータはこれから用意するので、書き終わるまで任意要素にする
  kindKey: NumberProperties<T>;
  dataIdKey: NumberProperties<T>;
  map: [{ kindId: number; sourceId: SoruceKey }];
}

export interface FormatItemMapperCompiled<
  T,
  SoruceKey extends SoruceKeyConcept
> {
  placeHolder: `{${string}}`;
  kindKey: NumberProperties<T>;
  dataIdKey: NumberProperties<T>;
  map: { kindId: number; sourceId: SoruceKey }[];
}
