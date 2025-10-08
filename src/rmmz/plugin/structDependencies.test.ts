import { describe, expect, test } from "vitest";
import type { PluginStructSchemaArray, PrimitiveParam } from "./core";
import { structDependencies, createStructMap } from "./structDependencies";

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
  {
    struct: "X",
    params: [
      { name: "numArray", attr: { kind: "number[]", default: [12] } },
      { name: "y", attr: { kind: "struct[]", struct: "Y", default: [] } },
      { name: "c", attr: { kind: "struct", struct: "C" } },
    ],
  },
  {
    struct: "Y",
    params: [
      { name: "str", attr: { kind: "string", default: "" } },
      {
        name: "z",
        attr: { kind: "struct", struct: "Z" },
      },
    ],
  },
  {
    struct: "Z",
    params: [{ name: "num", attr: { kind: "number", default: 0 } }],
  },
];

describe("createStructMap", () => {
  test("creates a map from struct name to struct definition", () => {
    const structMap: Map<string, PrimitiveParam[]> =
      createStructMap(mockStructs);
    expect(structMap.size).toBe(mockStructs.length);
    expect(structMap.get("A")).toEqual<PrimitiveParam[]>([
      { kind: "struct", struct: "B" },
    ]);
    expect(structMap.get("B")).toEqual<PrimitiveParam[]>([
      { kind: "struct", struct: "C" },
    ]);
    expect(structMap.get("C")).toEqual<PrimitiveParam[]>([
      { kind: "number", default: 0 },
    ]);
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
      const result = structDependencies(input, map);
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
  {
    caseName: "Struct X depends on Y and C",
    input: "X",
    expected: ["Y", "Z", "C"],
  },
  {
    caseName: "Struct Y depends on Z",
    input: "Y",
    expected: ["Z"],
  },
  {
    caseName: "Struct Z has no dependencies",
    input: "Z",
    expected: [],
  },
];

describe("structDep", () => {
  runTestCases(testCases);
});
