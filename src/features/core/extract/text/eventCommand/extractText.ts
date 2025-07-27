import type { ExtractCommandByParam } from "@RpgTypes/rmmz";
import { pickCommandParamString } from "@RpgTypes/rmmz/eventCommand/pickCommandParam";
import type { TextCommandParameter } from "./types";

export const extractTextFromActorCommand = (
  command: ExtractCommandByParam<[number, string]>
): TextCommandParameter => {
  return pickCommandParamString(command, 1);
};
