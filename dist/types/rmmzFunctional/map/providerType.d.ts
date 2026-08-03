import { EventCommandUnknown, MoveRouteCommandUnknown } from '../../libs';
import { Data_Map } from '../../rmmz/events';
import { MapEventPage } from '../../rmmz/rpg/data/event/map/event/page';
import { MapEvent } from '../../rmmz/rpg/data/event/map/event/page/mapEvent';
export interface Provider_MapTilesetFlags {
    tilesetFlags(map: Pick<Data_Map, "tilesetId">): ReadonlyArray<number>;
}
export interface Provider_MapTileEventTileIds {
    tileEventTileIds(map: Data_Map, x: number, y: number): ReadonlyArray<number>;
}
export type Provider_MapPassage = Provider_MapTilesetFlags & Provider_MapTileEventTileIds;
export interface Provider_MapEventPageResolver<CommandType extends EventCommandUnknown = EventCommandUnknown, MoveRoute extends MoveRouteCommandUnknown = MoveRouteCommandUnknown> {
    activePage(event: MapEvent<CommandType, MoveRoute>): MapEventPage<CommandType, MoveRoute> | null | undefined;
}
