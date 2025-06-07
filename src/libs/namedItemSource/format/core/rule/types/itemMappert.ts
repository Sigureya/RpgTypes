import type { PickByType } from "@RpgTypes/templates";

export type SourceKeyConcept =
  | string
  | number
  | Record<string, string | number>;

type NumberProperties<T> = Extract<keyof PickByType<T, number>, string>;

export interface FormatItemMapper<T> {
  placeHolder: string;
  // 他のパラメータはこれから用意するので、書き終わるまで任意要素にする
  kindKey: NumberProperties<T>;
  dataIdKey: NumberProperties<T>;
}

export interface FormatItemMapperCompiled<T> {
  placeHolder: `{${string}}`;
  kindKey: NumberProperties<T>;
  dataIdKey: NumberProperties<T>;
}
