import { describe, expect, test } from "vitest";
import { findIndirectsFunctional } from "./arraySchemaFilter";
import type { PluginStructSchemaArray3 } from "./arraySchemaTypes";
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

describe("", () => {
  test("", () => {
    const result: Set<string> = findIndirectsFunctional([], new Set());
    expect(result.size).toBe(0);
  });
  test("", () => {
    const result: Set<string> = findIndirectsFunctional(
      [],
      new Set(["A", "B", "C"])
    );
    expect(result).toEqual(new Set(["A", "B", "C"]));
  });
});

describe("", () => {
  const schemaA: PluginStructSchemaArray3<A> = {
    struct: "A",
    params: [{ name: "b", attr: { kind: "struct", struct: "B" } }],
  };
  const schemaB: PluginStructSchemaArray3<B> = {
    struct: "B",
    params: [{ name: "c", attr: { kind: "struct", struct: "C" } }],
  };
  const schemaC: PluginStructSchemaArray3<C> = {
    struct: "C",
    params: [{ name: "d", attr: { kind: "struct", struct: "D" } }],
  };
  const schemaD: PluginStructSchemaArray3<D> = {
    struct: "D",
    params: [{ name: "data", attr: { kind: "number", default: 0 } }],
  };
  test("", () => {
    const result: Set<string> = findIndirectsFunctional(
      [schemaA, schemaB, schemaC, schemaD],
      new Set(["D"])
    );
    expect(result).toEqual(new Set(["A", "B", "C", "D"]));
  });
  test("", () => {
    const result: Set<string> = findIndirectsFunctional(
      [schemaA, schemaB, schemaC, schemaD],
      new Set(["C"])
    );
    expect(result).toEqual(new Set(["A", "B", "C"]));
  });
  test("", () => {
    const result: Set<string> = findIndirectsFunctional(
      [schemaA, schemaB, schemaC, schemaD],
      new Set(["B"])
    );
    expect(result).toEqual(new Set(["A", "B"]));
  });
  test("", () => {
    const result: Set<string> = findIndirectsFunctional(
      [schemaA, schemaB, schemaC, schemaD],
      new Set(["A"])
    );
    expect(result).toEqual(new Set(["A"]));
  });
});

describe("", () => {
  const schemaX: PluginStructSchemaArray3<X> = {
    struct: "X",
    params: [{ name: "y", attr: { kind: "struct", struct: "Y" } }],
  };
  const schemaY: PluginStructSchemaArray3<Y> = {
    struct: "Y",
    params: [{ name: "z", attr: { kind: "struct", struct: "Z" } }],
  };
  const schemaZ: PluginStructSchemaArray3<Z> = {
    struct: "Z",
    params: [],
  };
  test("", () => {
    const result: Set<string> = findIndirectsFunctional(
      [schemaX, schemaY, schemaZ],
      new Set(["A"])
    );
    expect(result).toEqual(new Set(["A"]));
  });
  test("", () => {
    const result: Set<string> = findIndirectsFunctional(
      [schemaX, schemaY, schemaZ],
      new Set(["Z"])
    );
    expect(result).toEqual(new Set(["X", "Y", "Z"]));
  });
  test("", () => {
    const result: Set<string> = findIndirectsFunctional(
      [schemaX, schemaY, schemaZ],
      new Set(["Y"])
    );
    expect(result).toEqual(new Set(["X", "Y"]));
  });
});
