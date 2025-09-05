import { ValueOf } from '../../../../libs/templates/valueOf';
import { Toggle } from '../../../rpg';
import { EventCommandLike } from '../../frame';
export interface Command_ShowAnimation extends EventCommandLike<212> {
    parameters: ParamArray_ShowAnimation;
}
export type ParamArray_ShowAnimation = [
    characterId: number,
    animationId: number,
    waiting: ValueOf<Toggle>
];
