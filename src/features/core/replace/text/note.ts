import type { NoteReadResult } from "@RpgTypes/rmmz";
import { replaceNote } from "@RpgTypes/rmmz";
import { replaceTextByFunction } from "./utils";

export const replaceNoteTextByMap = (
  data: { note: string },
  dic: ReadonlyMap<string, string>,
  sep = "\n"
): string => {
  return replaceNoteTextByFunction(
    data,
    (key: string): string | undefined => dic.get(key),
    sep
  );
};

export const replaceNoteTextByFunction = (
  data: { note: string },
  replaceFn: (key: string) => string | undefined,
  sep = "\n"
): string => {
  return replaceNote(
    data.note,
    (item: NoteReadResult): string =>
      replaceTextByFunction(item.value, replaceFn),
    sep
  );
};
