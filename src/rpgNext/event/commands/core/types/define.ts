import type { CommandExecuteResult } from "./commandResult";
import type { FunctionsTable } from "./functions";
import type { EventState } from "./state";

export interface CommandDefine<T> {
  execute(
    command: T,
    state: EventState,
    func: FunctionsTable
  ): CommandExecuteResult;
}
