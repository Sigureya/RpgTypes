import type { CommandExecuteResult } from "./commandResult";
import type { CommandTrait } from "./commandTrait";
import type { FunctionsTable } from "./functions";
import type { EventState } from "./state";

export interface CommandDefine<T> {
  isCommand(data: unknown): data is T;
  commandTrait(command: T): CommandTrait;
  execute(
    state: EventState,
    command: T,
    func: FunctionsTable
  ): CommandExecuteResult;
}
