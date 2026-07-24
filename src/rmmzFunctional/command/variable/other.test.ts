import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type {
  Command_ControlVariables_FromOthre,
  ParamArray_VariableFromOther,
} from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandVariableFromMapId,
  makeCommandVariableFromPartyGold,
  makeCommandVariableFromPartySize,
  makeCommandVariableFromPartySteps,
  makeCommandVariableFromSystemPlayTime,
  makeCommandVariableFromSystemTimer,
  makeCommandVariableFromSystemSaveCount,
  makeCommandVariableFromSystemBattleCount,
  makeCommandVariableFromSystemWinCount,
  makeCommandVariableFromSystemEscapeCount,
} from "@RpgTypes/rmmz/eventCommand";
import type {
  Rmmz_MapId,
  Rmmz_VariableSourceParty,
  Rmmz_SystemCounter,
  Rmmz_Timer,
  Rmmz_Temp,
  Rmmz_Variables,
} from "@RpgTypes/rmmzRuntime";
import { variableFromOther } from "./other";
import type { Rmmz_VariableSourceProvider } from "./types";
import { variableFromCommand } from "./variable";

const MOCK_MAP_ID = 45;
const MOCK_PARTY_SIZE = 4;
const MOCK_PARTY_GOLD = 9800;
const MOCK_PARTY_STEPS = 3210;
const MOCK_PLAYTIME = 777;
const MOCK_TIMER_SECONDS = 123;
const MOCK_SAVE_COUNT = 9;
const MOCK_BATTLE_COUNT = 12;
const MOCK_WIN_COUNT = 8;
const MOCK_ESCAPE_COUNT = 2;
const MOCK_FALLBACK = 555;

const createMockProvider = (): MockedObject<Rmmz_VariableSourceProvider> => {
  return {
    character: vi.fn(() => null),
    dataArmor: vi.fn(() => null),
    dataItem: vi.fn(() => null),
    dataWeapon: vi.fn(() => null),
    gameActor: vi.fn(() => null),
    gameEnemy: vi.fn(() => null),
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
    gold: vi.fn(() => MOCK_PARTY_GOLD),
    steps: vi.fn(() => MOCK_PARTY_STEPS),
    numItems: vi.fn(() => 0),
    size: vi.fn(() => MOCK_PARTY_SIZE),
    members: vi.fn(() => []),
  };
};

const createMockSystem = (): MockedObject<Rmmz_SystemCounter> => {
  return {
    battleCount: vi.fn(() => MOCK_BATTLE_COUNT),
    winCount: vi.fn(() => MOCK_WIN_COUNT),
    escapeCount: vi.fn(() => MOCK_ESCAPE_COUNT),
    saveCount: vi.fn(() => MOCK_SAVE_COUNT),
    playtime: vi.fn(() => MOCK_PLAYTIME),
  };
};

const createMockTimer = (): MockedObject<Rmmz_Timer> => {
  return {
    start: vi.fn(),
    stop: vi.fn(),
    isWorking: vi.fn(() => false),
    seconds: vi.fn(() => MOCK_TIMER_SECONDS),
    frames: vi.fn(() => 0),
  };
};

const createMockTemp = (): MockedObject<Rmmz_Temp> => {
  return {
    lastActionData: vi.fn(),
  };
};

const expectMapUnused = ({ map }: MockedGameObjects) => {
  expect(map.mapId).not.toHaveBeenCalled();
};

const expectPartyUnused = ({ party }: MockedGameObjects) => {
  expect(party.size).not.toHaveBeenCalled();
  expect(party.gold).not.toHaveBeenCalled();
  expect(party.steps).not.toHaveBeenCalled();
  expect(party.members).not.toHaveBeenCalled();
  expect(party.numItems).not.toHaveBeenCalled();
};

const expectSystemUnused = ({ system }: MockedGameObjects) => {
  expect(system.playtime).not.toHaveBeenCalled();
  expect(system.saveCount).not.toHaveBeenCalled();
  expect(system.battleCount).not.toHaveBeenCalled();
  expect(system.winCount).not.toHaveBeenCalled();
  expect(system.escapeCount).not.toHaveBeenCalled();
};

const expectTimerUnused = ({ timer }: MockedGameObjects) => {
  expect(timer.seconds).not.toHaveBeenCalled();
  expect(timer.start).not.toHaveBeenCalled();
  expect(timer.stop).not.toHaveBeenCalled();
  expect(timer.isWorking).not.toHaveBeenCalled();
  expect(timer.frames).not.toHaveBeenCalled();
};

interface MockedGameObjects {
  party: MockedObject<Rmmz_VariableSourceParty>;
  map: MockedObject<Rmmz_MapId>;
  system: MockedObject<Rmmz_SystemCounter>;
  timer: MockedObject<Rmmz_Timer>;
}

interface TestCase {
  name: string;
  call: Array<(mock: MockedGameObjects) => void>;
  params: ParamArray_VariableFromOther;
  expected: number;
  command: Command_ControlVariables_FromOthre;
}

interface TestContext extends MockedGameObjects {
  result: number;
  party: MockedObject<Rmmz_VariableSourceParty>;
  map: MockedObject<Rmmz_MapId>;
  system: MockedObject<Rmmz_SystemCounter>;
  timer: MockedObject<Rmmz_Timer>;
  provider: MockedObject<Rmmz_VariableSourceProvider>;
  variables: MockedObject<Rmmz_Variables>;
  temp: MockedObject<Rmmz_Temp>;
}

const testVariableFromCommand = (testCase: TestCase): TestContext => {
  const map = createMockMap();
  const party = createMockParty();
  const system = createMockSystem();
  const timer = createMockTimer();
  const provider = createMockProvider();
  const variables = createMockVariebles();
  const temp = createMockTemp();
  const command: Command_ControlVariables_FromOthre = {
    code: 122,
    indent: 0,
    parameters: testCase.params,
  };
  const result = variableFromCommand(
    command,
    provider,
    variables,
    temp,
    map,
    party,
    system,
    timer,
    MOCK_FALLBACK,
  );
  return {
    result: result,
    provider: provider,
    variables: variables,
    temp: temp,
    map: map,
    party: party,
    system: system,
    timer: timer,
  };
};

const runTestCase = (testCase: TestCase) => {
  describe(testCase.name, () => {
    describe("", () => {
      test("normal", () => {
        const mokedObjects: MockedGameObjects = {
          party: createMockParty(),
          map: createMockMap(),
          system: createMockSystem(),
          timer: createMockTimer(),
        };
        const result: number = variableFromOther(
          testCase.params,
          mokedObjects.map,
          mokedObjects.party,
          mokedObjects.system,
          mokedObjects.timer,
          MOCK_FALLBACK,
        );
        expect(result).toBe(testCase.expected);
      });
      test("call", () => {
        const mokedObjects: MockedGameObjects = {
          party: createMockParty(),
          map: createMockMap(),
          system: createMockSystem(),
          timer: createMockTimer(),
        };
        variableFromOther(
          testCase.params,
          mokedObjects.map,
          mokedObjects.party,
          mokedObjects.system,
          mokedObjects.timer,
          MOCK_FALLBACK,
        );
        testCase.call.forEach((call) => {
          call(mokedObjects);
        });
      });
    });
    describe("variableFromCommand", () => {
      test("result", () => {
        const context = testVariableFromCommand(testCase);
        expect(context.result).toBe(testCase.expected);
      });
      test("not call", () => {
        const { provider, variables } = testVariableFromCommand(testCase);
        expect(variables.value).not.toHaveBeenCalled();
        expect(variables.setValue).not.toHaveBeenCalled();
        expect(variables.clear).not.toHaveBeenCalled();
        expect(variables.onChange).not.toHaveBeenCalled();
        expect(provider.character).not.toHaveBeenCalled();
        expect(provider.dataArmor).not.toHaveBeenCalled();
        expect(provider.dataItem).not.toHaveBeenCalled();
        expect(provider.dataWeapon).not.toHaveBeenCalled();
        expect(provider.gameActor).not.toHaveBeenCalled();
        expect(provider.gameEnemy).not.toHaveBeenCalled();
        expect(provider.random).not.toHaveBeenCalled();
      });
      test("call", () => {
        const mokedObjects = testVariableFromCommand(testCase);
        testCase.call.forEach((call) => {
          call(mokedObjects);
        });
      });
    });
  });
};

const testCases: TestCase[] = [
  {
    name: "mapId",
    call: [
      expectPartyUnused,
      expectSystemUnused,
      expectTimerUnused,
      ({ map }) => {
        expect(map.mapId).toHaveBeenCalledOnce();
      },
    ],
    params: [22, 22, 0, 3, 7, 0],
    expected: MOCK_MAP_ID,
    command: makeCommandVariableFromMapId({
      startId: 22,
    }),
  },
  {
    name: "party size",
    call: [
      expectMapUnused,
      expectSystemUnused,
      expectTimerUnused,
      ({ party }) => {
        expect(party.size).toHaveBeenCalledOnce();
        expect(party.gold).not.toHaveBeenCalled();
        expect(party.steps).not.toHaveBeenCalled();
        expect(party.members).not.toHaveBeenCalled();
        expect(party.numItems).not.toHaveBeenCalled();
      },
    ],
    params: [123, 123, 0, 3, 7, 1],
    expected: MOCK_PARTY_SIZE,
    command: makeCommandVariableFromPartySize({
      startId: 123,
    }),
  },
  {
    name: "party gold",
    call: [
      expectMapUnused,
      expectSystemUnused,
      expectTimerUnused,
      ({ party }) => {
        expect(party.gold).toHaveBeenCalledOnce();
        expect(party.steps).not.toHaveBeenCalled();
        expect(party.size).not.toHaveBeenCalled();
        expect(party.members).not.toHaveBeenCalled();
        expect(party.numItems).not.toHaveBeenCalled();
      },
    ],
    params: [64, 64, 0, 3, 7, 2],
    expected: MOCK_PARTY_GOLD,
    command: makeCommandVariableFromPartyGold({
      startId: 64,
    }),
  },
  {
    name: "party steps",
    call: [
      expectMapUnused,
      expectSystemUnused,
      expectTimerUnused,
      ({ party }) => {
        expect(party.steps).toHaveBeenCalledOnce();
        expect(party.gold).not.toHaveBeenCalled();
        expect(party.size).not.toHaveBeenCalled();
        expect(party.members).not.toHaveBeenCalled();
        expect(party.numItems).not.toHaveBeenCalled();
      },
    ],
    params: [88, 88, 0, 3, 7, 3],
    expected: MOCK_PARTY_STEPS,
    command: makeCommandVariableFromPartySteps({
      startId: 88,
    }),
  },
  {
    name: "system playtime",
    call: [
      expectMapUnused,
      expectPartyUnused,
      expectTimerUnused,
      ({ system }) => {
        expect(system.playtime).toHaveBeenCalledOnce();
        expect(system.saveCount).not.toHaveBeenCalled();
        expect(system.battleCount).not.toHaveBeenCalled();
        expect(system.winCount).not.toHaveBeenCalled();
        expect(system.escapeCount).not.toHaveBeenCalled();
      },
    ],
    params: [99, 99, 0, 3, 7, 4],
    expected: MOCK_PLAYTIME,
    command: makeCommandVariableFromSystemPlayTime({
      startId: 99,
    }),
  },
  {
    name: "system timer",
    call: [
      expectMapUnused,
      expectPartyUnused,
      expectSystemUnused,
      ({ timer }) => {
        expect(timer.seconds).toHaveBeenCalledOnce();
        expect(timer.start).not.toHaveBeenCalled();
        expect(timer.stop).not.toHaveBeenCalled();
        expect(timer.isWorking).not.toHaveBeenCalled();
        expect(timer.frames).not.toHaveBeenCalled();
      },
    ],
    params: [100, 100, 0, 3, 7, 5],
    expected: MOCK_TIMER_SECONDS,
    command: makeCommandVariableFromSystemTimer({
      startId: 100,
    }),
  },
  {
    name: "system save count",
    call: [
      expectMapUnused,
      expectPartyUnused,
      expectTimerUnused,
      ({ system }) => {
        expect(system.saveCount).toHaveBeenCalledOnce();
        expect(system.playtime).not.toHaveBeenCalled();
        expect(system.battleCount).not.toHaveBeenCalled();
        expect(system.winCount).not.toHaveBeenCalled();
        expect(system.escapeCount).not.toHaveBeenCalled();
      },
    ],
    params: [101, 101, 0, 3, 7, 6],
    expected: MOCK_SAVE_COUNT,
    command: makeCommandVariableFromSystemSaveCount({
      startId: 101,
    }),
  },
  {
    name: "system battle count",
    call: [
      expectMapUnused,
      expectPartyUnused,
      expectTimerUnused,
      ({ system }) => {
        expect(system.battleCount).toHaveBeenCalledOnce();
        expect(system.playtime).not.toHaveBeenCalled();
        expect(system.saveCount).not.toHaveBeenCalled();
        expect(system.winCount).not.toHaveBeenCalled();
        expect(system.escapeCount).not.toHaveBeenCalled();
      },
    ],
    params: [102, 102, 0, 3, 7, 7],
    expected: MOCK_BATTLE_COUNT,
    command: makeCommandVariableFromSystemBattleCount({
      startId: 102,
    }),
  },
  {
    name: "system win count",
    call: [
      expectMapUnused,
      expectPartyUnused,
      expectTimerUnused,
      ({ system }) => {
        expect(system.winCount).toHaveBeenCalledOnce();
        expect(system.playtime).not.toHaveBeenCalled();
        expect(system.saveCount).not.toHaveBeenCalled();
        expect(system.battleCount).not.toHaveBeenCalled();
        expect(system.escapeCount).not.toHaveBeenCalled();
      },
    ],
    params: [103, 103, 0, 3, 7, 8],
    expected: MOCK_WIN_COUNT,
    command: makeCommandVariableFromSystemWinCount({
      startId: 103,
    }),
  },
  {
    name: "system escape count",
    call: [
      expectMapUnused,
      expectPartyUnused,
      expectTimerUnused,
      ({ system }) => {
        expect(system.escapeCount).toHaveBeenCalledOnce();
        expect(system.playtime).not.toHaveBeenCalled();
        expect(system.saveCount).not.toHaveBeenCalled();
        expect(system.battleCount).not.toHaveBeenCalled();
        expect(system.winCount).not.toHaveBeenCalled();
      },
    ],
    params: [104, 104, 0, 3, 7, 9],
    expected: MOCK_ESCAPE_COUNT,
    command: makeCommandVariableFromSystemEscapeCount({
      startId: 104,
    }),
  },
];

describe("variableFromOther", () => {
  testCases.forEach((testCase) => {
    runTestCase(testCase);
  });
});
