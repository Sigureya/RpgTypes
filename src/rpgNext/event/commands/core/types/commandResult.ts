import type { EvaluteResult } from "./evaluteResult";
import type { EventState } from "./state";
import type { SideEffect, WaitXXX } from "./types";

export interface CommandExecuteResult {
  sideEffect?: SideEffect;
  wait?: WaitXXX;
  result?: EvaluteResult;
}
export interface CommandExecuteResult2 {
  sideEffect?: SideEffect;
  newState: EventState;
}
