import type { NoteReadResult, NormalizedNote } from "@RpgTypes/rmmz";
import { buildNoteFromNormalized, normalizeNote } from "@RpgTypes/rmmz";

export const replaceNote2 = (
  data: { note: string },
  dic: ReadonlyMap<string, string>
): string => {
  const normalized: NormalizedNote = normalizeNote(data.note);
  const items: NoteReadResult[] = normalized.items.map(
    (item): NoteReadResult => ({
      key: item.key,
      value: replaceXXXX(item.value, dic),
    })
  );

  return buildNoteFromNormalized({
    note: normalized.note,
    items: items,
  });
};

export const replaceXXXX = (
  text: string,
  map: ReadonlyMap<string, string>
): string => {
  const trimedKey = text.trimEnd();
  const value = map.get(trimedKey);
  return value !== undefined ? value.trimEnd() : trimedKey;
};
