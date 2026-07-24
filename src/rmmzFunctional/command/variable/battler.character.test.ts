import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type {
  Command_ControlVariables_FromMapCharactor,
  ParamArray_VariableFromMapCharactor,
} from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandVariableFromMapCharactorDirection,
  makeCommandVariableFromMapCharactorScreenX,
  makeCommandVariableFromMapCharactorScreenY,
  makeCommandVariableFromMapCharactorX,
  makeCommandVariableFromMapCharactorY,
  makeCommandVariableFromMapPlayerDirection,
  makeCommandVariableFromMapPlayerScreenX,
  makeCommandVariableFromMapPlayerScreenY,
  makeCommandVariableFromMapPlayerX,
  makeCommandVariableFromMapPlayerY,
} from "@RpgTypes/rmmz/eventCommand";
import type {
  Rmmz_MapId,
  Rmmz_SystemCounter,
  Rmmz_Temp,
  Rmmz_Timer,
  Rmmz_VariableSourceParty,
  Rmmz_Variables,
} from "@RpgTypes/rmmzRuntime";
import { variableFromMapCharactor } from "./battler";
import type {
  Rmmz_VariableSourceCharacter,
  Rmmz_VariableSourceProvider,
} from "./types";
import { variableFromCommand } from "./variable";

const MOCK_CHAR_X = 12;
const MOCK_CHAR_Y = 34;
const MOCK_CHAR_DIRECTION = 8;
const MOCK_CHAR_SCREEN_X = 640;
const MOCK_CHAR_SCREEN_Y = 360;

const MOCK_FALLBACK = 777;
const MOCK_START_ID = 91;
const MOCK_CHARACTOR_ID = 9;
const KIND_X = 0;
const KIND_Y = 1;
const KIND_DIRECTION = 2;
const KIND_SCREEN_X = 3;
const KIND_SCREEN_Y = 4;
const KIND_INVALID = 99;

const createMockCharacter = (): MockedObject<Rmmz_VariableSourceCharacter> => {
  return {
    x: MOCK_CHAR_X,
    y: MOCK_CHAR_Y,
    direction: vi.fn(() => MOCK_CHAR_DIRECTION),
    screenX: vi.fn(() => MOCK_CHAR_SCREEN_X),
    screenY: vi.fn(() => MOCK_CHAR_SCREEN_Y),
  };
};

const createMockProvider = (
  character: Rmmz_VariableSourceCharacter | null,
): MockedObject<Rmmz_VariableSourceProvider> => {
  return {
    character: vi.fn(() => character),
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
  character: MockedObject<Rmmz_VariableSourceCharacter> | null;
  variables: MockedObject<Rmmz_Variables>;
  temp: MockedObject<Rmmz_Temp>;
  map: MockedObject<Rmmz_MapId>;
  party: MockedObject<Rmmz_VariableSourceParty>;
  system: MockedObject<Rmmz_SystemCounter>;
  timer: MockedObject<Rmmz_Timer>;
}

interface TestCase {
  name: string;
  params: ParamArray_VariableFromMapCharactor;
  expected: number;
  command: Command_ControlVariables_FromMapCharactor;
  call: Array<(ctx: TestContext) => void>;
}

const expectProviderNotCalledForOtherDomains = (
  provider: MockedObject<Rmmz_VariableSourceProvider>,
) => {
  expect(provider.gameActor).not.toHaveBeenCalled();
  expect(provider.gameEnemy).not.toHaveBeenCalled();
  expect(provider.dataArmor).not.toHaveBeenCalled();
  expect(provider.dataItem).not.toHaveBeenCalled();
  expect(provider.dataWeapon).not.toHaveBeenCalled();
  expect(provider.random).not.toHaveBeenCalled();
};

const expectDirectionCalled = ({ character }: TestContext) => {
  expect(character?.direction).toHaveBeenCalledOnce();
};

const expectDirectionNotCalled = ({ character }: TestContext) => {
  expect(character?.direction).not.toHaveBeenCalled();
};

const expectScreenXCalled = ({ character }: TestContext) => {
  expect(character?.screenX).toHaveBeenCalledOnce();
};

const expectScreenXNotCalled = ({ character }: TestContext) => {
  expect(character?.screenX).not.toHaveBeenCalled();
};

const expectScreenYCalled = ({ character }: TestContext) => {
  expect(character?.screenY).toHaveBeenCalledOnce();
};

const expectScreenYNotCalled = ({ character }: TestContext) => {
  expect(character?.screenY).not.toHaveBeenCalled();
};

const expectProviderCalledWithCharacterId =
  (characterId: number) =>
  ({ provider }: TestContext) => {
    expect(provider.character).toHaveBeenCalledOnce();
    expect(provider.character).toHaveBeenCalledWith(characterId);
  };

const expectCharacterExists = ({ character }: TestContext) => {
  expect(character).not.toBeNull();
};

const expectCharacterNotCalledWithDirectionScreen = [
  expectDirectionNotCalled,
  expectScreenXNotCalled,
  expectScreenYNotCalled,
] as const;

const expectCharacterCalledWithDirectionOnly = [
  expectDirectionCalled,
  expectScreenXNotCalled,
  expectScreenYNotCalled,
] as const;

const expectCharacterCalledWithScreenXOnly = [
  expectDirectionNotCalled,
  expectScreenXCalled,
  expectScreenYNotCalled,
] as const;

const expectCharacterCalledWithScreenYOnly = [
  expectDirectionNotCalled,
  expectScreenXNotCalled,
  expectScreenYCalled,
] as const;

const characterKindCalls: Record<
  0 | 1 | 2 | 3 | 4,
  Array<(ctx: TestContext) => void>
> = {
  0: [...expectCharacterNotCalledWithDirectionScreen],
  1: [...expectCharacterNotCalledWithDirectionScreen],
  2: [...expectCharacterCalledWithDirectionOnly],
  3: [...expectCharacterCalledWithScreenXOnly],
  4: [...expectCharacterCalledWithScreenYOnly],
};

const expectNonCharacterObjectsUnused = (ctx: TestContext) => {
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
  const character = createMockCharacter();
  const provider = createMockProvider(character);
  return {
    result: variableFromMapCharactor(testCase.params, MOCK_FALLBACK, provider),
    provider,
    character,
    variables: createMockVariebles(),
    temp: createMockTemp(),
    map: createMockMap(),
    party: createMockParty(),
    system: createMockSystem(),
    timer: createMockTimer(),
  };
};

const runFromCommand = (testCase: TestCase): TestContext => {
  const character = createMockCharacter();
  const provider = createMockProvider(character);
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
    character,
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
    describe("variableFromMapCharactor", () => {
      test("makeCommand", () => {
        expect(testCase.command.parameters).toEqual(testCase.params);
      });

      test("normal", () => {
        const character = createMockCharacter();
        const provider = createMockProvider(character);
        const result: number = variableFromMapCharactor(
          testCase.params,
          MOCK_FALLBACK,
          provider,
        );
        expect(result).toBe(testCase.expected);
      });
      test("call", () => {
        const context = runDirect(testCase);
        testCase.call.forEach((f) => f(context));
      });
      test("null", () => {
        const provider = createMockProvider(null);
        const result: number = variableFromMapCharactor(
          testCase.params,
          MOCK_FALLBACK,
          provider,
        );
        expect(result).toBe(MOCK_FALLBACK);
        expect(provider.character).toHaveBeenCalledOnce();
      });
    });
    describe("variableFromCommand", () => {
      test("result", () => {
        const context = runFromCommand(testCase);
        expect(context.result).toBe(testCase.expected);
      });

      test("not call", () => {
        const context = runFromCommand(testCase);
        expectNonCharacterObjectsUnused(context);
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
    name: "map char x",
    params: [MOCK_START_ID, MOCK_START_ID, 0, 3, 5, MOCK_CHARACTOR_ID, KIND_X],
    expected: MOCK_CHAR_X,
    command: makeCommandVariableFromMapCharactorX({
      startId: MOCK_START_ID,
      charactorId: MOCK_CHARACTOR_ID,
    }),
    call: [
      expectProviderCalledWithCharacterId(MOCK_CHARACTOR_ID),
      expectCharacterExists,
      ...characterKindCalls[KIND_X],
      ({ provider }) => {
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
  {
    name: "map char y",
    params: [MOCK_START_ID, MOCK_START_ID, 0, 3, 5, MOCK_CHARACTOR_ID, KIND_Y],
    expected: MOCK_CHAR_Y,
    command: makeCommandVariableFromMapCharactorY({
      startId: MOCK_START_ID,
      charactorId: MOCK_CHARACTOR_ID,
    }),
    call: [
      expectProviderCalledWithCharacterId(MOCK_CHARACTOR_ID),
      expectCharacterExists,
      ...characterKindCalls[KIND_Y],
      ({ provider }) => {
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
  {
    name: "map char direction",
    params: [
      MOCK_START_ID,
      MOCK_START_ID,
      0,
      3,
      5,
      MOCK_CHARACTOR_ID,
      KIND_DIRECTION,
    ],
    expected: MOCK_CHAR_DIRECTION,
    command: makeCommandVariableFromMapCharactorDirection({
      startId: MOCK_START_ID,
      charactorId: MOCK_CHARACTOR_ID,
    }),
    call: [
      expectProviderCalledWithCharacterId(MOCK_CHARACTOR_ID),
      expectCharacterExists,
      ...characterKindCalls[KIND_DIRECTION],
      ({ provider }) => {
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
  {
    name: "map char screenX",
    params: [
      MOCK_START_ID,
      MOCK_START_ID,
      0,
      3,
      5,
      MOCK_CHARACTOR_ID,
      KIND_SCREEN_X,
    ],
    expected: MOCK_CHAR_SCREEN_X,
    command: makeCommandVariableFromMapCharactorScreenX({
      startId: MOCK_START_ID,
      charactorId: MOCK_CHARACTOR_ID,
    }),
    call: [
      expectProviderCalledWithCharacterId(MOCK_CHARACTOR_ID),
      expectCharacterExists,
      ...characterKindCalls[KIND_SCREEN_X],
      ({ provider }) => {
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
  {
    name: "map char screenY",
    params: [
      MOCK_START_ID,
      MOCK_START_ID,
      0,
      3,
      5,
      MOCK_CHARACTOR_ID,
      KIND_SCREEN_Y,
    ],
    expected: MOCK_CHAR_SCREEN_Y,
    command: makeCommandVariableFromMapCharactorScreenY({
      startId: MOCK_START_ID,
      charactorId: MOCK_CHARACTOR_ID,
    }),
    call: [
      expectProviderCalledWithCharacterId(MOCK_CHARACTOR_ID),
      expectCharacterExists,
      ...characterKindCalls[KIND_SCREEN_Y],
      ({ provider }) => {
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
  {
    name: "map player x",
    params: [MOCK_START_ID, MOCK_START_ID, 0, 3, 5, -1, KIND_X],
    expected: MOCK_CHAR_X,
    command: makeCommandVariableFromMapPlayerX({ startId: MOCK_START_ID }),
    call: [
      expectProviderCalledWithCharacterId(-1),
      expectCharacterExists,
      ...characterKindCalls[KIND_X],
      ({ provider }) => {
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
  {
    name: "map player y",
    params: [MOCK_START_ID, MOCK_START_ID, 0, 3, 5, -1, KIND_Y],
    expected: MOCK_CHAR_Y,
    command: makeCommandVariableFromMapPlayerY({ startId: MOCK_START_ID }),
    call: [
      expectProviderCalledWithCharacterId(-1),
      expectCharacterExists,
      ...characterKindCalls[KIND_Y],
      ({ provider }) => {
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
  {
    name: "map player direction",
    params: [MOCK_START_ID, MOCK_START_ID, 0, 3, 5, -1, KIND_DIRECTION],
    expected: MOCK_CHAR_DIRECTION,
    command: makeCommandVariableFromMapPlayerDirection({
      startId: MOCK_START_ID,
    }),
    call: [
      expectProviderCalledWithCharacterId(-1),
      expectCharacterExists,
      ...characterKindCalls[KIND_DIRECTION],
      ({ provider }) => {
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
  {
    name: "map player screenX",
    params: [MOCK_START_ID, MOCK_START_ID, 0, 3, 5, -1, KIND_SCREEN_X],
    expected: MOCK_CHAR_SCREEN_X,
    command: makeCommandVariableFromMapPlayerScreenX({
      startId: MOCK_START_ID,
    }),
    call: [
      expectProviderCalledWithCharacterId(-1),
      expectCharacterExists,
      ...characterKindCalls[KIND_SCREEN_X],
      ({ provider }) => {
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
  {
    name: "map player screenY",
    params: [MOCK_START_ID, MOCK_START_ID, 0, 3, 5, -1, KIND_SCREEN_Y],
    expected: MOCK_CHAR_SCREEN_Y,
    command: makeCommandVariableFromMapPlayerScreenY({
      startId: MOCK_START_ID,
    }),
    call: [
      expectProviderCalledWithCharacterId(-1),
      expectCharacterExists,
      ...characterKindCalls[KIND_SCREEN_Y],
      ({ provider }) => {
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
  {
    name: "invalid kind",
    params: [
      MOCK_START_ID,
      MOCK_START_ID,
      0,
      3,
      5,
      MOCK_CHARACTOR_ID,
      KIND_INVALID as any,
    ],
    expected: MOCK_FALLBACK,
    command: {
      code: 122,
      indent: 0,
      parameters: [
        MOCK_START_ID,
        MOCK_START_ID,
        0,
        3,
        5,
        MOCK_CHARACTOR_ID,
        KIND_INVALID as any,
      ],
    },
    call: [
      expectProviderCalledWithCharacterId(MOCK_CHARACTOR_ID),
      ...expectCharacterNotCalledWithDirectionScreen,
      ({ provider }) => {
        expectProviderNotCalledForOtherDomains(provider);
      },
    ],
  },
];

describe("variableFromMapCharactor", () => {
  testCases.forEach((testCase) => {
    runTestCase(testCase);
  });
});
