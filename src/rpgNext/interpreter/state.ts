import type { EventCommand, Provider_RpgData } from "@RpgTypes/rmmz";
import { CONDITIONAL_BRANCH, INPUT_NUMBER, SHOW_CHOICES } from "@RpgTypes/rmmz";
import type { InterpreterState2 } from "./types";
import { executeSideEffectCommand } from "@RpgTypes/rmmzFunctional/interpreter/command/command";
import type {
  Provider_GameObjects,
  Rmmz_GameObjects,
} from "@RpgTypes/rmmzRuntime";
import { evaluteBranchCommand } from "@RpgTypes/rmmzFunctional";
import { setupChoiceNN, setupNumberInputNN } from "./message";
import { exitXXX, indexNext } from "./wait";

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
        index: state.index + 1,
        indent: command.indent + 1,
      };
    }
    return skipBranchCommand(state, commandList, command.indent);
  }
  if (command.code === SHOW_CHOICES) {
    return setupChoiceNN(state, command, objects.message);
  }
  if (command.code === INPUT_NUMBER) {
    return setupNumberInputNN(state, command, objects.message);
  }
  executeSideEffectCommand(command, objects, data);
  return indexNext(state);
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
        index: i,
        indent: command.indent,
        waitCode: state.waitCode,
        ppResult: state.ppResult,
      };
    }
  }
  return exitXXX();
};
