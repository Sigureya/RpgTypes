import { describe, test, expect } from "vitest";
import { makeEventPageCondition } from "./make";
import Ajv from "ajv";
import type { MapEvent_PageCondition } from "./condition";
import { SCHEMA_MAP_EVENT_PAGE_CONDITION } from "./schema";
const ajv = new Ajv();
const validate = ajv.compile(SCHEMA_MAP_EVENT_PAGE_CONDITION);
const isValid = (data: unknown): data is MapEvent_PageCondition => {
  return validate(data);
};

describe("makeEventPageCondition", () => {
  describe("default (no args)", () => {
    const result: MapEvent_PageCondition = makeEventPageCondition();
    test("all Valid flags should be false", () => {
      expect(result.switch1Valid).toBe(false);
      expect(result.switch2Valid).toBe(false);
      expect(result.variableValid).toBe(false);
      expect(result.selfSwitchValid).toBe(false);
      expect(result.itemValid).toBe(false);
      expect(result.actorValid).toBe(false);
    });
    test("should be valid by schema", () => {
      expect(isValid(result)).toBe(true);
    });
  });
  describe("all args", () => {
    const result = makeEventPageCondition({
      switch1Id: 1,
      switch2Id: 2,
      variableId: 3,
      variableValue: 4,
      selfSwitchCh: "C",
      itemId: 5,
      actorId: 6,
    });
    test("all args set and all Valid flags true", () => {
      expect(result.switch1Id).toBe(1);
      expect(result.switch1Valid).toBe(true);
      expect(result.switch2Id).toBe(2);
      expect(result.switch2Valid).toBe(true);
      expect(result.variableId).toBe(3);
      expect(result.variableValid).toBe(true);
      expect(result.selfSwitchCh).toBe("C");
      expect(result.selfSwitchValid).toBe(true);
      expect(result.variableValue).toBe(4);
      expect(result.itemId).toBe(5);
      expect(result.itemValid).toBe(true);
      expect(result.actorId).toBe(6);
      expect(result.actorValid).toBe(true);
    });
    test("should be valid by schema", () => {
      expect(isValid(result)).toBe(true);
    });
  });
  describe("all args undefined", () => {
    const result = makeEventPageCondition({
      switch1Id: undefined,
      switch2Id: undefined,
      variableId: undefined,
      variableValue: undefined,
      selfSwitchCh: undefined,
      itemId: undefined,
      actorId: undefined,
    });
    test("all args set to undefined and all Valid flags false", () => {
      expect(result.switch1Valid).toBe(false);
      expect(result.switch2Valid).toBe(false);
      expect(result.variableValid).toBe(false);
      expect(result.selfSwitchValid).toBe(false);
      expect(result.itemValid).toBe(false);
      expect(result.actorValid).toBe(false);
    });
    test("should be valid by schema", () => {
      expect(isValid(result)).toBe(true);
    });
  });

  describe("actorId only", () => {
    const result = makeEventPageCondition({ actorId: 217 });
    test("actorId set and actorValid true", () => {
      expect(result.actorId).toBe(217);
      expect(result.actorValid).toBe(true);
    });
    test("should be valid by schema", () => {
      expect(isValid(result)).toBe(true);
    });
  });

  describe("switch1Id only", () => {
    const result = makeEventPageCondition({ switch1Id: 113 });
    test("switch1Id set and switch1Valid true", () => {
      expect(result.switch1Id).toBe(113);
      expect(result.switch1Valid).toBe(true);
    });
    test("should be valid by schema", () => {
      expect(isValid(result)).toBe(true);
    });
  });

  describe("switch2Id only", () => {
    const result = makeEventPageCondition({ switch2Id: 211 });
    test("switch2Id set and switch2Valid true", () => {
      expect(result.switch2Id).toBe(211);
      expect(result.switch2Valid).toBe(true);
    });
    test("should be valid by schema", () => {
      expect(isValid(result)).toBe(true);
    });
  });

  describe("variableValue only", () => {
    const result = makeEventPageCondition({ variableValue: 251 });
    test("variableValue set but variableValid false", () => {
      expect(result.variableValue).toBe(251);
      expect(result.variableValid).toBe(false);
    });
    test("should be valid by schema", () => {
      expect(isValid(result)).toBe(true);
    });
  });

  describe("itemId only", () => {
    const result = makeEventPageCondition({ itemId: 185 });
    test("itemId set and itemValid true", () => {
      expect(result.itemId).toBe(185);
      expect(result.itemValid).toBe(true);
    });
    test("should be valid by schema", () => {
      expect(isValid(result)).toBe(true);
    });
  });

  describe("selfSwitchCh only", () => {
    const result = makeEventPageCondition({ selfSwitchCh: "B" });
    test("selfSwitchCh set and selfSwitchValid true", () => {
      expect(result.selfSwitchCh).toBe("B");
      expect(result.selfSwitchValid).toBe(true);
    });

    test("should be valid by schema", () => {
      expect(isValid(result)).toBe(true);
    });
  });

  describe("variableId only", () => {
    const result = makeEventPageCondition({ variableId: 231 });
    test("variableId set and variableValid true", () => {
      expect(result.variableId).toBe(231);
      expect(result.variableValid).toBe(true);
    });
    test("should be valid by schema", () => {
      expect(isValid(result)).toBe(true);
    });
  });

  describe("variableId and variableValue", () => {
    const result = makeEventPageCondition({
      variableValue: 251,
      variableId: 261,
    });
    test("variableId and variableValue set, variableValid true", () => {
      expect(result.variableValue).toBe(251);
      expect(result.variableId).toBe(261);
      expect(result.variableValid).toBe(true);
    });
    test("should be valid by schema", () => {
      expect(isValid(result)).toBe(true);
    });
  });
});
