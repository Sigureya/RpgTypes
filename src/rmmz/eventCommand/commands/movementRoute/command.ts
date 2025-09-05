import type { MoveRouteData } from "@RpgTypes/rmmz/rpg";
import type { EventCommandLike } from "../../frame";
export interface Command_SetMovementRoute extends EventCommandLike<205> {
  parameters: [characterId: number, movement: MoveRouteData];
}

export type ParamArray_MovementRoute = [
  characterId: number,
  movement: MoveRouteData
];
