import type { EventCommand } from "@RpgTypes/rmmz";
import { isCommandScriptBody, isCommandScriptHeader } from "@RpgTypes/rmmz";
import { pickCommands, CombinedEventCommandGroup } from "./core";
export const extractScriptGroup = (
  list: ReadonlyArray<EventCommand>,
  index: number
) => {
  return pickCommands(list, index, isCommandScriptHeader, isCommandScriptBody);
};
export const createScriptGroup = (
  list: ReadonlyArray<EventCommand>,
  index: number
) => {
  const { bodies, header } = extractScriptGroup(list, index);
  return new CombinedEventCommandGroup(header, bodies);
};
