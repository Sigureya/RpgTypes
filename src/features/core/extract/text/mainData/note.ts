import type { ExtractedText, ExtractedTextEntry } from "./types";

export const filterNotesInExtractedText = <T>(
  list: readonly ExtractedText<T>[],
  fn: (note: ExtractedTextEntry) => boolean,
): ExtractedText<T>[] => {
  return list
    .map((item): ExtractedText<T> => {
      const filteredNote = item.note.filter(fn);
      return {
        main: item.main,
        note: filteredNote,
        id: item.id,
        name: item.name,
      };
    })
    .filter(hasData);
};

const hasData = <T>(item: ExtractedText<T>): boolean => {
  return item.note.length > 0 || item.main.length > 0;
};
