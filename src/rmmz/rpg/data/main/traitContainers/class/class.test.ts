import { describe, test, expect } from "vitest";
import { makeClassData, makeClassDataEx } from "./class";
import type { ClassParamGlowTable, Data_Class, Data_ClassBase } from "./types";

describe("Data_ClassBase", () => {
  const classBase: Data_ClassBase = {
    name: "Test Class",
    id: 1,
    expParams: [1, 2, 3],
    learnings: [
      {
        level: 1,
        skillId: 1,
        note: "Test learning",
      },
    ],
    traits: [],
    note: "note for class",
  };
  const expected: Data_Class = {
    name: "Test Class",
    id: 1,
    expParams: [1, 2, 3],
    learnings: [
      {
        level: 1,
        skillId: 1,
        note: "Test learning",
      },
    ],
    traits: [],
    note: "note for class",
    params: [
      [0], // maxhp
      [0], // maxmp
      [0], // atk
      [0], // def
      [0], // mat
      [0], // mdf
      [0], // agi
      [0], // luk
    ],
  };
  test("makeClassDataEx with default params", () => {
    const classData: Data_Class = makeClassDataEx(classBase);
    expect(classData).toEqual(expected);
  });
  test("makeClassData with default params", () => {
    const classData: Data_Class = makeClassData(classBase);
    expect(classData).toEqual(expected);
  });
});

describe("makeClassDataEx", () => {
  test("single", () => {
    const classData: Data_Class = makeClassDataEx({
      params: [
        {
          mhp: 80,
          atk: 135,
          def: 130,
          agi: 70,
          mdf: 90,
          mat: 95,
          mmp: 192,
          luk: 376,
        },
      ],
    });
    const params: ClassParamGlowTable = [
      [80], // maxhp
      [192], // maxmp
      [135], // atk
      [130], // def
      [95], // mat
      [90], // mdf
      [70], // agi
      [376], // luk
    ];
    expect(classData.params).toEqual(params);
  });
  test("with glowing params", () => {
    const classData: Data_Class = makeClassDataEx({
      params: [
        {
          mhp: 60,
          atk: 75,
          def: 100,
          mat: 55,
          mdf: 80,
          agi: 50,
          luk: 375,
          mmp: 191,
        },
        {
          mhp: 80,
          atk: 135,
          def: 130,
          agi: 70,
          mdf: 90,
          mat: 95,
          mmp: 192,
          luk: 376,
        },
      ],
    });
    const params: ClassParamGlowTable = [
      [60, 80], // maxhp
      [191, 192], // maxmp
      [75, 135], // atk
      [100, 130], // def
      [55, 95], // mat
      [80, 90], // mdf
      [50, 70], // agi
      [375, 376], // luk
    ];
    expect(classData.params).toEqual(params);
  });
});
