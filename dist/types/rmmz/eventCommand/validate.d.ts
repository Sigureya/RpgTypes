import { CommandUnion_ChangeActorText, Command_ScrollTextHeader, Command_CommonEvent } from './commands';
import { CommandUnion_EmptyParam, CommandUnion_TextBody } from './unionTypes';
export declare const isCommandChangeActorText: (data: unknown) => data is CommandUnion_ChangeActorText;
export declare const isCommandScrollTextHead: (data: unknown) => data is Command_ScrollTextHeader;
export declare const isCommandNonParam: (data: unknown) => data is CommandUnion_EmptyParam;
export declare const isCommandTextBody: (command: unknown) => command is CommandUnion_TextBody;
export declare const isCommandCommonEvent: (data: unknown) => data is Command_CommonEvent;
