import { Command_ShowMessageHeader, Command_ChangeActorName, Command_ChangeActorProfile, Command_ChangeActorNickName, Command_ShowMessageBody, Command_ShowChoices, Command_CommentHeader, Command_CommentBody, Command_ScrollTextBody, EventCommand } from '../../../../rmmz';
export declare const replaceEventCommandTexts: (list: ReadonlyArray<EventCommand>, map: ReadonlyMap<string, string>) => EventCommand[];
export declare const replaceTextForCommand: <Command extends Command_ShowMessageBody | Command_CommentHeader | Command_CommentBody | Command_ScrollTextBody>(command: Command, map: ReadonlyMap<string, string>) => {
    code: 108 | 408 | 405 | 401;
    indent: number;
    parameters: [string];
};
export declare const replaceTextForCommandShowMessage: (command: Command_ShowMessageHeader, map: ReadonlyMap<string, string>) => Command_ShowMessageHeader;
export declare const replaceTextForCommandActor: <Command extends Command_ChangeActorName | Command_ChangeActorProfile | Command_ChangeActorNickName>(command: Command, map: ReadonlyMap<string, string>) => {
    code: 320 | 324 | 325;
    indent: number;
    parameters: [number, string];
};
export declare const replaceTextForCommandShowChoices: (command: Command_ShowChoices, map: ReadonlyMap<string, string>) => Command_ShowChoices;
