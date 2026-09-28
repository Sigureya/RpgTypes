import { describe, expect, test } from "vitest";

import type { Data_Actor, Data_Enemy, Data_System } from "@RpgTypes/rmmz";
import {
  makeActorData,
  makeEnemyData,
  makeSystemData,
  makeTroopData,
} from "@RpgTypes/rmmz";
import type { Data_Troop } from "@RpgTypes/rmmz/events";
import type { Rmmz_UnitDataProvider, TroopEnemyLabel } from "./unit";
import {
  battleTestTroop,
  dataEnemy,
  dataTroop,
  initialPartyActorIds,
  initialPartyActors,
  troopEnemyIds,
  troopEnemyLabels,
  troopEnemyNames,
  troopEnemies,
  troopLetterTable,
} from "./unit";

const enemy = (id: number, name: string): Data_Enemy =>
  makeEnemyData({
    id,
    name,
  });

const troop = (members: { enemyId: number }[]): Data_Troop =>
  makeTroopData({
    id: 1,
    name: "Test troop",
    members: members.map((member) => ({
      ...member,
      x: 0,
      y: 0,
      hidden: false,
    })),
    pages: [],
  });

const makeProvider = (
  overrides?: Partial<{
    troops: Record<number, Data_Troop | null | undefined>;
    enemies: Record<number, Data_Enemy | null | undefined>;
    actors: Record<number, Data_Actor | null | undefined>;
    system: Partial<Data_System>;
  }>,
): Rmmz_UnitDataProvider => {
  const troops = overrides?.troops ?? {};
  const enemies = overrides?.enemies ?? {};
  const actors = overrides?.actors ?? {};
  const defaultSystem: Partial<Data_System> = {
    locale: "en",
    partyMembers: [1, 0, 2],
    testTroopId: 2,
  };
  const system = {
    ...defaultSystem,
    ...overrides?.system,
  } satisfies Partial<Data_System>;

  return {
    troopData: (troopId: number) => troops[troopId],
    enemyData: (enemyId: number) => enemies[enemyId],
    actorData: (actorId: number) => actors[actorId],
    systemData: () =>
      makeSystemData({
        locale: system.locale ?? defaultSystem.locale,
        gameInit: {
          partyMembers: system.partyMembers ?? defaultSystem.partyMembers ?? [],
        },
        battleTest: {
          testTroopId: system.testTroopId ?? defaultSystem.testTroopId ?? 0,
        },
      }),
  };
};

describe("unit helpers", () => {
  test("dataTroop and dataEnemy normalize missing records to undefined", () => {
    const provider = makeProvider();

    expect(dataTroop(provider, 99)).toBeUndefined();
    expect(dataEnemy(provider, 99)).toBeUndefined();
  });
  describe("initialPartyActorIds and initialPartyActors", () => {
    test("filters non-positive ids", () => {
      const provider = makeProvider({
        actors: {
          1: makeActorData({ id: 1, name: "Alice" }),
          2: makeActorData({ id: 2, name: "Bob" }),
          3: makeActorData({ id: 3, name: "Carol" }),
        },
        system: {
          partyMembers: [1, 0, 2, -1, 3],
        },
      });

      expect(initialPartyActorIds(provider)).toEqual([1, 2, 3]);
    });
    test("resolves actor names from the remaining ids", () => {
      const provider = makeProvider({
        actors: {
          1: makeActorData({ id: 1, name: "Alice" }),
          2: makeActorData({ id: 2, name: "Bob" }),
          3: makeActorData({ id: 3, name: "Carol" }),
        },
        system: {
          partyMembers: [1, 0, 2, -1, 3],
        },
      });
      expect(initialPartyActors(provider).map((actor) => actor.name)).toEqual([
        "Alice",
        "Bob",
        "Carol",
      ]);
    });
  });

  test("battleTestTroop picks the system test troop", () => {
    const expected = troop([{ enemyId: 11 }, { enemyId: 22 }]);
    const provider = makeProvider({
      troops: { 2: expected },
      system: { testTroopId: 2 },
    });

    expect(battleTestTroop(provider)).toBe(expected);
  });

  test("troopEnemyIds and troopEnemies map enemy ids through the provider", () => {
    const expectedTroop: Data_Troop = troop([
      { enemyId: 10 },
      { enemyId: 20 },
      { enemyId: 10 },
    ]);
    const provider = makeProvider({
      enemies: {
        10: enemy(10, "Slime"),
        20: enemy(20, "Bat"),
      },
    });
    const result: number[] = troopEnemyIds(expectedTroop);
    expect(result).toEqual([10, 20, 10]);
    expect(
      troopEnemies(expectedTroop, provider).map((enemy) => enemy.name),
    ).toEqual(["Slime", "Bat", "Slime"]);
  });

  test("troopEnemyNames deduplicates names", () => {
    const expectedTroop = troop([
      { enemyId: 10 },
      { enemyId: 20 },
      { enemyId: 30 },
    ]);
    const provider = makeProvider({
      enemies: {
        10: enemy(10, "Slime"),
        20: enemy(20, "Slime"),
        30: enemy(30, "Bat"),
      },
    });

    expect(troopEnemyNames(expectedTroop, provider)).toEqual(["Slime", "Bat"]);
  });

  test("troopLetterTable switches full-width and half-width tables by locale", () => {
    const jaProvider = makeProvider({ system: { locale: "ja" } });
    const enProvider = makeProvider({ system: { locale: "en" } });

    expect(troopLetterTable(jaProvider)[0]).toBe("Ａ");
    expect(troopLetterTable(enProvider)[0]).toBe(" A");
  });

  test("troopEnemyLabels assigns letters and plural state per enemy name", () => {
    const expectedTroop = troop([
      { enemyId: 10 },
      { enemyId: 20 },
      { enemyId: 30 },
    ]);
    const provider = makeProvider({
      enemies: {
        10: enemy(10, "Slime"),
        20: enemy(20, "Slime"),
        30: enemy(30, "Bat"),
      },
      system: { locale: "en" },
    });

    const expected: TroopEnemyLabel[] = [
      { enemyId: 10, name: "Slime", letter: " A", plural: true },
      { enemyId: 20, name: "Slime", letter: " B", plural: true },
      { enemyId: 30, name: "Bat", letter: " A", plural: false },
    ];
    const result = troopEnemyLabels(expectedTroop, provider);
    expect(result).toEqual(expected);
  });
});
