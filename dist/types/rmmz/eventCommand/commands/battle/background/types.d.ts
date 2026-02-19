import { EventCommandLike } from '../../../frame';
export interface Command_ChangeBattleBackground extends EventCommandLike<283> {
    parameters: ParamArray_ChangeBattleBackground;
}
export type ParamArray_ChangeBattleBackground = [
    background1: string,
    background2: string
];
export interface ParamObject_ChangeBattleBackground {
    background1: string;
    background2: string;
}
