import type { EventCommand, Provider_RpgData } from "@RpgTypes/rmmz";
import { CONDITIONAL_BRANCH } from "@RpgTypes/rmmz";
import type { InterpreterState2 } from "./types";
import { executeSideEffectCommand } from "@RpgTypes/rmmzFunctional/interpreter/command/command";
import type {
  Provider_GameObjects,
  Rmmz_GameObjects,
} from "@RpgTypes/rmmzRuntime";
import { evaluteBranchCommand } from "@RpgTypes/rmmzFunctional";

const eeeCommand = (
  mapId: number,
  state: InterpreterState2,
  commandList: ReadonlyArray<EventCommand>,
  objects: Rmmz_GameObjects,
  data: Provider_RpgData,
  p: Provider_GameObjects,
) => {
  const command = commandList[state.index];
  if (!command) {
    return {};
  }
  if (command.code === CONDITIONAL_BRANCH) {
    if (evaluteBranchCommand(mapId, command, data, p, objects)) {
      return {
        source: state.source,
        index: state.index + 1,
        indent: command.indent + 1,
      };
    }
    return skipBranchCommand(state, commandList, command.indent);
  }

  executeSideEffectCommand(command, objects, data);
};

const skipBranchCommand = (
  state: InterpreterState2,
  commandList: ReadonlyArray<EventCommand>,
  targetIndent: number,
): InterpreterState2 => {
  // eslint-disable-next-line @functional/no-loop-statements, @functional/no-let
  for (let i = state.index + 1; i < commandList.length; i++) {
    const command = commandList[i];
    if (command.indent === targetIndent) {
      return {
        source: state.source,
        index: i,
        indent: command.indent,
        waitCode: state.waitCode,
        ppResult: state.ppResult,
      };
    }
  }
  return {
    indent: 0,
    source: state.source,
    index: commandList.length,
    waitCode: 0,
    ppResult: 0,
  };
};
