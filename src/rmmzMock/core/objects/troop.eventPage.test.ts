import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { BattleEventPage } from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Troop } from "@RpgTypes/rmmzRuntime";
import type { BattleXX } from "@RpgTypes/rmmzRuntime/managers/battle/interface";
import type { FakeMap } from "./fakes/types";
import { Game_Troop } from "./rmmz_objects";

interface MockObjects {
  map: FakeMap;
  battleManager: MockedObject<BattleXX>;
}

const createMockObjects = (): MockObjects => {
  return {
    map: {
      mapId: () => 0,
    },
    battleManager: {
      canEscape: vi.fn().mockReturnValue(true),
      isTurnEnd: vi.fn().mockReturnValue(false),
      isActionForced: vi.fn().mockReturnValue(false),
    },
  };
};

vi.stubGlobal("$gameMap", {
  mapId: () => 0,
} satisfies FakeMap);

describe("Game_Troop - page", () => {
  test("", () => {
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
    const troop: Rmmz_Troop = new Game_Troop();
    expect(troop.meetsConditions(condition)).toBe(false);
  });
});
