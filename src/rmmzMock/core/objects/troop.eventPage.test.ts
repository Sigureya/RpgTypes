import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { BattleEventPage } from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Troop } from "@RpgTypes/rmmzRuntime";
import type { BattleXX } from "@RpgTypes/rmmzRuntime/managers/battle/interface";
import type { Rmmz_Switches } from "@RpgTypes/rmmzRuntime/objects/core/variables";
import type { FakeActors, FakeMap } from "./fakes/types";
import { Game_Troop } from "./rmmz_objects";

interface MockObjects {
  battleManager: MockedObject<BattleXX>;
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
    const condition: BattleEventPage = {
      span: 0,
      list: [],
      conditions: {
        actorValid: false,
        actorHp: 0,
        actorId: 0,

        enemyValid: false,
        enemyIndex: 0,
        enemyHp: 0,

        switchValid: false,
        switchId: 0,

        turnEnding: false,
        turnValid: false,
      },
    };
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
});
