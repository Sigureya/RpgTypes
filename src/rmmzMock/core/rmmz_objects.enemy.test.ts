import { describe, test, expect } from "vitest";
import type {
  Data_Enemy,
  ParamArray,
  StatusParamObject,
} from "@RpgTypes/rmmz/rpg";
import {
  makeEnemyData,
  makeParamArray,
  TRAIT_ATTACK_ELEMENT,
} from "@RpgTypes/rmmz/rpg";
import "@RpgTypes/rmmzMock/prototypeOverwrite";
import { Game_Enemy } from "./rmmz_objects";

const mockDragonParams: StatusParamObject = {
  mhp: 108,
  atk: 130,
  def: 95,
  mat: 80,
  mdf: 85,
  agi: 102,
  luk: 111,
  mmp: 50,
};

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
  params: makeParamArray(mockDragonParams),
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

describe("mockData", () => {
  test("paramValid", () => {
    const expected: ParamArray = [
      mockDragonParams.mhp,
      mockDragonParams.mmp,
      mockDragonParams.atk,
      mockDragonParams.def,
      mockDragonParams.mat,
      mockDragonParams.mdf,
      mockDragonParams.agi,
      mockDragonParams.luk,
    ];
    expect(mockDragon.params).toEqual(expected);
  });
});

describe("Game_Enemy", () => {
  test("enemyId", () => {
    const enemy = createEnemy();
    expect(enemy.enemyId()).toBe(2);
  });
  test("enemy", () => {
    const enemy = createEnemy();
    expect(enemy.enemy()).toBe(mockDragon);
  });

  test("isEnemy", () => {
    const enemy = createEnemy();
    expect(enemy.isEnemy()).toBe(true);
  });

  test("name", () => {
    const enemy = createEnemy();

    expect(enemy.name()).toBe("dragon");
  });

  describe("params", () => {
    const enemy = createEnemy();
    test("mhp", () => {
      expect(enemy.paramBase(0)).toBe(mockDragonParams.mhp);
      expect(enemy.mhp).toBe(mockDragonParams.mhp);
    });
    test("mmp", () => {
      expect(enemy.paramBase(1)).toBe(mockDragonParams.mmp);
      expect(enemy.mmp).toBe(mockDragonParams.mmp);
    });
    test("atk", () => {
      expect(enemy.paramBase(2)).toBe(mockDragonParams.atk);
      expect(enemy.atk).toBe(mockDragonParams.atk);
    });

    test("def", () => {
      expect(enemy.paramBase(3)).toBe(mockDragonParams.def);
      expect(enemy.def).toBe(mockDragonParams.def);
    });

    test("mat", () => {
      expect(enemy.paramBase(4)).toBe(mockDragonParams.mat);
      expect(enemy.mat).toBe(mockDragonParams.mat);
    });

    test("mdf", () => {
      expect(enemy.paramBase(5)).toBe(mockDragonParams.mdf);
      expect(enemy.mdf).toBe(mockDragonParams.mdf);
    });
    test("agi", () => {
      expect(enemy.paramBase(6)).toBe(mockDragonParams.agi);
      expect(enemy.agi).toBe(mockDragonParams.agi);
    });
  });
});
