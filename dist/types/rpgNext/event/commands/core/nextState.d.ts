import { NewComamnd } from './types/command';
import { CommandExecuteResult2 } from './types/commandResult';
import { CommandDefine } from './types/define';
import { FunctionsTable } from './types/functions';
import { EventState } from './types/state';
import { SideEffect } from './types/types';
export declare const updateState: (commands: ReadonlyArray<NewComamnd>, state: EventState, func: FunctionsTable, commandTable: ReadonlyMap<string, CommandDefine<object>>) => CommandExecuteResult2;
export declare const writeResult: (nextIndex: number, command: NewComamnd, state: EventState, func: FunctionsTable, commandTable: ReadonlyMap<string, CommandDefine<object>>) => {
    newState: EventState;
    sideEffect?: SideEffect;
};
