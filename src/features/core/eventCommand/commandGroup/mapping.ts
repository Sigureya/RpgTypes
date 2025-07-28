import type { EventCommand } from "@RpgTypes/rmmz";
import {
  COMMENT_HEAD,
  SCRIPT_EVAL,
  SHOW_MESSAGE,
  SHOW_SCROLLING_TEXT,
} from "@RpgTypes/rmmz";
import { createCommentGroup } from "./comment";
import type { GroopMapper } from "./core";
import { createMessageGroup } from "./message";
import { createScriptGroup } from "./script";
import { createScrollTextGroup } from "./scrollText";

export const isGroupCommand = (command: EventCommand) => {
  return (
    command.code === SHOW_MESSAGE ||
    command.code === SCRIPT_EVAL ||
    command.code === COMMENT_HEAD ||
    command.code === SHOW_SCROLLING_TEXT
  );
};

const xxxx = <T>(
  array: EventCommand[],
  index: number,
  mapper: GroopMapper<T | undefined>
) => {
  const command = array[index];
  if (!command) {
    return;
  }
  if (command.code === SHOW_MESSAGE) {
    return mapper.showMessage(createMessageGroup(array, index), index, array);
  }
  if (command.code === SCRIPT_EVAL) {
    return mapper.script(createScriptGroup(array, index), index, array);
  }
  if (command.code === COMMENT_HEAD) {
    return mapper.comment(createCommentGroup(array, index), index, array);
  }
};
