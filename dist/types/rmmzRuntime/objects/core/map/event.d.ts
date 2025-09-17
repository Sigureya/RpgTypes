import { EventCommand } from '../../../../rmmz/eventCommand';
import { MapEventPage, MoveRouteCommand } from '../../../../rmmz/rpg';
export interface Rmmz_Event {
    isStarting(): boolean;
    unlock(): void;
    clearStartingFlag(): void;
    eventId(): number;
    list(): ReadonlyArray<EventCommand>;
    forceMoveRoute(route: ReadonlyArray<MoveRouteCommand>): void;
    page(): MapEventPage;
    lock(): void;
}
