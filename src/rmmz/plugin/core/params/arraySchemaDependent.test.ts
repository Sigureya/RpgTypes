import { describe, expect, test } from "vitest";
import { collectDependentStructNames } from "./arraySchemaDependent";
import type { PluginStructSchemaArrayEx } from "./types";
interface A {
  b: B;
}

interface B {
  c: C;
}

interface C {
  d: D;
}

interface D {
  data: number;
}

interface X {
  y: Y;
}

interface Y {
  z: Z;
}
interface Z {}

describe("Empty input tests", () => {
  test("returns empty set for empty input", () => {
    const result: Set<string> = collectDependentStructNames([], new Set());
    expect(result.size).toBe(0);
  });
  test("returns initial set when no schema", () => {
    const result: Set<string> = collectDependentStructNames(
      [],
      new Set(["A", "B", "C"])
    );
    expect(result).toEqual(new Set(["A", "B", "C"]));
  });
});

describe("ABCD struct dependency resolution", () => {
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
    params: [{ name: "d", attr: { kind: "struct", struct: "D" } }],
  };
  const schemaD: PluginStructSchemaArrayEx<D> = {
    struct: "D",
    params: [{ name: "data", attr: { kind: "number", default: 0 } }],
  };
  test("starting from D returns all ABCD", () => {
    const result: Set<string> = collectDependentStructNames(
      [schemaA, schemaB, schemaC, schemaD],
      new Set(["D"])
    );
    expect(result).toEqual(new Set(["A", "B", "C", "D"]));
  });
  test("starting from C returns ABC", () => {
    const result: Set<string> = collectDependentStructNames(
      [schemaA, schemaB, schemaC, schemaD],
      new Set(["C"])
    );
    expect(result).toEqual(new Set(["A", "B", "C"]));
  });
  test("starting from B returns AB", () => {
    const result: Set<string> = collectDependentStructNames(
      [schemaA, schemaB, schemaC, schemaD],
      new Set(["B"])
    );
    expect(result).toEqual(new Set(["A", "B"]));
  });
  test("starting from A returns only A", () => {
    const result: Set<string> = collectDependentStructNames(
      [schemaA, schemaB, schemaC, schemaD],
      new Set(["A"])
    );
    expect(result).toEqual(new Set(["A"]));
  });
});

describe("XYZ struct dependency resolution", () => {
  const schemaX: PluginStructSchemaArrayEx<X> = {
    struct: "X",
    params: [{ name: "y", attr: { kind: "struct", struct: "Y" } }],
  };
  const schemaY: PluginStructSchemaArrayEx<Y> = {
    struct: "Y",
    params: [{ name: "z", attr: { kind: "struct", struct: "Z" } }],
  };
  const schemaZ: PluginStructSchemaArrayEx<Z> = {
    struct: "Z",
    params: [],
  };
  test("starting from A returns only A", () => {
    const result: Set<string> = collectDependentStructNames(
      [schemaX, schemaY, schemaZ],
      new Set(["A"])
    );
    expect(result).toEqual(new Set(["A"]));
  });
  test("starting from Z returns XYZ", () => {
    const result: Set<string> = collectDependentStructNames(
      [schemaX, schemaY, schemaZ],
      new Set(["Z"])
    );
    expect(result).toEqual(new Set(["X", "Y", "Z"]));
  });
  test("starting from Y returns XY", () => {
    const result: Set<string> = collectDependentStructNames(
      [schemaX, schemaY, schemaZ],
      new Set(["Y"])
    );
    expect(result).toEqual(new Set(["X", "Y"]));
  });
});
