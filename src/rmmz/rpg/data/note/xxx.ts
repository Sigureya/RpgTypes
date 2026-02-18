import type { NoteReadResult } from "./types";

export const isNumberValueNote = (note: NoteReadResult): boolean => {
  return note.value.match(/^\s*\d+\.\d*\s*$/) !== null;
};
