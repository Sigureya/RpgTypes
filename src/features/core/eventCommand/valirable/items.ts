import { CHANGE_WEAPONS } from "@RpgTypes/libs/eventCommand";
import type { Command_ChangeItemsByVariable } from "@RpgTypes/rmmz";
import type { VVV } from "./types";

export const extractVariableGainItem = (
  command: Command_ChangeItemsByVariable,
): VVV => {
  return {
    write: [{ code: CHANGE_WEAPONS, variableId: command.parameters[2] }],
    read: [],
  };
};
