import type {
  EventCommand,
  MoveRouteCommandUnknown,
} from "@RpgTypes/rmmz/eventCommand";
import type { MapEventPage } from "@RpgTypes/rmmz/rpg";

export interface Rmmz_Event {
  isStarting(): boolean;
  unlock(): void;
  clearStartingFlag(): void;
  eventId(): number;
  list(): ReadonlyArray<EventCommand>;
  forceMoveRoute(route: ReadonlyArray<MoveRouteCommandUnknown>): void;
  page(): MapEventPage<EventCommand, MoveRouteCommandUnknown> | null;
  lock(): void;
}
