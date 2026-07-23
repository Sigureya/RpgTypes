import type { Command_BranchByVariable } from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_Variables } from "@RpgTypes/rmmzRuntime";

export const evaluteBranchByVariable = (
  command: Command_BranchByVariable,
  variables: Rmmz_Variables,
): boolean => {
  const leftValue = variables.value(command.parameters[1]);
  const rightValue =
    command.parameters[2] === 0
      ? command.parameters[3]
      : variables.value(command.parameters[3]);

  switch (command.parameters[4]) {
    case 0:
      return leftValue === rightValue;
    case 1:
      return leftValue >= rightValue;
    case 2:
      return leftValue <= rightValue;
    case 3:
      return leftValue > rightValue;
    case 4:
      return leftValue < rightValue;
    case 5:
      return leftValue !== rightValue;
    default:
      return false;
  }
};
