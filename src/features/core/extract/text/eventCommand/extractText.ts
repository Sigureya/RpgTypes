import type {
  Command_ShowChoices,
  ExtractCommandByParam,
} from "@RpgTypes/rmmz";
import { SHOW_CHOICES } from "@RpgTypes/rmmz";
import { pickCommandParamString } from "@RpgTypes/rmmz/eventCommand/pickCommandParam";
import type { TextCommandParameter } from "./types";

export const extractTextFromActorCommand = (
  command: ExtractCommandByParam<[number, string]>
): TextCommandParameter => {
  return pickCommandParamString(command, 1);
};

export const extractTextParamsFromChoice = (
  command: Readonly<Command_ShowChoices>
): TextCommandParameter[] => {
  return command.parameters[0].map<TextCommandParameter>((msg, index) => ({
    code: SHOW_CHOICES,
    paramIndex: index,
    value: msg,
  }));
};
