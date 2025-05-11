import { describe, test, expect } from "vitest";
import { makeEventPageCondition } from "./make";

describe("makeEventPageCondition", () => {
  describe("xxxx", () => {
    test("empty", () => {
      const result = makeEventPageCondition();
      expect(result.switch1Valid).toBe(false);
      expect(result.switch2Valid).toBe(false);
      expect(result.variableValid).toBe(false);
      expect(result.selfSwitchValid).toBe(false);
      expect(result.itemValid).toBe(false);
      expect(result.actorValid).toBe(false);
    });

    test("actor", () => {
      const result = makeEventPageCondition({ actorId: 217 });
      expect(result.actorId).toBe(217);
      expect(result.actorValid).toBe(true);
    });
    test("switch1", () => {
      const result = makeEventPageCondition({ switch1Id: 113 });
      expect(result.switch1Id).toBe(113);
      expect(result.switch1Valid).toBe(true);
    });
    test("switch2", () => {
      const result = makeEventPageCondition({ switch2Id: 211 });
      expect(result.switch2Id).toBe(211);
      expect(result.switch2Valid).toBe(true);
    });
    test("variable", () => {
      const result = makeEventPageCondition({ variableId: 231 });
      expect(result.variableId).toBe(231);
      expect(result.variableValid).toBe(true);
    });
    test("variableValue", () => {
      const result = makeEventPageCondition({ variableValue: 251 });
      expect(result.variableValue).toBe(251);
    });
    test("item", () => {
      const result = makeEventPageCondition({ itemId: 185 });
      expect(result.itemId).toBe(185);
      expect(result.itemValid).toBe(true);
    });
    test("selfSwitchCh", () => {
      const result = makeEventPageCondition({ selfSwitchCh: "B" });
      expect(result.selfSwitchCh).toBe("B");
      expect(result.selfSwitchValid).toBe(true);
    });
  });
});
