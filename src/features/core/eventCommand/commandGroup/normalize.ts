import type { EventCommand } from "@RpgTypes/rmmz";
import {
  COMMENT_HEAD,
  COMMENT_BODY,
  SHOW_MESSAGE,
  SHOW_SCROLLING_TEXT_BODY,
  SCRIPT_EVAL,
  SHOW_SCROLLING_TEXT,
  SHOW_MESSAGE_BODY,
  SCRIPT_EVAL_BODY,
} from "@RpgTypes/rmmz";
import { createCommentGroup } from "./comment";
import { createMessageGroup } from "./message";
import { createScriptGroup } from "./script";
import { createScrollTextGroup } from "./scrollText";

export const normalizeCommands = (list: ReadonlyArray<EventCommand>) => {
  return list.reduce<EventCommand[]>((acc, command, index, array) => {
    const fn = FUNCTION_TABLE[command.code];
    if (fn) {
      return fn(acc, command, index, array);
    }

    return [...acc, command];
  }, []);
};

const FUNCTION_TABLE: Record<
  number,
  (
    acc: EventCommand[],
    command: EventCommand,
    index: number,
    input: ReadonlyArray<EventCommand>
  ) => EventCommand[]
> = {
  [SCRIPT_EVAL_BODY]: (acc) => acc,
  [COMMENT_BODY]: (acc) => acc,
  [SHOW_MESSAGE_BODY]: (acc) => acc,
  [SHOW_SCROLLING_TEXT_BODY]: (acc) => acc,
  [COMMENT_HEAD]: (acc, command, index, input) => {
    const group = createCommentGroup(input, index);
    return [...acc, ...group.normalizedCommands()];
  },
  [SHOW_MESSAGE]: (acc, command, index, input) => {
    const group = createMessageGroup(input, index);
    return [...acc, ...group.normalizedCommands()];
  },
  [SHOW_SCROLLING_TEXT]: (acc, command, index, input) => {
    const group = createScrollTextGroup(input, index);
    return [...acc, ...group.normalizedCommands()];
  },
  [SCRIPT_EVAL]: (acc, command, index, input) => {
    const group = createScriptGroup(input, index);
    return [...acc, ...group.normalizedCommands()];
  },
};
