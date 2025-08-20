import { buildNoteString } from "./build";
import { makeRegex, readNote } from "./read";
import type { NormalizedNote } from "./types";

export const normalizeNote = (note: string): NormalizedNote => {
  const tagRemoved = removeNoteTags(note);
  const items = readNote(note);
  return {
    note: tagRemoved,
    items: items,
  };
};

export const buildNoteFromNormalized = (note: NormalizedNote): string => {
  const base: string = buildNoteString(note.items);
  return [note.note, base].filter((text) => text !== "").join("\n");
};

const removeNoteTags = (note: string) => {
  if (note.length >= 30000) {
    throw new Error("Note text is too long. Please shorten it.");
  }

  return note.replaceAll(makeRegex(), "");
};
