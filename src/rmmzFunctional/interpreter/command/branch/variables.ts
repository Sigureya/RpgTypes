import type {
  BranchParam_VariableWithOperandConstant,
  BranchParam_VariableWithOperandVariable,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_Variables } from "@RpgTypes/rmmzRuntime";

export const evaluteBranchByVariable = (
  parameters:
    | BranchParam_VariableWithOperandConstant
    | BranchParam_VariableWithOperandVariable,
  variables: Rmmz_Variables,
): boolean => {
  const leftValue = variables.value(parameters[1]);
  const rightValue =
    parameters[2] === 0 ? parameters[3] : variables.value(parameters[3]);

  switch (parameters[4]) {
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
