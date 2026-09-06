import { describe, expect, test, vi } from "vitest";
import type { MapEvent, MapEventPage } from "@RpgTypes/rmmz/rpg";
import {
  mapEventsXyNt,
  mapHasEventNt,
  mapIsCollidedWithEvents,
  mapTileEventTileIds,
} from "./map";
import type { Provider_MapEventPageResolver } from "./providerType";

/**
 * ページのうち、通行判定で読まれるのは 3 つだけ。
 *   through … すり抜けるか
 *   priorityType … 0 なら通常キャラの下 (タイルとして扱う)
 *   image.tileId … 0 より大きければタイルイベント
 */
const page = (
  through: boolean,
  priorityType: number,
  tileId: number,
): MapEventPage =>
  ({
    through,
    priorityType,
    image: { tileId },
  }) as MapEventPage;

const event = (id: number, x: number, y: number): MapEvent => ({
  id,
  name: `EV${id}`,
  pages: [],
  note: "",
  x,
  y,
});

const POINT = { x: 1, y: 2 } as const;

interface EventSource {
  id: number;
  x: number;
  y: number;
  /** null なら有効なページが無い (出現条件を満たしていない) */
  page: MapEventPage | null;
}

interface TestCase {
  name: string;
  sources: EventSource[];
  expected: {
    /** すり抜けないイベントの番号 */
    notThroughIds: number[];
    /** タイルとして扱われるタイル番号 */
    tileIds: number[];
    /** 通行を妨げるイベントがいるか (通常キャラの高さ) */
    collided: boolean;
    /** すり抜けないイベントが 1 つでもいるか */
    hasEventNt: boolean;
  };
}

const createProvider = (
  sources: EventSource[],
): Provider_MapEventPageResolver & {
  activePage: ReturnType<typeof vi.fn>;
} => {
  const pages = new Map(sources.map((source) => [source.id, source.page]));
  return {
    activePage: vi.fn((target: MapEvent) => pages.get(target.id) ?? null),
  };
};

const createMap = (sources: EventSource[]) => ({
  events: [null, ...sources.map((s) => event(s.id, s.x, s.y))],
});

const runTestCase = (testCase: TestCase): void => {
  describe(testCase.name, () => {
    const { sources, expected } = testCase;

    test("mapEventsXyNt", () => {
      const result = mapEventsXyNt(
        createMap(sources),
        POINT.x,
        POINT.y,
        createProvider(sources),
      );
      expect(result.map((e) => e.id)).toEqual(expected.notThroughIds);
    });

    test("mapTileEventTileIds", () => {
      const result = mapTileEventTileIds(
        createMap(sources),
        POINT.x,
        POINT.y,
        createProvider(sources),
      );
      expect(result).toEqual(expected.tileIds);
    });

    test("mapIsCollidedWithEvents", () => {
      const result = mapIsCollidedWithEvents(
        createMap(sources),
        POINT.x,
        POINT.y,
        createProvider(sources),
      );
      expect(result).toBe(expected.collided);
    });

    test("mapHasEventNt", () => {
      const result = mapHasEventNt(
        createMap(sources),
        POINT.x,
        POINT.y,
        createProvider(sources),
      );
      expect(result).toBe(expected.hasEventNt);
    });

    test("有効なページを引くのはイベント 1 つにつき 1 回", () => {
      // 毎フレームの通行判定から呼ばれる。ここが増えると全体に効く
      const provider = createProvider(sources);
      mapTileEventTileIds(createMap(sources), POINT.x, POINT.y, provider);
      const atPoint = sources.filter(
        (s) => s.x === POINT.x && s.y === POINT.y,
      ).length;
      expect(provider.activePage).toHaveBeenCalledTimes(atPoint);
    });
  });
};

const testCases: TestCase[] = [
  {
    name: "イベントなし",
    sources: [],
    expected: {
      notThroughIds: [],
      tileIds: [],
      collided: false,
      hasEventNt: false,
    },
  },
  {
    name: "別の場所にいる",
    sources: [{ id: 1, x: 5, y: 5, page: page(false, 0, 100) }],
    expected: {
      notThroughIds: [],
      tileIds: [],
      collided: false,
      hasEventNt: false,
    },
  },
  {
    name: "タイルとして扱われる",
    sources: [{ id: 1, x: POINT.x, y: POINT.y, page: page(false, 0, 100) }],
    expected: {
      notThroughIds: [1],
      tileIds: [100],
      // タイルの高さ (0) なので、移動は妨げない
      collided: false,
      hasEventNt: true,
    },
  },
  {
    name: "すり抜けるページ",
    sources: [{ id: 1, x: POINT.x, y: POINT.y, page: page(true, 0, 100) }],
    // すり抜けても、タイルとしての扱いは変わらない
    expected: {
      notThroughIds: [],
      tileIds: [100],
      collided: false,
      hasEventNt: false,
    },
  },
  {
    name: "通常キャラと同じ高さ",
    sources: [{ id: 1, x: POINT.x, y: POINT.y, page: page(false, 1, 100) }],
    // priorityType が 0 でなければタイルにならない
    expected: {
      notThroughIds: [1],
      tileIds: [],
      // 通常キャラの高さなので移動を妨げる
      collided: true,
      hasEventNt: true,
    },
  },
  {
    name: "画像が無い",
    sources: [{ id: 1, x: POINT.x, y: POINT.y, page: page(false, 0, 0) }],
    expected: {
      notThroughIds: [1],
      tileIds: [],
      collided: false,
      hasEventNt: true,
    },
  },
  {
    name: "有効なページが無い",
    sources: [{ id: 1, x: POINT.x, y: POINT.y, page: null }],
    expected: {
      notThroughIds: [],
      tileIds: [],
      collided: false,
      hasEventNt: false,
    },
  },
  {
    name: "同じ場所に複数",
    sources: [
      { id: 1, x: POINT.x, y: POINT.y, page: page(false, 0, 100) },
      { id: 2, x: POINT.x, y: POINT.y, page: page(true, 0, 200) },
      { id: 3, x: POINT.x, y: POINT.y, page: page(false, 1, 300) },
      { id: 4, x: 5, y: 5, page: page(false, 0, 400) },
    ],
    expected: {
      notThroughIds: [1, 3],
      tileIds: [100, 200],
      // id:3 が通常キャラの高さ
      collided: true,
      hasEventNt: true,
    },
  },
];

testCases.forEach(runTestCase);
