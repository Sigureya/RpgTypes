import type { EventCommand2 } from "@RpgTypes/rmmz";
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
import { insertSpeakerCommand } from "./speakerNameMV";

export const normalizeCommandsForMV = (list: ReadonlyArray<EventCommand2>) => {
  return xxxDetail(list, (acc, command, index, input) => {
    const group = createMessageGroup(input, index);
    return [...acc, ...insertSpeakerCommand(group, () => undefined)];
  });
};

export const normalizeCommands = (list: ReadonlyArray<EventCommand2>) => {
  return xxxDetail(list, messaege);
};

const xxxDetail = (
  list: ReadonlyArray<EventCommand2>,
  messageFn: (
    acc: ReadonlyArray<EventCommand2>,
    command: unknown,
    index: number,
    input: ReadonlyArray<EventCommand2>
  ) => EventCommand2[]
): EventCommand2[] => {
  const FUNCTION_TABLE: Record<
    number,
    (
      acc: EventCommand2[],
      command: EventCommand2,
      index: number,
      input: ReadonlyArray<EventCommand2>
    ) => EventCommand2[]
  > = {
    [SCRIPT_EVAL_BODY]: bodyFn,
    [COMMENT_BODY]: bodyFn,
    [SHOW_MESSAGE_BODY]: bodyFn,
    [SHOW_SCROLLING_TEXT_BODY]: bodyFn,
    [COMMENT_HEAD]: processComment,
    [SHOW_MESSAGE]: messageFn,
    [SHOW_SCROLLING_TEXT]: processScroolText,
    [SCRIPT_EVAL]: processScript,
  };

  return list.reduce<EventCommand2[]>((acc, command, index, array) => {
    const fn = FUNCTION_TABLE[command.code];
    if (fn) {
      return fn(acc, command, index, array);
    }

    return [...acc, command];
  }, []);
};

const bodyFn = (acc: EventCommand2[]) => acc;

const processComment = (
  acc: ReadonlyArray<EventCommand2>,
  command: unknown,
  index: number,
  input: ReadonlyArray<EventCommand2>
): EventCommand2[] => {
  const group = createCommentGroup(input, index);
  return [...acc, ...group.normalizedCommands()];
};
const processScroolText = (
  acc: ReadonlyArray<EventCommand2>,
  command: unknown,
  index: number,
  input: ReadonlyArray<EventCommand2>
): EventCommand2[] => {
  const group = createScrollTextGroup(input, index);
  return [...acc, ...group.normalizedCommands()];
};

const processScript = (
  acc: ReadonlyArray<EventCommand2>,
  command: unknown,
  index: number,
  input: ReadonlyArray<EventCommand2>
): EventCommand2[] => {
  const group = createScriptGroup(input, index);
  return [...acc, ...group.normalizedCommands()];
};

const messaege = (
  acc: ReadonlyArray<EventCommand2>,
  command: unknown,
  index: number,
  input: ReadonlyArray<EventCommand2>
) => {
  const group = createMessageGroup(input, index);
  return [...acc, ...group.normalizedCommands()];
};
