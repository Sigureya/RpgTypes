import type {
  EventCommandLike,
  SET_MOVEMENT_ROUTE,
} from "@RpgTypes/libs/eventCommand";
import type { MoveRouteData } from "@RpgTypes/rmmz/rpg";
export interface Command_SetMovementRoute extends EventCommandLike<
  typeof SET_MOVEMENT_ROUTE
> {
  parameters: [characterId: number, movement: MoveRouteData];
}

export type ParamArray_MovementRoute = [
  characterId: number,
  movement: MoveRouteData,
];
