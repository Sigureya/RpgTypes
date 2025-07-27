import { EventCommand } from '../../../../rmmz';
import { CombinedEventCommandGroup } from './core';
export declare const extractScriptGroup: (list: ReadonlyArray<EventCommand>, index: number) => {
    header: import('../../../../rmmz').Command_ScriptHeader;
    bodies: import('../../../../rmmz').Command_ScriptBody[];
};
export declare const createScriptGroup: (list: ReadonlyArray<EventCommand>, index: number) => CombinedEventCommandGroup<import('../../../../rmmz').Command_ScriptHeader, import('../../../../rmmz').Command_ScriptBody>;
