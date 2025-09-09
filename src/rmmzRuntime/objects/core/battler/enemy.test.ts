import { describe, test, expect } from "vitest";
import type { Data_Enemy } from "@RpgTypes/rmmz/rpg";
import {
  makeEnemyData,
  makeParamArray,
  TRAIT_ATTACK_ELEMENT,
} from "@RpgTypes/rmmz/rpg";
import { Game_Enemy } from "@RpgTypes/rmmzMock/core/rmmz_objects";
import "@RpgTypes/rmmzMock/prototypeOverwrite";

const mockDragon: Data_Enemy = makeEnemyData({
  name: "dragon",
  battlerName: "DRAGON",
  battlerHue: 123,
  dropItems: [],
  actions: [],
  id: 2,
  exp: 6789,
  gold: 1234,
  note: "",
  params: makeParamArray({
    mhp: 108,
    atk: 130,
    def: 95,
    mat: 80,
    mdf: 85,
    agi: 102,
    luk: 111,
  }),
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
