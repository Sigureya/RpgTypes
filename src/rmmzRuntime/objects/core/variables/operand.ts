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

interface ProvideActo<T> {
  allMembers: () => T[];
  gameActor: (actorId: number) => T | undefined;
}

export const resolveTargets = <T>(
  param1: 0 | 1,
  param2: number,
  provider: ProvideActo<T>,
  variables: Rmmz_Variables,
): T[] => {
  if (param1 === 0) {
    return provider.allMembers();
  }
  const actorId = variables.value(param2);
  return actorsById(provider, actorId);
};

const actorsById = <T>(provider: ProvideActo<T>, actorId: number): T[] => {
  if (actorId === 0) {
    return provider.allMembers();
  }
  const actor = provider.gameActor(actorId);
  if (actor) {
    return [actor];
  }
  return [];
};
