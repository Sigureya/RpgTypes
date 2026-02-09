import { buildNoteFromNormalized, normalizeNote } from "./normarize";
import { makeRegex } from "./read";
import type {
  NormalizedNote,
  NoteReadResult,
  NoteReplaceHandlers,
} from "./types";

export const createNoteEntity = (key: string, value: string): string => {
  return `<${key}:${value}>`;
};

/**
 *
 * @param note
 * @param transformFunction この関数の戻り値でvalueを置き換える
 * @returns
 */
export const replaceNote = (
  note: string,
  transformFunction: (item: NoteReadResult) => string,
  sep = "\n",
): string => {
  const normalized: NormalizedNote = normalizeNote(note);
  const newItems = normalized.items.map(
    (item): NoteReadResult => ({
      key: item.key,
      value: transformFunction(item),
    }),
  );
  return buildNoteFromNormalized(
    {
      note: normalized.note,
      items: newItems,
    },
    sep,
  );
};

const xxx = (
  item: NoteReadResult,
  handlers: NoteReplaceHandlers,
): NoteReadResult => {
  if (handlers.isReplaceTargetNote(item)) {
    const newValue = handlers.replaceText(item.value);
    return {
      key: item.key,
      value: newValue ?? item.value,
    };
  }
  return item;
};

export const replaceNoteWithHandlers = (
  note: string,
  handlers: NoteReplaceHandlers,
  sep: string = `\n`,
): string => {
  const normalized: NormalizedNote = normalizeNote(note);
  const newItems = normalized.items.map((item): NoteReadResult => {
    return xxx(item, handlers);
  });
  return buildNoteFromNormalized(
    {
      note: normalized.note,
      items: newItems,
    },
    sep,
  );
};

export const getNoteValue = (
  note: string,
  targetKey: string,
): string | undefined => {
  const regex = makeRegex();
  const match = Array.from(note.matchAll(regex)).find(
    (m) => m[1] === targetKey,
  );
  return match ? match[2] : undefined;
};

export const setNoteValue = (
  note: string,
  targetKey: string,
  newValue: string,
): string => {
  const regex = makeRegex();

  return note.replace(regex, (match, key: string) => {
    if (key === targetKey) {
      return createNoteEntity(key, newValue); // 対象キーの場合のみ値を差し替え
    }
    return match; // 対象外はそのまま
  });
};
