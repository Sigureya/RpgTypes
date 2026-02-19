import { CONTROL_VARIABLES } from "@RpgTypes/libs/eventCommand";
import type {
  Command_ControlVariables,
  Operand_Variable,
} from "@RpgTypes/rmmz";
import { isCommandOperandVariables } from "@RpgTypes/rmmz";
import type { VariableParam, VVV } from "./types";

const rangeEx = <T>(
  command: Command_ControlVariables,
  fn: (variableId: number) => T,
): T[] => {
  const [startId, endId] = [command.parameters[0], command.parameters[1]];
  if (startId > endId) {
    return [fn(startId)];
  }
  return Array.from({ length: endId - startId + 1 }, (_, i) => fn(startId + i));
};

export const extractVariableFromControlVariables = (
  command: Command_ControlVariables,
): VVV => {
  return isCommandOperandVariables(command)
    ? fromVariable(command)
    : {
        write: writeTargets(command),
        read: [],
      };
};

const writeTargets = (command: Command_ControlVariables): VariableParam[] => {
  return rangeEx(
    command,
    (id): VariableParam => ({
      code: CONTROL_VARIABLES,
      variableId: id,
    }),
  );
};

const fromVariable = (
  command: Command_ControlVariables<Operand_Variable>,
): VVV => {
  return {
    write: writeTargets(command),
    read: [
      {
        code: CONTROL_VARIABLES,
        variableId: command.parameters[4],
      },
    ],
  };
};
