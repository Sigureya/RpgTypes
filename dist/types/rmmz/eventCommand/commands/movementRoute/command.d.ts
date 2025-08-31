import { MoveRouteData } from '../../../rpg';
import { EventCommandLike2 } from '../../frame';
export interface Command_SetMovementRoute extends EventCommandLike2<205> {
    parameters: [characterId: number, movement: MoveRouteData];
}
export type ParamArray_MovementRoute = [
    characterId: number,
    movement: MoveRouteData
];
