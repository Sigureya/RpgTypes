import type {
  CHANGE_NAME,
  CHANGE_NICKNAME,
  CHANGE_PROFILE,
  Command_ShowChoices,
} from "@RpgTypes/rmmz";
import { SHOW_CHOICES } from "@RpgTypes/rmmz";
import { pickCommandParamString } from "@RpgTypes/rmmz/eventCommand/pickCommandParam";
import type { ExtractCommandByCode } from "dist/types";
import type { TextCommandParameter } from "./types";

export const extractTextFromActorCommand = (
  command: ExtractCommandByCode<
    typeof CHANGE_NICKNAME | typeof CHANGE_PROFILE | typeof CHANGE_NAME
  >
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
