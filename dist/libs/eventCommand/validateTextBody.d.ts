import { Command_ShowMessageBody, Command_CommentBody, Command_CommentHeader, Command_ScrollTextBody, Command_ScriptHeader, Command_ScriptBody } from './commands';
export declare const isCommandShowMessageBody: (command: unknown) => command is Command_ShowMessageBody;
export declare const isCommandShowScrollingTextBody: (command: unknown) => command is Command_ScrollTextBody;
export declare const isCommandCommentHeader: (command: unknown) => command is Command_CommentHeader;
export declare const isCommandCommentBody: (command: unknown) => command is Command_CommentBody;
export declare const isCommandScriptHeader: (command: unknown) => command is Command_ScriptHeader;
export declare const isCommandScriptBody: (command: unknown) => command is Command_ScriptBody;
