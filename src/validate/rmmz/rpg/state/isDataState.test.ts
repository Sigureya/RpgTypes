import { describe, test, expect } from "vitest";
import type { Data_State } from "@RpgTypes/rpg";
const validate = require("./stateValidate.cjs"); // Adjust the import based on your setup

const isDataState = (data: unknown): data is Data_State => {
  return validate(data);
};

describe("isDataState", () => {
  test("Valid state", () => {
    const state: Data_State = {
      id: 1,
      name: "Poison",
      iconIndex: 0,
      restriction: 0,
      priority: 0,
      removeAtBattleEnd: true,
      removeByDamage: true,
      autoRemovalTiming: 0,
      maxTurns: 3,
      minTurns: 1,
      message1: "This is a test message.",
      message2: "This is another test message.",
      message3: "This is a third test message.",
      message4: "This is a fourth test message.",
      messageType: 0,
      releaseByDamage: true,
      traits: [
        {
          code: 0,
          dataId: 1,
          value: 2,
        },
      ],
      note: "This is a test note.",
      motion: 0,
      chanceByDamage: 0,
      overlay: 0,
      removeByRestriction: false,
      removeByWalking: false,
      stepsToRemove: 0,
    };
    expect(state).toSatisfy(isDataState);
  });
  test("Invalid state", () => {
    const invalidState = { name: 123 }; // Invalid name
    expect(invalidState).not.toSatisfy(isDataState);
    expect({}).not.toSatisfy(isDataState);
    expect(null).not.toSatisfy(isDataState);
    expect(undefined).not.toSatisfy(isDataState);
  });
});
