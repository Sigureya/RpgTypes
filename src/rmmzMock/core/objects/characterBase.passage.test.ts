import { afterEach, describe, expect, test, vi } from "vitest";
import type {
  CharacterPassabilityState,
  Rmmz_CharacterPassabilityProvider,
} from "@RpgTypes/rmmzFunctional/map/character/character";
import {
  canPass,
  canPassDiagonally,
  deltaXFrom,
  deltaYFrom,
  isMapPassable,
} from "@RpgTypes/rmmzFunctional/map/character/character";
import type { Direction8 } from "@RpgTypes/rmmz/utils";
import { DIRECTION } from "@RpgTypes/rmmz/utils";
import type { Rmmz_Character } from "@RpgTypes/rmmzRuntime";
import { Game_Character, Game_CharacterBase } from "./rmmz_objects";

const SIZE = 3;

/** 通行判定が見る世界。コア側と関数側の両方をここから作る */
interface World {
  /** 通れない「x,y,向き」 */
  blocked: string[];
  /** 誰かがいる「x,y」 */
  occupied: string[];
  through: boolean;
  debugThrough: boolean;
}

const EMPTY_WORLD: World = {
  blocked: [],
  occupied: [],
  through: false,
  debugThrough: false,
};

const key = (x: number, y: number, direction?: Direction8): string =>
  direction === undefined ? `${x},${y}` : `${x},${y},${direction}`;

const createProvider = (
  world: World,
): Rmmz_CharacterPassabilityProvider & {
  isPassable: ReturnType<typeof vi.fn>;
} => {
  return {
    roundXWithDirection: (x: number, direction: Direction8) =>
      x + (direction === DIRECTION.RIGHT ? 1 : direction === DIRECTION.LEFT ? -1 : 0),
    roundYWithDirection: (y: number, direction: Direction8) =>
      y + (direction === DIRECTION.DOWN ? 1 : direction === DIRECTION.UP ? -1 : 0),
    isValid: (x: number, y: number) =>
      x >= 0 && y >= 0 && x < SIZE && y < SIZE,
    isPassable: vi.fn(
      (x: number, y: number, direction: Direction8) =>
        !world.blocked.includes(key(x, y, direction)),
    ),
    isCollidedWithCharacters: (x: number, y: number) =>
      world.occupied.includes(key(x, y)),
  };
};

/** 差の計算だけを見る範囲 */
const deltaProvider = {
  deltaX: (x1: number, x2: number) => x1 - x2,
  deltaY: (y1: number, y2: number) => y1 - y2,
};

const createState = (world: World): CharacterPassabilityState => ({
  through: world.through,
  debugThrough: world.debugThrough,
});

/** 通行判定で読まれるものだけ */
type FakeCharacter = Pick<
  Rmmz_Character,
  | "isThrough"
  | "isDebugThrough"
  | "isCollidedWithCharacters"
  | "reverseDir"
  | "isMapPassable"
  | "canPass"
  | "canPassDiagonally"
> & { x: number; y: number };

/** deltaXFrom は Game_Character 側にある */
type FakeDeltaCharacter = Pick<Rmmz_Character, "deltaXFrom" | "deltaYFrom"> & {
  x: number;
  y: number;
};

const proto = Game_CharacterBase.prototype;
const characterProto = Game_Character.prototype;

const createCoreCharacter = (world: World, x = 0, y = 0): FakeCharacter => {
  vi.stubGlobal("$gameMap", createProvider(world));
  return {
    x,
    y,
    isThrough: () => world.through,
    isDebugThrough: () => world.debugThrough,
    isCollidedWithCharacters: (cx: number, cy: number) =>
      world.occupied.includes(key(cx, cy)),
    reverseDir: proto.reverseDir,
    isMapPassable: proto.isMapPassable,
    canPass: proto.canPass,
    canPassDiagonally: proto.canPassDiagonally,
  };
};

const createCoreDeltaCharacter = (x: number, y: number): FakeDeltaCharacter => {
  vi.stubGlobal("$gameMap", deltaProvider);
  return {
    x,
    y,
    deltaXFrom: characterProto.deltaXFrom,
    deltaYFrom: characterProto.deltaYFrom,
  };
};

afterEach(() => {
  vi.unstubAllGlobals();
});

interface TestCase {
  name: string;
  world: World;
  x: number;
  y: number;
  direction: Direction8;
  expected: {
    mapPassable: boolean;
    canPass: boolean;
  };
}

const runTestCase = (testCase: TestCase): void => {
  describe(testCase.name, () => {
    const { world, x, y, direction, expected } = testCase;

    describe("function", () => {
      test("isMapPassable", () => {
        const result = isMapPassable(x, y, direction, createProvider(world));
        expect(result).toBe(expected.mapPassable);
      });
      test("canPass", () => {
        const result = canPass(
          x,
          y,
          direction,
          createState(world),
          createProvider(world),
        );
        expect(result).toBe(expected.canPass);
      });
    });

    describe("CharacterBase", () => {
      test("isMapPassable", () => {
        const character = createCoreCharacter(world, x, y);
        expect(character.isMapPassable(x, y, direction)).toBe(
          expected.mapPassable,
        );
      });
      test("canPass", () => {
        const character = createCoreCharacter(world, x, y);
        expect(character.canPass(x, y, direction)).toBe(expected.canPass);
      });
    });
  });
};

const testCases: TestCase[] = [
  {
    name: "何も無いので通れる",
    world: EMPTY_WORLD,
    x: 1,
    y: 1,
    direction: DIRECTION.RIGHT,
    expected: { mapPassable: true, canPass: true },
  },
  {
    name: "進む先がマップの外",
    world: EMPTY_WORLD,
    x: 2,
    y: 1,
    direction: DIRECTION.RIGHT,
    // タイル自体は通れるが、行き先が範囲外なので進めない
    expected: { mapPassable: true, canPass: false },
  },
  {
    name: "自分のタイルから出られない",
    world: { ...EMPTY_WORLD, blocked: [key(1, 1, DIRECTION.RIGHT)] },
    x: 1,
    y: 1,
    direction: DIRECTION.RIGHT,
    expected: { mapPassable: false, canPass: false },
  },
  {
    name: "行き先のタイルへ入れない",
    world: { ...EMPTY_WORLD, blocked: [key(2, 1, DIRECTION.LEFT)] },
    x: 1,
    y: 1,
    direction: DIRECTION.RIGHT,
    // 進んだ先から戻る向きも見る
    expected: { mapPassable: false, canPass: false },
  },
  {
    name: "行き先に誰かがいる",
    world: { ...EMPTY_WORLD, occupied: [key(2, 1)] },
    x: 1,
    y: 1,
    direction: DIRECTION.RIGHT,
    expected: { mapPassable: true, canPass: false },
  },
  {
    name: "すり抜け中はタイルを無視する",
    world: {
      ...EMPTY_WORLD,
      through: true,
      blocked: [key(1, 1, DIRECTION.RIGHT)],
      occupied: [key(2, 1)],
    },
    x: 1,
    y: 1,
    direction: DIRECTION.RIGHT,
    // isMapPassable 自体はタイルを見るので false のまま
    expected: { mapPassable: false, canPass: true },
  },
  {
    name: "デバッグすり抜けも同じ",
    world: {
      ...EMPTY_WORLD,
      debugThrough: true,
      blocked: [key(1, 1, DIRECTION.RIGHT)],
    },
    x: 1,
    y: 1,
    direction: DIRECTION.RIGHT,
    expected: { mapPassable: false, canPass: true },
  },
  {
    name: "すり抜けてもマップの外へは出られない",
    world: { ...EMPTY_WORLD, through: true },
    x: 2,
    y: 1,
    direction: DIRECTION.RIGHT,
    expected: { mapPassable: true, canPass: false },
  },
  {
    name: "上へ進む",
    world: { ...EMPTY_WORLD, blocked: [key(1, 0, DIRECTION.DOWN)] },
    x: 1,
    y: 1,
    direction: DIRECTION.UP,
    // 行き先 (1,0) から戻る向きは下
    expected: { mapPassable: false, canPass: false },
  },
];

testCases.forEach(runTestCase);

interface DiagonalCase {
  name: string;
  world: World;
  expected: boolean;
}

/** (1,1) から右下 (2,2) へ抜けられるか */
const runDiagonalCase = ({ name, world, expected }: DiagonalCase): void => {
  describe(name, () => {
    test("function", () => {
      const result = canPassDiagonally(
        1,
        1,
        DIRECTION.RIGHT,
        DIRECTION.DOWN,
        createState(world),
        createProvider(world),
      );
      expect(result).toBe(expected);
    });

    test("CharacterBase", () => {
      const character = createCoreCharacter(world, 1, 1);
      expect(
        character.canPassDiagonally(1, 1, DIRECTION.RIGHT, DIRECTION.DOWN),
      ).toBe(expected);
    });
  });
};

const diagonalCases: DiagonalCase[] = [
  {
    name: "どちらの回り道も通れる",
    world: EMPTY_WORLD,
    expected: true,
  },
  {
    name: "下→右の道だけ通れる",
    // 右へ出る道を塞ぐ
    world: { ...EMPTY_WORLD, blocked: [key(1, 1, DIRECTION.RIGHT)] },
    expected: true,
  },
  {
    name: "右→下の道だけ通れる",
    // 下へ出る道を塞ぐ
    world: { ...EMPTY_WORLD, blocked: [key(1, 1, DIRECTION.DOWN)] },
    expected: true,
  },
  {
    name: "どちらの回り道も塞がれている",
    world: {
      ...EMPTY_WORLD,
      blocked: [key(1, 1, DIRECTION.RIGHT), key(1, 1, DIRECTION.DOWN)],
    },
    expected: false,
  },
  {
    name: "回り道の 2 歩目が塞がれている",
    world: {
      ...EMPTY_WORLD,
      // (1,2) から右へ / (2,1) から下へ、どちらも塞ぐ
      blocked: [key(1, 2, DIRECTION.RIGHT), key(2, 1, DIRECTION.DOWN)],
    },
    expected: false,
  },
];

diagonalCases.forEach(runDiagonalCase);

describe("差の計算", () => {
  test("function", () => {
    expect(deltaXFrom(5, 2, deltaProvider)).toBe(3);
    expect(deltaYFrom(2, 5, deltaProvider)).toBe(-3);
  });

  test("Character", () => {
    const character = createCoreDeltaCharacter(5, 2);
    expect(character.deltaXFrom(2)).toBe(3);
    expect(character.deltaYFrom(5)).toBe(-3);
  });
});

describe("斜め判定はタイルの通行判定を何度も呼ぶ", () => {
  // 毎フレームの経路。呼び出し回数が増えていないかを固定する
  test("function", () => {
    const provider = createProvider(EMPTY_WORLD);
    canPassDiagonally(
      1,
      1,
      DIRECTION.RIGHT,
      DIRECTION.DOWN,
      createState(EMPTY_WORLD),
      provider,
    );
    // canPass 2 回 * isMapPassable の中で 2 回
    expect(provider.isPassable).toHaveBeenCalledTimes(4);
  });

  test("塞がれていると回り道のぶん増える", () => {
    const world = { ...EMPTY_WORLD, blocked: [key(1, 1, DIRECTION.RIGHT)] };
    const provider = createProvider(world);
    canPassDiagonally(
      1,
      1,
      DIRECTION.RIGHT,
      DIRECTION.DOWN,
      createState(world),
      provider,
    );
    expect(provider.isPassable).toHaveBeenCalledTimes(4);
  });
});
