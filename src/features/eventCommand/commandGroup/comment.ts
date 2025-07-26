import type {
  Command_CommentBody,
  EventCommand,
  EventCommandLike,
  Command_CommentHeader,
} from "@RpgTypes/rmmz";
import {
  COMMENT_BODY,
  isCommandCommentBody,
  isCommandCommentHeader,
} from "@RpgTypes/rmmz";
import type { EventCommandGroup_Comment } from "./core";
import {
  SimpleEventCommandGroup,
  CombinedEventCommandGroup,
  pickCommands,
} from "./core";

export const extractCommentGroup = (
  list: ReadonlyArray<EventCommand>,
  index: number
) => {
  return pickCommands(
    list,
    index,
    isCommandCommentHeader,
    isCommandCommentBody
  );
};

export const createCommentGroup = (
  list: ReadonlyArray<EventCommand>,
  index: number
): EventCommandGroup_Comment => {
  const { bodies, header } = extractCommentGroup(list, index);
  if (isChoiceHelp(header)) {
    return new SimpleEventCommandGroup<
      Command_CommentHeader,
      Command_CommentBody
    >(COMMENT_BODY, header, bodies);
  }
  return new CombinedEventCommandGroup(header, bodies);
};

/**
 * @description 『MPP_ChoiceEx.js』に対応するための特殊文字列
 */
export const CHOICE_HELP_TEXT = "選択肢ヘルプ" as const;

export interface CommandEX_ChoiceHelp extends EventCommandLike<108> {
  parameters: [typeof CHOICE_HELP_TEXT];
}

export const isChoiceHelp = (
  command: Command_CommentHeader
): command is Command_CommentHeader & CommandEX_ChoiceHelp => {
  return command.parameters[0] === CHOICE_HELP_TEXT;
};
