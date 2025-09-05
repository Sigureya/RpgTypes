import { EventCommandLike2 } from '../../../frame';
import { SCROLL_MAP } from '../../../../rpg';
import { Direction8 } from '../../../../utils';
export interface Command_ScrollMap extends EventCommandLike2<typeof SCROLL_MAP> {
    parameters: ParamArray_ScrollMap;
}
export type ParamArray_ScrollMap = [
    direction: Direction8,
    distance: number,
    speed: number,
    waiting: boolean
];
