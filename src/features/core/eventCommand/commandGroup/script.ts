import { SCRIPT_EVAL, SCRIPT_EVAL_BODY } from "@RpgTypes/libs/eventCommand";
import type {
  Command_ScriptBody,
  Command_ScriptHeader,
  EventCommand,
} from "@RpgTypes/rmmz";
import { pickCommands, CombinedEventCommandGroup } from "./core";

export const extractScriptGroup = (
  list: ReadonlyArray<EventCommand>,
  index: number,
) => {
  return pickCommands(
    list,
    index,
    (cmd): cmd is Command_ScriptHeader => cmd.code === SCRIPT_EVAL,
    (cmd): cmd is Command_ScriptBody => cmd.code === SCRIPT_EVAL_BODY,
  );
};
export const createScriptGroup = (
  list: ReadonlyArray<EventCommand>,
  index: number,
) => {
  const { bodies, header } = extractScriptGroup(list, index);
  return new CombinedEventCommandGroup(header, bodies);
};
