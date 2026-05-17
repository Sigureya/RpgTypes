import { makeRegex } from "./read";
import type { NoteReplaceHandlers } from "./types";

export const replaceV2 = (
  text: string,
  handlers: NoteReplaceHandlers,
): string => {
  return text.replace(makeRegex(), (match, key: string, value: string) => {
    const item = { key, value };
    if (handlers.isReplaceTargetNote(item)) {
      const replaced = handlers.replaceText(value);
      return `<${key}:${replaced ?? value}>`;
    }
    return match;
  });
};
