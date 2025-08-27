import { CommandExecuteResult } from './commandResult';
import { FunctionsTable } from './functions';
import { EventState } from './state';
export interface CommandDefine<T> {
    execute(command: T, state: EventState, func: FunctionsTable): CommandExecuteResult;
}
