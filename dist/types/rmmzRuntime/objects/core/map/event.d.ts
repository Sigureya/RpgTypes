import { MoveRouteCommandUnknown } from '../../../../libs';
import { EventCommand } from '../../../../rmmz/eventCommand';
import { MapEventPage } from '../../../../rmmz/rpg';
import { Rmmz_MapCharacter } from './character';
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
