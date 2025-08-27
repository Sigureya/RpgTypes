import type { EventCommand } from "@RpgTypes/rmmz";
import {
  CHANGE_NAME,
  CHANGE_NICKNAME,
  CHANGE_PROFILE,
  SHOW_CHOICES,
} from "@RpgTypes/rmmz";
import type { GroopMapper } from "./eventCommand/commandGroup";
import { getGroupHandlingFunc } from "./eventCommand/commandGroup/mapping";
import type { TextCommandParameter } from "./extract/text/eventCommand";
import {
  extractTextFromActorCommand,
  extractTextParamsFromChoice,
} from "./extract/text/eventCommand";
import {
  extractTextParamFromComment,
  extractTextParamFromMessage,
  extractTextParamFromScript,
  extractTextParamFromShowScrollingText,
} from "./extractGroupText";

export const extractTextFromEventCommands = (
  list: ReadonlyArray<EventCommand>
): TextCommandParameter[] => {
  return list.reduce<TextCommandParameter[]>((acc, command, index) => {
    if (command.code === SHOW_CHOICES) {
      return [...acc, ...extractTextParamsFromChoice(command)];
    }
    const fn = getGroupHandlingFunc(command.code);
    if (fn) {
      const g2 = fn<TextCommandParameter | undefined>(list, index, groupMapper);
      if (g2 !== undefined) {
        return [...acc, g2];
      }
    }
    if (command.code === CHANGE_NICKNAME) {
      return [...acc, extractTextFromActorCommand(command)];
    }
    if (command.code === CHANGE_NAME) {
      return [...acc, extractTextFromActorCommand(command)];
    }
    if (command.code === CHANGE_PROFILE) {
      return [...acc, extractTextFromActorCommand(command)];
    }

    return acc;
  }, []);
};

const groupMapper = {
  comment: (g) => extractTextParamFromComment(g),
  showMessage: (g) => extractTextParamFromMessage(g),
  script: (group) => extractTextParamFromScript(group),
  showScrollingText: (group) => extractTextParamFromShowScrollingText(group),
} as const satisfies GroopMapper<TextCommandParameter | undefined>;
