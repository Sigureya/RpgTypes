import type {
  EventCommandGroup_Message,
  EventCommandGroup_Script,
} from "@RpgTypes/features/core/eventCommand/commandGroup";
import type { ExtractCommandByParam } from "@RpgTypes/rmmz";
import { pickCommandParamString } from "@RpgTypes/rmmz/eventCommand/pickCommandParam";
import { pickSpeakerName } from "./speaker";
import type { TextCommandParameter } from "./types";

export const extractTextFromActorCommand = (
  command: ExtractCommandByParam<[number, string]>
): TextCommandParameter => {
  return pickCommandParamString(command, 1);
};

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
