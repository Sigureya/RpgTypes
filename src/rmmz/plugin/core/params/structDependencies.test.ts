import { describe, expect, test } from "vitest";
import { structDependencies } from "./structDependencies";
import type {
  PluginStructSchemaArrayEx,
  PluginStructSchemaArray,
  PrimitiveParam,
} from "./types";

interface A {
  b: B;
}
interface B {
  c: C;
}

interface C {
  num: number;
}

interface X {
  numArray: number[];
  y: Y[];
  c: C;
}

interface Y {
  str: string;
  z: Z;
}

interface Z {
  num: number;
}

const schemaA: PluginStructSchemaArrayEx<A> = {
  struct: "A",
  params: [{ name: "b", attr: { kind: "struct", struct: "B" } }],
};

const schemaB: PluginStructSchemaArrayEx<B> = {
  struct: "B",
  params: [{ name: "c", attr: { kind: "struct", struct: "C" } }],
};

const schemaC: PluginStructSchemaArrayEx<C> = {
  struct: "C",
  params: [{ name: "num", attr: { kind: "number", default: 0 } }],
};

const schemaX: PluginStructSchemaArrayEx<X> = {
  struct: "X",
  params: [
    { name: "numArray", attr: { kind: "number[]", default: [12] } },
    { name: "y", attr: { kind: "struct[]", struct: "Y", default: [] } },
    { name: "c", attr: { kind: "struct", struct: "C" } },
  ],
};

const schemaY: PluginStructSchemaArrayEx<Y> = {
  struct: "Y",
  params: [
    { name: "str", attr: { kind: "string", default: "" } },
    { name: "z", attr: { kind: "struct", struct: "Z" } },
  ],
};

const schemaZ: PluginStructSchemaArrayEx<Z> = {
  struct: "Z",
  params: [{ name: "num", attr: { kind: "number", default: 0 } }],
};

const mockStructs: ReadonlyArray<PluginStructSchemaArray> = [
  schemaA,
  schemaB,
  schemaC,
  schemaX,
  schemaY,
  schemaZ,
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

const createStructMap = (
  structs: ReadonlyArray<PluginStructSchemaArray>
): Map<string, PrimitiveParam[]> => {
  return new Map(structs.map((s) => [s.struct, s.params.map((p) => p.attr)]));
};

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
