import { describe, expect, test } from "vitest";
import type { PluginStructSchemaArray } from "@RpgTypes/rmmz/plugin";
import { structDep, createStructMap } from "./structDep";

const mockStructs: ReadonlyArray<PluginStructSchemaArray> = [
  {
    struct: "A",
    params: [{ name: "b", attr: { kind: "struct", struct: "B" } }],
  },
  {
    struct: "B",
    params: [{ name: "c", attr: { kind: "struct", struct: "C" } }],
  },
  {
    struct: "C",
    params: [{ name: "num", attr: { kind: "number", default: 0 } }],
  },
];

describe("createStructMap", () => {
  test("creates a map from struct name to struct definition", () => {
    const structMap = createStructMap(mockStructs);
    expect(structMap.size).toBe(mockStructs.length);
    expect(structMap.get("A")).toBe(mockStructs[0]);
    expect(structMap.get("B")).toBe(mockStructs[1]);
    expect(structMap.get("C")).toBe(mockStructs[2]);
  });
});

interface TestCase {
  caseName: string;
  input: string;
  expected: string[];
}

const runTestCases = (testCases: TestCase[]) => {
  const map = createStructMap(mockStructs);
  testCases.forEach(({ caseName, input, expected }) => {
    test(caseName, () => {
      const result = structDep(input, map);
      expect(result).toEqual(expected);
    });
  });
};

const testCases: TestCase[] = [
  {
    caseName: "Struct A depends on B and C",
    input: "A",
    expected: ["B", "C"],
  },
  {
    caseName: "Struct B depends on C",
    input: "B",
    expected: ["C"],
  },
  {
    caseName: "Struct C has no dependencies",
    input: "C",
    expected: [],
  },
];
describe("structDep", () => {
  runTestCases(testCases);
});
