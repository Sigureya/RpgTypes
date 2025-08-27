import { Command_ShowMessageBody, Command_ShowMessageHeader, EventCommand } from '../../../../rmmz';
import { SimpleEventCommandGroup } from './core';
export declare const extractMessageGroup: (list: ReadonlyArray<EventCommand>, index: number) => {
    header: Command_ShowMessageHeader;
    bodies: Command_ShowMessageBody[];
};
export declare const createMessageGroup: (list: ReadonlyArray<EventCommand>, index: number) => SimpleEventCommandGroup<Command_ShowMessageHeader, Command_ShowMessageBody>;
