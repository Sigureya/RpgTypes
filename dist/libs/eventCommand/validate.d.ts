import { CommandUnion_AnyAudio, Command2_CommonEvent, Command2_ShowChoices, Command2_ShowChoiceItem, Command2_InputNumber, Command_ShowMessageHeader, CommandUnion_TextBody } from './commands';
export declare const isCommandTextBody: (command: unknown) => command is CommandUnion_TextBody;
export declare const isCommandAudio: (data: unknown) => data is CommandUnion_AnyAudio;
export declare const isCommandCommonEvent: (data: unknown) => data is Command2_CommonEvent;
export declare const isCommandShowChoices: (data: unknown) => data is Command2_ShowChoices;
export declare const isCommandShowChoiceItem: (data: unknown) => data is Command2_ShowChoiceItem;
export declare const isCommandInputNumber: (data: unknown) => data is Command2_InputNumber;
export declare const isCommandShowMessage: (data: unknown) => data is Command_ShowMessageHeader;
