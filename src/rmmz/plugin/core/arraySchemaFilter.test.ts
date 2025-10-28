import { describe, expect, test } from "vitest";
import { filterStructs } from "./arraySchemaFilter";
import type {
  GG,
  PluginStructSchemaArray,
  PluginStructSchemaArray3,
} from "./arraySchemaTypes";
import type { NumberParam } from "./primitiveParams";
import { isNumberValueParam } from "./typeTest";

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
    const command: NumberParam = {
      kind: "number",
      default: 0,
    };
    expect(isNumberValueParam(command)).toBe(true);
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
  test("filterStructs", () => {
    const schemas: PluginStructSchemaArray[] = [
      schemaA,
      schemaB,
      schemaC,
      schemaD,
    ];
    const result = filterStructs(schemas, (param) =>
      isNumberValueParam(param.attr)
    );

    const expected: GG = {
      directs: [schemaD],
      indirects: [schemaA, schemaB, schemaC],
    };

    expect(result.directs).toEqual(expected.directs);
    expect(result.indirects).toEqual(expected.indirects);
  });
});

describe("filterStructs no match", () => {
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
  test("filterStructs", () => {
    const schemas: PluginStructSchemaArray[] = [schemaX, schemaY, schemaZ];
    const result: GG = filterStructs(schemas, (param) =>
      isNumberValueParam(param.attr)
    );
    const expected: GG = {
      directs: [],
      indirects: [],
    };
    expect(result.directs).toEqual(expected.directs);
    expect(result.indirects).toEqual(expected.indirects);
  });
});
