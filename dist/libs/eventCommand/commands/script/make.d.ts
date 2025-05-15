import { Command2_ScriptBody, Command2_ScriptHeader } from './types';
export declare const makeCommandScriptHeader: (script: string, indent?: number) => Command2_ScriptHeader;
export declare const makeCommandScriptBody: (script: string, indent?: number) => Command2_ScriptBody;
export declare const makeCommandScriptArray: (lines: ReadonlyArray<string>, indent?: number) => [Command2_ScriptHeader, ...Command2_ScriptBody[]];
