import { describe, test, expect } from "vitest";
import { makeParamArray, paramArrayToObject } from "./paramArray";
import type { StatusParamObject } from "./types";
import type { ParamArray } from "./types";

describe("makeParamArray", () => {
  test("returns array with all zeros when no input is given", () => {
    expect(makeParamArray({})).toEqual([0, 0, 0, 0, 0, 0, 0, 0]);
  });

  test("returns correct array when all values are provided", () => {
    const input: StatusParamObject = {
      mhp: 10,
      mmp: 20,
      atk: 30,
      def: 40,
      mat: 50,
      mdf: 60,
      agi: 70,
      luk: 80,
    };
    expect(makeParamArray(input)).toEqual([10, 20, 30, 40, 50, 60, 70, 80]);
  });

  test("returns correct array when some values are provided", () => {
    expect(makeParamArray({ atk: 5, luk: 7 })).toEqual([
      0, 0, 5, 0, 0, 0, 0, 7,
    ]);
  });
});

describe("paramArrayToObject", () => {
  test("returns correct object from full array", () => {
    const arr: ParamArray = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(paramArrayToObject(arr)).toEqual({
      mhp: 1,
      mmp: 2,
      atk: 3,
      def: 4,
      mat: 5,
      mdf: 6,
      agi: 7,
      luk: 8,
    });
  });

  test("returns correct object from array with zeros", () => {
    const arr: ParamArray = [0, 0, 0, 0, 0, 0, 0, 0];
    expect(paramArrayToObject(arr)).toEqual({
      mhp: 0,
      mmp: 0,
      atk: 0,
      def: 0,
      mat: 0,
      mdf: 0,
      agi: 0,
      luk: 0,
    });
  });

  test("handles negative and mixed values", () => {
    const arr: ParamArray = [-1, 2, 0, -4, 5, 0, 7, -8];
    expect(paramArrayToObject(arr)).toEqual({
      mhp: -1,
      mmp: 2,
      atk: 0,
      def: -4,
      mat: 5,
      mdf: 0,
      agi: 7,
      luk: -8,
    });
  });
});

test("makeParamArray and paramArrayToObject are inverses", () => {
  const obj: StatusParamObject = {
    mhp: 11,
    mmp: 22,
    atk: 33,
    def: 44,
    mat: 55,
    mdf: 66,
    agi: 77,
    luk: 88,
  };
  const arr = makeParamArray(obj);
  expect(paramArrayToObject(arr)).toEqual(obj);
});
