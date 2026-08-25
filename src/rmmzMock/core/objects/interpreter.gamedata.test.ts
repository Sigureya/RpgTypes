import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { Command_ControlVariables_FromGameData } from "@RpgTypes/rmmz/eventCommand";
import { makeCommandVariableFromMapId } from "@RpgTypes/rmmz/eventCommand";
import { variableFromCommand } from "@RpgTypes/rmmzFunctional";
import type {
  Rmmz_VariableSourceEnemy,
  Rmmz_VariableSourceProvider,
} from "@RpgTypes/rmmzFunctional/interpreter/command/variable/types";
import type {
  Rmmz_Variables,
  Rmmz_MapId,
  Rmmz_VariableSourceParty,
  Rmmz_SystemCounter,
  Rmmz_Timer,
  Rmmz_Temp,
  Rmmz_Interpreter,
} from "@RpgTypes/rmmzRuntime";
import { Game_Interpreter } from "./rmmz_objects";
const MOCK_ENEMY_HP = 700;
const MOCK_ENEMY_MP = 140;
const MOCK_ENEMY_TP = 60;
const MOCK_ENEMY_PARAM_BASE = 200;
const MOCK_FALLBACK = 777;
const MOCK_START_ID = 91;
const MOCK_ENEMY_INDEX = 2;
const MOCK_MAP_ID = 5;

const MOCK_SYSTEM_BATTLE_COUNT = 1024;
const MOCK_SYSTEM_WIN_COUNT = 512;
const MOCK_SYSTEM_ESCAPE_COUNT = 256;
const MOCK_SYSTEM_SAVE_COUNT = 128;
const MOCK_SYSTEM_PLAYTIME = 64;

const MOCK_TEMP_LAST_ACTION_DATA = 321;

const createMockEnemy = (): MockedObject<Rmmz_VariableSourceEnemy> => {
  return {
    hp: MOCK_ENEMY_HP,
    mp: MOCK_ENEMY_MP,
    tp: MOCK_ENEMY_TP,
    param: vi.fn((paramId: number) => MOCK_ENEMY_PARAM_BASE + paramId),
  };
};

const createMockProvider = (
  enemy: Rmmz_VariableSourceEnemy | null,
): MockedObject<Rmmz_VariableSourceProvider> => {
  return {
    character: vi.fn(() => null),
    dataArmor: vi.fn(() => null),
    dataItem: vi.fn(() => null),
    dataWeapon: vi.fn(() => null),
    gameActor: vi.fn(() => null),
    gameEnemy: vi.fn(() => enemy),
    random: vi.fn(() => 0),
  };
};

const createMockVariebles = (): MockedObject<Rmmz_Variables> => {
  return {
    value: vi.fn(() => 0),
    clear: vi.fn(),
    setValue: vi.fn(),
    onChange: vi.fn(),
  };
};

const createMockMap = (): MockedObject<Rmmz_MapId> => {
  return {
    mapId: vi.fn(() => MOCK_MAP_ID),
  };
};

const createMockParty = (): MockedObject<Rmmz_VariableSourceParty> => {
  return {
    gold: vi.fn(() => 0),
    steps: vi.fn(() => 0),
    numItems: vi.fn(() => 0),
    size: vi.fn(() => 0),
    members: vi.fn(() => []),
  };
};

const createMockSystem = (): MockedObject<Rmmz_SystemCounter> => {
  return {
    battleCount: vi.fn(() => MOCK_SYSTEM_BATTLE_COUNT),
    winCount: vi.fn(() => MOCK_SYSTEM_WIN_COUNT),
    escapeCount: vi.fn(() => MOCK_SYSTEM_ESCAPE_COUNT),
    saveCount: vi.fn(() => MOCK_SYSTEM_SAVE_COUNT),
    playtime: vi.fn(() => MOCK_SYSTEM_PLAYTIME),
  };
};

const createMockTimer = (): MockedObject<Rmmz_Timer> => {
  return {
    start: vi.fn(),
    stop: vi.fn(),
    isWorking: vi.fn(() => false),
    seconds: vi.fn(() => 0),
    frames: vi.fn(() => 0),
  };
};

const createMockTemp = (): MockedObject<Rmmz_Temp> => {
  return {
    lastActionData: vi.fn(() => MOCK_TEMP_LAST_ACTION_DATA),
  };
};

const createContext = (): TestContext => {
  return {
    enemy: createMockEnemy(),
    provider: createMockProvider(createMockEnemy()),
    variables: createMockVariebles(),
    map: createMockMap(),
    party: createMockParty(),
    system: createMockSystem(),
    timer: createMockTimer(),
    temp: createMockTemp(),
  };
};

type FakeInterpreter = Pick<Rmmz_Interpreter, "character">;

interface TestContext {
  temp: MockedObject<Rmmz_Temp>;
  map: MockedObject<Rmmz_MapId>;
  party: MockedObject<Rmmz_VariableSourceParty>;
  system: MockedObject<Rmmz_SystemCounter>;
  timer: MockedObject<Rmmz_Timer>;
  variables: MockedObject<Rmmz_Variables>;
  provider: MockedObject<Rmmz_VariableSourceProvider>;
  enemy: MockedObject<Rmmz_VariableSourceEnemy>;
}
interface TestCase {
  expected: number;
  command: Command_ControlVariables_FromGameData;
  contextTest: (objects: TestContext) => void;
}

const runTestCase = (testCase: TestCase): void => {
  describe("Test Case", () => {
    test("variableFromCommand", () => {
      const context = createContext();
      const result = variableFromCommand(
        testCase.command,
        context.provider,
        context.variables,
        context.temp,
        context.map,
        context.party,
        context.system,
        context.timer,
        MOCK_FALLBACK,
      );
      expect(result).toBe(testCase.expected);
      testCase.contextTest(context);
    });
    test("Game_Interpreter.prototype.gameDataOperand", () => {
      const context = createContext();
      const mockedInterpreter: MockedObject<FakeInterpreter> = {
        character: vi.fn((id) => context.provider.character(id)),
      };
      vi.stubGlobal("$gameTemp", context.temp);
      vi.stubGlobal("$gameMap", context.map);
      vi.stubGlobal("$gameParty", context.party);
      vi.stubGlobal("$gameSystem", context.system);
      vi.stubGlobal("$gameTimer", context.timer);
      vi.stubGlobal("$gameVariables", context.variables);
      const result = Game_Interpreter.prototype.gameDataOperand.call(
        mockedInterpreter,
        testCase.command.parameters[4],
        testCase.command.parameters[5] as number,
        testCase.command.parameters[6] as number,
      );
      expect(result).toBe(testCase.expected);
      testCase.contextTest(context);
    });
  });
};

const testCases: TestCase[] = [
  {
    command: makeCommandVariableFromMapId({ startId: MOCK_START_ID }),
    expected: MOCK_MAP_ID,
    contextTest: (context) => {
      expect(context.map.mapId).toHaveBeenCalledOnce();
    },
  },
];

describe("variableFromCommand - GameData", () => {
  testCases.forEach((testCase) => {
    runTestCase(testCase);
  });
});
