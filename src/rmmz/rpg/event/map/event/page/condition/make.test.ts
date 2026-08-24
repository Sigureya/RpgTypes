import { describe, test, expect } from "vitest";
import { makeEventPageCondition } from "./make";
import type { MapEvent_PageCondition } from "./condition";

describe("makeEventPageCondition", () => {
  test("empty", () => {
    const expected: MapEvent_PageCondition = {
      switch1Id: 0,
      switch1Valid: false,
      switch2Id: 0,
      switch2Valid: false,
      variableId: 0,
      variableValid: false,
      variableValue: 0,
      selfSwitchCh: "A",
      selfSwitchValid: false,
      itemId: 0,
      itemValid: false,
      actorId: 0,
      actorValid: false,
    };
    const result = makeEventPageCondition({});
    expect(result).toEqual(expected);
  });
});
