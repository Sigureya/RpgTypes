import { describe, test, expect } from "vitest";
import type { Data_Class } from "@RpgTypes/rmmz/rpg";
import { makeClassData, makeClassDataEx } from "@RpgTypes/rmmz/rpg";
const validate = require("./classValidate.cjs");

const isDataClass = (data: unknown): data is Data_Class => {
  return validate(data);
};

describe("isDataClass", () => {
  test("Valid class2", () => {
    const class_: Data_Class = {
      id: 1,
      name: "Warrior",
      expParams: [],
      params: [[0], [1], [2], [3], [4], [5], [6], [7]], // Example params
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
    expect(class_).toSatisfy(isDataClass);
  });
  test("Valid class created with makeClassData", () => {
    const class_: Data_Class = makeClassData({
      id: 1,
      name: "wizard",
      expParams: [],
      note: "This is a test note.",
      traits: [{ code: 0, dataId: 1, value: 2 }],
      learnings: [{ level: 1, skillId: 1, note: "skill note." }],
    });
    expect(class_).toSatisfy(isDataClass);
  });
  test("Valid class created with makeClassDataEx", () => {
    const class_: Data_Class = makeClassDataEx({
      params: [
        {
          mhp: 80,
          atk: 135,
          def: 120,
          mat: 100,
          mdf: 90,
          agi: 110,
          mmp: 192,
          luk: 376,
        },
        {
          mhp: 90,
          atk: 145,
          def: 130,
          mat: 110,
          mdf: 100,
          agi: 120,
          mmp: 292,
          luk: 476,
        },
      ],
    });
    expect(class_).toSatisfy(isDataClass);
  });
});
