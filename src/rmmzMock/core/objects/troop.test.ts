import type { MockedObject } from "vitest";
import { describe, test, expect, vi } from "vitest";
import type { IdentifiedItems } from "@RpgTypes/libs";
import type { EventCommand } from "@RpgTypes/rmmz/eventCommand";
import { makeCommandGainActorHP } from "@RpgTypes/rmmz/eventCommand";
import type { Data_Enemy } from "@RpgTypes/rmmz/rpg";
import { makeParamArray } from "@RpgTypes/rmmz/rpg";
import { Game_Interpreter } from "@RpgTypes/rmmzRuntime";
import type { Rmmz_Battler } from "@RpgTypes/rmmzRuntime/objects/core/battler/battler";
import type { Rmmz_Unit } from "@RpgTypes/rmmzRuntime/objects/core/unit/unit";

const mockBirdman: Data_Enemy = {
  name: "birdman",
  battlerName: "Birdman",
  battlerHue: 0,
  actions: [],
  dropItems: [],
  exp: 257,
  gold: 123,
  id: 1,
  note: "",
  params: makeParamArray({
    mhp: 80,
    atk: 120,
    def: 70,
    mat: 110,
    mdf: 70,
    agi: 80,
    mmp: 99,
    luk: 77,
  }),
  traits: [],
};

const mockEnemies: IdentifiedItems<Data_Enemy> = [null, mockBirdman];

globalThis.$dataEnemies = mockEnemies;

declare global {
  var $dataEnemies: (Data_Enemy | null)[];
  var $gameTroop: XXXUnit;
}

type Keys = "loseHp" | "loseMp" | "loseTp" | "gaineHp" | "gainMp" | "gainTp";

type MockBattler = Pick<Rmmz_Battler, Keys>;

type XXXUnit = Pick<Rmmz_Unit<MockBattler>, "members">;

const makeMockEnemy = (): MockedObject<MockBattler> => {
  return {
    loseHp: vi.fn(),
    loseMp: vi.fn(),
    loseTp: vi.fn(),
    gaineHp: vi.fn(),
    gainMp: vi.fn(),
    gainTp: vi.fn(),
  };
};
interface TestCase {
  command: EventCommand;
  key: Keys;
  value: number;
}

const runCommandTest = ({ command, key, value }: TestCase) => {
  const mockBattler = makeMockEnemy();
  const mockTroop: MockedObject<XXXUnit> = {
    members: vi.fn(() => [mockBattler]),
  };
  globalThis.$gameTroop = mockTroop;
  test(key, () => {
    const interpreter = new Game_Interpreter();
    interpreter.setup([command], 0);
    const result = interpreter.executeCommand();
    expect(result).toBe(true);
    expect(mockBattler[key]).toHaveBeenCalledWith(value);
  });
};

const testCases: TestCase[] = [
  {
    command: makeCommandGainActorHP({
      allowDeath: false,
      operand: {
        type: "direct",
        value: 123,
      },
      targetType: "each",
      target: 0,
      operation: "plus",
    }),
    key: "gainMp",
    value: 123,
  },
];

describe.skip("", () => {
  testCases.forEach(runCommandTest);
});
