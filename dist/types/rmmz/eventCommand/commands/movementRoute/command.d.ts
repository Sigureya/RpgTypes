import { MoveRouteData } from '../../../rpg';
import { EventCommandLike } from '../../frame';
export interface Command_SetMovementRoute extends EventCommandLike<205> {
    parameters: [characterId: number, movement: MoveRouteData];
}
export type ParamArray_MovementRoute = [
    characterId: number,
    movement: MoveRouteData
];
