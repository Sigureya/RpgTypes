import type { PickByType, PickByTypeKeys } from "@RpgTypes/libs/templates";

export type TextExtractable<T> = PickByType<T, string> & {
  id: number;
  note: string;
};

export type ExtractedText<T> = {
  main: ExtractedTextProperty<T>[];
  note: ExtractedTextItem[];
};

export interface ExtractedTextItem {
  key: string;
  text: string;
  id: number;
}

export interface ExtractedTextProperty<T> {
  key: PickByTypeKeys<T, string>;
  text: string;
  id: number;
}
