import type { EventState } from "./state";

export interface CommandExecuteResult {
  nextState: EventState;
  sideEffect?: {};
}
