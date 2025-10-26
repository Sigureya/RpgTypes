import { describe, test, expect } from "vitest";
import { extractArrayParamValue } from "./buildPathRead";
import type {
  ArrayParamPairEx,
  NumberSequenceParamValues,
  StringSequenceParamValues,
} from "./types";

interface Person {
  name: string;
  age: number;
}

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
    const path = {
      path: "$.numberArray[*]",
      param: {
        name: "numberArray",
        attr: { kind: "number[]", default: [] },
      },
    } as const satisfies ArrayParamPairEx<ArrayMock>;
    const expected: NumberSequenceParamValues = {
      values: [233, 211, 209],
      valueKind: "number",
      param: path.param,
    };
    const result = extractArrayParamValue(mockData, path);
    expect(result).toEqual(expected);
  });
  test("items", () => {
    const path = {
      path: `$.items[*]`,
      param: {
        name: "items",
        attr: { kind: "item[]", default: [] },
      },
    } as const satisfies ArrayParamPairEx<ArrayMock>;
    const expected: NumberSequenceParamValues = {
      values: [1, 2, 3, 4, 5],
      valueKind: "number",
      param: path.param,
    };
    const result = extractArrayParamValue(mockData, path);
    expect(result).toEqual(expected);
  });

  test("string array", () => {
    const path = {
      path: "$.stringArray[*]",
      param: {
        name: "stringArray",
        attr: { kind: "string[]", default: [] },
      },
    } as const satisfies ArrayParamPairEx<ArrayMock>;
    const expected: StringSequenceParamValues = {
      values: ["a", "b", "c"],
      valueKind: "string",
      param: path.param,
    };
    const result = extractArrayParamValue(mockData, path);
    expect(result).toEqual(expected);
  });

  test("unmatched path", () => {
    const path = {
      path: "$.stringArray[*]",
      param: {
        name: "stringArray",
        attr: { kind: "string[]", default: [] },
      },
    } as const satisfies ArrayParamPairEx<ArrayMock>;

    const mock = {
      age: 30,
      name: "Alice",
    } as const satisfies Person;
    const expected: StringSequenceParamValues = {
      values: [],
      valueKind: "string",
      param: path.param,
    };
    const result = extractArrayParamValue(mock, path);
    expect(result).toEqual(expected);
  });
});
