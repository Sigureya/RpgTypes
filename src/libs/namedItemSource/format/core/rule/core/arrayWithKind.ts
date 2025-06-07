import type { PickByTypeKeys } from "@RpgTypes/templates";

export interface FormatItemMapper<T> {
  placeHolder: string;
  kindKey: PickByTypeKeys<T, number>;
  dataIdKey: PickByTypeKeys<T, number>;
}

export interface FormatItemMapperCompiled<T> {
  placeHolder: `{${string}}`;
  kindKey: PickByTypeKeys<T, number>;
  dataIdKey: PickByTypeKeys<T, number>;
}
