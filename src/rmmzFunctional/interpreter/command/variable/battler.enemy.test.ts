import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type {
  Command_ControlVariables_FromEnemy,
  ParamArray_VariableFromEnemyStatus,
} from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandVariableFromEnemyAgi,
  makeCommandVariableFromEnemyAtk,
  makeCommandVariableFromEnemyCurrentHp,
  makeCommandVariableFromEnemyCurrentMp,
  makeCommandVariableFromEnemyCurrentTp,
  makeCommandVariableFromEnemyDef,
  makeCommandVariableFromEnemyLuk,
  makeCommandVariableFromEnemyMat,
  makeCommandVariableFromEnemyMaxHp,
  makeCommandVariableFromEnemyMaxMp,
  makeCommandVariableFromEnemyMdf,
} from "@RpgTypes/rmmz/eventCommand";
import type {
  Rmmz_MapId,
  Rmmz_SystemCounter,
  Rmmz_Temp,
  Rmmz_Timer,
  Rmmz_VariableSourceParty,
  Rmmz_Variables,
} from "@RpgTypes/rmmzRuntime";
import { variableFromEnemy } from "./battler";
import type {
  Rmmz_VariableSourceEnemy,
  Rmmz_VariableSourceProvider,
} from "./types";
import { variableFromCommand } from "./variable";

const MOCK_ENEMY_HP = 700;
const MOCK_ENEMY_MP = 140;
const MOCK_ENEMY_TP = 60;
const MOCK_ENEMY_PARAM_BASE = 200;
const MOCK_FALLBACK = 777;
const MOCK_START_ID = 91;
const MOCK_ENEMY_INDEX = 2;

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
    mapId: vi.fn(() => 1),
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
    battleCount: vi.fn(() => 0),
    winCount: vi.fn(() => 0),
    escapeCount: vi.fn(() => 0),
    saveCount: vi.fn(() => 0),
    playtime: vi.fn(() => 0),
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
    lastActionData: vi.fn(() => 0),
  };
};

interface TestContext {
  result: number;
  provider: MockedObject<Rmmz_VariableSourceProvider>;
  enemy: MockedObject<Rmmz_VariableSourceEnemy> | null;
  variables: MockedObject<Rmmz_Variables>;
  temp: MockedObject<Rmmz_Temp>;
  map: MockedObject<Rmmz_MapId>;
  party: MockedObject<Rmmz_VariableSourceParty>;
  system: MockedObject<Rmmz_SystemCounter>;
  timer: MockedObject<Rmmz_Timer>;
}

interface TestCase {
  name: string;
  params: ParamArray_VariableFromEnemyStatus;
  expected: number;
  command: Command_ControlVariables_FromEnemy;
  call: Array<(ctx: TestContext) => void>;
}

const expectProviderNotCalledForOtherDomains = (
  provider: MockedObject<Rmmz_VariableSourceProvider>,
) => {
  expect(provider.gameActor).not.toHaveBeenCalled();
  expect(provider.character).not.toHaveBeenCalled();
  expect(provider.dataArmor).not.toHaveBeenCalled();
  expect(provider.dataItem).not.toHaveBeenCalled();
  expect(provider.dataWeapon).not.toHaveBeenCalled();
  expect(provider.random).not.toHaveBeenCalled();
};

const expectNonEnemyObjectsUnused = (ctx: TestContext) => {
  expect(ctx.variables.value).not.toHaveBeenCalled();
  expect(ctx.variables.setValue).not.toHaveBeenCalled();
  expect(ctx.variables.clear).not.toHaveBeenCalled();
  expect(ctx.variables.onChange).not.toHaveBeenCalled();

  expect(ctx.temp.lastActionData).not.toHaveBeenCalled();
  expect(ctx.map.mapId).not.toHaveBeenCalled();

  expect(ctx.party.size).not.toHaveBeenCalled();
  expect(ctx.party.gold).not.toHaveBeenCalled();
  expect(ctx.party.steps).not.toHaveBeenCalled();
  expect(ctx.party.members).not.toHaveBeenCalled();
  expect(ctx.party.numItems).not.toHaveBeenCalled();

  expect(ctx.system.playtime).not.toHaveBeenCalled();
  expect(ctx.system.saveCount).not.toHaveBeenCalled();
  expect(ctx.system.battleCount).not.toHaveBeenCalled();
  expect(ctx.system.winCount).not.toHaveBeenCalled();
  expect(ctx.system.escapeCount).not.toHaveBeenCalled();

  expect(ctx.timer.seconds).not.toHaveBeenCalled();
  expect(ctx.timer.start).not.toHaveBeenCalled();
  expect(ctx.timer.stop).not.toHaveBeenCalled();
  expect(ctx.timer.isWorking).not.toHaveBeenCalled();
  expect(ctx.timer.frames).not.toHaveBeenCalled();
};

const runDirect = (testCase: TestCase): TestContext => {
  const enemy = createMockEnemy();
  const provider = createMockProvider(enemy);
  return {
    result: variableFromEnemy(testCase.params, MOCK_FALLBACK, provider),
    provider,
    enemy,
    variables: createMockVariebles(),
    temp: createMockTemp(),
    map: createMockMap(),
    party: createMockParty(),
    system: createMockSystem(),
    timer: createMockTimer(),
  };
};

const runFromCommand = (testCase: TestCase): TestContext => {
  const enemy = createMockEnemy();
  const provider = createMockProvider(enemy);
  const variables = createMockVariebles();
  const temp = createMockTemp();
  const map = createMockMap();
  const party = createMockParty();
  const system = createMockSystem();
  const timer = createMockTimer();

  const result = variableFromCommand(
    testCase.command,
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
    result,
    provider,
    enemy,
    variables,
    temp,
    map,
    party,
    system,
    timer,
  };
};

const testCases: TestCase[] = [
  {
    name: "hp",
    params: [MOCK_START_ID, MOCK_START_ID, 0, 3, 4, MOCK_ENEMY_INDEX, 0],
    expected: MOCK_ENEMY_HP,
    command: makeCommandVariableFromEnemyCurrentHp({
      startId: MOCK_START_ID,
      enemyIndex: MOCK_ENEMY_INDEX,
    }),
    call: [
      ({ provider, enemy }) => {
        expect(provider.gameEnemy).toHaveBeenCalledOnce();
        expect(provider.gameEnemy).toHaveBeenCalledWith(MOCK_ENEMY_INDEX);
        expect(enemy?.param).not.toHaveBeenCalled();
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
  {
    name: "mp",
    params: [MOCK_START_ID, MOCK_START_ID, 0, 3, 4, MOCK_ENEMY_INDEX, 1],
    expected: MOCK_ENEMY_MP,
    command: makeCommandVariableFromEnemyCurrentMp({
      startId: MOCK_START_ID,
      enemyIndex: MOCK_ENEMY_INDEX,
    }),
    call: [
      ({ provider, enemy }) => {
        expect(provider.gameEnemy).toHaveBeenCalledOnce();
        expect(provider.gameEnemy).toHaveBeenCalledWith(MOCK_ENEMY_INDEX);
        expect(enemy?.param).not.toHaveBeenCalled();
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
  {
    name: "tp",
    params: [MOCK_START_ID, MOCK_START_ID, 0, 3, 4, MOCK_ENEMY_INDEX, 10],
    expected: MOCK_ENEMY_TP,
    command: makeCommandVariableFromEnemyCurrentTp({
      startId: MOCK_START_ID,
      enemyIndex: MOCK_ENEMY_INDEX,
    }),
    call: [
      ({ provider, enemy }) => {
        expect(provider.gameEnemy).toHaveBeenCalledOnce();
        expect(provider.gameEnemy).toHaveBeenCalledWith(MOCK_ENEMY_INDEX);
        expect(enemy?.param).not.toHaveBeenCalled();
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
  {
    name: "param maxHp",
    params: [MOCK_START_ID, MOCK_START_ID, 0, 3, 4, MOCK_ENEMY_INDEX, 2],
    expected: MOCK_ENEMY_PARAM_BASE,
    command: makeCommandVariableFromEnemyMaxHp({
      startId: MOCK_START_ID,
      enemyIndex: MOCK_ENEMY_INDEX,
    }),
    call: [
      ({ provider, enemy }) => {
        expect(provider.gameEnemy).toHaveBeenCalledOnce();
        expect(provider.gameEnemy).toHaveBeenCalledWith(MOCK_ENEMY_INDEX);
        expect(enemy).not.toBeNull();
        expect(enemy?.param).toHaveBeenCalledOnce();
        expect(enemy?.param).toHaveBeenCalledWith(0);
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
  {
    name: "param maxMp",
    params: [MOCK_START_ID, MOCK_START_ID, 0, 3, 4, MOCK_ENEMY_INDEX, 3],
    expected: MOCK_ENEMY_PARAM_BASE + 1,
    command: makeCommandVariableFromEnemyMaxMp({
      startId: MOCK_START_ID,
      enemyIndex: MOCK_ENEMY_INDEX,
    }),
    call: [
      ({ provider, enemy }) => {
        expect(provider.gameEnemy).toHaveBeenCalledOnce();
        expect(provider.gameEnemy).toHaveBeenCalledWith(MOCK_ENEMY_INDEX);
        expect(enemy).not.toBeNull();
        expect(enemy?.param).toHaveBeenCalledOnce();
        expect(enemy?.param).toHaveBeenCalledWith(1);
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
  {
    name: "param atk",
    params: [MOCK_START_ID, MOCK_START_ID, 0, 3, 4, MOCK_ENEMY_INDEX, 4],
    expected: MOCK_ENEMY_PARAM_BASE + 2,
    command: makeCommandVariableFromEnemyAtk({
      startId: MOCK_START_ID,
      enemyIndex: MOCK_ENEMY_INDEX,
    }),
    call: [
      ({ provider, enemy }) => {
        expect(provider.gameEnemy).toHaveBeenCalledOnce();
        expect(provider.gameEnemy).toHaveBeenCalledWith(MOCK_ENEMY_INDEX);
        expect(enemy).not.toBeNull();
        expect(enemy?.param).toHaveBeenCalledOnce();
        expect(enemy?.param).toHaveBeenCalledWith(2);
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
  {
    name: "param def",
    params: [MOCK_START_ID, MOCK_START_ID, 0, 3, 4, MOCK_ENEMY_INDEX, 5],
    expected: MOCK_ENEMY_PARAM_BASE + 3,
    command: makeCommandVariableFromEnemyDef({
      startId: MOCK_START_ID,
      enemyIndex: MOCK_ENEMY_INDEX,
    }),
    call: [
      ({ provider, enemy }) => {
        expect(provider.gameEnemy).toHaveBeenCalledOnce();
        expect(provider.gameEnemy).toHaveBeenCalledWith(MOCK_ENEMY_INDEX);
        expect(enemy).not.toBeNull();
        expect(enemy?.param).toHaveBeenCalledOnce();
        expect(enemy?.param).toHaveBeenCalledWith(3);
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
  {
    name: "param mat",
    params: [MOCK_START_ID, MOCK_START_ID, 0, 3, 4, MOCK_ENEMY_INDEX, 6],
    expected: MOCK_ENEMY_PARAM_BASE + 4,
    command: makeCommandVariableFromEnemyMat({
      startId: MOCK_START_ID,
      enemyIndex: MOCK_ENEMY_INDEX,
    }),
    call: [
      ({ provider, enemy }) => {
        expect(provider.gameEnemy).toHaveBeenCalledOnce();
        expect(provider.gameEnemy).toHaveBeenCalledWith(MOCK_ENEMY_INDEX);
        expect(enemy).not.toBeNull();
        expect(enemy?.param).toHaveBeenCalledOnce();
        expect(enemy?.param).toHaveBeenCalledWith(4);
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
  {
    name: "param mdf",
    params: [MOCK_START_ID, MOCK_START_ID, 0, 3, 4, MOCK_ENEMY_INDEX, 7],
    expected: MOCK_ENEMY_PARAM_BASE + 5,
    command: makeCommandVariableFromEnemyMdf({
      startId: MOCK_START_ID,
      enemyIndex: MOCK_ENEMY_INDEX,
    }),
    call: [
      ({ provider, enemy }) => {
        expect(provider.gameEnemy).toHaveBeenCalledOnce();
        expect(provider.gameEnemy).toHaveBeenCalledWith(MOCK_ENEMY_INDEX);
        expect(enemy).not.toBeNull();
        expect(enemy?.param).toHaveBeenCalledOnce();
        expect(enemy?.param).toHaveBeenCalledWith(5);
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
  {
    name: "param agi",
    params: [MOCK_START_ID, MOCK_START_ID, 0, 3, 4, MOCK_ENEMY_INDEX, 8],
    expected: MOCK_ENEMY_PARAM_BASE + 6,
    command: makeCommandVariableFromEnemyAgi({
      startId: MOCK_START_ID,
      enemyIndex: MOCK_ENEMY_INDEX,
    }),
    call: [
      ({ provider, enemy }) => {
        expect(provider.gameEnemy).toHaveBeenCalledOnce();
        expect(provider.gameEnemy).toHaveBeenCalledWith(MOCK_ENEMY_INDEX);
        expect(enemy).not.toBeNull();
        expect(enemy?.param).toHaveBeenCalledOnce();
        expect(enemy?.param).toHaveBeenCalledWith(6);
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
  {
    name: "param luk",
    params: [MOCK_START_ID, MOCK_START_ID, 0, 3, 4, MOCK_ENEMY_INDEX, 9],
    expected: MOCK_ENEMY_PARAM_BASE + 7,
    command: makeCommandVariableFromEnemyLuk({
      startId: MOCK_START_ID,
      enemyIndex: MOCK_ENEMY_INDEX,
    }),
    call: [
      ({ provider, enemy }) => {
        expect(provider.gameEnemy).toHaveBeenCalledOnce();
        expect(provider.gameEnemy).toHaveBeenCalledWith(MOCK_ENEMY_INDEX);
        expect(enemy).not.toBeNull();
        expect(enemy?.param).toHaveBeenCalledOnce();
        expect(enemy?.param).toHaveBeenCalledWith(7);
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
  {
    name: "invalid kind",
    params: [MOCK_START_ID, MOCK_START_ID, 0, 3, 4, MOCK_ENEMY_INDEX, 99],
    expected: MOCK_FALLBACK,
    command: {
      code: 122,
      indent: 0,
      parameters: [MOCK_START_ID, MOCK_START_ID, 0, 3, 4, MOCK_ENEMY_INDEX, 99],
    },
    call: [
      ({ provider, enemy }) => {
        expect(provider.gameEnemy).toHaveBeenCalledOnce();
        expect(provider.gameEnemy).toHaveBeenCalledWith(MOCK_ENEMY_INDEX);
        expect(enemy?.param).not.toHaveBeenCalled();
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
];

const runTestCase = (testCase: TestCase) => {
  describe(testCase.name, () => {
    describe("variableFromEnemy", () => {
      test("makeCommand", () => {
        expect(testCase.command.parameters).toEqual(testCase.params);
      });

      test("normal", () => {
        const context = runDirect(testCase);
        expect(context.result).toBe(testCase.expected);
      });

      test("call", () => {
        const context = runDirect(testCase);
        testCase.call.forEach((f) => f(context));
      });

      test("null", () => {
        const provider = createMockProvider(null);
        const result = variableFromEnemy(
          testCase.params,
          MOCK_FALLBACK,
          provider,
        );
        expect(result).toBe(MOCK_FALLBACK);
        expect(provider.gameEnemy).toHaveBeenCalledOnce();
      });
    });

    describe("variableFromCommand", () => {
      test("result", () => {
        const context = runFromCommand(testCase);
        expect(context.result).toBe(testCase.expected);
      });

      test("not call", () => {
        const context = runFromCommand(testCase);
        expectNonEnemyObjectsUnused(context);
      });

      test("call", () => {
        const context = runFromCommand(testCase);
        testCase.call.forEach((f) => f(context));
      });
    });
  });
};

describe("variableFromEnemy", () => {
  testCases.forEach((testCase) => {
    runTestCase(testCase);
  });
});
