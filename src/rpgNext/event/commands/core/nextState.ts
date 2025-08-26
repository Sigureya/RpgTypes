import { updateLocalVariable } from "./localValiable";
import type { NewComamnd } from "./types/command";
import type { CommandDefine } from "./types/define";
import type { FunctionsTable } from "./types/functions";
import type { EventLoaclVariables, EventState } from "./types/state";
import type { SideEffect, WaitXXX } from "./types/types";

export const updateState = (
  commands: ReadonlyArray<NewComamnd>,
  state: EventState,
  func: FunctionsTable,
  commandTable: ReadonlyMap<string, CommandDefine<object>>
) => {
  const waitUpdated: EventState = updateWait(state, (w) => func.wait(w));
  if (waitUpdated.wait === null) {
    return waitUpdated;
  }
  const nextIndex = waitUpdated.currentIndex + 1;
  const command = commands[nextIndex];
  if (command === undefined) {
    return waitUpdated;
  }
  return writeResult(nextIndex, command, waitUpdated, func, commandTable);
};

const writeResult = (
  nextIndex: number,
  command: NewComamnd,
  state: EventState,
  func: FunctionsTable,
  commandTable: ReadonlyMap<string, CommandDefine<object>>
): { newState: EventState; sideEffect?: SideEffect; error?: string } => {
  const def = commandTable.get(command.code);
  if (def === undefined) {
    throw new Error(`Undefined command code: ${command.code}`);
  }
  const { result, sideEffect, wait } = def.execute(command, state, func);

  const local: EventLoaclVariables =
    result === undefined
      ? state.localValiables
      : updateLocalVariable(command.vvv, state.localValiables, result);

  return {
    sideEffect: sideEffect,
    newState: {
      ...state,
      currentIndex: nextIndex,
      wait: wait === undefined ? null : wait,
      localValiables: local,
    },
  };
};

const updateWait = (
  state: EventState,
  waitXX: (wait: WaitXXX) => boolean
): EventState => {
  if (state.wait === null) {
    return state;
  }
  if (waitXX(state.wait)) {
    return {
      ...state,
      wait: {
        ...state.wait,
        count: state.wait.count + 1,
      },
    };
  }
  return endWaiting(state);
};

const endWaiting = (state: EventState): EventState => {
  return {
    ...state,
    wait: null,
  };
};
