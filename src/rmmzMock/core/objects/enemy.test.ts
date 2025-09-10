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
  test("enemy", () => {
    const enemy = createEnemy();
    expect(enemy.enemy()).toBe(mockDragon);
  });

  test("isEnemy", () => {
    const enemy = createEnemy();
    expect(enemy.isEnemy()).toBe(true);
  });

  test("", () => {
    const enemy = createEnemy();
    const e2: Partial<Data_Enemy> = {
      id: enemy.enemyId(),
      name: enemy.name(),
      battlerHue: enemy.battlerHue(),
      battlerName: enemy.battlerName(),
      exp: enemy.exp(),
      gold: enemy.gold(),
    };
    expect(mockDragon).toMatchObject(e2);
  });
  test("params", () => {
    const enemy = createEnemy();
    const paramObject: StatusParamObject = {
      agi: enemy.agi,
      atk: enemy.atk,
      def: enemy.def,
      luk: enemy.luk,
      mat: enemy.mat,
      mdf: enemy.mdf,
      mhp: enemy.mhp,
      mmp: enemy.mmp,
    };
    expect(paramObject).toEqual(mockDragonParams);
  });
});
