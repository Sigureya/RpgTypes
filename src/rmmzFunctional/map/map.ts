import type {
  EventCommandUnknown,
  MoveRouteCommandUnknown,
} from "@RpgTypes/libs";
import type { Data_MapUnknown, MapEvent } from "@RpgTypes/rmmz/rpg";
import { mapEventsXy } from "@RpgTypes/rmmz/rpg";
import {
  LAYER_Z_ORDER,
  mapTileId,
  isValidMapPosition,
} from "@RpgTypes/rmmz/rpg/event/map/tiles";
import type { Direction8 } from "@RpgTypes/rmmz/utils";
import type {
  Data_MapPassage,
  Provider_MapEventPageResolver,
  Provider_MapPassage,
} from "@RpgTypes/rmmzFunctional/map/providerType";

export const mapEventsXyNt = <
  CommandType extends EventCommandUnknown,
  MoveRoute extends MoveRouteCommandUnknown,
>(
  map: Pick<Data_MapUnknown<CommandType, MoveRoute>, "events">,
  x: number,
  y: number,
  provider: Provider_MapEventPageResolver<CommandType, MoveRoute>,
): MapEvent<CommandType, MoveRoute>[] => {
  return mapEventsXy(map, x, y).filter((event) => {
    const page = provider.activePage(event);
    return page ? !page.through : false;
  });
};

export const mapTileEventTileIds = <
  CommandType extends EventCommandUnknown,
  MoveRoute extends MoveRouteCommandUnknown,
>(
  map: Pick<Data_MapUnknown<CommandType, MoveRoute>, "events">,
  x: number,
  y: number,
  provider: Provider_MapEventPageResolver<CommandType, MoveRoute>,
): number[] => {
  // flatMap は該当しないイベントごとに空配列を作る (performance.md [FLAT])。
  // 毎フレームの通行判定から呼ばれるので、配列は結果の 1 本だけにする。
  return mapEventsXy(map, x, y).reduce<number[]>((acc, event) => {
    const page = provider.activePage(event);
    if (page && page.priorityType === 0 && page.image.tileId > 0) {
      acc.push(page.image.tileId);
    }
    return acc;
  }, []);
};

/**
 * イベントのタイル → 下地のタイルの順に並べる。
 *
 * spread で繋ぐと配列を 3 本作る (performance.md [JOIN])。
 * 走査するだけなら mapCheckPassage のように、この配列を作らずに済ませる。
 */
export const mapAllTiles = <M extends Data_MapPassage>(
  map: M,
  x: number,
  y: number,
  provider: Pick<Provider_MapPassage<M>, "tileEventTileIds">,
): number[] => {
  const tiles: number[] = [...provider.tileEventTileIds(map, x, y)];
  LAYER_Z_ORDER.forEach((z) => tiles.push(mapTileId(map, x, y, z)));
  return tiles;
};

/**
 * 通行できるか。イベントのタイルを先に見て、決まらなければ下地を上から見る。
 *
 * 毎フレーム、動く人物ごとに走る。1 回の移動判定で 2 回呼ばれる。
 * mapAllTiles で 1 本にまとめてから走ると配列を余分に作るので、
 * 2 つの並びを順に見る。実測 92ns → 37ns (performance.md [JOIN] / [FLAT])。
 */
export const mapCheckPassage = <M extends Data_MapPassage>(
  map: M,
  x: number,
  y: number,
  bit: number,
  provider: Provider_MapPassage<M>,
): boolean => {
  const flags = provider.tilesetFlags(map);
  const resolved = isResolvedTile(flags, bit);

  const eventTile = provider.tileEventTileIds(map, x, y).find(resolved);
  if (eventTile !== undefined) {
    return ((flags[eventTile] ?? 0) & bit) === 0;
  }

  const layerZ = LAYER_Z_ORDER.find((z) => resolved(mapTileId(map, x, y, z)));
  if (layerZ === undefined) {
    return false;
  }
  const flag = flags[mapTileId(map, x, y, layerZ)] ?? 0;
  return (flag & bit) === 0;
};

/** 通行可否が決まるタイルか。0x10 は「通行に影響しない」なので飛ばす。 */
const isResolvedTile =
  (flags: ReadonlyArray<number>, bit: number) =>
  (tile: number): boolean => {
    const flag = flags[tile] ?? 0;
    if ((flag & 0x10) !== 0) {
      return false;
    }
    const masked = flag & bit;
    return masked === 0 || masked === bit;
  };

export const mapCheckLayeredTilesFlags = <M extends Data_MapPassage>(
  map: M,
  x: number,
  y: number,
  bit: number,
  provider: Pick<Provider_MapPassage<M>, "tilesetFlags">,
): boolean => {
  const flags = provider.tilesetFlags(map);
  // mapLayeredTiles を呼ぶと配列を 1 本作る。走査するだけなので z を回す
  return LAYER_Z_ORDER.some(
    (z) => ((flags[mapTileId(map, x, y, z)] ?? 0) & bit) !== 0,
  );
};

export const mapIsPassable = <M extends Data_MapPassage>(
  map: M,
  x: number,
  y: number,
  direction: Direction8,
  provider: Provider_MapPassage<M>,
): boolean => {
  const bit = (1 << (direction / 2 - 1)) & 0x0f;
  return mapCheckPassage(map, x, y, bit, provider);
};

export const mapIsBoatPassable = <M extends Data_MapPassage>(
  map: M,
  x: number,
  y: number,
  provider: Provider_MapPassage<M>,
): boolean => {
  return mapCheckPassage(map, x, y, 0x0200, provider);
};

export const mapIsShipPassable = <M extends Data_MapPassage>(
  map: M,
  x: number,
  y: number,
  provider: Provider_MapPassage<M>,
): boolean => {
  return mapCheckPassage(map, x, y, 0x0400, provider);
};

export const mapIsAirshipLandOk = <M extends Data_MapPassage>(
  map: M,
  x: number,
  y: number,
  provider: Provider_MapPassage<M>,
): boolean => {
  return (
    mapCheckPassage(map, x, y, 0x0800, provider) &&
    mapCheckPassage(map, x, y, 0x0f, provider)
  );
};

export const mapIsLadder = <M extends Data_MapPassage>(
  map: M,
  x: number,
  y: number,
  provider: Pick<Provider_MapPassage<M>, "tilesetFlags">,
): boolean => {
  return (
    isValidMapPosition(map, x, y) &&
    mapCheckLayeredTilesFlags(map, x, y, 0x20, provider)
  );
};

export const mapIsBush = <M extends Data_MapPassage>(
  map: M,
  x: number,
  y: number,
  provider: Pick<Provider_MapPassage<M>, "tilesetFlags">,
): boolean => {
  return (
    isValidMapPosition(map, x, y) &&
    mapCheckLayeredTilesFlags(map, x, y, 0x40, provider)
  );
};

export const mapIsCounter = <M extends Data_MapPassage>(
  map: M,
  x: number,
  y: number,
  provider: Pick<Provider_MapPassage<M>, "tilesetFlags">,
): boolean => {
  return (
    isValidMapPosition(map, x, y) &&
    mapCheckLayeredTilesFlags(map, x, y, 0x80, provider)
  );
};

export const mapIsDamageFloor = <M extends Data_MapPassage>(
  map: M,
  x: number,
  y: number,
  provider: Pick<Provider_MapPassage<M>, "tilesetFlags">,
): boolean => {
  return (
    isValidMapPosition(map, x, y) &&
    mapCheckLayeredTilesFlags(map, x, y, 0x100, provider)
  );
};

export const mapTerrainTag = <M extends Data_MapPassage>(
  map: M,
  x: number,
  y: number,
  provider: Pick<Provider_MapPassage<M>, "tilesetFlags">,
): number => {
  if (!isValidMapPosition(map, x, y)) {
    return 0;
  }

  const flags = provider.tilesetFlags(map);
  const taggedZ = LAYER_Z_ORDER.find((z) => {
    return (flags[mapTileId(map, x, y, z)] ?? 0) >> 12 > 0;
  });

  if (taggedZ === undefined) {
    return 0;
  }
  return (flags[mapTileId(map, x, y, taggedZ)] ?? 0) >> 12;
};
