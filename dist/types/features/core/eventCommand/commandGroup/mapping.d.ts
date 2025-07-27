import { EventCommand } from '@sigureya/rpgtypes';
export declare const isGroupCommand: (command: EventCommand) => command is {
    parameters: [facename: string, faceIndex: number, background: number, positionType: number, speakerName: string];
    code: 101;
    indent: number;
} | {
    parameters: [speed: number, skip: boolean];
    code: 105;
    indent: number;
} | {
    parameters: [content: string];
    code: 108;
    indent: number;
} | {
    parameters: [script: string];
    code: 355;
    indent: number;
};
