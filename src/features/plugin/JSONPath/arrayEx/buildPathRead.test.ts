import { describe, test, expect } from "vitest";
import type { ArrayParamTypes, StringArrayParam } from "@RpgTypes/rmmz/plugin";
import type { JSONPathType } from "../types";
import { aa } from "./buildPathRead";
import type { NNP, SSP } from "./types";

interface ArrayMock {
  numberArray: number[];
  stringArray: string[];
  files: string[];
  items: number[];
}

describe("aa", () => {
  const mockData = {
    numberArray: [233, 211, 209],
    stringArray: ["a", "b", "c"],
    files: ["face.png", "icon.png"],
    items: [1, 2, 3, 4, 5],
  } as const satisfies ArrayMock;

  test("number array", () => {
    const pathNum: JSONPathType<ArrayMock> = `$.numberArray[*]`;
    const paramAttr: ArrayParamTypes = {
      kind: "number[]",
      default: [],
    };
    const expected: NNP = {
      values: [233, 211, 209],
      valueKind: "number",
      param: { name: "numberArray", attr: paramAttr },
    };
    const result = aa(mockData, {
      path: pathNum,
      param: { name: "numberArray", attr: paramAttr },
    });
    expect(result).toEqual(expected);
  });
  test("items", () => {
    const pathNum: JSONPathType<ArrayMock> = `$.items[*]`;
    const paramAttr: ArrayParamTypes = {
      kind: "item[]",
      default: [],
    };
    const expected: NNP = {
      values: [1, 2, 3, 4, 5],
      valueKind: "number",
      param: { name: "items", attr: paramAttr },
    };
    const result = aa(mockData, {
      param: { name: "items", attr: paramAttr },
      path: pathNum,
    });
    expect(result).toEqual(expected);
  });

  test("string array", () => {
    const pathStr: JSONPathType<ArrayMock> = `$.stringArray[*]`;
    const paramAttr: StringArrayParam = {
      kind: "string[]",
      default: [],
    };
    const expected: SSP = {
      values: ["a", "b", "c"],
      valueKind: "string",
      param: { name: "stringArray", attr: paramAttr },
    };
    const result = aa(mockData, {
      path: pathStr,
      param: { name: "stringArray", attr: paramAttr },
    });
    expect(result).toEqual(expected);
  });
});
