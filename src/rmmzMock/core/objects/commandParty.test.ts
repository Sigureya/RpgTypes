import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { MemberFunctions } from "@RpgTypes/libs";
import type { EventCommand } from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandGainItem,
  makeCommandGainWeapon,
} from "@RpgTypes/rmmz/eventCommand";
import type { Data_Armor, Data_Item, Data_Weapon } from "@RpgTypes/rmmz/rpg";
import {
  makeArmorData,
  makeItemData,
  makeWeaponData,
} from "@RpgTypes/rmmz/rpg";
import type { Rmmz_UnitPlayer } from "@RpgTypes/rmmzRuntime";
import type { FakeMap } from "./fakes/types";
import { Game_Interpreter } from "./rmmz_objects";

/* ----------------------------------------
 * Fake / Mock 定義
 * ------------------------------------- */

type FakeParty = Pick<
  Rmmz_UnitPlayer,
  "gold" | "gainGold" | "loseGold" | "gainItem" | "loseItem"
>;

const PARTY_METHOD_KEYS = [
  "gold",
  "gainGold",
  "loseGold",
  "gainItem",
  "loseItem",
] as const satisfies (keyof FakeParty)[];

const mockItems = [
  null,
  makeItemData({ id: 1, name: "Food" }),
  makeItemData({ id: 2, name: "Treasure" }),
] as const satisfies (Data_Item | null)[];

const mockWeapons = [
  null,
  makeWeaponData({ id: 1, name: "Axe" }),
  makeWeaponData({ id: 2, name: "Bow" }),
] as const satisfies (Data_Weapon | null)[];
const mockArmors = [
  null,
  makeArmorData({ id: 1, name: "Shield" }),
  makeArmorData({ id: 2, name: "Helmet" }),
] as const satisfies (Data_Armor | null)[];

const createMockParty = (): MockedObject<FakeParty> => ({
  gold: vi.fn().mockReturnValue(100),
  gainGold: vi.fn(),
  loseGold: vi.fn(),
  gainItem: vi.fn(),
  loseItem: vi.fn(),
});

const makeMockMap = (): FakeMap => ({
  mapId: () => 1,
});

/* ----------------------------------------
 * 共通検証ヘルパ
 * ------------------------------------- */

const assertExactMemberCalls = <T>(
  mock: T,
  expected: MemberFunctions<T>[],
  allKeys: readonly (keyof T & string)[],
) => {
  expected.forEach((e) => {
    expect(mock[e.fn]).toHaveBeenCalledWith(...e.arg);
  });

  const called = new Set(expected.map((e) => e.fn));
  allKeys.forEach((key) => {
    if (called.has(key)) {
      expect(mock[key]).toHaveBeenCalledTimes(1);
    } else {
      expect(mock[key]).not.toHaveBeenCalled();
    }
  });
};

/* ----------------------------------------
 * テスト実行環境構築
 * ------------------------------------- */

const setupInterpreter = (command: EventCommand) => {
  vi.stubGlobal("$dataItems", mockItems);
  vi.stubGlobal("$dataWeapons", mockWeapons);
  vi.stubGlobal("$dataArmors", mockArmors);

  const party = createMockParty();
  vi.stubGlobal("$gameParty", party);
  const map = makeMockMap();
  vi.stubGlobal("$gameMap", map);
  const interpreter = new Game_Interpreter();
  interpreter.setup([command], 0);

  return { interpreter, party };
};

/* ----------------------------------------
 * テストケース定義
 * ------------------------------------- */

interface TestCase {
  name: string;
  command: EventCommand;
  commandLiteral: EventCommand;
  expected: MemberFunctions<FakeParty>[];
}

const runTestCase = (tc: TestCase) => {
  describe(tc.name, () => {
    test("make", () => {
      expect(tc.command).toEqual(tc.commandLiteral);
    });
    test("exec", () => {
      const { interpreter, party } = setupInterpreter(tc.commandLiteral);
      interpreter.executeCommand();
      assertExactMemberCalls(party, tc.expected, PARTY_METHOD_KEYS);
    });
  });
};
const testCases: TestCase[] = [
  //   {
  //     name: "Change Gold",
  //     command: makeCommandChangeGold({ value: 50 }),
  //     expected: [{ fn: "gainGold", arg: [50] }],
  //   },
  {
    name: "gain Item",
    command: makeCommandGainItem({
      itemId: 1,
      value: 3,
    }),
    commandLiteral: {
      code: 126,
      indent: 0,
      parameters: [1, 0, 0, 3],
    },
    expected: [{ fn: "gainItem", arg: [mockItems[1], 3] }],
  },
  {
    name: "gain Weapon",
    command: makeCommandGainWeapon({
      weaponId: 1,
      value: 6,
    }),
    commandLiteral: {
      code: 127,
      indent: 0,
      parameters: [1, 0, 0, 6, false],
    },
    expected: [{ fn: "gainItem", arg: [mockWeapons[1], 6, false] }],
  },
];

/* ----------------------------------------
 * テスト定義
 * ------------------------------------- */

testCases.forEach(runTestCase);
