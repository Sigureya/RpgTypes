import { afterAll, beforeAll, describe, expect, test } from "vitest";
import type { Data_Map } from "@RpgTypes/rmmz/events";
import { mapLayeredTiles, mapTileId } from "@RpgTypes/rmmz/rpg/event/map/tiles";
import {
  mapAllTiles,
  mapCheckLayeredTilesFlags,
  mapCheckPassage,
  mapIsBush,
  mapIsLadder,
  mapIsPassable,
  mapTerrainTag,
} from "@RpgTypes/rmmzFunctional";
import type {
  Data_MapPassage,
  Provider_MapPassage,
} from "@RpgTypes/rmmzFunctional/map/providerType";
import { Game_Map } from "./rmmz_objects";

interface TileEvent {
  x: number;
  y: number;
  tile: number;
}

const WIDTH = 6;
const HEIGHT = 5;

/** 6 層 (z=0..5) ぶんのタイル。値は位置から決め打ちで作る */
const makeMapData = (): number[] => {
  const data: number[] = [];
  for (let i = 0; i < WIDTH * HEIGHT * 6; i++) {
    data.push((i * 7) % 24);
  }
  return data;
};

// 通行判定が読むのはタイルとタイルセット番号だけ。Data_Map 全部は要らない
const map: Data_MapPassage = {
  width: WIDTH,
  height: HEIGHT,
  data: makeMapData(),
  tilesetId: 1,
};

/**
 * タイルセットのフラグ。
 * 0x10 (通行に影響しない) / 0x02 (下方向に通れない) / 地形タグを混ぜる
 */
const flags: number[] = Array.from({ length: 32 }, (_, i) => {
  const passage = i % 3 === 0 ? 0x00 : 0x0f;
  const noEffect = i % 5 === 0 ? 0x10 : 0x00;
  const terrain = i % 4 === 0 ? (i % 7) << 12 : 0;
  return passage | noEffect | terrain;
});

const tileEvents: TileEvent[] = [
  { x: 1, y: 1, tile: 3 },
  { x: 1, y: 1, tile: 6 },
  { x: 2, y: 3, tile: 9 },
];

const provider: Provider_MapPassage<Data_MapPassage> = {
  tilesetFlags: () => flags,
  tileEventTileIds: (_map, x, y) =>
    tileEvents.filter((e) => e.x === x && e.y === y).map((e) => e.tile),
};

/** Game_Map.tileEventsXy が読む形 */
interface CoreTileEvent {
  posNt(x: number, y: number): boolean;
  tileId(): number;
}

/** Game_Map のうち、この検証で呼ぶものだけ */
interface CoreMapLike {
  _tileEvents: CoreTileEvent[];
  tilesetFlags(): ReadonlyArray<number>;
  tileId(x: number, y: number, z: number): number;
  width(): number;
  height(): number;
  isValid(x: number, y: number): boolean;
  layeredTiles(x: number, y: number): number[];
  tileEventsXy(x: number, y: number): CoreTileEvent[];
  allTiles(x: number, y: number): number[];
  checkPassage(x: number, y: number, bit: number): boolean;
  checkLayeredTilesFlags(x: number, y: number, bit: number): boolean;
  isPassable(x: number, y: number, direction: number): boolean;
  isLadder(x: number, y: number): boolean;
  isBush(x: number, y: number): boolean;
  terrainTag(x: number, y: number): number;
}

const proto = Game_Map.prototype as unknown as CoreMapLike;

/** コア側。$dataMap とタイルイベントを差し替えて prototype をそのまま使う */
const coreMap = (): CoreMapLike => {
  return {
    ...proto,
    tilesetFlags: () => flags,
    _tileEvents: tileEvents.map((e) => ({
      posNt: (x: number, y: number) => e.x === x && e.y === y,
      tileId: () => e.tile,
    })),
    tileId: proto.tileId,
    width: proto.width,
    height: proto.height,
    isValid: proto.isValid,
    layeredTiles: proto.layeredTiles,
    tileEventsXy: proto.tileEventsXy,
    allTiles: proto.allTiles,
    checkPassage: proto.checkPassage,
    checkLayeredTilesFlags: proto.checkLayeredTilesFlags,
    isPassable: proto.isPassable,
    isLadder: proto.isLadder,
    isBush: proto.isBush,
    terrainTag: proto.terrainTag,
  };
};

beforeAll(() => {
  // コアの tileId は $dataMap の width / height / data しか読まない
  globalThis.$dataMap = map as Data_Map;
});

afterAll(() => {
  globalThis.$dataMap = undefined as unknown as Data_Map;
});

const positions: [number, number][] = [];
for (let y = 0; y < HEIGHT; y++) {
  for (let x = 0; x < WIDTH; x++) {
    positions.push([x, y]);
  }
}

describe("タイルの取得がコアスクリプトと一致する", () => {
  test("tileId", () => {
    const core = coreMap();
    positions.forEach(([x, y]) => {
      [0, 1, 2, 3, 4, 5].forEach((z) => {
        expect(mapTileId(map, x, y, z)).toBe(core.tileId(x, y, z));
      });
    });
  });

  test("layeredTiles", () => {
    const core = coreMap();
    positions.forEach(([x, y]) => {
      expect(mapLayeredTiles(map, x, y)).toEqual(core.layeredTiles(x, y));
    });
  });

  test("allTiles", () => {
    const core = coreMap();
    positions.forEach(([x, y]) => {
      expect(mapAllTiles(map, x, y, provider)).toEqual(core.allTiles(x, y));
    });
  });
});

describe("通行判定がコアスクリプトと一致する", () => {
  const bits = [0x01, 0x02, 0x04, 0x08, 0x0f, 0x0200, 0x0400];

  bits.forEach((bit) => {
    test(`checkPassage bit=0x${bit.toString(16)}`, () => {
      const core = coreMap();
      positions.forEach(([x, y]) => {
        expect(mapCheckPassage(map, x, y, bit, provider)).toBe(
          core.checkPassage(x, y, bit),
        );
      });
    });
  });

  test("isPassable (4 方向)", () => {
    const core = coreMap();
    positions.forEach(([x, y]) => {
      ([2, 4, 6, 8] as const).forEach((d) => {
        expect(mapIsPassable(map, x, y, d, provider)).toBe(
          core.isPassable(x, y, d),
        );
      });
    });
  });

  test("checkLayeredTilesFlags", () => {
    const core = coreMap();
    positions.forEach(([x, y]) => {
      [0x20, 0x40, 0x80, 0x100].forEach((bit) => {
        expect(mapCheckLayeredTilesFlags(map, x, y, bit, provider)).toBe(
          core.checkLayeredTilesFlags(x, y, bit),
        );
      });
    });
  });

  test("isLadder / isBush", () => {
    const core = coreMap();
    positions.forEach(([x, y]) => {
      expect(mapIsLadder(map, x, y, provider)).toBe(core.isLadder(x, y));
      expect(mapIsBush(map, x, y, provider)).toBe(core.isBush(x, y));
    });
  });

  test("terrainTag", () => {
    const core = coreMap();
    positions.forEach(([x, y]) => {
      expect(mapTerrainTag(map, x, y, provider)).toBe(core.terrainTag(x, y));
    });
  });

  test("範囲外は false / 0", () => {
    const core = coreMap();
    const outside: [number, number][] = [
      [-1, 0],
      [0, -1],
      [WIDTH, 0],
      [0, HEIGHT],
    ];
    outside.forEach(([x, y]) => {
      expect(mapIsLadder(map, x, y, provider)).toBe(core.isLadder(x, y));
      expect(mapTerrainTag(map, x, y, provider)).toBe(core.terrainTag(x, y));
    });
  });
});
