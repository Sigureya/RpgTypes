import { EventCommandLike } from '../..';
export type ParamArray_Script = [comment: string];
export interface ParamObject_Script {
    comment: string;
}
export interface Command_ScriptHeader extends EventCommandLike<355, ParamArray_Script> {
    parameters: [string];
}
export interface Command_ScriptBody extends EventCommandLike<655, ParamArray_Script> {
    parameters: [string];
}
