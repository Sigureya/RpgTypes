import { MapEventPage, EventCommand } from "../../schema";
import { Game_Character } from "./Game_Character";
import { IMapEvent, MoveRouteCommand } from "./types/interface/character";

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
