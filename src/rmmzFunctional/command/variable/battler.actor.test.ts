import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type {
  Command_ControlVariables_FromActor,
  ParamArray_VariableFromActorStatus,
} from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandVariableFromActorAgi,
  makeCommandVariableFromActorAtk,
  makeCommandVariableFromActorCurrentExp,
  makeCommandVariableFromActorCurrentHp,
  makeCommandVariableFromActorCurrentLevel,
  makeCommandVariableFromActorCurrentMp,
  makeCommandVariableFromActorCurrentTp,
  makeCommandVariableFromActorDef,
  makeCommandVariableFromActorLuk,
  makeCommandVariableFromActorMat,
  makeCommandVariableFromActorMaxHp,
  makeCommandVariableFromActorMaxMp,
  makeCommandVariableFromActorMdf,
} from "@RpgTypes/rmmz/eventCommand";
import type {
  Rmmz_MapId,
  Rmmz_SystemCounter,
  Rmmz_Temp,
  Rmmz_Timer,
  Rmmz_VariableSourceParty,
  Rmmz_Variables,
} from "@RpgTypes/rmmzRuntime";
import { variableFromActor } from "./battler";
import type {
  Rmmz_VariableSourceActor,
  Rmmz_VariableSourceProvider,
} from "./types";
import { variableFromCommand } from "./variable";

const MOCK_ACTOR_LEVEL = 31;
const MOCK_ACTOR_EXP = 4567;
const MOCK_ACTOR_HP = 800;
const MOCK_ACTOR_MP = 250;
const MOCK_ACTOR_TP = 45;
const MOCK_ACTOR_PARAM_BASE = 100;
const MOCK_FALLBACK = 777;
const MOCK_START_ID = 91;
const MOCK_ACTOR_ID = 3;

const createMockActor = (): MockedObject<Rmmz_VariableSourceActor> => {
  return {
    level: MOCK_ACTOR_LEVEL,
    currentExp: vi.fn(() => MOCK_ACTOR_EXP),
    hp: MOCK_ACTOR_HP,
    mp: MOCK_ACTOR_MP,
    tp: MOCK_ACTOR_TP,
    param: vi.fn((paramId: number) => MOCK_ACTOR_PARAM_BASE + paramId),
  };
};

const createMockProvider = (
  actor: Rmmz_VariableSourceActor | null,
): MockedObject<Rmmz_VariableSourceProvider> => {
  return {
    character: vi.fn(() => null),
    dataArmor: vi.fn(() => null),
    dataItem: vi.fn(() => null),
    dataWeapon: vi.fn(() => null),
    gameActor: vi.fn(() => actor),
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
  actor: MockedObject<Rmmz_VariableSourceActor> | null;
  variables: MockedObject<Rmmz_Variables>;
  temp: MockedObject<Rmmz_Temp>;
  map: MockedObject<Rmmz_MapId>;
  party: MockedObject<Rmmz_VariableSourceParty>;
  system: MockedObject<Rmmz_SystemCounter>;
  timer: MockedObject<Rmmz_Timer>;
}

interface TestCase {
  name: string;
  params: ParamArray_VariableFromActorStatus;
  expected: number;
  command: Command_ControlVariables_FromActor;
  call: Array<(ctx: TestContext) => void>;
}

const expectProviderNotCalledForOtherDomains = (
  provider: MockedObject<Rmmz_VariableSourceProvider>,
) => {
  expect(provider.gameEnemy).not.toHaveBeenCalled();
  expect(provider.character).not.toHaveBeenCalled();
  expect(provider.dataArmor).not.toHaveBeenCalled();
  expect(provider.dataItem).not.toHaveBeenCalled();
  expect(provider.dataWeapon).not.toHaveBeenCalled();
  expect(provider.random).not.toHaveBeenCalled();
};

const expectNonActorObjectsUnused = (ctx: TestContext) => {
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
  const actor = createMockActor();
  const provider = createMockProvider(actor);
  return {
    result: variableFromActor(testCase.params, MOCK_FALLBACK, provider),
    provider,
    actor,
    variables: createMockVariebles(),
    temp: createMockTemp(),
    map: createMockMap(),
    party: createMockParty(),
    system: createMockSystem(),
    timer: createMockTimer(),
  };
};

const runFromCommand = (testCase: TestCase): TestContext => {
  const actor = createMockActor();
  const provider = createMockProvider(actor);
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
    actor,
    variables,
    temp,
    map,
    party,
    system,
    timer,
  };
};

const runTestCase = (testCase: TestCase) => {
  describe(testCase.name, () => {
    describe("variableFromActor", () => {
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
        const result = variableFromActor(
          testCase.params,
          MOCK_FALLBACK,
          provider,
        );
        expect(result).toBe(MOCK_FALLBACK);
        expect(provider.gameActor).toHaveBeenCalledOnce();
      });
    });

    describe("variableFromCommand", () => {
      test("result", () => {
        const context = runFromCommand(testCase);
        expect(context.result).toBe(testCase.expected);
      });

      test("not call", () => {
        const context = runFromCommand(testCase);
        expectNonActorObjectsUnused(context);
      });

      test("call", () => {
        const context = runFromCommand(testCase);
        testCase.call.forEach((f) => f(context));
      });
    });
  });
};

const testCases: TestCase[] = [
  {
    name: "level",
    params: [MOCK_START_ID, MOCK_START_ID, 0, 3, 3, MOCK_ACTOR_ID, 0],
    expected: MOCK_ACTOR_LEVEL,
    command: makeCommandVariableFromActorCurrentLevel({
      startId: MOCK_START_ID,
      actorId: MOCK_ACTOR_ID,
    }),
    call: [
      ({ provider, actor }) => {
        expect(provider.gameActor).toHaveBeenCalledOnce();
        expect(provider.gameActor).toHaveBeenCalledWith(MOCK_ACTOR_ID);
        expect(actor?.currentExp).not.toHaveBeenCalled();
        expect(actor?.param).not.toHaveBeenCalled();
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
  {
    name: "exp",
    params: [MOCK_START_ID, MOCK_START_ID, 0, 3, 3, MOCK_ACTOR_ID, 1],
    expected: MOCK_ACTOR_EXP,
    command: makeCommandVariableFromActorCurrentExp({
      startId: MOCK_START_ID,
      actorId: MOCK_ACTOR_ID,
    }),
    call: [
      ({ provider, actor }) => {
        expect(provider.gameActor).toHaveBeenCalledOnce();
        expect(provider.gameActor).toHaveBeenCalledWith(MOCK_ACTOR_ID);
        expect(actor?.currentExp).toHaveBeenCalledOnce();
        expect(actor?.param).not.toHaveBeenCalled();
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
  {
    name: "hp",
    params: [MOCK_START_ID, MOCK_START_ID, 0, 3, 3, MOCK_ACTOR_ID, 2],
    expected: MOCK_ACTOR_HP,
    command: makeCommandVariableFromActorCurrentHp({
      startId: MOCK_START_ID,
      actorId: MOCK_ACTOR_ID,
    }),
    call: [
      ({ provider, actor }) => {
        expect(provider.gameActor).toHaveBeenCalledOnce();
        expect(provider.gameActor).toHaveBeenCalledWith(MOCK_ACTOR_ID);
        expect(actor?.currentExp).not.toHaveBeenCalled();
        expect(actor?.param).not.toHaveBeenCalled();
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
  {
    name: "mp",
    params: [MOCK_START_ID, MOCK_START_ID, 0, 3, 3, MOCK_ACTOR_ID, 3],
    expected: MOCK_ACTOR_MP,
    command: makeCommandVariableFromActorCurrentMp({
      startId: MOCK_START_ID,
      actorId: MOCK_ACTOR_ID,
    }),
    call: [
      ({ provider, actor }) => {
        expect(provider.gameActor).toHaveBeenCalledOnce();
        expect(provider.gameActor).toHaveBeenCalledWith(MOCK_ACTOR_ID);
        expect(actor?.currentExp).not.toHaveBeenCalled();
        expect(actor?.param).not.toHaveBeenCalled();
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
  {
    name: "tp",
    params: [MOCK_START_ID, MOCK_START_ID, 0, 3, 3, MOCK_ACTOR_ID, 12],
    expected: MOCK_ACTOR_TP,
    command: makeCommandVariableFromActorCurrentTp({
      startId: MOCK_START_ID,
      actorId: MOCK_ACTOR_ID,
    }),
    call: [
      ({ provider, actor }) => {
        expect(provider.gameActor).toHaveBeenCalledOnce();
        expect(provider.gameActor).toHaveBeenCalledWith(MOCK_ACTOR_ID);
        expect(actor?.currentExp).not.toHaveBeenCalled();
        expect(actor?.param).not.toHaveBeenCalled();
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
  {
    name: "param maxHp",
    params: [MOCK_START_ID, MOCK_START_ID, 0, 3, 3, MOCK_ACTOR_ID, 4 as any],
    expected: MOCK_ACTOR_PARAM_BASE,
    command: makeCommandVariableFromActorMaxHp({
      startId: MOCK_START_ID,
      actorId: MOCK_ACTOR_ID,
    }),
    call: [
      ({ provider, actor }) => {
        expect(provider.gameActor).toHaveBeenCalledOnce();
        expect(provider.gameActor).toHaveBeenCalledWith(MOCK_ACTOR_ID);
        expect(actor).not.toBeNull();
        expect(actor?.param).toHaveBeenCalledOnce();
        expect(actor?.param).toHaveBeenCalledWith(0);
        expect(actor?.currentExp).not.toHaveBeenCalled();
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
  {
    name: "param maxMp",
    params: [MOCK_START_ID, MOCK_START_ID, 0, 3, 3, MOCK_ACTOR_ID, 5 as any],
    expected: MOCK_ACTOR_PARAM_BASE + 1,
    command: makeCommandVariableFromActorMaxMp({
      startId: MOCK_START_ID,
      actorId: MOCK_ACTOR_ID,
    }),
    call: [
      ({ provider, actor }) => {
        expect(provider.gameActor).toHaveBeenCalledOnce();
        expect(provider.gameActor).toHaveBeenCalledWith(MOCK_ACTOR_ID);
        expect(actor).not.toBeNull();
        expect(actor?.param).toHaveBeenCalledOnce();
        expect(actor?.param).toHaveBeenCalledWith(1);
        expect(actor?.currentExp).not.toHaveBeenCalled();
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
  {
    name: "param atk",
    params: [MOCK_START_ID, MOCK_START_ID, 0, 3, 3, MOCK_ACTOR_ID, 6 as any],
    expected: MOCK_ACTOR_PARAM_BASE + 2,
    command: makeCommandVariableFromActorAtk({
      startId: MOCK_START_ID,
      actorId: MOCK_ACTOR_ID,
    }),
    call: [
      ({ provider, actor }) => {
        expect(provider.gameActor).toHaveBeenCalledOnce();
        expect(provider.gameActor).toHaveBeenCalledWith(MOCK_ACTOR_ID);
        expect(actor).not.toBeNull();
        expect(actor?.param).toHaveBeenCalledOnce();
        expect(actor?.param).toHaveBeenCalledWith(2);
        expect(actor?.currentExp).not.toHaveBeenCalled();
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
  {
    name: "param def",
    params: [MOCK_START_ID, MOCK_START_ID, 0, 3, 3, MOCK_ACTOR_ID, 7 as any],
    expected: MOCK_ACTOR_PARAM_BASE + 3,
    command: makeCommandVariableFromActorDef({
      startId: MOCK_START_ID,
      actorId: MOCK_ACTOR_ID,
    }),
    call: [
      ({ provider, actor }) => {
        expect(provider.gameActor).toHaveBeenCalledOnce();
        expect(provider.gameActor).toHaveBeenCalledWith(MOCK_ACTOR_ID);
        expect(actor).not.toBeNull();
        expect(actor?.param).toHaveBeenCalledOnce();
        expect(actor?.param).toHaveBeenCalledWith(3);
        expect(actor?.currentExp).not.toHaveBeenCalled();
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
  {
    name: "param mat",
    params: [MOCK_START_ID, MOCK_START_ID, 0, 3, 3, MOCK_ACTOR_ID, 8 as any],
    expected: MOCK_ACTOR_PARAM_BASE + 4,
    command: makeCommandVariableFromActorMat({
      startId: MOCK_START_ID,
      actorId: MOCK_ACTOR_ID,
    }),
    call: [
      ({ provider, actor }) => {
        expect(provider.gameActor).toHaveBeenCalledOnce();
        expect(provider.gameActor).toHaveBeenCalledWith(MOCK_ACTOR_ID);
        expect(actor).not.toBeNull();
        expect(actor?.param).toHaveBeenCalledOnce();
        expect(actor?.param).toHaveBeenCalledWith(4);
        expect(actor?.currentExp).not.toHaveBeenCalled();
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
  {
    name: "param mdf",
    params: [MOCK_START_ID, MOCK_START_ID, 0, 3, 3, MOCK_ACTOR_ID, 9 as any],
    expected: MOCK_ACTOR_PARAM_BASE + 5,
    command: makeCommandVariableFromActorMdf({
      startId: MOCK_START_ID,
      actorId: MOCK_ACTOR_ID,
    }),
    call: [
      ({ provider, actor }) => {
        expect(provider.gameActor).toHaveBeenCalledOnce();
        expect(provider.gameActor).toHaveBeenCalledWith(MOCK_ACTOR_ID);
        expect(actor).not.toBeNull();
        expect(actor?.param).toHaveBeenCalledOnce();
        expect(actor?.param).toHaveBeenCalledWith(5);
        expect(actor?.currentExp).not.toHaveBeenCalled();
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
  {
    name: "param agi",
    params: [MOCK_START_ID, MOCK_START_ID, 0, 3, 3, MOCK_ACTOR_ID, 10 as any],
    expected: MOCK_ACTOR_PARAM_BASE + 6,
    command: makeCommandVariableFromActorAgi({
      startId: MOCK_START_ID,
      actorId: MOCK_ACTOR_ID,
    }),
    call: [
      ({ provider, actor }) => {
        expect(provider.gameActor).toHaveBeenCalledOnce();
        expect(provider.gameActor).toHaveBeenCalledWith(MOCK_ACTOR_ID);
        expect(actor).not.toBeNull();
        expect(actor?.param).toHaveBeenCalledOnce();
        expect(actor?.param).toHaveBeenCalledWith(6);
        expect(actor?.currentExp).not.toHaveBeenCalled();
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
  {
    name: "param luk",
    params: [MOCK_START_ID, MOCK_START_ID, 0, 3, 3, MOCK_ACTOR_ID, 11 as any],
    expected: MOCK_ACTOR_PARAM_BASE + 7,
    command: makeCommandVariableFromActorLuk({
      startId: MOCK_START_ID,
      actorId: MOCK_ACTOR_ID,
    }),
    call: [
      ({ provider, actor }) => {
        expect(provider.gameActor).toHaveBeenCalledOnce();
        expect(provider.gameActor).toHaveBeenCalledWith(MOCK_ACTOR_ID);
        expect(actor).not.toBeNull();
        expect(actor?.param).toHaveBeenCalledOnce();
        expect(actor?.param).toHaveBeenCalledWith(7);
        expect(actor?.currentExp).not.toHaveBeenCalled();
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
  {
    name: "invalid kind",
    params: [MOCK_START_ID, MOCK_START_ID, 0, 3, 3, MOCK_ACTOR_ID, 99 as any],
    expected: MOCK_FALLBACK,
    command: {
      code: 122,
      indent: 0,
      parameters: [
        MOCK_START_ID,
        MOCK_START_ID,
        0,
        3,
        3,
        MOCK_ACTOR_ID,
        99 as any,
      ],
    },
    call: [
      ({ provider, actor }) => {
        expect(provider.gameActor).toHaveBeenCalledOnce();
        expect(provider.gameActor).toHaveBeenCalledWith(MOCK_ACTOR_ID);
        expect(actor?.currentExp).not.toHaveBeenCalled();
        expect(actor?.param).not.toHaveBeenCalled();
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
];

describe("variableFromActor", () => {
  testCases.forEach((testCase) => {
    runTestCase(testCase);
  });
});
