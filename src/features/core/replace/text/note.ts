import type { NoteReadResult } from "@RpgTypes/rmmz";
import { replaceNote } from "@RpgTypes/rmmz";
import { replaceTextByMap } from "./utils";

export const replaceNoteTextByMap = (
  data: { note: string },
  dic: ReadonlyMap<string, string>,
  sep = "\n"
): string => {
  return replaceNote(
    data.note,
    (item: NoteReadResult): string => replaceTextByMap(item.value, dic),
    sep
  );
};
