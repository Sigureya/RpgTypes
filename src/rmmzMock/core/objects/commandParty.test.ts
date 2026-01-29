import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { MemberFunctions } from "@RpgTypes/libs";
import type { EventCommand } from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandGainArmor,
  makeCommandGainArmorByVariable,
  makeCommandGainGold,
  makeCommandGainGoldByVariable,
  makeCommandGainItem,
  makeCommandGainItemV,
  makeCommandGainWeapon,
  makeCommandGainWeaponV,
  makeCommandLoseArmor,
  makeCommandLoseArmorByVariable,
  makeCommandLoseGold,
  makeCommandLoseGoldByVariable,
  makeCommandLoseItem,
  makeCommandLoseItemV,
} from "@RpgTypes/rmmz/eventCommand";
import type { Data_Armor, Data_Item, Data_Weapon } from "@RpgTypes/rmmz/rpg";
import {
  makeArmorData,
  makeItemData,
  makeWeaponData,
} from "@RpgTypes/rmmz/rpg";
import type { Rmmz_UnitPlayer, Rmmz_Variables } from "@RpgTypes/rmmzRuntime";
import type { FakeMap } from "./fakes/types";
import { Game_Interpreter } from "./rmmz_objects";

/* ----------------------------------------
 * Fake / Mock 定義
 * ------------------------------------- */

type FakeParty = Pick<
  Rmmz_UnitPlayer,
  "gold" | "gainGold" | "loseGold" | "gainItem" | "loseItem"
>;
const MOCK_OLD_VALUE = 60;

const PARTY_METHOD_KEYS = [
  "gold",
  "gainGold",
  "loseGold",
  "gainItem",
] as const satisfies (keyof FakeParty)[];

const VARIABLE_METHOD_KEYS = [
  "value",
] as const satisfies (keyof Rmmz_Variables)[];

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

const createMockedVariable = (): MockedObject<Rmmz_Variables> => ({
  clear: vi.fn(),
  value: vi.fn().mockReturnValue(MOCK_OLD_VALUE),
  setValue: vi.fn(),
  onChange: vi.fn(),
});

const makeMockMap = (): FakeMap => ({
  mapId: vi.fn().mockReturnValue(1),
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

const createMockObjects = () => {
  return {
    map: makeMockMap(),
    variables: createMockedVariable(),
    party: createMockParty(),
  };
};

/* ----------------------------------------
 * テスト実行環境構築
 * ------------------------------------- */

const setupInterpreter = (
  command: EventCommand,
  { map, party, variables }: ReturnType<typeof createMockObjects>,
) => {
  vi.stubGlobal("$dataItems", mockItems);
  vi.stubGlobal("$dataWeapons", mockWeapons);
  vi.stubGlobal("$dataArmors", mockArmors);

  vi.stubGlobal("$gameParty", party);
  vi.stubGlobal("$gameMap", map);
  vi.stubGlobal("$gameVariables", variables);
  const interpreter = new Game_Interpreter();
  interpreter.setup([command], 0);

  return interpreter;
};

/* ----------------------------------------
 * テストケース定義
 * ------------------------------------- */

interface MethodCalls {
  party: MemberFunctions<FakeParty>[];
  variables: MemberFunctions<Rmmz_Variables>[];
}

interface TestCase {
  name: string;
  command: EventCommand;
  commandLiteral: EventCommand;
  calls: MethodCalls;
}

const runTestCase = (tc: TestCase) => {
  describe(tc.name, () => {
    test("make", () => {
      expect(tc.command).toEqual(tc.commandLiteral);
    });
    describe("exec", () => {
      test("party", () => {
        const mock = createMockObjects();
        const interpreter = setupInterpreter(tc.commandLiteral, mock);
        expect(mock.map.mapId).toHaveBeenCalledOnce();
        interpreter.executeCommand();
        expect(mock.party.loseGold).not.toHaveBeenCalled();
        expect(mock.party.loseItem).not.toHaveBeenCalled();
        assertExactMemberCalls(mock.party, tc.calls.party, PARTY_METHOD_KEYS);
      });
      test("variables", () => {
        const mock = createMockObjects();
        const interpreter = setupInterpreter(tc.commandLiteral, mock);
        interpreter.executeCommand();
        expect(mock.variables.clear).not.toHaveBeenCalled();
        expect(mock.variables.setValue).not.toHaveBeenCalled();
        expect(mock.variables.onChange).not.toHaveBeenCalled();
        assertExactMemberCalls(
          mock.variables,
          tc.calls.variables,
          VARIABLE_METHOD_KEYS,
        );
      });
    });
  });
};

const testCases: TestCase[] = [
  {
    name: "gain gold",
    command: makeCommandGainGold({ value: 50 }),
    commandLiteral: {
      code: 125,
      indent: 0,
      parameters: [0, 0, 50],
    },
    calls: {
      variables: [],
      party: [{ fn: "gainGold", arg: [50] }],
    },
  },
  {
    name: "gain gold (negative value)",
    command: makeCommandLoseGold({ value: -30 }),
    commandLiteral: {
      code: 125,
      indent: 0,
      parameters: [1, 0, -30],
    },
    calls: {
      variables: [],
      party: [{ fn: "gainGold", arg: [30] }],
    },
  },
  {
    name: "gain gold by variable",
    command: makeCommandGainGoldByVariable({ variableId: 5 }),
    commandLiteral: {
      code: 125,
      indent: 0,
      parameters: [0, 1, 5],
    },
    calls: {
      variables: [{ fn: "value", arg: [5] }],
      party: [{ fn: "gainGold", arg: [MOCK_OLD_VALUE] }],
    },
  },
  {
    name: "lose gold",
    command: makeCommandLoseGold({ value: 128 }),
    commandLiteral: {
      code: 125,
      indent: 0,
      parameters: [1, 0, 128],
    },
    calls: {
      variables: [],
      party: [{ fn: "gainGold", arg: [-128] }],
    },
  },
  {
    name: "lose gold (negative value)",
    command: makeCommandGainGold({ value: -64 }),
    commandLiteral: {
      code: 125,
      indent: 0,
      parameters: [0, 0, -64],
    },
    calls: {
      variables: [],
      party: [{ fn: "gainGold", arg: [-64] }],
    },
  },
  {
    name: "lose gold by variable",
    command: makeCommandLoseGoldByVariable({ variableId: 10 }),
    commandLiteral: {
      code: 125,
      indent: 0,
      parameters: [1, 1, 10],
    },
    calls: {
      variables: [{ fn: "value", arg: [10] }],
      party: [{ fn: "gainGold", arg: [-MOCK_OLD_VALUE] }],
    },
  },
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
    calls: {
      variables: [],
      party: [{ fn: "gainItem", arg: [mockItems[1], 3] }],
    },
  },
  {
    name: "gain Item (negative value)",
    command: makeCommandGainItem({
      itemId: 2,
      value: -4,
    }),
    commandLiteral: {
      code: 126,
      indent: 0,
      parameters: [2, 0, 0, -4],
    },
    calls: {
      variables: [],
      party: [{ fn: "gainItem", arg: [mockItems[2], -4] }],
    },
  },
  {
    name: "gain Item by variable",
    command: makeCommandGainItemV({
      itemId: 1,
      variableId: 7,
    }),
    commandLiteral: {
      code: 126,
      indent: 0,
      parameters: [1, 0, 1, 7],
    },
    calls: {
      variables: [{ fn: "value", arg: [7] }],
      party: [{ fn: "gainItem", arg: [mockItems[1], MOCK_OLD_VALUE] }],
    },
  },
  {
    name: "lose Item",
    command: makeCommandLoseItem({
      itemId: 2,
      value: 9,
    }),
    commandLiteral: {
      code: 126,
      indent: 0,
      parameters: [2, 1, 0, 9],
    },
    calls: {
      variables: [],
      party: [{ fn: "gainItem", arg: [mockItems[2], -9] }],
    },
  },
  {
    name: "lose Item (negative value)",
    command: makeCommandLoseItem({
      itemId: 1,
      value: -2,
    }),
    commandLiteral: {
      code: 126,
      indent: 0,
      parameters: [1, 1, 0, -2],
    },
    calls: {
      variables: [],
      party: [{ fn: "gainItem", arg: [mockItems[1], 2] }],
    },
  },
  {
    name: "lose Item by variable",
    command: makeCommandLoseItemV({
      itemId: 2,
      variableId: 12,
    }),
    commandLiteral: {
      code: 126,
      indent: 0,
      parameters: [2, 1, 1, 12],
    },
    calls: {
      variables: [{ fn: "value", arg: [12] }],
      party: [{ fn: "gainItem", arg: [mockItems[2], -MOCK_OLD_VALUE] }],
    },
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
    calls: {
      variables: [],
      party: [{ fn: "gainItem", arg: [mockWeapons[1], 6, false] }],
    },
  },
  {
    name: "gain Weapon by variable",
    command: makeCommandGainWeaponV({
      weaponId: 2,
      variableId: 8,
    }),
    commandLiteral: {
      code: 127,
      indent: 0,
      parameters: [2, 0, 1, 8, false],
    },
    calls: {
      variables: [{ fn: "value", arg: [8] }],
      party: [{ fn: "gainItem", arg: [mockWeapons[2], MOCK_OLD_VALUE, false] }],
    },
  },
  {
    name: "gain Armor",
    command: makeCommandGainArmor({
      armorId: 1,
      value: 7,
    }),
    commandLiteral: {
      code: 128,
      indent: 0,
      parameters: [1, 0, 0, 7, false],
    },
    calls: {
      variables: [],
      party: [{ fn: "gainItem", arg: [mockArmors[1], 7, false] }],
    },
  },
  {
    name: "gain Armor by variable",
    command: makeCommandGainArmorByVariable({
      armorId: 2,
      variableId: 9,
    }),
    commandLiteral: {
      code: 128,
      indent: 0,
      parameters: [2, 0, 1, 9, false],
    },
    calls: {
      variables: [{ fn: "value", arg: [9] }],
      party: [{ fn: "gainItem", arg: [mockArmors[2], MOCK_OLD_VALUE, false] }],
    },
  },
  {
    name: "lose Armor",
    command: makeCommandLoseArmor({
      armorId: 1,
      value: 11,
    }),
    commandLiteral: {
      code: 128,
      indent: 0,
      parameters: [1, 1, 0, 11, false],
    },
    calls: {
      variables: [],
      party: [{ fn: "gainItem", arg: [mockArmors[1], -11, false] }],
    },
  },
  {
    name: "lose Armor by variable",
    command: makeCommandLoseArmorByVariable({
      armorId: 2,
      variableId: 15,
    }),
    commandLiteral: {
      code: 128,
      indent: 0,
      parameters: [2, 1, 1, 15, false],
    },
    calls: {
      variables: [{ fn: "value", arg: [15] }],
      party: [{ fn: "gainItem", arg: [mockArmors[2], -MOCK_OLD_VALUE, false] }],
    },
  },
];

/* ----------------------------------------
 * テスト実行
 * ------------------------------------- */

testCases.forEach(runTestCase);
