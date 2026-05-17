import { buildNoteFromNormalized, normalizeNote } from "./normarize";
import type { NoteReadResult, NoteReplaceHandlers } from "./types";

interface State {
  hasTarget: boolean;
  items: NoteReadResult[];
}

export const replaceNoteWithHandlers = (
  text: string,
  handlers: NoteReplaceHandlers,
  sep = "\n",
): string => {
  const normalized = normalizeNote(text);
  const replaced = normalized.items.reduce<State>(
    (acc, item) => {
      const target = handlers.isReplaceTargetNote(item);
      const newItem: NoteReadResult = target
        ? {
            key: item.key,
            value: handlers.replaceText(item.value) ?? item.value,
          }
        : item;
      acc.items.push(newItem);
      acc.hasTarget = acc.hasTarget || target;
      return acc;
    },
    {
      hasTarget: false,
      items: [],
    },
  );

  if (!replaced.hasTarget) {
    return text;
  }

  return buildNoteFromNormalized(
    {
      note: normalized.note,
      items: replaced.items,
    },
    sep,
  );
};
