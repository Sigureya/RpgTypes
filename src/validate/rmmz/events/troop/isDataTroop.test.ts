import { describe, expect, test } from "vitest";
import type { Data_Troop } from "@RpgTypes/rmmz/events";
const validate = require("./troopValidate.cjs");

const isDataTroop = (data: unknown): data is Data_Troop => {
  return validate(data);
};

describe("isDataTroop", () => {
  test("Valid troop without event pages", () => {
    const troop: Data_Troop = {
      id: 1,
      name: "Troop A",
      members: [],
      pages: [],
    };
    expect(troop).toSatisfy(isDataTroop);
  });

  test("Invalid troop", () => {
    expect({}).not.toSatisfy(isDataTroop);
    expect({ id: "1", name: "x", members: [], pages: [] }).not.toSatisfy(
      isDataTroop,
    );
    expect(null).not.toSatisfy(isDataTroop);
    expect(undefined).not.toSatisfy(isDataTroop);
  });
});
