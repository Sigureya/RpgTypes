import { afterAll, beforeAll, describe, expect, test, vi } from "vitest";
import { mapLayeredTiles } from "@RpgTypes/rmmz/rpg/event/map/tiles";
import {
  mapAllTiles,
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
import type { Rmmz_Map, Rmmz_MapTileEvent } from "@RpgTypes/rmmzRuntime";
import { Game_Map } from "./rmmz_objects";

const WIDTH = 3;
const HEIGHT = 2;

/**
 * タイル番号ごとのフラグ。番号そのものに意味を持たせて、期待値を手で追えるようにする。
 *
 *   0x10 … 通行に影響しない (飛ばす)
 *   0x01/0x02/0x04/0x08 … 下/左/右/上へ通れない
 *   0x20/0x40/0x80/0x100 … 梯子/茂み/カウンター/ダメージ床
 *   上位 12bit … 地形タグ
 */
const TILE = {
  PLAIN: 0,
  WALL: 1,
  NO_EFFECT: 2,
  LEFT_BLOCKED: 3,
  LADDER: 4,
  BUSH: 5,
  COUNTER: 6,
  DAMAGE: 7,
  TERRAIN_3: 8,
} as const;

const flags: number[] = [
  0x0000, // 0 PLAIN
  0x000f, // 1 WALL
  0x0010, // 2 NO_EFFECT
  0x0002, // 3 LEFT_BLOCKED
  0x0020, // 4 LADDER
  0x0040, // 5 BUSH
  0x0080, // 6 COUNTER
  0x0100, // 7 DAMAGE
  0x3000, // 8 TERRAIN_3
];

/**
 * 各マスの z=3,2,1,0 のタイル。下地は上のレイヤーから見る。
 *
 *   (0,0) 全部 PLAIN
 *   (1,0) 影響しないタイルの下に壁
 *   (2,0) 影響しないタイルだけ
 *   (0,1) 左へ通れないタイル + 地形タグ
 *   (1,1) 全部 PLAIN (タイルイベントを置く)
 *   (2,1) 梯子・茂み・カウンター・ダメージ床
 */
const LAYERS: Record<string, [number, number, number, number]> = {
  "0,0": [TILE.PLAIN, TILE.PLAIN, TILE.PLAIN, TILE.PLAIN],
  "1,0": [TILE.NO_EFFECT, TILE.WALL, TILE.PLAIN, TILE.PLAIN],
  "2,0": [TILE.NO_EFFECT, TILE.NO_EFFECT, TILE.NO_EFFECT, TILE.NO_EFFECT],
  "0,1": [TILE.LEFT_BLOCKED, TILE.TERRAIN_3, TILE.PLAIN, TILE.PLAIN],
  "1,1": [TILE.PLAIN, TILE.PLAIN, TILE.PLAIN, TILE.PLAIN],
  "2,1": [TILE.LADDER, TILE.BUSH, TILE.COUNTER, TILE.DAMAGE],
};

const makeMapData = (): number[] => {
  // data[(z * height + y) * width + x]
  const data = new Array<number>(WIDTH * HEIGHT * 6).fill(0);
  Object.entries(LAYERS).forEach(([key, tiles]) => {
    const [x, y] = key.split(",").map(Number);
    tiles.forEach((tile, index) => {
      const z = 3 - index;
      data[(z * HEIGHT + y) * WIDTH + x] = tile;
    });
  });
  return data;
};

const map: Data_MapPassage = {
  width: WIDTH,
  height: HEIGHT,
  data: makeMapData(),
  tilesetId: 1,
};

/** (1,1) に置いたタイルイベント。壁として振る舞う */
const TILE_EVENT = { x: 1, y: 1, tile: TILE.WALL };

const provider: Provider_MapPassage<Data_MapPassage> = {
  tilesetFlags: () => flags,
  tileEventTileIds: (_map, x, y) =>
    TILE_EVENT.x === x && TILE_EVENT.y === y ? [TILE_EVENT.tile] : [],
};

/** allTiles が読むタイルイベントの範囲。位置とタイル番号だけあればよい */
type FakeTileEvent = Rmmz_MapTileEvent;

/**
 * Game_Map のうち、この検証で呼ぶものだけ。
 * tileEventsXy は自前で返すので、Rmmz_Map からは取らない
 * (コアの型は Game_Event の一覧を返す約束になっている)。
 */
interface FakeMap
  extends Pick<
    Rmmz_Map,
    | "tilesetFlags"
    | "tileId"
    | "width"
    | "height"
    | "isValid"
    | "layeredTiles"
    | "allTiles"
    | "checkPassage"
    | "checkLayeredTilesFlags"
    | "isPassable"
    | "isLadder"
    | "isBush"
    | "terrainTag"
  > {
  tileEventsXy(x: number, y: number): FakeTileEvent[];
}

const proto = Game_Map.prototype;

const createCoreMap = (): FakeMap => {
  const tileEvents: FakeTileEvent[] = [
    {
      posNt: (x: number, y: number) => TILE_EVENT.x === x && TILE_EVENT.y === y,
      tileId: () => TILE_EVENT.tile,
    },
  ];
  return {
    tilesetFlags: () => flags,
    tileEventsXy: (x: number, y: number) =>
      tileEvents.filter((event) => event.posNt(x, y)),
    tileId: proto.tileId,
    width: proto.width,
    height: proto.height,
    isValid: proto.isValid,
    layeredTiles: proto.layeredTiles,
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
  vi.stubGlobal("$dataMap", map);
});

afterAll(() => {
  vi.unstubAllGlobals();
});

/** 下 / 左。bit は (1 << (d / 2 - 1)) & 0x0f */
const BIT_DOWN = 0x01;
const BIT_LEFT = 0x02;
const DIRECTION_DOWN = 2;
const DIRECTION_LEFT = 4;

interface TestCase {
  name: string;
  x: number;
  y: number;
  expected: {
    layeredTiles: number[];
    allTiles: number[];
    passableDown: boolean;
    passableLeft: boolean;
    ladder: boolean;
    bush: boolean;
    terrainTag: number;
  };
}

const runTestCase = (testCase: TestCase): void => {
  describe(testCase.name, () => {
    const { x, y, expected } = testCase;

    describe("function", () => {
      test("mapLayeredTiles", () => {
        expect(mapLayeredTiles(map, x, y)).toEqual(expected.layeredTiles);
      });
      test("mapAllTiles", () => {
        expect(mapAllTiles(map, x, y, provider)).toEqual(expected.allTiles);
      });
      test("mapCheckPassage (下)", () => {
        expect(mapCheckPassage(map, x, y, BIT_DOWN, provider)).toBe(
          expected.passableDown,
        );
      });
      test("mapCheckPassage (左)", () => {
        expect(mapCheckPassage(map, x, y, BIT_LEFT, provider)).toBe(
          expected.passableLeft,
        );
      });
      test("mapIsPassable", () => {
        expect(mapIsPassable(map, x, y, DIRECTION_DOWN, provider)).toBe(
          expected.passableDown,
        );
        expect(mapIsPassable(map, x, y, DIRECTION_LEFT, provider)).toBe(
          expected.passableLeft,
        );
      });
      test("mapIsLadder", () => {
        expect(mapIsLadder(map, x, y, provider)).toBe(expected.ladder);
      });
      test("mapIsBush", () => {
        expect(mapIsBush(map, x, y, provider)).toBe(expected.bush);
      });
      test("mapTerrainTag", () => {
        expect(mapTerrainTag(map, x, y, provider)).toBe(expected.terrainTag);
      });
    });

    describe("Map", () => {
      test("layeredTiles", () => {
        expect(createCoreMap().layeredTiles(x, y)).toEqual(
          expected.layeredTiles,
        );
      });
      test("allTiles", () => {
        expect(createCoreMap().allTiles(x, y)).toEqual(expected.allTiles);
      });
      test("checkPassage (下)", () => {
        expect(createCoreMap().checkPassage(x, y, BIT_DOWN)).toBe(
          expected.passableDown,
        );
      });
      test("checkPassage (左)", () => {
        expect(createCoreMap().checkPassage(x, y, BIT_LEFT)).toBe(
          expected.passableLeft,
        );
      });
      test("isPassable", () => {
        const core = createCoreMap();
        expect(core.isPassable(x, y, DIRECTION_DOWN)).toBe(
          expected.passableDown,
        );
        expect(core.isPassable(x, y, DIRECTION_LEFT)).toBe(
          expected.passableLeft,
        );
      });
      test("isLadder", () => {
        expect(createCoreMap().isLadder(x, y)).toBe(expected.ladder);
      });
      test("isBush", () => {
        expect(createCoreMap().isBush(x, y)).toBe(expected.bush);
      });
      test("terrainTag", () => {
        expect(createCoreMap().terrainTag(x, y)).toBe(expected.terrainTag);
      });
    });
  });
};

const testCases: TestCase[] = [
  {
    name: "(0,0) 何もない床",
    x: 0,
    y: 0,
    expected: {
      layeredTiles: [0, 0, 0, 0],
      allTiles: [0, 0, 0, 0],
      // フラグ 0x00 なので、どの向きにも通れる
      passableDown: true,
      passableLeft: true,
      ladder: false,
      bush: false,
      terrainTag: 0,
    },
  },
  {
    name: "(1,0) 影響しないタイルの下に壁",
    x: 1,
    y: 0,
    expected: {
      layeredTiles: [TILE.NO_EFFECT, TILE.WALL, TILE.PLAIN, TILE.PLAIN],
      allTiles: [TILE.NO_EFFECT, TILE.WALL, TILE.PLAIN, TILE.PLAIN],
      // 0x10 は飛ばし、次の 0x0f で通れないと決まる
      passableDown: false,
      passableLeft: false,
      ladder: false,
      bush: false,
      terrainTag: 0,
    },
  },
  {
    name: "(2,0) 影響しないタイルだけ",
    x: 2,
    y: 0,
    expected: {
      layeredTiles: [2, 2, 2, 2],
      allTiles: [2, 2, 2, 2],
      // 全部飛ばされ、決まらないまま終わるので通れない
      passableDown: false,
      passableLeft: false,
      ladder: false,
      bush: false,
      terrainTag: 0,
    },
  },
  {
    name: "(0,1) 左だけ通れない + 地形タグ",
    x: 0,
    y: 1,
    expected: {
      layeredTiles: [TILE.LEFT_BLOCKED, TILE.TERRAIN_3, TILE.PLAIN, TILE.PLAIN],
      allTiles: [TILE.LEFT_BLOCKED, TILE.TERRAIN_3, TILE.PLAIN, TILE.PLAIN],
      // 0x02 は左のビット。下は 0 なので通れる
      passableDown: true,
      passableLeft: false,
      ladder: false,
      bush: false,
      // 上のレイヤーから探して最初に見つかったタグ
      terrainTag: 3,
    },
  },
  {
    name: "(1,1) タイルイベントが壁",
    x: 1,
    y: 1,
    expected: {
      layeredTiles: [0, 0, 0, 0],
      // イベントのタイルが先頭に来る
      allTiles: [TILE.WALL, 0, 0, 0, 0],
      // 下地は通れるが、イベントのタイルで先に決まる
      passableDown: false,
      passableLeft: false,
      ladder: false,
      bush: false,
      terrainTag: 0,
    },
  },
  {
    name: "(2,1) 梯子と茂み",
    x: 2,
    y: 1,
    expected: {
      layeredTiles: [TILE.LADDER, TILE.BUSH, TILE.COUNTER, TILE.DAMAGE],
      allTiles: [TILE.LADDER, TILE.BUSH, TILE.COUNTER, TILE.DAMAGE],
      // 0x20 は通行のビットを含まないので通れる
      passableDown: true,
      passableLeft: true,
      ladder: true,
      bush: true,
      terrainTag: 0,
    },
  },
];

testCases.forEach(runTestCase);

describe("マップの外", () => {
  const outside: [number, number][] = [
    [-1, 0],
    [0, -1],
    [WIDTH, 0],
    [0, HEIGHT],
  ];

  outside.forEach(([x, y]) => {
    describe(`(${x},${y})`, () => {
      test("function", () => {
        expect(mapIsLadder(map, x, y, provider)).toBe(false);
        expect(mapIsBush(map, x, y, provider)).toBe(false);
        expect(mapTerrainTag(map, x, y, provider)).toBe(0);
      });
      test("Map", () => {
        const core = createCoreMap();
        expect(core.isLadder(x, y)).toBe(false);
        expect(core.isBush(x, y)).toBe(false);
        expect(core.terrainTag(x, y)).toBe(0);
      });
    });
  });
});
