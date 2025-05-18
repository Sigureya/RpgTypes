import { Command_ScriptBody, Command_ScriptHeader } from './types';
export declare const makeCommandScriptHeader: (script: string, indent?: number) => Command_ScriptHeader;
export declare const makeCommandScriptBody: (script: string, indent?: number) => Command_ScriptBody;
export declare const makeCommandScriptArray: (lines: ReadonlyArray<string>, indent?: number) => [Command_ScriptHeader, ...Command_ScriptBody[]];
