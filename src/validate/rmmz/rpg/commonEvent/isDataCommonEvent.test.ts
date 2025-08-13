import { describe, test, expect } from "vitest";
import type { Data_CommonEventLike } from "@RpgTypes/rmmz/rpg";
const validate = require("./commonEventValidate.cjs");

const isDataCommonEvent = (data: unknown): data is Data_CommonEventLike => {
  return validate(data);
};

describe("isDataCommonEvent", () => {
  test("Valid common event", () => {
    const commonEvent: Data_CommonEventLike = {
      trigger: 1,
      id: 1,
      name: "Test Event",
      list: [],
      switchId: 0,
    };
    expect(commonEvent).toSatisfy(isDataCommonEvent);
  });

  test("Invalid common event", () => {
    const invalidCommonEvent = { trigger: "invalid" }; // Invalid trigger
    expect(invalidCommonEvent).not.toSatisfy(isDataCommonEvent);
    expect({}).not.toSatisfy(isDataCommonEvent);
    expect(null).not.toSatisfy(isDataCommonEvent);
    expect(undefined).not.toSatisfy(isDataCommonEvent);
  });
});
