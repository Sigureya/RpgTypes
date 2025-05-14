import type { MockedObject } from "vitest";
import { describe, test, expect, vi } from "vitest";
import { getActorValue, getEnemyValue } from "./getValue";
import type { DataOperand_Enemy } from "./gamteDataTypes";
import { makeCommandVariableFromStatusData } from "./make";
import { toArrayOperandEnemyStatus } from "./convert";
import type { ParamArray } from "@RpgTypes/schema";

const MockParamArray = [
  108, // mhp
  0, // mmp
  130, // atk
  95, // def
  80, // matk
  85, // mdef
  102, // agi
  445, // luk
] as const satisfies ParamArray;

describe("getEnemyValue", () => {
  const mockEnemy: MockedObject<DataOperand_Enemy> = {
    hp: 100,
    mp: 50,
    tp: 20,
    param: vi.fn((index: number) => {
      expect(index).toBeGreaterThanOrEqual(0);
      expect(index).toBeLessThan(MockParamArray.length);
      return MockParamArray[index];
    }),
  };
  test("should return hp value", () => {
    const param = toArrayOperandEnemyStatus(
      { startId: 1 },
      { index: 1, param: "HP" }
    );
    expect(getEnemyValue(mockEnemy, param)).toBe(100);
  });
  test("should return mp value", () => {
    const param = toArrayOperandEnemyStatus(
      { startId: 1 },
      { index: 1, param: "MP" }
    );
    expect(getEnemyValue(mockEnemy, param)).toBe(50);
  });
  test("should return tp value", () => {
    const param = toArrayOperandEnemyStatus(
      { startId: 1 },
      { index: 1, param: "TP" }
    );
    expect(getEnemyValue(mockEnemy, param)).toBe(20);
  });
});
