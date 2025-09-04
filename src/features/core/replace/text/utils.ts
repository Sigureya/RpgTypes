import type { NoteReadResult } from "@RpgTypes/rmmz";
import { replaceNote } from "@RpgTypes/rmmz";

export const replaceTextByMap = (
  text: string,
  map: ReadonlyMap<string, string>
): string => {
  const trimedKey = text.trimEnd();
  const value = map.get(trimedKey);
  return !!value ? value.trimEnd() : trimedKey;
};

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
