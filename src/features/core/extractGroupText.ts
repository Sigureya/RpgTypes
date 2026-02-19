import {
  SHOW_MESSAGE_BODY,
  SCRIPT_EVAL,
  SHOW_SCROLLING_TEXT_BODY,
  COMMENT_HEAD,
} from "@RpgTypes/libs/eventCommand";
import type {
  EventCommandGroup_Comment,
  EventCommandGroup_Message,
  EventCommandGroup_Script,
  EventCommandGroup_ScrollingText,
} from "./eventCommand/commandGroup";
import type { TextCommandParameter } from "./extract/text/eventCommand";
import { pickSpeakerName } from "./extract/text/eventCommand/speaker";

export const extractTextParamFromMessage = (
  messageCommand: EventCommandGroup_Message,
): Required<TextCommandParameter> => {
  return {
    code: SHOW_MESSAGE_BODY,
    paramIndex: 0,
    value: messageCommand.getBodyText(),
    speaker: pickSpeakerName(messageCommand.header),
  };
};

export const extractTextParamFromScript = (
  group: EventCommandGroup_Script,
): TextCommandParameter => {
  return {
    code: SCRIPT_EVAL,
    paramIndex: 0,
    value: group.getBodyText(),
  };
};

export const extractTextParamFromShowScrollingText = (
  group: EventCommandGroup_ScrollingText,
): TextCommandParameter => {
  return {
    code: SHOW_SCROLLING_TEXT_BODY,
    paramIndex: 0,
    value: group.getBodyText(),
  };
};

export const extractTextParamFromComment = (
  group: EventCommandGroup_Comment,
): TextCommandParameter => {
  return {
    code: COMMENT_HEAD,
    paramIndex: 0,
    value: group.getBodyText(),
  };
};
