import { Command_ScriptBody, Command_ScriptHeader, EventCommand } from '../../../../rmmz';
import { CombinedEventCommandGroup } from './core';
export declare const extractScriptGroup: (list: ReadonlyArray<EventCommand>, index: number) => {
    header: Command_ScriptHeader;
    bodies: Command_ScriptBody[];
};
export declare const createScriptGroup: (list: ReadonlyArray<EventCommand>, index: number) => CombinedEventCommandGroup<Command_ScriptHeader, Command_ScriptBody>;
