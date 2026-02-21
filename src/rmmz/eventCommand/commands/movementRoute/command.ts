import type {
  EventCommandLike,
  SET_MOVEMENT_ROUTE,
} from "@RpgTypes/libs/eventCommand";
import type { MoveRouteDataUnkwnown } from "./moveRoute";
export interface Command_SetMovementRoute extends EventCommandLike<
  typeof SET_MOVEMENT_ROUTE
> {
  parameters: [characterId: number, movement: MoveRouteDataUnkwnown];
}

export type ParamArray_MovementRoute = [
  characterId: number,
  movement: MoveRouteDataUnkwnown,
];
