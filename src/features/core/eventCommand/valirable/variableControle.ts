import type {
  Command_ControlVariables,
  Operand_Variable,
} from "@RpgTypes/rmmz";
import { CONTROL_VARIABLES } from "@RpgTypes/rmmz";
import { isCommandOperandVariables } from "@RpgTypes/rmmz/eventCommand/commands/variable/utils";
import type { VariableParam, VVV } from "./types";

const rangeEx = <T>(
  command: Command_ControlVariables,
  fn: (variableId: number) => T
): T[] => {
  const [startId, endId] = [command.parameters[0], command.parameters[1]];
  if (startId > endId) {
    return [fn(startId)];
  }
  return Array.from({ length: endId - startId + 1 }, (_, i) => fn(startId + i));
};

export const extractVariableFromControlVariables = (
  command: Command_ControlVariables
): VVV => {
  return isCommandOperandVariables(command)
    ? vvv(command)
    : {
        write: rrr2(command),
        read: [],
      };
};

const rrr2 = (command: Command_ControlVariables): VariableParam[] => {
  return rangeEx(
    command,
    (id): VariableParam => ({
      code: CONTROL_VARIABLES,
      variableId: id,
    })
  );
};

const vvv = (command: Command_ControlVariables<Operand_Variable>): VVV => {
  return {
    write: rrr2(command),
    read: [
      {
        code: CONTROL_VARIABLES,
        variableId: command.parameters[4],
      },
    ],
  };
};
