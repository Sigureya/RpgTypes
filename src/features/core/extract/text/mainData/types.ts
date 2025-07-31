import type { PickByType } from "@RpgTypes/libs/templates";

export interface ExtractedTextItem<Key extends string = string> {
  key: Key;
  text: string;
  id: number;
}

export interface ExtractedText<T> {
  main: ExtractedTextItem<Extract<keyof T, string>>[];
  note: ExtractedTextItem[];
}

export type TextExtractable<T> = PickByType<T, string> & {
  id: number;
  note: string;
};
