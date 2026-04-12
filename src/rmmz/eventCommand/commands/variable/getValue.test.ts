import type { MockedObject } from "vitest";
import { describe, test, expect, vi } from "vitest";
import type { ParamArray } from "@RpgTypes/rmmz/rpg";
import { makeCommandVariableFromActorCurrentLevel } from "./actor/make";
import {
  makeCommandVariableFromEnemyAtk,
  makeCommandVariableFromEnemyCurrentHp,
  makeCommandVariableFromEnemyCurrentMp,
  makeCommandVariableFromEnemyCurrentTp,
  makeCommandVariableFromEnemyDef,
  makeCommandVariableFromEnemyMat,
  makeCommandVariableFromEnemyMaxHp,
  makeCommandVariableFromEnemyMaxMp,
  makeCommandVariableFromEnemyMdf,
} from "./enemy/make";
import { getActorValue, getEnemyValue } from "./getValue";
import type { DataOperand_Enemy } from "./types";

const MockParamArray = [
  108, // mhp
  10, // mmp
  130, // atk
  95, // def
  80, // matk
  85, // mdef
  102, // agi
  445, // luk
] as const satisfies ParamArray;

describe("getActorValue", () => {
  const makeMockActor = () => ({
    level: 48,
    currentExp: vi.fn(() => 138240),
    hp: 100,
    mp: 50,
    tp: 20,
    param: vi.fn((index: number) => {
      expect(index).toBeGreaterThanOrEqual(0);
      expect(index).toBeLessThan(MockParamArray.length);
      return MockParamArray[index];
    }),
  });
  test("should return level value", () => {
    const mockActor = makeMockActor();
    const param = makeCommandVariableFromActorCurrentLevel({
      startId: 1,
      actorId: 1,
    }).parameters as Parameters<typeof getActorValue>[1];
    expect(getActorValue(mockActor, param)).toBe(48);
    expect(mockActor.param).toHaveBeenCalledTimes(0);
    expect(mockActor.currentExp).toHaveBeenCalledTimes(0);
  });
});

describe("getEnemyValue", () => {
  const makeMockEnemy = (): MockedObject<DataOperand_Enemy> => ({
    hp: 100,
    mp: 50,
    tp: 20,
    param: vi.fn((index: number) => {
      expect(index).toBeGreaterThanOrEqual(0);
      expect(index).toBeLessThan(MockParamArray.length);
      return MockParamArray[index];
    }),
  });
  test("should return hp value", () => {
    const mockEnemy = makeMockEnemy();
    const param = makeCommandVariableFromEnemyCurrentHp({
      startId: 1,
      enemyIndex: 1,
    }).parameters;
    expect(getEnemyValue(mockEnemy, param)).toBe(100);
    expect(mockEnemy.param).toHaveBeenCalledTimes(0);
  });
  test("should return mp value", () => {
    const mockEnemy = makeMockEnemy();
    const param = makeCommandVariableFromEnemyCurrentMp({
      startId: 1,
      enemyIndex: 1,
    }).parameters;
    expect(getEnemyValue(mockEnemy, param)).toBe(50);
    expect(mockEnemy.param).toHaveBeenCalledTimes(0);
  });
  test("should return tp value", () => {
    const mockEnemy = makeMockEnemy();
    const param = makeCommandVariableFromEnemyCurrentTp({
      startId: 1,
      enemyIndex: 1,
    }).parameters;
    expect(getEnemyValue(mockEnemy, param)).toBe(20);
    expect(mockEnemy.param).toHaveBeenCalledTimes(0);
  });
  test("should return mhp value", () => {
    const mockEnemy = makeMockEnemy();
    const param = makeCommandVariableFromEnemyMaxHp({
      startId: 1,
      enemyIndex: 1,
    }).parameters;
    expect(getEnemyValue(mockEnemy, param)).toBe(108);
    expect(mockEnemy.param).toHaveBeenCalledTimes(1);
  });
  test("should return mmp value", () => {
    const mockEnemy = makeMockEnemy();
    const param = makeCommandVariableFromEnemyMaxMp({
      startId: 1,
      enemyIndex: 1,
    }).parameters;
    expect(getEnemyValue(mockEnemy, param)).toBe(10);
    expect(mockEnemy.param).toHaveBeenCalledTimes(1);
  });
  test("should return atk value", () => {
    const mockEnemy = makeMockEnemy();
    const param = makeCommandVariableFromEnemyAtk({
      startId: 1,
      enemyIndex: 1,
    }).parameters;
    expect(getEnemyValue(mockEnemy, param)).toBe(130);
    expect(mockEnemy.param).toHaveBeenCalledTimes(1);
  });
  test("should return def value", () => {
    const mockEnemy = makeMockEnemy();
    const param = makeCommandVariableFromEnemyDef({
      startId: 1,
      enemyIndex: 1,
    }).parameters;
    expect(getEnemyValue(mockEnemy, param)).toBe(95);
    expect(mockEnemy.param).toHaveBeenCalledTimes(1);
  });
  test("should return matk value", () => {
    const mockEnemy = makeMockEnemy();
    const param = makeCommandVariableFromEnemyMat({
      startId: 1,
      enemyIndex: 1,
    }).parameters;
    expect(getEnemyValue(mockEnemy, param)).toBe(80);
    expect(mockEnemy.param).toHaveBeenCalledTimes(1);
  });
  test("should return mdef value", () => {
    const mockEnemy = makeMockEnemy();
    const param = makeCommandVariableFromEnemyMdf({
      startId: 1,
      enemyIndex: 1,
    }).parameters;
    expect(getEnemyValue(mockEnemy, param)).toBe(85);
    expect(mockEnemy.param).toHaveBeenCalledTimes(1);
  });
});
