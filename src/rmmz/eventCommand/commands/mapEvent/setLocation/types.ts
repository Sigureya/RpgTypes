import type { Direction8, EventCommandLike } from "@RpgTypes/rmmz/rpg";

export interface Command_SetEventLocation extends EventCommandLike<203> {
  parameters: [
    mapId: number,
    eventId: number,
    x: number,
    y: number,
    direction: Direction8
  ];
}
