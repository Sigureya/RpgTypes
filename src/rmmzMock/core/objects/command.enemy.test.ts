import type { MockedObject } from "vitest";
import { vi, describe, test, expect } from "vitest";
import type {
  Rmmz_Battler_Poitns,
  Rmmz_Interpreter,
  Rmmz_Members,
} from "@RpgTypes/rmmzRuntime";
import { makeCommandEnemyRecoverAll } from "@RpgTypes/rmmz/eventCommand";
import { commandEnemyRecoverAll } from "@RpgTypes/rmmzFunctional";
import { Game_Interpreter } from "./rmmz_objects";

type MockedEnemy = MockedObject<
  Rmmz_Battler_Poitns & { recoverAll: () => void }
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
      return 100;
    },
  };
};

type MockedTroop = MockedObject<Rmmz_Members<MockedEnemy>>;

const createMockedTroop = (members: MockedEnemy[]): MockedTroop => {
  return {
    members: vi.fn(() => members),
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
  };
};

interface TestContext {
  battlers: MockedEnemy[];
  troop: MockedTroop;
}

interface TestCase<T> {
  command: T;
  contextTest: (context: TestContext) => void;
}

const runTestCase = <T>(
  fnA: (command: T, troop: Rmmz_Members<MockedEnemy>) => void,
  fnB: (command: T, troop: Rmmz_Members<MockedEnemy>) => void,
  testCases: TestCase<T>[],
) => {
  testCases.forEach((testCase, index) => {
    describe(`${index}`, () => {
      test("fnA", () => {
        const context = createTestContext(3);
        fnA(testCase.command, context.troop);
        testCase.contextTest(context);
      });
      test("fnB", () => {
        const context = createTestContext(3);
        fnB(testCase.command, context.troop);
        testCase.contextTest(context);
      });
    });
  });
};

describe("commandEnemyRecoverAll", () => {
  runTestCase(
    (command, troop) => {
      commandEnemyRecoverAll(command, troop);
    },
    (command, troop) => {
      vi.stubGlobal("$gameTroop", troop);
      const interpreter = createFakeInterpreter();
      Game_Interpreter.prototype.command334.call(
        interpreter,
        command.parameters,
      );
    },
    [
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
