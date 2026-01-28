import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { Data_NamedItem } from "@RpgTypes/libs";
import type { Command_ControlVariables } from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandVariableFromPlaytime,
  makeCommandVariableFromConstant,
  makeCommandSystemSaveCount,
  makeCommandSystemBattleCount,
  makeCommandSystemWinCount,
  makeCommandSystemEscapeCount,
  makeCommandVariableFromMapId,
  makeCommandVariableFromPartyMembers,
  makeCommandVariableFromPartySteps,
  makeCommandVariableFromPartyGold,
  OPERATION_ADD,
  OPERATION_SUBTRACT,
  OPERATION_SET,
  OPERATION_DIVIDE,
  OPERATION_MULTIPLY,
  OPERATION_MOD,
  makeCommandVariableFromItemData,
  makeCommandVariableFromWeapon,
  makeCommandVariableFromArmor,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_System, Rmmz_Variables } from "@RpgTypes/rmmzRuntime";
import type { FakeActor, FakeMap } from "./fakes/types";
import { Game_Interpreter, Game_Party } from "./rmmz_objects";

const MOCK_MAP_ID = 123456 as const;

const MOCK_PLAYTIME = 400;
const MOCK_SAVECOUNT = 600;
const MOCK_BATTLECOUNT = 700;
const MOCK_WINCOUNT = 800;
const MOCK_ESCAPECOUNT = 900;

const MOCK_GOLD = 4980;
const MOCK_STEPS = 8976;

const MOCK_OLD_VALUE = 60;

const MOCK_PARTY_MEMBERS = [3, 1, 2] as const;

const MOCK_ITEM_AMOUNT = 99;

const SYSTEM_FUNTION_KEYS = [
  "playtime",
  "saveCount",
  "battleCount",
  "winCount",
  "escapeCount",
] as const satisfies (keyof Rmmz_System)[];

const PARTY_FUNCTION_KEYS = [
  "gold",
  "steps",
  "gainGold",
  "loseGold",
  "members",
  "numItems",
] as const satisfies (keyof Game_Party)[];

const mockItems = [
  null,
  { id: 1, name: "Food" },
  { id: 2, name: "Treasure" },
] as const satisfies (Data_NamedItem | null)[];

const mockWeapons = [
  null,
  { id: 3, name: "Axe" },
  { id: 2, name: "Bow" },
] as const satisfies (Data_NamedItem | null)[];
const mockArmors = [
  null,
  { id: 1, name: "shield" },
  { id: 2, name: "helmet" },
] as const satisfies (Data_NamedItem | null)[];

const createMockedVariable = (): MockedObject<Rmmz_Variables> => ({
  clear: vi.fn(),
  value: vi.fn().mockReturnValue(MOCK_OLD_VALUE),
  setValue: vi.fn(),
  onChange: vi.fn(),
});

const createMockParty = (actorIds: number[]): Game_Party => {
  const party = new Game_Party();
  party._actors = [...actorIds];
  vi.spyOn(party, "members");
  vi.spyOn(party, "gold").mockReturnValue(MOCK_GOLD);
  vi.spyOn(party, "gainGold");
  vi.spyOn(party, "loseGold");
  vi.spyOn(party, "steps").mockReturnValue(MOCK_STEPS);
  vi.spyOn(party, "numItems").mockImplementation((item) => {
    if (item === null) {
      return 0;
    }
    return MOCK_ITEM_AMOUNT;
  });
  return party;
};

interface FakeActors {
  actor(actorId: number): FakeActor | null;
}

const makeMockActors = (actors: FakeActor[]): MockedObject<FakeActors> => ({
  actor: vi.fn((id: number) => actors.find((a) => a.actorId() === id) || null),
});

const makeMockMap = (): FakeMap => ({
  mapId: () => MOCK_MAP_ID,
});

type FakeSystem = Pick<Rmmz_System, (typeof SYSTEM_FUNTION_KEYS)[number]>;

const createMokedSystem = (): MockedObject<FakeSystem> => ({
  playtime: vi.fn<FakeSystem["playtime"]>(() => MOCK_PLAYTIME),
  saveCount: vi.fn<FakeSystem["saveCount"]>(() => MOCK_SAVECOUNT),
  battleCount: vi.fn<FakeSystem["battleCount"]>(() => MOCK_BATTLECOUNT),
  winCount: vi.fn<FakeSystem["winCount"]>(() => MOCK_WINCOUNT),
  escapeCount: vi.fn<FakeSystem["escapeCount"]>(() => MOCK_ESCAPECOUNT),
});

const createMockedInterpreter = () => {
  const inter = new Game_Interpreter();
  const keys: (keyof Game_Interpreter)[] = ["gameDataOperand"];
  keys.forEach((key) => {
    vi.spyOn(inter, key);
  });
  return inter;
};

const createMockedObjects = () => {
  return {
    mockedMap: makeMockMap(),
    mockedVariables: createMockedVariable(),
    mockedSystem: createMokedSystem(),
    mockParty: createMockParty([...MOCK_PARTY_MEMBERS]),
    mockActors: makeMockActors([]),
  };
};

interface FunctionKeys {
  systems: (keyof FakeSystem)[];
  party: (keyof Game_Party)[];
  actorsCall?: number;
}

interface TestCase {
  testName: string;
  fnCalles: FunctionKeys;
  setValue: {
    value: number;
    id: number;
  };
  // 変数操作コマンド。ここには生成関数の戻り値を置く
  command: Command_ControlVariables;
  // 数値直書き。生成関数のバグと値のバグを切り分けるためにある
  commandLiteral: Command_ControlVariables;
  item?: Data_NamedItem | null;
}

const callTestEx = <T>(
  mock: T,
  set: ReadonlySet<string & keyof T>,
  allKeys: ReadonlyArray<string & keyof T>,
) => {
  allKeys.forEach((key) => {
    if (set.has(key)) {
      expect(mock[key], `call : ${key}`).toHaveBeenCalledTimes(1);
    } else {
      expect(mock[key], `not call : ${key}`).not.toHaveBeenCalled();
    }
  });
};

const stubGlobal = (mocks: ReturnType<typeof createMockedObjects>) => {
  vi.stubGlobal("$gameMap", mocks.mockedMap);
  vi.stubGlobal("$gameVariables", mocks.mockedVariables);
  vi.stubGlobal("$gameSystem", mocks.mockedSystem);
  vi.stubGlobal("$gameParty", mocks.mockParty);
  vi.stubGlobal("$gameActors", mocks.mockActors);
  vi.stubGlobal("$dataItems", mockItems);
  vi.stubGlobal("$dataWeapons", mockWeapons);
  vi.stubGlobal("$dataArmors", mockArmors);
};

// @ts-ignore
Math.randomInt = () => 0;

const runTestCase = (testCase: TestCase) => {
  describe(`operateValue Test: ${testCase.testName}`, () => {
    test("literal equality", () => {
      expect(testCase.command).toEqual(testCase.commandLiteral);
    });
    test("value set", () => {
      const mocks = createMockedObjects();
      stubGlobal(mocks);

      const interpreter = createMockedInterpreter();
      interpreter.setup([testCase.command], 0);
      interpreter.executeCommand();
      expect(mocks.mockedVariables.value).toHaveBeenCalledWith(
        testCase.setValue.id,
      );
      expect(mocks.mockedVariables.value).toHaveBeenCalledOnce();
      expect(mocks.mockedVariables.setValue).toHaveBeenCalledWith(
        testCase.setValue.id,
        testCase.setValue.value,
      );
    });
    test("function calls", () => {
      const mocks = createMockedObjects();
      stubGlobal(mocks);

      const interpreter = createMockedInterpreter();
      interpreter.setup([testCase.command], 0);
      interpreter.executeCommand();
      expect(mocks.mockActors.actor).toHaveBeenCalledTimes(
        testCase.fnCalles.actorsCall ?? 0,
      );
      callTestEx<FakeSystem>(
        mocks.mockedSystem,
        new Set(testCase.fnCalles.systems ?? []),
        SYSTEM_FUNTION_KEYS,
      );
      callTestEx<Game_Party>(
        mocks.mockParty,
        new Set(testCase.fnCalles.party ?? []),
        PARTY_FUNCTION_KEYS,
      );
      if ("item" in testCase) {
        expect(mocks.mockParty.numItems).toHaveBeenCalledWith(testCase.item);
      }
    });
  });
};

const testCases: TestCase[] = [
  {
    testName: "constant set",
    fnCalles: { party: [], systems: [] },
    setValue: { id: 1, value: 123 },
    command: makeCommandVariableFromConstant(
      { startId: 1 },
      { value: 123 },
      { indent: 0, operation: OPERATION_SET },
    ),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [1, 1, 0, 0, 123],
    },
  },
  {
    testName: "constant add",
    fnCalles: { party: [], systems: [] },
    setValue: { id: 189, value: MOCK_OLD_VALUE + 123 },
    command: makeCommandVariableFromConstant(
      { startId: 189 },
      { value: 123 },
      { indent: 0, operation: OPERATION_ADD },
    ),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [189, 189, 1, 0, 123],
    },
  },
  {
    testName: "constant subtract",
    fnCalles: { party: [], systems: [] },
    setValue: { id: 189, value: MOCK_OLD_VALUE - 123 },
    command: makeCommandVariableFromConstant(
      { startId: 189 },
      { value: 123 },
      { indent: 0, operation: OPERATION_SUBTRACT },
    ),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [189, 189, 2, 0, 123],
    },
  },
  {
    testName: "constant multiply",
    fnCalles: { party: [], systems: [] },
    setValue: { id: 189, value: MOCK_OLD_VALUE * 3 },
    command: makeCommandVariableFromConstant(
      { startId: 189 },
      { value: 3 },
      { indent: 0, operation: OPERATION_MULTIPLY },
    ),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [189, 189, 3, 0, 3],
    },
  },
  {
    testName: "constant divide",
    fnCalles: { party: [], systems: [] },
    setValue: { id: 189, value: MOCK_OLD_VALUE / 15 },
    command: makeCommandVariableFromConstant(
      { startId: 189 },
      { value: 15 },
      { indent: 0, operation: OPERATION_DIVIDE },
    ),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [189, 189, 4, 0, 15],
    },
  },
  {
    testName: "constant divide",
    fnCalles: { party: [], systems: [] },
    setValue: { id: 189, value: MOCK_OLD_VALUE / 11 },
    command: makeCommandVariableFromConstant(
      { startId: 189 },
      { value: 11 },
      { indent: 0, operation: OPERATION_DIVIDE },
    ),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [189, 189, 4, 0, 11],
    },
  },
  {
    testName: "constant mod",
    fnCalles: { party: [], systems: [] },
    setValue: { id: 189, value: MOCK_OLD_VALUE % 12 },
    command: makeCommandVariableFromConstant(
      { startId: 189 },
      { value: 12 },
      { indent: 0, operation: OPERATION_MOD },
    ),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [189, 189, 5, 0, 12],
    },
  },
  {
    testName: "get item amount :item[0]->null",
    fnCalles: { party: ["numItems"], systems: [] },
    item: null,
    setValue: { id: 150, value: 0 },
    command: makeCommandVariableFromItemData({ startId: 150 }, { itemId: 0 }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [150, 150, 0, 3, 0, 0],
    },
  },
  {
    testName: "get item amount :item[1]->Food",
    fnCalles: { party: ["numItems"], systems: [] },
    item: mockItems[1],
    setValue: { id: 150, value: MOCK_ITEM_AMOUNT },
    command: makeCommandVariableFromItemData(
      { startId: 150 },
      { itemId: 1 },
      { indent: 2 },
    ),
    commandLiteral: {
      code: 122,
      indent: 2,
      parameters: [150, 150, 0, 3, 0, 1],
    },
  },
  {
    testName: "get item amount : item[2]->Treasure",
    fnCalles: { party: ["numItems"], systems: [] },
    item: mockItems[2],
    setValue: { id: 150, value: MOCK_ITEM_AMOUNT },
    command: makeCommandVariableFromItemData({ startId: 150 }, { itemId: 2 }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [150, 150, 0, 3, 0, 2],
    },
  },
  {
    testName: "get armor amount : armor[0]->null",
    fnCalles: { party: ["numItems"], systems: [] },
    item: mockArmors[0],
    setValue: { id: 160, value: 0 },
    command: makeCommandVariableFromArmor({ startId: 160 }, { armorId: 0 }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [160, 160, 0, 3, 2, 0],
    },
  },
  {
    testName: "get armor amount : armor[1]->shield",
    fnCalles: { party: ["numItems"], systems: [] },
    item: mockArmors[1],
    setValue: { id: 160, value: MOCK_ITEM_AMOUNT },
    command: makeCommandVariableFromArmor({ startId: 160 }, { armorId: 1 }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [160, 160, 0, 3, 2, 1],
    },
  },
  {
    testName: "get armor amount : armor[2]->helmet",
    fnCalles: { party: ["numItems"], systems: [] },
    item: mockArmors[2],
    setValue: { id: 160, value: MOCK_ITEM_AMOUNT },
    command: makeCommandVariableFromArmor({ startId: 160 }, { armorId: 2 }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [160, 160, 0, 3, 2, 2],
    },
  },
  {
    testName: "get weapon amount : weapon[0]->null",
    fnCalles: { party: ["numItems"], systems: [] },
    item: mockWeapons[0],
    setValue: { id: 170, value: 0 },
    command: makeCommandVariableFromWeapon({ startId: 170 }, { weaponId: 0 }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [170, 170, 0, 3, 1, 0],
    },
  },
  {
    testName: "get weapon amount : weapon[2]->Bow",
    fnCalles: { party: ["numItems"], systems: [] },
    item: mockWeapons[2],
    setValue: { id: 170, value: MOCK_ITEM_AMOUNT },
    command: makeCommandVariableFromWeapon({ startId: 170 }, { weaponId: 2 }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [170, 170, 0, 3, 1, 2],
    },
  },
  {
    testName: "mapId",
    fnCalles: { party: [], systems: [] },
    setValue: { id: 201, value: MOCK_MAP_ID },
    command: makeCommandVariableFromMapId({ startId: 201 }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [201, 201, 0, 3, 7, 0],
    },
  },
  {
    testName: "partyMembers",
    fnCalles: {
      party: ["members"],
      systems: [],
      actorsCall: MOCK_PARTY_MEMBERS.length,
    },
    setValue: { id: 233, value: 3 },
    command: makeCommandVariableFromPartyMembers({ startId: 233 }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [233, 233, 0, 3, 7, 1],
    },
  },
  {
    testName: "gold",
    fnCalles: {
      party: ["gold"],
      systems: [],
    },
    setValue: { id: 250, value: MOCK_GOLD },
    command: makeCommandVariableFromPartyGold({ startId: 250 }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [250, 250, 0, 3, 7, 2],
    },
  },
  {
    testName: "steps",
    fnCalles: {
      party: ["steps"],
      systems: [],
    },
    setValue: { id: 0xff6, value: MOCK_STEPS },
    command: makeCommandVariableFromPartySteps({ startId: 0xff6 }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [0xff6, 0xff6, 0, 3, 7, 3],
    },
  },
  {
    testName: "playtime",
    fnCalles: {
      systems: ["playtime"],
      party: [],
    },
    setValue: { id: 2, value: MOCK_PLAYTIME },
    command: makeCommandVariableFromPlaytime({ startId: 2 }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [2, 2, 0, 3, 7, 4],
    },
  },
  {
    testName: "saveCount",
    fnCalles: { systems: ["saveCount"], party: [] },
    setValue: { id: 47, value: MOCK_SAVECOUNT },
    command: makeCommandSystemSaveCount({ startId: 47 }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [47, 47, 0, 3, 7, 6],
    },
  },
  {
    testName: "battleCount",
    fnCalles: { systems: ["battleCount"], party: [] },
    setValue: { id: 52, value: MOCK_BATTLECOUNT },
    command: makeCommandSystemBattleCount({ startId: 52 }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [52, 52, 0, 3, 7, 7],
    },
  },
  {
    testName: "winCount",
    fnCalles: { systems: ["winCount"], party: [] },
    setValue: { id: 63, value: MOCK_WINCOUNT },
    command: makeCommandSystemWinCount({ startId: 63 }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [63, 63, 0, 3, 7, 8],
    },
  },
  {
    testName: "escapeCount",
    fnCalles: { systems: ["escapeCount"], party: [] },
    setValue: { id: 78, value: MOCK_ESCAPECOUNT },
    command: makeCommandSystemEscapeCount({ startId: 78 }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [78, 78, 0, 3, 7, 9],
    },
  },
];
describe("operateValue Tests", () => {
  testCases.forEach(runTestCase);
});
