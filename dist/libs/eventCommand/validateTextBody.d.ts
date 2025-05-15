import { Command2_ShowMessageBody, Command2_CommentBody, Command_CommentHeader, Command2_ScrollTextBody, Command2_ScriptHeader, Command2_ScriptBody } from './commands';
export declare const isCommandShowMessageBody: (command: unknown) => command is Command2_ShowMessageBody;
export declare const isCommandShowScrollingTextBody: (command: unknown) => command is Command2_ScrollTextBody;
export declare const isCommandCommentHeader: (command: unknown) => command is Command_CommentHeader;
export declare const isCommandCommentBody: (command: unknown) => command is Command2_CommentBody;
export declare const isCommandScriptHeader: (command: unknown) => command is Command2_ScriptHeader;
export declare const isCommandScriptBody: (command: unknown) => command is Command2_ScriptBody;
