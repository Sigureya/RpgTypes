import { describe, test, expect } from "vitest";
import type { Data_Enemy } from "./traitContainers";
import { makeEnemyData } from "./traitContainers";
import { isDataEnemy } from "./validate";

describe("isDataEnemy", () => {
  test("Valid enemy2", () => {
    const enemy: Data_Enemy = makeEnemyData();
    expect(enemy).toSatisfy(isDataEnemy);
  });
  test("Valid enemy", () => {
    const enemy: Data_Enemy = {
      name: "Goblin",
      id: 1,
      battlerName: "GoblinBattler",
      battlerHue: 0,
      exp: 100,
      gold: 50,
      note: "This is a test note.",
      params: [100, 50, 20, 10, 5, 5, 5, 5], // Example params
      dropItems: [
        {
          kind: 0,
          dataId: 1,
          denominator: 1,
        },
      ],
      traits: [
        {
          code: 0,
          dataId: 1,
          value: 2,
        },
      ],
      actions: [
        {
          conditionParam1: 0,
          conditionParam2: 0,
          conditionType: 0,
          skillId: 1,
          rating: 5,
        },
      ],
    };
    expect(enemy).toSatisfy(isDataEnemy);
  });
  test("Invalid enemy", () => {
    const invalidEnemy = { name: 123 }; // Invalid name
    expect(invalidEnemy).not.toSatisfy(isDataEnemy);
    expect({}).not.toSatisfy(isDataEnemy);
    expect(null).not.toSatisfy(isDataEnemy);
    expect(undefined).not.toSatisfy(isDataEnemy);
  });
});
