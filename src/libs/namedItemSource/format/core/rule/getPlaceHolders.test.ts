import { describe, test, expect } from "vitest";
import { getPlaceHolderKeys } from "./getPlaceHolders";
import type { FormatRule } from "./core";

interface ItemEffect {
  value1: number;
  value2: number;
  dataId: number;
  code: number;
}

interface TestCase<T> {
  caseName: string;
  rule: FormatRule<T>;
  expected: {
    keys: (keyof T)[];
    placeHolders: string[];
  };
}

const testGetPlaceHolderKeys = <T>({ caseName, expected, rule }: TestCase<T>) => {
  describe(caseName, () => {
    const keys = getPlaceHolderKeys(rule);
    test("should return correct keys", () => {
      expect(keys).toEqual(new Set([...expected.keys, ...expected.placeHolders]));
    });
  });
};

const runTest = <T>(caseName: string, cases: TestCase<T>[]) => {
  describe(caseName, () => {
    cases.forEach((testCase) => {
      testGetPlaceHolderKeys(testCase);
    });
  });
};

describe("getPlaceHolderKeys", () => {
  runTest<ItemEffect>("simple case", [
    {
      caseName: "empty rule",
      rule: {},
      expected: { keys: [], placeHolders: [] },
    },
    {
      caseName: "with single item mapper and no item mappers",
      rule: {
        placeHolder: {
          numbers: ["value1", "value2"],
        },
        itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" },
      },
      expected: {
        keys: ["value1", "value2"],
        placeHolders: ["name"],
      },
    },
    {
      caseName: "with multiple item mappers",
      rule: {
        placeHolder: {
          numbers: ["value1", "value2"],
        },
        itemMapper: { placeHolder: "name1", dataIdKey: "dataId", kindKey: "code" },
        itemMappers: [{ placeHolder: "name2", dataIdKey: "dataId", kindKey: "code" }],
      },
      expected: {
        keys: ["value1", "value2"],
        placeHolders: ["name1", "name2"],
      },
    },
  ]);
});
