import type { PickByTypeKeys } from "@RpgTypes/templates";

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
