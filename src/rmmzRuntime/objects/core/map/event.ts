import type { MoveRouteCommandUnknown } from "@RpgTypes/libs";
import type { EventCommand } from "@RpgTypes/rmmz/eventCommand";
import type { MapEventPage } from "@RpgTypes/rmmz/rpg";
import type { Rmmz_MapCharacter } from "./character";

export interface Rmmz_Event extends Rmmz_MapCharacter {
  isStarting(): boolean;
  unlock(): void;
  clearStartingFlag(): void;
  eventId(): number;
  list(): ReadonlyArray<EventCommand>;
  forceMoveRoute(route: ReadonlyArray<MoveRouteCommandUnknown>): void;
  page(): MapEventPage<EventCommand, MoveRouteCommandUnknown> | null;
  lock(): void;
}
