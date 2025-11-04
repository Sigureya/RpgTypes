import { describe, test, expect } from "vitest";
import { extractArrayParamValue } from "./extractParam";
import type { ArrayParamPairEx, ArrayPathPair } from "./types/query";
import type {
  NumberSequenceParamValues,
  StringSequenceParamValues,
} from "./types/result";

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

interface NestedMock {
  arrayMock: ArrayMock;
}

describe("extractArrayParamValue", () => {
  const mockData = {
    arrayMock: {
      numberArray: [233, 211, 209],
      stringArray: ["a", "b", "c"],
      files: ["face.png", "icon.png"],
      items: [1, 2, 3, 4, 5],
    },
  } as const satisfies NestedMock;

  test("number array", () => {
    const path: ArrayParamPairEx<ArrayMock> = {
      path: "$.numberArray[*]",
      param: {
        name: "numberArray",
        attr: { kind: "number[]", default: [] },
      },
    };
    const expected: NumberSequenceParamValues = {
      values: [233, 211, 209],
      valueKind: "number",
      param: {
        name: "numberArray",
        attr: { kind: "number[]", default: [] },
      },
    };
    const result = extractArrayParamValue(mockData.arrayMock, path);
    expect(result).toEqual(expected);
  });

  describe("items", () => {
    test("direct", () => {
      const path: ArrayParamPairEx<ArrayMock> = {
        path: `$.items[*]`,
        param: {
          name: "items",
          attr: { kind: "item[]", default: [] },
        },
      };
      const expected: NumberSequenceParamValues = {
        values: [1, 2, 3, 4, 5],
        valueKind: "number",
        param: {
          name: "items",
          attr: { kind: "item[]", default: [] },
        },
      };
      const result = extractArrayParamValue(mockData.arrayMock, path);
      expect(result).toEqual(expected);
    });
    test("nested", () => {
      const path = {
        path: `$.arrayMock.items[*]`,
        param: {
          name: "items",
          attr: { kind: "item[]", default: [] },
        },
      } as const satisfies ArrayPathPair;
      const expected = {
        values: [1, 2, 3, 4, 5],
        valueKind: "number",
        param: path.param,
      } as const satisfies NumberSequenceParamValues;
      const result = extractArrayParamValue(mockData, path);
      expect(result).toEqual(expected);
    });
  });

  describe("string array", () => {
    test("direct", () => {
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
      const result = extractArrayParamValue(mockData.arrayMock, path);
      expect(result).toEqual(expected);
    });
    test("nested", () => {
      const path: ArrayPathPair = {
        path: "$.arrayMock.stringArray[*]",
        param: {
          name: "stringArray",
          attr: { kind: "string[]", default: [] },
        },
      };
      const expected = {
        values: ["a", "b", "c"],
        valueKind: "string",
        param: path.param,
      };
      const result = extractArrayParamValue(mockData, path);
      expect(result).toEqual(expected);
    });
  });

  test("unmatched path", () => {
    const path: ArrayParamPairEx<ArrayMock> = {
      path: "$.stringArray[*]",
      param: {
        name: "stringArray",
        attr: { kind: "string[]", default: [] },
      },
    };
    const mock = {
      age: 30,
      name: "Alice",
    } as const satisfies Person;
    const expected: StringSequenceParamValues = {
      values: [],
      valueKind: "string",
      param: {
        name: "stringArray",
        attr: { kind: "string[]", default: [] },
      },
    };
    const result = extractArrayParamValue(mock, path);
    expect(result).toEqual(expected);
  });
});
