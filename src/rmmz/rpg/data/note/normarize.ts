import { makeRegex, readNote } from "./read";
import type { NormalizedNote } from "./types";

export const buildNoteFromNormalized = (
  note: NormalizedNote,
  sep: string = "\n"
): string => {
  const base: string[] = note.items.map(
    (item) => `<${item.key}:${item.value}>`
  );
  return [...base, note.note].join(sep).trim();
};

export const normalizeNote = (note: string): NormalizedNote => {
  const tagRemoved = removeNoteTags(note);
  const items = readNote(note);
  return {
    note: tagRemoved,
    items: items,
  };
};

const removeNoteTags = (note: string) => {
  if (note.length >= 30000) {
    throw new Error("Note text is too long. Please shorten it.");
  }

  return note.replaceAll(makeRegex(), "");
};
