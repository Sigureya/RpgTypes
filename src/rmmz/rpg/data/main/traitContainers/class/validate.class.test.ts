import { describe, test, expect } from "vitest";
import type { Data_Class } from "..";
import { makeClassData } from "..";
const validate = require("./classValidate.cjs");

const isDataClass = (data: unknown): data is Data_Class => {
  return validate(data);
};

describe("isDataClass", () => {
  test("Valid class2", () => {
    const class_: Data_Class = makeClassData();
    expect(class_).toSatisfy(isDataClass);
  });
  test("Valid class", () => {
    const class_: Data_Class = {
      id: 1,
      name: "Warrior",
      expParams: [],
      params: [0, 1, 2, 3, 4, 5, 6, 7], // Example params
      traits: [{ code: 0, dataId: 1, value: 2 }],
      note: "This is a test note.",
      learnings: [
        {
          level: 1,
          skillId: 1,
          note: "skill note.",
        },
      ],
    };
    expect(isDataClass(class_)).toBe(true);
  });
});
