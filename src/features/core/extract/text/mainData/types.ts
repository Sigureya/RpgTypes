import type { PickByType } from "@RpgTypes/libs/templates";

export interface ExtractedTextItem {
  key: string;
  text: string;
  id: number;
}

export interface ExtractedText {
  main: ExtractedTextItem[];
  note: ExtractedTextItem[];
}

export type TextExtractable<T> = PickByType<T, string> & {
  id: number;
  note: string;
};
