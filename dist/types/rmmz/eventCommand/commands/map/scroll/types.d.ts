import { EventCommandLike2 } from '../../../frame';
import { Direction8, SCROLL_MAP } from '../../../../rpg';
export interface Command_ScrollMap extends EventCommandLike2<typeof SCROLL_MAP> {
    parameters: [
        direction: Direction8,
        distance: number,
        speed: number,
        waiting: boolean
    ];
}
