import { describe, test, expect } from "vitest";
import type { Data_Enemy } from "@RpgTypes/rmmz/rpg";
import { makeEnemyData, TRAIT_ATTACK_ELEMENT } from "@RpgTypes/rmmz/rpg";
import { Game_Enemy } from "@RpgTypes/rmmzMock/core/rmmz_objects";
import "@RpgTypes/rmmzMock/prototypeOverwrite";

const mockDragon: Data_Enemy = makeEnemyData({
  name: "dragon",
  actions: [],
  id: 2,
  exp: 6789,
  gold: 1234,
  note: "",
  params: [0, 200, 150, 100, 50, 30, 20, 10],
  traits: [{ code: TRAIT_ATTACK_ELEMENT, dataId: 4, value: 50 }],
});

const mockEnemies: (Data_Enemy | null)[] = [
  null,
  makeEnemyData({ name: "not use" }),
  mockDragon,
];

declare global {
  var $dataEnemies: (Data_Enemy | null)[];
}
globalThis.$dataEnemies = mockEnemies;

const createEnemy = () => new Game_Enemy(2, 64, 139);

describe("Game_Enemy", () => {
  test("enemyId", () => {
    const enemy = createEnemy();
    expect(enemy.enemyId()).toBe(2);
  });
  test("enemy", () => {
    const enemy = createEnemy();
    expect(enemy.enemy()).toBe(mockDragon);
  });
});
