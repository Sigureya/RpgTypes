import type { CommandExecuteResult } from "./commandResult";
import type { CommandTrait } from "./commandTrait";
import type { EvaluteResult } from "./evaluteResult";
import type { FunctionsTable } from "./functions";
import type { EventState } from "./state";
import type { WaitXXX, SideEffect } from "./types";

export interface CommandDefine<T> {
  createDefaultCommand?(): T;

  isCommand?(data: unknown): data is T;
  commandTrait?(command: T): CommandTrait;
  execute(
    command: T,
    state: EventState,
    func: FunctionsTable
  ): CommandExecuteResult;
  // wait?(command: T): WaitXXX;
  // sideEffect?(command: T): SideEffect;
  // evaluete?(command: T, state: EventState, func: FunctionsTable): EvaluteResult;
}
