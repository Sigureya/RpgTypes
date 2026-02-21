import { EventCommand, MoveRouteCommandUnknown } from '../../../../rmmz/eventCommand';
import { MapEventPage } from '../../../../rmmz/rpg';
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
