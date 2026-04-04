import type { ExtractedText, ExtractedTextItem } from "./types";

export const filterNotesInExtractedText = <T>(
  list: readonly ExtractedText<T>[],
  fn: (note: ExtractedTextItem) => boolean,
): ExtractedText<T>[] => {
  return list
    .map((item): ExtractedText<T> => {
      const filteredNote = item.note.filter(fn);
      return {
        main: item.main,
        note: filteredNote,
      };
    })
    .filter(hasData);
};

const hasData = <T>(item: ExtractedText<T>): boolean => {
  return item.note.length > 0 || item.main.length > 0;
};
