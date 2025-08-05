import type {
  CHANGE_NAME,
  CHANGE_NICKNAME,
  CHANGE_PROFILE,
  Command_ShowChoices,
  ExtractCommandByCode,
} from "@RpgTypes/rmmz";
import type { SHOW_CHOICES } from "@RpgTypes/rmmz";
import type { CommandParameter } from "@RpgTypes/rmmz/eventCommand/pickCommandParam";
import { pickCommandParamString } from "@RpgTypes/rmmz/eventCommand/pickCommandParam";

export const extractTextFromActorCommand = (
  command: ExtractCommandByCode<
    typeof CHANGE_NICKNAME | typeof CHANGE_PROFILE | typeof CHANGE_NAME
  >
): CommandParameter<
  string,
  typeof CHANGE_NICKNAME | typeof CHANGE_PROFILE | typeof CHANGE_NAME
> => {
  return pickCommandParamString(command, 1);
};

export const extractTextParamsFromChoice = (
  command: Readonly<Command_ShowChoices>
): CommandParameter<string, typeof SHOW_CHOICES>[] => {
  return command.parameters[0].map(
    (msg, index): CommandParameter<string, typeof SHOW_CHOICES> => ({
      code: 102,
      paramIndex: index,
      value: msg,
    })
  );
};
