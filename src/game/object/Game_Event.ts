import { EventCommand } from "@schema/types";
import { Game_Character } from "./Game_Character";
import { IMapEvent, MoveRouteCommand } from "./types/interface/character";
import { MapEventPage } from "@schema/map/event/page";

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
