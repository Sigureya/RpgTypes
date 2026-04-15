import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import { FORCE_ACTION } from "@RpgTypes/libs";
import type {
  Command_ActorForceAction,
  Command_EnemyForceAction,
} from "@RpgTypes/rmmz/eventCommand/commands/battle/forceAction";
import {
  makeCommandForceActionActor,
  makeCommandForceActionActorLastTarget,
  makeCommandForceActionEnemy,
  makeCommandForceActionEnemyLastTarget,
} from "@RpgTypes/rmmz/eventCommand/commands/battle/forceAction";
import { Game_Interpreter } from "./rmmz_objects";

type CommandForceAction = Command_ActorForceAction | Command_EnemyForceAction;

type FakeBattler = {
  isDeathStateAffected: () => boolean;
  forceAction: (skillId: number, targetIndex: number) => void;
};

type FakeParty = {
  inBattle: () => boolean;
  members: () => MockedObject<FakeBattler>[];
};

type FakeTroop = {
  members: () => MockedObject<FakeBattler>[];
};

type FakeActors = {
  actor: (id: number) => MockedObject<FakeBattler> | null;
};

type FakeBattleManager = {
  forceAction: (battler: MockedObject<FakeBattler>) => void;
};

type FakeMap = {
  mapId: () => number;
};

interface MakeMocksResult {
  actor1: MockedObject<FakeBattler>;
  actor2: MockedObject<FakeBattler>;
  enemy0: MockedObject<FakeBattler>;
  enemy1: MockedObject<FakeBattler>;
  party: MockedObject<FakeParty>;
  troop: MockedObject<FakeTroop>;
  actors: MockedObject<FakeActors>;
  battleManager: MockedObject<FakeBattleManager>;
  map: FakeMap;
}

const makeMockBattler = (
  isDeathStateAffected: boolean,
): MockedObject<FakeBattler> => ({
  isDeathStateAffected: vi.fn(() => isDeathStateAffected),
  forceAction: vi.fn(),
});

const makeMocks = (isDeathStateAffected: boolean): MakeMocksResult => {
  const actor1 = makeMockBattler(isDeathStateAffected);
  const actor2 = makeMockBattler(isDeathStateAffected);
  const enemy0 = makeMockBattler(isDeathStateAffected);
  const enemy1 = makeMockBattler(isDeathStateAffected);

  const party: MockedObject<FakeParty> = {
    inBattle: vi.fn(() => true),
    members: vi.fn(() => [actor1, actor2]),
  };

  const troop: MockedObject<FakeTroop> = {
    members: vi.fn(() => [enemy0, enemy1]),
  };

  const actors: MockedObject<FakeActors> = {
    actor: vi.fn((id: number) => {
      if (id === 1) {
        return actor1;
      }
      if (id === 2) {
        return actor2;
      }
      return null;
    }),
  };

  const battleManager: MockedObject<FakeBattleManager> = {
    forceAction: vi.fn(),
  };

  const map: FakeMap = {
    mapId: () => 1,
  };

  return {
    actor1,
    actor2,
    enemy0,
    enemy1,
    party,
    troop,
    actors,
    battleManager,
    map,
  };
};

const setupGlobal = (mocks: MakeMocksResult) => {
  vi.stubGlobal("$gameParty", mocks.party);
  vi.stubGlobal("$gameTroop", mocks.troop);
  vi.stubGlobal("$gameActors", mocks.actors);
  vi.stubGlobal("BattleManager", mocks.battleManager);
  vi.stubGlobal("$gameMap", mocks.map);
};

const makeInterpreter = (command: CommandForceAction) => {
  const interpreter = new Game_Interpreter();
  interpreter.setup([command], 0);
  return { interpreter };
};

const expectCalledAction = (
  battler: MockedObject<FakeBattler>,
  skillId: number,
  targetIndex: number,
) => {
  expect(battler.forceAction).toHaveBeenCalledTimes(1);
  expect(battler.forceAction).toHaveBeenCalledWith(skillId, targetIndex);
};

const expectNotCalledAction = (battler: MockedObject<FakeBattler>) => {
  expect(battler.forceAction).not.toHaveBeenCalled();
};

interface TestCase {
  caseName: string;
  command: CommandForceAction;
  expected: CommandForceAction;
  forceActionCalled: boolean;
  assertCall: (mock: MakeMocksResult, command: CommandForceAction) => void;
  assertNotCall: (mock: MakeMocksResult) => void;
}

const runTestCase = (testCase: TestCase) => {
  describe(testCase.caseName, () => {
    test("make command", () => {
      expect(testCase.command).toEqual(testCase.expected);
    });

    test("execute command", () => {
      const mock = makeMocks(testCase.forceActionCalled);
      setupGlobal(mock);
      const { interpreter } = makeInterpreter(testCase.command);

      const result = interpreter.executeCommand();

      expect(result).toBe(true);

      testCase.assertCall(mock, testCase.command);
      testCase.assertNotCall(mock);

      if (testCase.forceActionCalled) {
        expect(mock.battleManager.forceAction).not.toHaveBeenCalled();
      } else {
        expect(mock.battleManager.forceAction).toHaveBeenCalledOnce();
      }
    });
  });
};

const testCases: TestCase[] = [
  {
    caseName: "actor force action (direct target)",
    command: makeCommandForceActionActor({
      actorId: 1,
      skillId: 15,
      targetIndex: 3,
    }),
    expected: {
      code: FORCE_ACTION,
      indent: 0,
      parameters: [1, 1, 15, 3],
    },
    forceActionCalled: false,
    assertCall: (mock, command) => {
      expect(mock.actors.actor).toHaveBeenCalledWith(1);
      expectCalledAction(
        mock.actor1,
        command.parameters[2],
        command.parameters[3],
      );
    },
    assertNotCall: (mock) => {
      expectNotCalledAction(mock.actor2);
      expectNotCalledAction(mock.enemy0);
      expectNotCalledAction(mock.enemy1);
    },
  },
  {
    caseName: "actor force action (last target)",
    command: makeCommandForceActionActorLastTarget({
      actorId: 2,
      skillId: 7,
    }),
    expected: {
      code: 339,
      indent: 0,
      parameters: [1, 2, 7, -2],
    },
    forceActionCalled: false,
    assertCall: (mock, command) => {
      expect(mock.actors.actor).toHaveBeenCalledWith(2);
      expectCalledAction(
        mock.actor2,
        command.parameters[2],
        command.parameters[3],
      );
    },
    assertNotCall: (mock) => {
      expectNotCalledAction(mock.actor1);
      expectNotCalledAction(mock.enemy0);
      expectNotCalledAction(mock.enemy1);
    },
  },
  {
    caseName: "enemy force action (direct target)",
    command: makeCommandForceActionEnemy({
      enemyIndex: 0,
      skillId: 22,
      targetIndex: 1,
    }),
    expected: {
      code: 339,
      indent: 0,
      parameters: [0, 0, 22, 1],
    },
    forceActionCalled: false,
    assertCall: (mock, command) => {
      expectCalledAction(
        mock.enemy0,
        command.parameters[2],
        command.parameters[3],
      );
    },
    assertNotCall: (mock) => {
      expectNotCalledAction(mock.actor1);
      expectNotCalledAction(mock.actor2);
      expectNotCalledAction(mock.enemy1);
    },
  },
  {
    caseName: "enemy force action (last target)",
    command: makeCommandForceActionEnemyLastTarget({
      enemyIndex: 1,
      skillId: 12,
    }),
    expected: {
      code: 339,
      indent: 0,
      parameters: [0, 1, 12, -2],
    },
    forceActionCalled: false,
    assertCall: (mock, command) => {
      expectCalledAction(
        mock.enemy1,
        command.parameters[2],
        command.parameters[3],
      );
    },
    assertNotCall: (mock) => {
      expectNotCalledAction(mock.actor1);
      expectNotCalledAction(mock.actor2);
      expectNotCalledAction(mock.enemy0);
    },
  },
  {
    caseName: "does not force action when subject is death state affected",
    command: makeCommandForceActionActor({
      actorId: 1,
      skillId: 15,
      targetIndex: 3,
    }),
    expected: {
      code: 339,
      indent: 0,
      parameters: [1, 1, 15, 3],
    },
    forceActionCalled: true,
    assertCall: () => {
      // no-op
    },
    assertNotCall: (mock) => {
      expectNotCalledAction(mock.actor1);
      expectNotCalledAction(mock.actor2);
      expectNotCalledAction(mock.enemy0);
      expectNotCalledAction(mock.enemy1);
    },
  },
];

testCases.forEach(runTestCase);
