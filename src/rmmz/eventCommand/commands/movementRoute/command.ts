import type { MoveRouteData } from "@RpgTypes/rmmz/rpg";
import type { EventCommandLike2 } from "../../frame";
export interface Command_SetMovementRoute extends EventCommandLike2<205> {
  parameters: [characterId: number, movement: MoveRouteData];
}
