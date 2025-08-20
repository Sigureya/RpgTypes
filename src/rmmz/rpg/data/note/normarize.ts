import { buildNoteString } from "./build";
import { makeRegex, readNote } from "./read";
import type { NoteReadResult } from "./types";

export interface NormalizedNote {
  note: string;
  items: NoteReadResult[];
}

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
  return `${note.note}\n${base}`;
};

const removeNoteTags = (note: string) => {
  if (note.length >= 30000) {
    throw new Error("Note text is too long. Please shorten it.");
  }

  return note.replaceAll(makeRegex(), "");
};
