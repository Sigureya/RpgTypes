import { afterEach, describe, expect, test, vi } from "vitest";
import type { CharacterPositionLike } from "@RpgTypes/rmmzFunctional/map/character/character";
import {
  directionAwayFromTarget,
  directionTowardTarget,
  reverseDirection,
  turn180,
  turnLeft90,
  turnRandom,
  turnRight90,
  turnRightOrLeft90,
} from "@RpgTypes/rmmzFunctional/map/character/character";
import type { Rmmz_Character, Rmmz_MapCharacter } from "@RpgTypes/rmmzRuntime";
import type { Direction8 } from "@RpgTypes/rmmz/utils";
import { DIRECTION } from "@RpgTypes/rmmz/utils";
import { Game_Character } from "./rmmz_objects";

/** 向きの変更で読まれるものだけ */
type FakeCharacter = Pick<
  Rmmz_Character,
  | "_direction"
  | "_directionFix"
  | "direction"
  | "setDirection"
  | "isDirectionFixed"
  | "resetStopCount"
  | "reverseDir"
  | "turnRight90"
  | "turnLeft90"
  | "turn180"
  | "turnRightOrLeft90"
  | "turnRandom"
  | "turnTowardCharacter"
  | "turnAwayFromCharacter"
  | "deltaXFrom"
  | "deltaYFrom"
>;

const proto = Game_Character.prototype;

const createCoreCharacter = (direction: Direction8): FakeCharacter => {
  return {
    _direction: direction,
    _directionFix: false,
    direction: proto.direction,
    setDirection: proto.setDirection,
    isDirectionFixed: proto.isDirectionFixed,
    // 向きを変えると停止時間が戻る。ここでは数えない
    resetStopCount: () => {},
    reverseDir: proto.reverseDir,
    turnRight90: proto.turnRight90,
    turnLeft90: proto.turnLeft90,
    turn180: proto.turn180,
    turnRightOrLeft90: proto.turnRightOrLeft90,
    turnRandom: proto.turnRandom,
    turnTowardCharacter: proto.turnTowardCharacter,
    turnAwayFromCharacter: proto.turnAwayFromCharacter,
    deltaXFrom: proto.deltaXFrom,
    deltaYFrom: proto.deltaYFrom,
  };
};

afterEach(() => {
  vi.unstubAllGlobals();
});

interface TestCase {
  name: string;
  direction: Direction8;
  expected: {
    reverse: Direction8;
    right90: Direction8;
    left90: Direction8;
    turned180: Direction8;
  };
}

const runTestCase = (testCase: TestCase): void => {
  describe(testCase.name, () => {
    const { direction, expected } = testCase;

    describe("function", () => {
      test("reverseDirection", () => {
        expect(reverseDirection(direction)).toBe(expected.reverse);
      });
      test("turnRight90", () => {
        expect(turnRight90(direction)).toBe(expected.right90);
      });
      test("turnLeft90", () => {
        expect(turnLeft90(direction)).toBe(expected.left90);
      });
      test("turn180", () => {
        expect(turn180(direction)).toBe(expected.turned180);
      });
      test("turnRightOrLeft90 (乱数 0 なら右)", () => {
        expect(turnRightOrLeft90(direction, () => 0)).toBe(expected.right90);
      });
      test("turnRightOrLeft90 (乱数 1 なら左)", () => {
        expect(turnRightOrLeft90(direction, () => 1)).toBe(expected.left90);
      });
    });

    describe("Character", () => {
      test("reverseDir", () => {
        expect(createCoreCharacter(direction).reverseDir(direction)).toBe(
          expected.reverse,
        );
      });
      test("turnRight90", () => {
        const character = createCoreCharacter(direction);
        character.turnRight90();
        expect(character.direction()).toBe(expected.right90);
      });
      test("turnLeft90", () => {
        const character = createCoreCharacter(direction);
        character.turnLeft90();
        expect(character.direction()).toBe(expected.left90);
      });
      test("turn180", () => {
        const character = createCoreCharacter(direction);
        character.turn180();
        expect(character.direction()).toBe(expected.turned180);
      });
      test("turnRightOrLeft90 (乱数 0 なら右)", () => {
        // @ts-expect-error Math.randomInt はツクールが足す拡張
        Math.randomInt = () => 0;
        const character = createCoreCharacter(direction);
        character.turnRightOrLeft90();
        expect(character.direction()).toBe(expected.right90);
      });
      test("turnRightOrLeft90 (乱数 1 なら左)", () => {
        // @ts-expect-error Math.randomInt はツクールが足す拡張
        Math.randomInt = () => 1;
        const character = createCoreCharacter(direction);
        character.turnRightOrLeft90();
        expect(character.direction()).toBe(expected.left90);
      });
    });
  });
};

const testCases: TestCase[] = [
  {
    name: "下を向いている",
    direction: DIRECTION.DOWN,
    expected: {
      // 10 - 2
      reverse: DIRECTION.UP,
      right90: DIRECTION.LEFT,
      left90: DIRECTION.RIGHT,
      turned180: DIRECTION.UP,
    },
  },
  {
    name: "左を向いている",
    direction: DIRECTION.LEFT,
    expected: {
      reverse: DIRECTION.RIGHT,
      right90: DIRECTION.UP,
      left90: DIRECTION.DOWN,
      turned180: DIRECTION.RIGHT,
    },
  },
  {
    name: "右を向いている",
    direction: DIRECTION.RIGHT,
    expected: {
      reverse: DIRECTION.LEFT,
      right90: DIRECTION.DOWN,
      left90: DIRECTION.UP,
      turned180: DIRECTION.LEFT,
    },
  },
  {
    name: "上を向いている",
    direction: DIRECTION.UP,
    expected: {
      reverse: DIRECTION.DOWN,
      right90: DIRECTION.RIGHT,
      left90: DIRECTION.LEFT,
      turned180: DIRECTION.DOWN,
    },
  },
];

testCases.forEach(runTestCase);

describe("turnRandom", () => {
  interface RandomCase {
    randomValue: number;
    expected: Direction8;
  }

  // コアは 2 + randomInt(4) * 2
  const randomCases: RandomCase[] = [
    { randomValue: 0, expected: DIRECTION.DOWN },
    { randomValue: 1, expected: DIRECTION.LEFT },
    { randomValue: 2, expected: DIRECTION.RIGHT },
    { randomValue: 3, expected: DIRECTION.UP },
  ];

  randomCases.forEach(({ randomValue, expected }) => {
    describe(`乱数 ${randomValue}`, () => {
      test("function", () => {
        expect(turnRandom(() => randomValue)).toBe(expected);
      });
      test("Character", () => {
        // @ts-expect-error Math.randomInt はツクールが足す拡張
        Math.randomInt = () => randomValue;
        const character = createCoreCharacter(DIRECTION.DOWN);
        character.turnRandom();
        expect(character.direction()).toBe(expected);
      });
    });
  });
});

/** 差の計算。ループしないマップなら引き算 */
const mapProvider = {
  deltaX: (x1: number, x2: number) => x1 - x2,
  deltaY: (y1: number, y2: number) => y1 - y2,
};

/** 向きが変わらなかったことを見分けるための初期値 */
const INITIAL_DIRECTION = DIRECTION.DOWN;

interface TowardCase {
  name: string;
  self: CharacterPositionLike;
  target: CharacterPositionLike;
  expected: {
    /** null なら向きを変えない */
    toward: Direction8 | null;
    away: Direction8 | null;
  };
}

const runTowardCase = ({ name, self, target, expected }: TowardCase): void => {
  describe(name, () => {
    describe("function", () => {
      test("directionTowardTarget", () => {
        expect(directionTowardTarget(self, target, mapProvider)).toBe(
          expected.toward,
        );
      });
      test("directionAwayFromTarget", () => {
        expect(directionAwayFromTarget(self, target, mapProvider)).toBe(
          expected.away,
        );
      });
    });

    describe("Character", () => {
      const createSelf = (): FakeCharacter & CharacterPositionLike => {
        vi.stubGlobal("$gameMap", mapProvider);
        return { ...createCoreCharacter(INITIAL_DIRECTION), ...self };
      };
      const other = target as unknown as Rmmz_MapCharacter;

      test("turnTowardCharacter", () => {
        const character = createSelf();
        character.turnTowardCharacter(other);
        // null は「向きを変えない」なので、初期値のままになる
        expect(character.direction()).toBe(expected.toward ?? INITIAL_DIRECTION);
      });
      test("turnAwayFromCharacter", () => {
        const character = createSelf();
        character.turnAwayFromCharacter(other);
        expect(character.direction()).toBe(expected.away ?? INITIAL_DIRECTION);
      });
    });
  });
};

const towardCases: TowardCase[] = [
  {
    name: "相手が右に離れている",
    self: { x: 2, y: 5 },
    target: { x: 8, y: 5 },
    expected: { toward: DIRECTION.RIGHT, away: DIRECTION.LEFT },
  },
  {
    name: "相手が左に離れている",
    self: { x: 8, y: 5 },
    target: { x: 2, y: 5 },
    expected: { toward: DIRECTION.LEFT, away: DIRECTION.RIGHT },
  },
  {
    name: "相手が下に離れている",
    self: { x: 5, y: 2 },
    target: { x: 5, y: 8 },
    expected: { toward: DIRECTION.DOWN, away: DIRECTION.UP },
  },
  {
    name: "相手が上に離れている",
    self: { x: 5, y: 8 },
    target: { x: 5, y: 2 },
    expected: { toward: DIRECTION.UP, away: DIRECTION.DOWN },
  },
  {
    name: "斜めで横のほうが遠い",
    self: { x: 0, y: 0 },
    target: { x: 5, y: 2 },
    expected: { toward: DIRECTION.RIGHT, away: DIRECTION.LEFT },
  },
  {
    name: "斜めで縦のほうが遠い",
    self: { x: 0, y: 0 },
    target: { x: 2, y: 5 },
    expected: { toward: DIRECTION.DOWN, away: DIRECTION.UP },
  },
  {
    name: "縦横の差が同じなら縦を採る",
    self: { x: 0, y: 0 },
    target: { x: 3, y: 3 },
    // abs(sx) > abs(sy) が false なので、次の sy !== 0 に落ちる
    expected: { toward: DIRECTION.DOWN, away: DIRECTION.UP },
  },
  {
    name: "同じ位置なら向きを変えない",
    self: { x: 4, y: 4 },
    target: { x: 4, y: 4 },
    expected: { toward: null, away: null },
  },
];

towardCases.forEach(runTowardCase);
