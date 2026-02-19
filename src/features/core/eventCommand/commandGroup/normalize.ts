import {
  SCRIPT_EVAL_BODY,
  COMMENT_BODY,
  SHOW_MESSAGE_BODY,
  SHOW_SCROLLING_TEXT_BODY,
  COMMENT_HEAD,
  SHOW_MESSAGE,
  SHOW_SCROLLING_TEXT,
  SCRIPT_EVAL,
} from "@RpgTypes/libs/eventCommand";
import type { EventCommand } from "@RpgTypes/rmmz";
import { createCommentGroup } from "./comment";
import { createMessageGroup } from "./message";
import { createScriptGroup } from "./script";
import { createScrollTextGroup } from "./scrollText";
import { insertSpeakerCommand } from "./speakerNameMV";

export const normalizeCommandsForMV = (list: ReadonlyArray<EventCommand>) => {
  return xxxDetail(list, (acc, command, index, input) => {
    const group = createMessageGroup(input, index);
    return [...acc, ...insertSpeakerCommand(group, () => undefined)];
  });
};

export const normalizeCommands = (list: ReadonlyArray<EventCommand>) => {
  return xxxDetail(list, messaege);
};

const xxxDetail = (
  list: ReadonlyArray<EventCommand>,
  messageFn: (
    acc: ReadonlyArray<EventCommand>,
    command: unknown,
    index: number,
    input: ReadonlyArray<EventCommand>,
  ) => EventCommand[],
): EventCommand[] => {
  const FUNCTION_TABLE: Record<
    number,
    (
      acc: EventCommand[],
      command: EventCommand,
      index: number,
      input: ReadonlyArray<EventCommand>,
    ) => EventCommand[]
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

  return list.reduce<EventCommand[]>((acc, command, index, array) => {
    const fn = FUNCTION_TABLE[command.code];
    if (fn) {
      return fn(acc, command, index, array);
    }

    return [...acc, command];
  }, []);
};

const bodyFn = (acc: EventCommand[]) => acc;

const processComment = (
  acc: ReadonlyArray<EventCommand>,
  command: unknown,
  index: number,
  input: ReadonlyArray<EventCommand>,
): EventCommand[] => {
  const group = createCommentGroup(input, index);
  return [...acc, ...group.normalizedCommands()];
};
const processScroolText = (
  acc: ReadonlyArray<EventCommand>,
  command: unknown,
  index: number,
  input: ReadonlyArray<EventCommand>,
): EventCommand[] => {
  const group = createScrollTextGroup(input, index);
  return [...acc, ...group.normalizedCommands()];
};

const processScript = (
  acc: ReadonlyArray<EventCommand>,
  command: unknown,
  index: number,
  input: ReadonlyArray<EventCommand>,
): EventCommand[] => {
  const group = createScriptGroup(input, index);
  return [...acc, ...group.normalizedCommands()];
};

const messaege = (
  acc: ReadonlyArray<EventCommand>,
  command: unknown,
  index: number,
  input: ReadonlyArray<EventCommand>,
) => {
  const group = createMessageGroup(input, index);
  return [...acc, ...group.normalizedCommands()];
};
