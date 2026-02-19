import { EventCommandLike, CHANGE_BATTLE_BACKGROUND } from '../../../../../libs/eventCommand';
export interface Command_ChangeBattleBackground extends EventCommandLike<typeof CHANGE_BATTLE_BACKGROUND> {
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
