import { EventCommandLike2 } from '../../../frame';
export interface Command_ChangeBattleBackground extends EventCommandLike2<283> {
    parameters: ParamArray_ChangeBattleBackground;
}
export type ParamArray_ChangeBattleBackground = [
    background1: string,
    background2: string
];
