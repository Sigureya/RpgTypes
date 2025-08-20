import type { NoteReadResult } from "./types";

export const buildNoteString = (
  items: ReadonlyArray<NoteReadResult>
): string => {
  return items
    .reduce((acc, item): string => {
      return `${acc}\n<${item.key}:${item.value}>`;
    }, "")
    .trim();
};
