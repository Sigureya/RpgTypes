import type { Command_ChangeArmors } from "./types/armor";
import { OPERAND_VARIABLE } from "./types/constants";
import type { Command_ChangeItems } from "./types/item";
import type { Command_ChangeWeapons } from "./types/weapon";

export const isUsingVariableItemCommand = (
  command: Command_ChangeArmors | Command_ChangeItems | Command_ChangeWeapons,
): boolean => {
  return command.parameters[2] === OPERAND_VARIABLE;
};
