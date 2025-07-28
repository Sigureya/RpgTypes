import type { EventCommand } from "@RpgTypes/rmmz";
import {
  COMMENT_HEAD,
  SHOW_MESSAGE,
  SCRIPT_EVAL,
  SHOW_SCROLLING_TEXT,
  SHOW_MESSAGE_BODY,
} from "@RpgTypes/rmmz";
import { createCommentGroup } from "./comment";
import { createMessageGroup } from "./message";
import { createScriptGroup } from "./script";
import { createScrollTextGroup } from "./scrollText";

export const normalizeCommands = (list: ReadonlyArray<EventCommand>) => {
  return list.reduce<EventCommand[]>((acc, command, index, array) => {
    if (command.code === COMMENT_HEAD) {
      const group = createCommentGroup(array, index);
      return [...acc, ...group.normalizedCommands()];
    }
    if (command.code === SHOW_MESSAGE_BODY) {
      return acc;
    }
    if (command.code === SHOW_MESSAGE) {
      const group = createMessageGroup(array, index);
      return [...acc, ...group.normalizedCommands()];
    }
    if (command.code === SHOW_SCROLLING_TEXT) {
      const group = createScrollTextGroup(array, index);
      return [...acc, ...group.normalizedCommands()];
    }
    if (command.code === SCRIPT_EVAL) {
      const group = createScriptGroup(array, index);
      return [...acc, ...group.normalizedCommands()];
    }
    return [...acc, command];
  }, []);
};
