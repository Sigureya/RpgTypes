import type { Command_ControlVariables } from "@RpgTypes/rmmz";

export const range = (command: Command_ControlVariables): number[] => {
  return rangeEx(command, (id): number => id);
};

export const rangeEx = <T>(
  command: Command_ControlVariables,
  fn: (variableId: number) => T
): T[] => {
  const [startId, endId] = [command.parameters[0], command.parameters[1]];
  if (startId > endId) {
    return [fn(startId)];
  }
  return Array.from({ length: endId - startId + 1 }, (_, i) => fn(startId + i));
};
