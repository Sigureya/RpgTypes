import { EventCommand, Command_ShowMessageBody, Command_ShowMessageHeader } from '../../../rmmz';
import { SimpleEventCommandGroup } from './core';
export declare const extractMessageGroup: (list: ReadonlyArray<EventCommand>, index: number) => {
    header: {
        parameters: [facename: string, faceIndex: number, background: number, positionType: number, speakerName: string];
        code: 101;
        indent: number;
    };
    bodies: {
        parameters: [content: string];
        code: 401;
        indent: number;
    }[];
};
export declare const createMessageGroup: (list: ReadonlyArray<EventCommand>, index: number) => SimpleEventCommandGroup<Command_ShowMessageHeader, Command_ShowMessageBody>;
