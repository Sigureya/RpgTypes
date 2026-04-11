import { MoveRouteDataUnkwnown } from '../../../../libs';
import { EventCommandLike, SET_MOVEMENT_ROUTE } from '../../../../libs/eventCommand';
export interface Command_SetMovementRoute extends EventCommandLike<typeof SET_MOVEMENT_ROUTE> {
    parameters: [characterId: number, movement: MoveRouteDataUnkwnown];
}
export type ParamArray_MovementRoute = [
    characterId: number,
    movement: MoveRouteDataUnkwnown
];
