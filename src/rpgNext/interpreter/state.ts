import type { EventCommand, Provider_RpgData } from "@RpgTypes/rmmz";
import { CONDITIONAL_BRANCH, INPUT_NUMBER, SHOW_CHOICES } from "@RpgTypes/rmmz";
import type { InterpreterGGG, InterpreterState2 } from "./types";
import { executeSideEffectCommand } from "@RpgTypes/rmmzFunctional/interpreter/command/command";
import type {
  Provider_GameObjects,
  Rmmz_GameObjects,
} from "@RpgTypes/rmmzRuntime";
import { evaluteBranchCommand } from "@RpgTypes/rmmzFunctional";
import { setupChoiceNN, setupNumberInputNN } from "./message";
import { exitXXX, indexNext } from "./wait";

const runXXX = (
  xx: InterpreterGGG,
  limit: number,
  objects: Rmmz_GameObjects,
  data: Provider_RpgData,
  p: Provider_GameObjects,
): InterpreterGGG | undefined => {
  let state: InterpreterState2 = xx.state;
  for (let i = 0; i < limit; ++i) {
    const newState = eeeCommand(xx.mapId, state, xx.commands, objects, data, p);
    if (newState === undefined) {
      // メッセージ待機などの理由によりイベント実行が延期された
      return {
        commands: xx.commands,
        mapId: xx.mapId,
        sourceInfo: xx.sourceInfo,
        state: state,
      };
    }
    state = newState;
  }

  return;
};

const eeeCommand = (
  mapId: number,
  state: InterpreterState2,
  commandList: ReadonlyArray<EventCommand>,
  objects: Rmmz_GameObjects,
  data: Provider_RpgData,
  p: Provider_GameObjects,
): InterpreterState2 | undefined => {
  if (state.index >= commandList.length) {
    return exitXXX();
  }
  const command = commandList[state.index];
  if (command.code === CONDITIONAL_BRANCH) {
    if (evaluteBranchCommand(mapId, command, data, p, objects)) {
      return undefined;
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
