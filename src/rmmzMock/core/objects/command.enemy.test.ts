import type { MockedObject } from "vitest";
import { vi, describe, test, expect } from "vitest";
import type {
  Rmmz_Battler_Poitns,
  Rmmz_Interpreter,
  Rmmz_Members,
  Rmmz_Variables,
} from "@RpgTypes/rmmzRuntime";
import type { Command_ChangeEnemyHP } from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandEnemyRecoverAll,
  makeCommandEnemyRecoverAllEach,
  makeCommandGainEnemyHPDirect,
  makeCommandGainEnemyHPVV,
  makeCommandGainEnemyMP,
  makeCommandGainEnemyTP,
  makeCommandLoseEnemyMP,
  makeCommandLoseEnemyTP,
} from "@RpgTypes/rmmz/eventCommand";
import {
  commandChangeEnemyHp,
  commandChangeEnemyMp,
  commandChangeEnemyTp,
  commandEnemyRecoverAll,
} from "@RpgTypes/rmmzFunctional";
import { Game_Interpreter } from "./rmmz_objects";

const MOCK_HP = 100;
const MOCK_VARIABLE_VALUE = 64;

const MOCK_VARIABLE_ID_VALUE = 22;
const MOCK_VARIABLE_ID_ENEMY_INDEX = 123;
const MOCK_TARGET_ENEMY_INDEX_V = 1;

type MockedEnemy = MockedObject<
  Rmmz_Battler_Poitns & {
    recoverAll: () => void;
    isAlive: () => boolean;
    isDead: () => boolean;
  }
>;
const createMockedEnemy = (): MockedEnemy => {
  return {
    gainHp: vi.fn(),
    gainMp: vi.fn(),
    gainTp: vi.fn(),
    loseHp: vi.fn(),
    loseMp: vi.fn(),
    loseTp: vi.fn(),
    recoverAll: vi.fn(),
    get hp() {
      return MOCK_HP;
    },
    isAlive: vi.fn().mockReturnValue(true),
    isDead: vi.fn().mockReturnValue(false),
  };
};

type MockedTroop = MockedObject<Rmmz_Members<MockedEnemy>>;

const createMockedTroop = (members: MockedEnemy[]): MockedTroop => {
  return {
    members: vi.fn(() => members),
  };
};

const createMockedVariables = (): MockedObject<Rmmz_Variables> => {
  return {
    clear: vi.fn().mockThrow(new Error("clear should not be called")),
    onChange: vi.fn().mockThrow(new Error("onChange should not be called")),
    setValue: vi.fn().mockThrow(new Error("setValue should not be called")),
    value: vi.fn((id) => {
      if (id === MOCK_VARIABLE_ID_VALUE) {
        return MOCK_VARIABLE_VALUE;
      }
      if (id === MOCK_VARIABLE_ID_ENEMY_INDEX) {
        return MOCK_TARGET_ENEMY_INDEX_V;
      }
      return 0;
    }),
  };
};

const createFakeInterpreter = (): Pick<
  Rmmz_Interpreter,
  "iterateEnemyIndex"
> => {
  return {
    iterateEnemyIndex: (index, fn) => {
      Game_Interpreter.prototype.iterateEnemyIndex.call(null, index, fn);
    },
  };
};

const createTestContext = (enemyCount: number): TestContext => {
  const battlers: MockedEnemy[] = Array.from({ length: enemyCount }, () =>
    createMockedEnemy(),
  );
  const troop: MockedTroop = createMockedTroop(battlers);
  return {
    battlers,
    troop,
    variables: createMockedVariables(),
  };
};

const stubContext = (context: TestContext) => {
  vi.stubGlobal("$gameTroop", context.troop);
  vi.stubGlobal("$gameVariables", context.variables);
};

interface TestContext {
  battlers: MockedEnemy[];
  troop: MockedTroop;
  variables: MockedObject<Rmmz_Variables>;
}

interface TestCase<T> {
  command: T;
  contextTest: (context: TestContext) => void;
}

const runTestCase = <T>(
  fnA: (command: T, context: TestContext) => void,
  fnB: (command: T, context: TestContext) => void,
  testCases: TestCase<T>[],
) => {
  testCases.forEach((testCase, index) => {
    describe(`${index}`, () => {
      test("fnA", () => {
        const context = createTestContext(3);
        fnA(testCase.command, context);
        expect(context.troop.members).toHaveBeenCalledOnce();
        testCase.contextTest(context);
      });
      test("fnB", () => {
        const context = createTestContext(3);
        fnB(testCase.command, context);
        expect(context.troop.members).toHaveBeenCalledOnce();
        testCase.contextTest(context);
      });
      vi.clearAllMocks();
    });
  });
};

describe("commandEnemyRecoverAll", () => {
  runTestCase(
    (command, { troop }) => {
      commandEnemyRecoverAll(command, troop);
    },
    (command, context) => {
      stubContext(context);
      const interpreter = createFakeInterpreter();
      Game_Interpreter.prototype.command334.call(
        interpreter,
        command.parameters,
      );
    },
    [
      {
        command: makeCommandEnemyRecoverAllEach(),
        contextTest: ({ battlers }) => {
          battlers.forEach((enemy) => {
            expect(enemy.recoverAll).toHaveBeenCalledOnce();
          });
        },
      },
      {
        command: makeCommandEnemyRecoverAll({ enemyIndex: -1 }),
        contextTest: ({ battlers }) => {
          battlers.forEach((enemy) => {
            expect(enemy.recoverAll).toHaveBeenCalledOnce();
          });
        },
      },
      {
        command: makeCommandEnemyRecoverAll({ enemyIndex: -1 }),
        contextTest: ({ battlers }) => {
          battlers.forEach((enemy) => {
            expect(enemy.recoverAll).toHaveBeenCalledOnce();
          });
        },
      },
      {
        command: makeCommandEnemyRecoverAll({ enemyIndex: 1 }),
        contextTest: ({ battlers }) => {
          battlers.forEach((enemy, index) => {
            if (index === 1) {
              expect(enemy.recoverAll).toHaveBeenCalledOnce();
            } else {
              expect(enemy.recoverAll).not.toHaveBeenCalled();
            }
          });
        },
      },
      {
        command: makeCommandEnemyRecoverAll({ enemyIndex: 2 }),
        contextTest: ({ battlers }) => {
          battlers.forEach((enemy, index) => {
            if (index === 2) {
              expect(enemy.recoverAll).toHaveBeenCalledOnce();
            } else {
              expect(enemy.recoverAll).not.toHaveBeenCalled();
            }
          });
        },
      },
    ],
  );
});

describe("commandChangeEnemyMp", () => {
  runTestCase(
    (command, { troop }) => {
      const variables = createMockedVariables();
      commandChangeEnemyMp(command, troop, variables);
    },
    (command, ctx) => {
      stubContext(ctx);
      const interpreter = new Game_Interpreter();
      Game_Interpreter.prototype.command332.call(
        interpreter,
        command.parameters,
      );
    },
    [
      {
        command: makeCommandGainEnemyMP({
          targetIndex: 1,
          operand: { mode: "direct", value: 30 },
        }),
        contextTest: ({ battlers }) => {
          expect(battlers[0].gainMp).not.toHaveBeenCalled();
          expect(battlers[1].gainMp).toHaveBeenCalledOnce();
          expect(battlers[1].gainMp).toHaveBeenCalledWith(30);
          expect(battlers[2].gainMp).not.toHaveBeenCalled();
        },
      },
      {
        command: makeCommandLoseEnemyMP({
          targetIndex: -1,
          operand: { mode: "variable", value: MOCK_VARIABLE_ID_VALUE },
        }),
        contextTest: ({ battlers }) => {
          battlers.forEach((enemy) => {
            expect(enemy.gainMp).toHaveBeenCalledOnce();
            expect(enemy.gainMp).toHaveBeenCalledWith(-MOCK_VARIABLE_VALUE);
          });
        },
      },
    ],
  );
});

describe("commandChangeEnemyTp", () => {
  runTestCase(
    (command, { troop, variables }) => {
      commandChangeEnemyTp(command, troop, variables);
    },
    (command, ctx) => {
      stubContext(ctx);
      const interpreter = new Game_Interpreter();
      Game_Interpreter.prototype.command342.call(
        interpreter,
        command.parameters,
      );
    },
    [
      {
        command: makeCommandGainEnemyTP({
          targetIndex: 2,
          operand: { mode: "direct", value: 7 },
        }),
        contextTest: ({ battlers }) => {
          expect(battlers[2].gainTp).toHaveBeenCalledOnce();
          expect(battlers[2].gainTp).toHaveBeenCalledWith(7);
        },
      },
      {
        command: makeCommandLoseEnemyTP({
          targetIndex: -1,
          operand: { mode: "variable", value: MOCK_VARIABLE_ID_VALUE },
        }),
        contextTest: ({ battlers, variables }) => {
          expect(variables.value).toHaveBeenCalledWith(MOCK_VARIABLE_ID_VALUE);
          battlers.forEach((enemy) => {
            expect(enemy.gainTp).toHaveBeenCalledOnce();
            expect(enemy.gainTp).toHaveBeenCalledWith(-MOCK_VARIABLE_VALUE);
          });
        },
      },
    ],
  );
});

describe("commandChangeEnemyHp", () => {
  runTestCase(
    (command: Command_ChangeEnemyHP, { troop, variables }) => {
      commandChangeEnemyHp(command, troop, variables);
    },
    (command, ctx) => {
      stubContext(ctx);
      const interpreter = new Game_Interpreter();
      Game_Interpreter.prototype.command331.call(
        interpreter,
        command.parameters,
      );
    },
    [
      {
        command: makeCommandGainEnemyHPDirect(
          {
            enemyIndex: 0,
            operandValue: 20,
          },
          false,
        ),
        contextTest: ({ battlers }) => {
          expect(battlers[0].gainHp).toHaveBeenCalledOnce();
          expect(battlers[0].gainHp).toHaveBeenCalledWith(20);
          expect(battlers[1].gainHp).not.toHaveBeenCalled();
        },
      },
      {
        command: makeCommandGainEnemyHPDirect(
          {
            enemyIndex: -1,
            operandValue: 40,
          },
          true,
        ),
        contextTest: ({ battlers, variables }) => {
          expect(variables.value).not.toHaveBeenCalled();
          battlers.forEach((enemy) => {
            expect(enemy.gainHp).toHaveBeenCalledOnce();
            expect(enemy.gainHp).toHaveBeenCalledWith(40);
          });
        },
      },
    ],
  );
});
