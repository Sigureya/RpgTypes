import type { EvaluteResult } from "./evaluteResult";
import type { SideEffect, WaitXXX } from "./types";

export interface CommandExecuteResult {
  sideEffect?: SideEffect;
  wait?: WaitXXX;
  result?: EvaluteResult;
}
