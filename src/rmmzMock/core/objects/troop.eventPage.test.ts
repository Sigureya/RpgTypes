import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type {
  BattleEventPage,
  Troop_EventConditions,
} from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Troop } from "@RpgTypes/rmmzRuntime";
import type { Rmmz_BattleManager_State } from "@RpgTypes/rmmzRuntime/managers/battle/interface";
import type { Rmmz_Switches } from "@RpgTypes/rmmzRuntime/objects/core/variables";
import type { FakeActors, FakeMap } from "./fakes/types";
import { Game_Troop } from "./rmmz_objects";

interface MockObjects {
  battleManager: MockedObject<Rmmz_BattleManager_State>;
  actors: MockedObject<FakeActors>;
  switches: MockedObject<Rmmz_Switches>;
  globalTroop: MockedObject<FakeTroop>;
}

interface FakeBattler {
  hpRate(): number;
}

interface FakeTroop {
  members(): FakeBattler[];
}

interface Arg {
  actor: FakeBattler | null;
  enemies: FakeBattler[];
  isTurnEnd: boolean;
}

const TRUE_SWITCH_ID = 7;

const createCondition = (
  args: Partial<Troop_EventConditions>,
): BattleEventPage => {
  return {
    span: 0,
    list: [],
    conditions: {
      actorValid: false,
      actorHp: 0,
      actorId: 0,
      enemyHp: 0,
      enemyIndex: 0,
      enemyValid: false,
      switchValid: false,
      switchId: 0,
      turnEnding: false,
      turnValid: false,
      turnA: 0,
      turnB: 0,
      ...args,
    },
  };
};

const createMockObjects = ({ actor, enemies, isTurnEnd }: Arg): MockObjects => {
  return {
    battleManager: {
      canEscape: vi.fn().mockReturnValue(false),
      isTurnEnd: vi.fn().mockReturnValue(isTurnEnd),
      isActionForced: vi.fn().mockReturnValue(false),
    },
    actors: {
      actor: vi.fn().mockReturnValue(actor),
    },
    switches: {
      value: vi.fn((id: number): boolean => id === TRUE_SWITCH_ID),
      setValue: vi.fn(),
    },
    globalTroop: {
      members: vi.fn().mockReturnValue(enemies),
    },
  };
};

const stubGlobalObjects = (mocks: MockObjects) => {
  vi.stubGlobal("$gameSwitches", mocks.switches);
  vi.stubGlobal("$gameActors", mocks.actors);
  vi.stubGlobal("$gameTroop", mocks.globalTroop);
  vi.stubGlobal("BattleManager", mocks.battleManager);
};

vi.stubGlobal("$gameMap", {
  mapId: () => 0,
} satisfies FakeMap);

describe("Game_Troop - page", () => {
  test("empty", () => {
    const condition = createCondition({});
    const mocks = createMockObjects({
      actor: null,
      enemies: [],
      isTurnEnd: false,
    });
    stubGlobalObjects(mocks);
    const troop: Rmmz_Troop = new Game_Troop();
    expect(troop.meetsConditions(condition)).toBe(false);
    expect(mocks.actors.actor).not.toHaveBeenCalled();
    expect(mocks.globalTroop.members).not.toHaveBeenCalled();
    expect(mocks.switches.value).not.toHaveBeenCalled();
    expect(mocks.battleManager.isTurnEnd).not.toHaveBeenCalled();
  });
  describe("actor conditions", () => {
    test("actor not found", () => {
      const condition = createCondition({
        actorHp: 50,
        actorId: 4,
        actorValid: true,
      });

      const mocks = createMockObjects({
        actor: null,
        enemies: [],
        isTurnEnd: false,
      });

      stubGlobalObjects(mocks);

      const troop: Rmmz_Troop = new Game_Troop();

      expect(troop.meetsConditions(condition)).toBe(false);
      expect(mocks.actors.actor).toHaveBeenCalledWith(4);
    });

    test("actor hp is below threshold", () => {
      const actor: FakeBattler = {
        hpRate: () => 0.4,
      };

      const condition = createCondition({
        actorHp: 50,
        actorId: 4,
        actorValid: true,
      });

      const mocks = createMockObjects({
        actor,
        enemies: [],
        isTurnEnd: false,
      });

      stubGlobalObjects(mocks);

      const troop: Rmmz_Troop = new Game_Troop();

      expect(troop.meetsConditions(condition)).toBe(true);
    });

    test("actor hp is above threshold", () => {
      const actor: FakeBattler = {
        hpRate: () => 0.6,
      };

      const condition = createCondition({
        actorHp: 50,
        actorId: 4,
        actorValid: true,
      });

      const mocks = createMockObjects({
        actor,
        enemies: [],
        isTurnEnd: false,
      });

      stubGlobalObjects(mocks);

      const troop: Rmmz_Troop = new Game_Troop();

      expect(troop.meetsConditions(condition)).toBe(false);
    });

    test("actor hp equal threshold", () => {
      const actor: FakeBattler = {
        hpRate: () => 0.5,
      };

      const condition = createCondition({
        actorHp: 50,
        actorId: 4,
        actorValid: true,
      });

      const mocks = createMockObjects({
        actor,
        enemies: [],
        isTurnEnd: false,
      });

      stubGlobalObjects(mocks);

      const troop: Rmmz_Troop = new Game_Troop();

      expect(troop.meetsConditions(condition)).toBe(true);
    });
  });
  describe("enemy conditions", () => {
    test("enemy not found", () => {
      const condition = createCondition({
        enemyValid: true,
        enemyIndex: 0,
        enemyHp: 50,
      });

      const mocks = createMockObjects({
        actor: null,
        enemies: [],
        isTurnEnd: false,
      });

      stubGlobalObjects(mocks);

      const troop = new Game_Troop();

      expect(troop.meetsConditions(condition)).toBe(false);
      expect(mocks.globalTroop.members).toHaveBeenCalled();
    });

    test("enemy hp below threshold", () => {
      const condition = createCondition({
        enemyValid: true,
        enemyIndex: 0,
        enemyHp: 50,
      });

      const mocks = createMockObjects({
        actor: null,
        enemies: [
          {
            hpRate: () => 0.4,
          },
        ],
        isTurnEnd: false,
      });

      stubGlobalObjects(mocks);

      const troop = new Game_Troop();

      expect(troop.meetsConditions(condition)).toBe(true);
    });

    test("enemy hp above threshold", () => {
      const condition = createCondition({
        enemyValid: true,
        enemyIndex: 0,
        enemyHp: 50,
      });

      const mocks = createMockObjects({
        actor: null,
        enemies: [
          {
            hpRate: () => 0.6,
          },
        ],
        isTurnEnd: false,
      });

      stubGlobalObjects(mocks);

      const troop = new Game_Troop();

      expect(troop.meetsConditions(condition)).toBe(false);
    });

    test("enemy hp equal threshold", () => {
      const condition = createCondition({
        enemyValid: true,
        enemyIndex: 0,
        enemyHp: 50,
      });

      const mocks = createMockObjects({
        actor: null,
        enemies: [
          {
            hpRate: () => 0.5,
          },
        ],
        isTurnEnd: false,
      });

      stubGlobalObjects(mocks);

      const troop = new Game_Troop();

      expect(troop.meetsConditions(condition)).toBe(true);
    });
  });
  describe("switch conditions", () => {
    test("switch on", () => {
      const condition = createCondition({
        switchValid: true,
        switchId: TRUE_SWITCH_ID,
      });

      const mocks = createMockObjects({
        actor: null,
        enemies: [],
        isTurnEnd: false,
      });

      stubGlobalObjects(mocks);

      const troop = new Game_Troop();

      expect(troop.meetsConditions(condition)).toBe(true);
      expect(mocks.switches.value).toHaveBeenCalledWith(TRUE_SWITCH_ID);
    });

    test("switch off", () => {
      const condition = createCondition({
        switchValid: true,
        switchId: 999,
      });

      const mocks = createMockObjects({
        actor: null,
        enemies: [],
        isTurnEnd: false,
      });

      stubGlobalObjects(mocks);

      const troop = new Game_Troop();

      expect(troop.meetsConditions(condition)).toBe(false);
      expect(mocks.switches.value).toHaveBeenCalledWith(999);
    });
  });
  describe("turn conditions", () => {
    test("turnEnding - true", () => {
      const condition = createCondition({
        turnEnding: true,
      });

      const mocks = createMockObjects({
        actor: null,
        enemies: [],
        isTurnEnd: true,
      });

      stubGlobalObjects(mocks);

      const troop: Rmmz_Troop = new Game_Troop();

      expect(troop.meetsConditions(condition)).toBe(true);
      expect(mocks.battleManager.isTurnEnd).toHaveBeenCalled();
    });

    test("turnEnding - false", () => {
      const condition = createCondition({
        turnEnding: true,
      });

      const mocks = createMockObjects({
        actor: null,
        enemies: [],
        isTurnEnd: false,
      });

      stubGlobalObjects(mocks);

      const troop: Rmmz_Troop = new Game_Troop();

      expect(troop.meetsConditions(condition)).toBe(false);
      expect(mocks.battleManager.isTurnEnd).toHaveBeenCalled();
    });

    test("turnValid exact match", () => {
      const condition = createCondition({
        turnValid: true,
        turnA: 3,
        turnB: 0,
      });

      const troop = new Game_Troop();
      troop._turnCount = 3;

      expect(troop.meetsConditions(condition)).toBe(true);
    });

    test("turnValid exact mismatch", () => {
      const condition = createCondition({
        turnValid: true,
        turnA: 3,
        turnB: 0,
      });

      const troop = new Game_Troop();
      troop._turnCount = 4;

      expect(troop.meetsConditions(condition)).toBe(false);
    });

    test("turnValid periodic match", () => {
      const condition = createCondition({
        turnValid: true,
        turnA: 2,
        turnB: 3,
      });

      const troop = new Game_Troop();
      troop._turnCount = 5;

      expect(troop.meetsConditions(condition)).toBe(true);
    });

    test("turnValid periodic mismatch", () => {
      const condition = createCondition({
        turnValid: true,
        turnA: 2,
        turnB: 3,
      });

      const troop = new Game_Troop();
      troop._turnCount = 4;

      expect(troop.meetsConditions(condition)).toBe(false);
    });

    test("turnValid fails when turn count is less than 1", () => {
      const condition = createCondition({
        turnValid: true,
        turnA: 1,
        turnB: 2,
      });

      const troop = new Game_Troop();
      troop._turnCount = 0;

      expect(troop.meetsConditions(condition)).toBe(false);
    });

    test("turnValid fails when turn count is less than start turn", () => {
      const condition = createCondition({
        turnValid: true,
        turnA: 5,
        turnB: 2,
      });

      const troop = new Game_Troop();
      troop._turnCount = 4;

      expect(troop.meetsConditions(condition)).toBe(false);
    });
  });
});
