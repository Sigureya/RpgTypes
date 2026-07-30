import type {
  EventCommandUnknown,
  MoveRouteCommandUnknown,
} from "@RpgTypes/libs";
import type { Data_Map } from "@RpgTypes/rmmz/events";
import { mapEventsXy } from "@RpgTypes/rmmz/rpg/data/event/map/event/event";
import type { MapEvent } from "@RpgTypes/rmmz/rpg/data/event/map/event/page";
import {
  isValidMapPosition,
  mapLayeredTiles,
} from "@RpgTypes/rmmz/rpg/data/event/map/tiles";
import type { Data_MapUnknown } from "@RpgTypes/rmmz/rpg/data/event/map/types";
import type { Direction8 } from "@RpgTypes/rmmz/utils";
import type {
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
  return mapEventsXy(map, x, y).flatMap((event) => {
    const page = provider.activePage(event);
    if (!page || page.priorityType !== 0) {
      return [];
    }
    const tileId = page.image.tileId;
    return tileId > 0 ? [tileId] : [];
  });
};

export const mapAllTiles = (
  map: Data_Map,
  x: number,
  y: number,
  provider: Pick<Provider_MapPassage, "tileEventTileIds">,
): number[] => {
  return [
    ...provider.tileEventTileIds(map, x, y),
    ...mapLayeredTiles(map, x, y),
  ];
};

export const mapCheckPassage = (
  map: Data_Map,
  x: number,
  y: number,
  bit: number,
  provider: Provider_MapPassage,
): boolean => {
  const flags = provider.tilesetFlags(map);
  const firstResolvedTile = mapAllTiles(map, x, y, provider).find((tile) => {
    const flag = flags[tile] ?? 0;
    if ((flag & 0x10) !== 0) {
      return false;
    }
    const masked = flag & bit;
    return masked === 0 || masked === bit;
  });

  if (firstResolvedTile === undefined) {
    return false;
  }

  const firstResolvedFlag = flags[firstResolvedTile] ?? 0;
  return (firstResolvedFlag & bit) === 0;
};

export const mapCheckLayeredTilesFlags = (
  map: Data_Map,
  x: number,
  y: number,
  bit: number,
  provider: Pick<Provider_MapPassage, "tilesetFlags">,
): boolean => {
  const flags = provider.tilesetFlags(map);
  return mapLayeredTiles(map, x, y).some(
    (tileId) => ((flags[tileId] ?? 0) & bit) !== 0,
  );
};

export const mapIsPassable = (
  map: Data_Map,
  x: number,
  y: number,
  direction: Direction8,
  provider: Provider_MapPassage,
): boolean => {
  const bit = (1 << (direction / 2 - 1)) & 0x0f;
  return mapCheckPassage(map, x, y, bit, provider);
};

export const mapIsBoatPassable = (
  map: Data_Map,
  x: number,
  y: number,
  provider: Provider_MapPassage,
): boolean => {
  return mapCheckPassage(map, x, y, 0x0200, provider);
};

export const mapIsShipPassable = (
  map: Data_Map,
  x: number,
  y: number,
  provider: Provider_MapPassage,
): boolean => {
  return mapCheckPassage(map, x, y, 0x0400, provider);
};

export const mapIsAirshipLandOk = (
  map: Data_Map,
  x: number,
  y: number,
  provider: Provider_MapPassage,
): boolean => {
  return (
    mapCheckPassage(map, x, y, 0x0800, provider) &&
    mapCheckPassage(map, x, y, 0x0f, provider)
  );
};

export const mapIsLadder = (
  map: Data_Map,
  x: number,
  y: number,
  provider: Pick<Provider_MapPassage, "tilesetFlags">,
): boolean => {
  return (
    isValidMapPosition(map, x, y) &&
    mapCheckLayeredTilesFlags(map, x, y, 0x20, provider)
  );
};

export const mapIsBush = (
  map: Data_Map,
  x: number,
  y: number,
  provider: Pick<Provider_MapPassage, "tilesetFlags">,
): boolean => {
  return (
    isValidMapPosition(map, x, y) &&
    mapCheckLayeredTilesFlags(map, x, y, 0x40, provider)
  );
};

export const mapIsCounter = (
  map: Data_Map,
  x: number,
  y: number,
  provider: Pick<Provider_MapPassage, "tilesetFlags">,
): boolean => {
  return (
    isValidMapPosition(map, x, y) &&
    mapCheckLayeredTilesFlags(map, x, y, 0x80, provider)
  );
};

export const mapIsDamageFloor = (
  map: Data_Map,
  x: number,
  y: number,
  provider: Pick<Provider_MapPassage, "tilesetFlags">,
): boolean => {
  return (
    isValidMapPosition(map, x, y) &&
    mapCheckLayeredTilesFlags(map, x, y, 0x100, provider)
  );
};

export const mapTerrainTag = (
  map: Data_Map,
  x: number,
  y: number,
  provider: Pick<Provider_MapPassage, "tilesetFlags">,
): number => {
  if (!isValidMapPosition(map, x, y)) {
    return 0;
  }

  const flags = provider.tilesetFlags(map);
  const taggedTile = mapLayeredTiles(map, x, y).find((tile) => {
    return (flags[tile] ?? 0) >> 12 > 0;
  });

  if (taggedTile === undefined) {
    return 0;
  }
  return (flags[taggedTile] ?? 0) >> 12;
};
