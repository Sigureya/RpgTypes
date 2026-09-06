import type {
  EventCommandUnknown,
  MoveRouteCommandUnknown,
} from "@RpgTypes/libs";
import type { Data_Map } from "@RpgTypes/rmmz/events";
import type { MapEvent, MapEventPage } from "@RpgTypes/rmmz/rpg";
import type { Data_MapTiles } from "@RpgTypes/rmmz/rpg/event/map/tiles";

/**
 * 通行判定が読むのはタイルとタイルセット番号だけ。
 * provider にはこの範囲しか渡らないので、テストでは Data_Map を丸ごと
 * 用意しなくてよい (any / unknown へ落とさずに済む)。
 */
export type Data_MapPassage = Data_MapTiles & Pick<Data_Map, "tilesetId">;

export interface Provider_MapTilesetFlags<
  M extends Data_MapPassage = Data_Map,
> {
  tilesetFlags(map: M): ReadonlyArray<number>;
}

export interface Provider_MapTileEventTileIds<
  M extends Data_MapPassage = Data_Map,
> {
  tileEventTileIds(map: M, x: number, y: number): ReadonlyArray<number>;
}

export type Provider_MapPassage<M extends Data_MapPassage = Data_Map> =
  Provider_MapTilesetFlags<M> & Provider_MapTileEventTileIds<M>;

export interface Provider_MapEventPageResolver<
  CommandType extends EventCommandUnknown = EventCommandUnknown,
  MoveRoute extends MoveRouteCommandUnknown = MoveRouteCommandUnknown,
> {
  activePage(
    event: MapEvent<CommandType, MoveRoute>,
  ): MapEventPage<CommandType, MoveRoute> | null | undefined;
}
