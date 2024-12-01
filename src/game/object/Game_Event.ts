import type { MapEventPage, EventCommand } from "../../schema";
import type { Game_Character } from "./Game_Character";
import type { IMapEvent, MoveRouteCommand } from "./types/";

export declare class Game_Event extends Game_Character implements IMapEvent {
  isStarting(): boolean;
  unlock(): void;
  clearStartingFlag(): void;
  eventId(): number;
  list(): EventCommand[];
  forceMoveRoute(route: MoveRouteCommand[]): void;
  page(): MapEventPage;
  lock(): void;
}
