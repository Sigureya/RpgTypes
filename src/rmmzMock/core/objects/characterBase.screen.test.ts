import { afterEach, describe, expect, test } from "vitest";
import type {
  CharacterScreenState,
  GraphicsSize,
  Rmmz_CharacterMapProvider,
} from "@RpgTypes/rmmzFunctional/map/character/character";
import {
  distancePerFrame,
  isNearTheScreen,
  jumpHeight,
  realMoveSpeed,
  screenX,
  screenY,
  scrolledX,
  scrolledY,
} from "@RpgTypes/rmmzFunctional/map/character/character";
import type { Rmmz_CharacterBase } from "@RpgTypes/rmmzRuntime";
import { Game_CharacterBase } from "./rmmz_objects";

const TILE_WIDTH = 48;
const TILE_HEIGHT = 48;
const GRAPHICS: GraphicsSize = { width: 816, height: 624 };

/** 画面の左上がマップのどこかを表す。adjustX は realX からこれを引く */
const DISPLAY_X = 2;
const DISPLAY_Y = 1;

type FakeMapProvider = Pick<
  Rmmz_CharacterMapProvider,
  "adjustX" | "adjustY" | "tileWidth" | "tileHeight"
>;

const createMapProvider = (): FakeMapProvider => {
  return {
    adjustX: (x: number) => x - DISPLAY_X,
    adjustY: (y: number) => y - DISPLAY_Y,
    tileWidth: () => TILE_WIDTH,
    tileHeight: () => TILE_HEIGHT,
  };
};

/** Game_CharacterBase のうち、この検証で読まれるものだけ */
type FakeCharacterBase = Pick<
  Rmmz_CharacterBase,
  | "_realX"
  | "_realY"
  | "_moveSpeed"
  | "_jumpPeak"
  | "_jumpCount"
  | "isDashing"
  | "shiftY"
  | "jumpHeight"
  | "realMoveSpeed"
  | "distancePerFrame"
  | "scrolledX"
  | "scrolledY"
  | "screenX"
  | "screenY"
  | "isNearTheScreen"
>;

interface CharacterSource {
  realX: number;
  realY: number;
  moveSpeed: number;
  dashing: boolean;
  shiftY: number;
  jumpPeak: number;
  jumpCount: number;
}

const proto = Game_CharacterBase.prototype;

const createCoreCharacter = (source: CharacterSource): FakeCharacterBase => {
  Object.assign(globalThis, {
    $gameMap: createMapProvider(),
    Graphics: GRAPHICS,
  });
  return {
    _realX: source.realX,
    _realY: source.realY,
    _moveSpeed: source.moveSpeed,
    _jumpPeak: source.jumpPeak,
    _jumpCount: source.jumpCount,
    isDashing: () => source.dashing,
    shiftY: () => source.shiftY,
    jumpHeight: proto.jumpHeight,
    realMoveSpeed: proto.realMoveSpeed,
    distancePerFrame: proto.distancePerFrame,
    scrolledX: proto.scrolledX,
    scrolledY: proto.scrolledY,
    screenX: proto.screenX,
    screenY: proto.screenY,
    isNearTheScreen: proto.isNearTheScreen,
  };
};

const createScreenState = (source: CharacterSource): CharacterScreenState => {
  return {
    realX: source.realX,
    realY: source.realY,
    shiftY: source.shiftY,
    jumpHeight: jumpHeight(source.jumpPeak, source.jumpCount),
  };
};

afterEach(() => {
  const g = globalThis as unknown as Record<string, unknown>;
  delete g.$gameMap;
  delete g.Graphics;
});

interface TestCase {
  name: string;
  source: CharacterSource;
  expected: {
    jumpHeight: number;
    realMoveSpeed: number;
    distancePerFrame: number;
    scrolledX: number;
    scrolledY: number;
    screenX: number;
    screenY: number;
    isNearTheScreen: boolean;
  };
}

const runTestCase = (testCase: TestCase): void => {
  describe(testCase.name, () => {
    const { source, expected } = testCase;

    describe("function", () => {
      test("jumpHeight", () => {
        const result = jumpHeight(source.jumpPeak, source.jumpCount);
        expect(result).toBe(expected.jumpHeight);
      });

      test("realMoveSpeed", () => {
        const result = realMoveSpeed(source.moveSpeed, source.dashing);
        expect(result).toBe(expected.realMoveSpeed);
      });

      test("distancePerFrame", () => {
        const result = distancePerFrame(source.moveSpeed, source.dashing);
        expect(result).toBe(expected.distancePerFrame);
      });

      test("scrolledX", () => {
        const result = scrolledX(source.realX, createMapProvider());
        expect(result).toBe(expected.scrolledX);
      });

      test("scrolledY", () => {
        const result = scrolledY(source.realY, createMapProvider());
        expect(result).toBe(expected.scrolledY);
      });

      test("screenX", () => {
        const result = screenX(createScreenState(source), createMapProvider());
        expect(result).toBe(expected.screenX);
      });

      test("screenY", () => {
        const result = screenY(createScreenState(source), createMapProvider());
        expect(result).toBe(expected.screenY);
      });

      test("isNearTheScreen", () => {
        const result = isNearTheScreen(
          createScreenState(source),
          createMapProvider(),
          GRAPHICS,
        );
        expect(result).toBe(expected.isNearTheScreen);
      });
    });

    describe("CharacterBase", () => {
      test("jumpHeight", () => {
        const character = createCoreCharacter(source);
        expect(character.jumpHeight()).toBe(expected.jumpHeight);
      });

      test("realMoveSpeed", () => {
        const character = createCoreCharacter(source);
        expect(character.realMoveSpeed()).toBe(expected.realMoveSpeed);
      });

      test("distancePerFrame", () => {
        const character = createCoreCharacter(source);
        expect(character.distancePerFrame()).toBe(expected.distancePerFrame);
      });

      test("scrolledX", () => {
        const character = createCoreCharacter(source);
        expect(character.scrolledX()).toBe(expected.scrolledX);
      });

      test("scrolledY", () => {
        const character = createCoreCharacter(source);
        expect(character.scrolledY()).toBe(expected.scrolledY);
      });

      test("screenX", () => {
        const character = createCoreCharacter(source);
        expect(character.screenX()).toBe(expected.screenX);
      });

      test("screenY", () => {
        const character = createCoreCharacter(source);
        expect(character.screenY()).toBe(expected.screenY);
      });

      test("isNearTheScreen", () => {
        const character = createCoreCharacter(source);
        expect(character.isNearTheScreen()).toBe(expected.isNearTheScreen);
      });
    });
  });
};

const testCases: TestCase[] = [
  {
    name: "画面内で停止中",
    source: {
      realX: 5,
      realY: 4,
      moveSpeed: 4,
      dashing: false,
      shiftY: 0,
      jumpPeak: 0,
      jumpCount: 0,
    },
    expected: {
      jumpHeight: 0,
      realMoveSpeed: 4,
      distancePerFrame: 16 / 256,
      scrolledX: 3,
      scrolledY: 3,
      // 3 * 48 + 24
      screenX: 168,
      // 3 * 48 + 48 - 0 - 0
      screenY: 192,
      isNearTheScreen: true,
    },
  },
  {
    name: "ダッシュ中",
    source: {
      realX: 2,
      realY: 1,
      moveSpeed: 4,
      dashing: true,
      shiftY: 0,
      jumpPeak: 0,
      jumpCount: 0,
    },
    expected: {
      jumpHeight: 0,
      realMoveSpeed: 5,
      distancePerFrame: 32 / 256,
      scrolledX: 0,
      scrolledY: 0,
      screenX: 24,
      screenY: 48,
      isNearTheScreen: true,
    },
  },
  {
    name: "ジャンプの頂点",
    source: {
      realX: 5,
      realY: 4,
      moveSpeed: 3,
      dashing: false,
      shiftY: 6,
      jumpPeak: 4,
      jumpCount: 4,
    },
    expected: {
      // (4*4 - |4-4|^2) / 2
      jumpHeight: 8,
      realMoveSpeed: 3,
      distancePerFrame: 8 / 256,
      scrolledX: 3,
      scrolledY: 3,
      screenX: 168,
      // 3 * 48 + 48 - 6 - 8
      screenY: 178,
      isNearTheScreen: true,
    },
  },
  {
    name: "ジャンプの途中",
    source: {
      realX: 0.5,
      realY: 0.25,
      moveSpeed: 4,
      dashing: false,
      shiftY: 0,
      jumpPeak: 4,
      jumpCount: 1,
    },
    expected: {
      // (16 - 9) / 2
      jumpHeight: 3.5,
      realMoveSpeed: 4,
      distancePerFrame: 16 / 256,
      scrolledX: -1.5,
      scrolledY: -0.75,
      // floor(-1.5 * 48 + 24)
      screenX: -48,
      // floor(-0.75 * 48 + 48 - 0 - 3.5)
      screenY: 8,
      isNearTheScreen: true,
    },
  },
  {
    name: "画面から遠い",
    source: {
      realX: 40,
      realY: 30,
      moveSpeed: 4,
      dashing: false,
      shiftY: 0,
      jumpPeak: 0,
      jumpCount: 0,
    },
    expected: {
      jumpHeight: 0,
      realMoveSpeed: 4,
      distancePerFrame: 16 / 256,
      scrolledX: 38,
      scrolledY: 29,
      screenX: 1848,
      screenY: 1440,
      isNearTheScreen: false,
    },
  },
];

testCases.forEach(runTestCase);
