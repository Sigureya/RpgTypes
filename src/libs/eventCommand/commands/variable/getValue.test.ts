import type { MockedObject } from "vitest";
import { describe, test, expect, vi } from "vitest";
import { getActorValue, getEnemyValue } from "./getValue";
import type { DataOperand_Enemy } from "./gamteDataTypes";
import {
  toArrayOperandActorStatus,
  toArrayOperandEnemyStatus,
} from "./convert";
import type { ParamArray } from "@RpgTypes/schema";

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
    const param = toArrayOperandActorStatus(
      { startId: 1 },
      { index: 1, param: 0 }
    );
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
    const param = toArrayOperandEnemyStatus(
      { startId: 1 },
      { index: 1, param: "HP" }
    );
    expect(getEnemyValue(mockEnemy, param)).toBe(100);
    expect(mockEnemy.param).toHaveBeenCalledTimes(0);
  });
  test("should return mp value", () => {
    const mockEnemy = makeMockEnemy();
    const param = toArrayOperandEnemyStatus(
      { startId: 1 },
      { index: 1, param: "MP" }
    );
    expect(getEnemyValue(mockEnemy, param)).toBe(50);
    expect(mockEnemy.param).toHaveBeenCalledTimes(0);
  });
  test("should return tp value", () => {
    const mockEnemy = makeMockEnemy();
    const param = toArrayOperandEnemyStatus(
      { startId: 1 },
      { index: 1, param: "TP" }
    );
    expect(getEnemyValue(mockEnemy, param)).toBe(20);
    expect(mockEnemy.param).toHaveBeenCalledTimes(0);
  });
  test("should return mhp value", () => {
    const mockEnemy = makeMockEnemy();
    const param = toArrayOperandEnemyStatus(
      { startId: 1 },
      { index: 1, param: "MHP" }
    );
    expect(getEnemyValue(mockEnemy, param)).toBe(108);
    expect(mockEnemy.param).toHaveBeenCalledTimes(1);
  });
  test("should return mmp value", () => {
    const mockEnemy = makeMockEnemy();
    const param = toArrayOperandEnemyStatus(
      { startId: 1 },
      { index: 1, param: "MMP" }
    );
    expect(getEnemyValue(mockEnemy, param)).toBe(10);
    expect(mockEnemy.param).toHaveBeenCalledTimes(1);
  });
  test("should return atk value", () => {
    const mockEnemy = makeMockEnemy();
    const param = toArrayOperandEnemyStatus(
      { startId: 1 },
      { index: 1, param: "ATK" }
    );
    expect(getEnemyValue(mockEnemy, param)).toBe(130);
    expect(mockEnemy.param).toHaveBeenCalledTimes(1);
  });
  test("should return def value", () => {
    const mockEnemy = makeMockEnemy();
    const param = toArrayOperandEnemyStatus(
      { startId: 1 },
      { index: 1, param: "DEF" }
    );
    expect(getEnemyValue(mockEnemy, param)).toBe(95);
    expect(mockEnemy.param).toHaveBeenCalledTimes(1);
  });
  test("should return matk value", () => {
    const mockEnemy = makeMockEnemy();
    const param = toArrayOperandEnemyStatus(
      { startId: 1 },
      { index: 1, param: "MAT" }
    );
    expect(getEnemyValue(mockEnemy, param)).toBe(80);
    expect(mockEnemy.param).toHaveBeenCalledTimes(1);
  });
  test("should return mdef value", () => {
    const mockEnemy = makeMockEnemy();
    const param = toArrayOperandEnemyStatus(
      { startId: 1 },
      { index: 1, param: "MDF" }
    );
    expect(getEnemyValue(mockEnemy, param)).toBe(85);
    expect(mockEnemy.param).toHaveBeenCalledTimes(1);
  });
});
