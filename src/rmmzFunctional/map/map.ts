import type {
  EventCommandUnknown,
  MoveRouteCommandUnknown,
} from "@RpgTypes/libs";
import type { Data_MapUnknown, MapEvent } from "@RpgTypes/rmmz/rpg";
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

/** 通常キャラと同じ高さ。この高さのイベントだけが移動を妨げる */
const NORMAL_PRIORITY = 1;

export const mapEventsXyNt = <
  CommandType extends EventCommandUnknown,
  MoveRoute extends MoveRouteCommandUnknown,
>(
  map: Pick<Data_MapUnknown<CommandType, MoveRoute>, "events">,
  x: number,
  y: number,
  provider: Provider_MapEventPageResolver<CommandType, MoveRoute>,
): MapEvent<CommandType, MoveRoute>[] => {
  // 座標で絞ってから改めて絞ると配列が 2 本になる。1 回の走査でまとめる
  return map.events.reduce<MapEvent<CommandType, MoveRoute>[]>(
    (acc, event) => {
      if (!event || event.x !== x || event.y !== y) {
        return acc;
      }
      const page = provider.activePage(event);
      if (page && !page.through) {
        acc.push(event);
      }
      return acc;
    },
    [],
  );
};

/**
 * その位置に、通行を妨げるイベントがいるか。
 * コアの Game_CharacterBase.isCollidedWithEvents に対応する。
 *
 * コアは eventsXyNt で配列を作ってから some(isNormalPriority) を見るが、
 * 要るのは真偽値だけなので配列を作らない。
 * 該当するイベントごとに activePage を 2 回引くことも避けられる。
 * 実測 (イベント 40 個): 91ns → 81ns。performance.md [SCAN]
 */
export const mapIsCollidedWithEvents = <
  CommandType extends EventCommandUnknown,
  MoveRoute extends MoveRouteCommandUnknown,
>(
  map: Pick<Data_MapUnknown<CommandType, MoveRoute>, "events">,
  x: number,
  y: number,
  provider: Provider_MapEventPageResolver<CommandType, MoveRoute>,
): boolean => {
  return map.events.some((event) => {
    if (!event || event.x !== x || event.y !== y) {
      return false;
    }
    const page = provider.activePage(event);
    return !!page && !page.through && page.priorityType === NORMAL_PRIORITY;
  });
};

/**
 * その位置に、すり抜けないイベントが 1 つでもいるか。
 * コアの Game_Event.isCollidedWithEvents (eventsXyNt の長さを見る) に対応する。
 */
export const mapHasEventNt = <
  CommandType extends EventCommandUnknown,
  MoveRoute extends MoveRouteCommandUnknown,
>(
  map: Pick<Data_MapUnknown<CommandType, MoveRoute>, "events">,
  x: number,
  y: number,
  provider: Provider_MapEventPageResolver<CommandType, MoveRoute>,
): boolean => {
  return map.events.some((event) => {
    if (!event || event.x !== x || event.y !== y) {
      return false;
    }
    const page = provider.activePage(event);
    return !!page && !page.through;
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
  // 毎フレームの通行判定から呼ばれる。
  // null 除去 → 座標で絞る → 集める、と重ねると配列を 3 本作ることになるので、
  // 1 回の走査で結果の 1 本だけにする。
  // 実測 (イベント 40 個): 220ns → 82ns。performance.md [SCAN]
  return map.events.reduce<number[]>((acc, event) => {
    if (!event || event.x !== x || event.y !== y) {
      return acc;
    }
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
