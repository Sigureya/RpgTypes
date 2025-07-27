import type {
  EventCommandGroup_Message,
  EventCommandGroup_Script,
} from "./eventCommand/commandGroup";
import type { TextCommandParameter } from "./extract/text/eventCommand";
import { pickSpeakerName } from "./extract/text/eventCommand/speaker";

export const extractTextParamFromMessage = (
  messageCommand: EventCommandGroup_Message
): Required<TextCommandParameter> => {
  return {
    code: messageCommand.bodyCode,
    paramIndex: 0,
    value: messageCommand.getBodyText(),
    speaker: pickSpeakerName(messageCommand.header),
  };
};

export const extractTextParamFromScript = (
  group: EventCommandGroup_Script
): TextCommandParameter => {
  return {
    code: group.header.code,
    paramIndex: 0,
    value: group.getBodyText(),
  };
};
