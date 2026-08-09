import type { Rmmz_Variables } from "./types";

export const operateValue = (
  variables: Rmmz_Variables,
  operantion: number,
  operandType: 0 | 1,
  operandValue: number,
): number => {
  const value =
    operandType === 0 ? operandValue : variables.value(operandValue);
  return operantion === 0 ? value : -value;
};

export interface Provider_Target<T> {
  allMembers: () => T[];
  gameActor: (actorId: number) => T | undefined;
}
