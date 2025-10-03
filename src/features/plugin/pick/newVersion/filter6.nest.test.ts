import { describe, test, expect } from "vitest";
import type {
  PluginStructSchemaArray,
  PrimitiveParam,
  ScalaParam,
} from "@RpgTypes/rmmz";
import type { RRR } from "./filter6";
import { stst } from "./filter6";

const createMockStructsABCD = (
  param: PrimitiveParam
): PluginStructSchemaArray[] => {
  return [
    {
      struct: "ABCD",
      params: [
        {
          name: "value",
          attr: param,
        },
      ],
    },
    {
      struct: "A",
      params: [{ name: "abcd", attr: { kind: "struct", struct: "ABCD" } }],
    },
    {
      struct: "B",
      params: [{ name: "a", attr: { kind: "struct", struct: "A" } }],
    },
    {
      struct: "C",
      params: [{ name: "b", attr: { kind: "struct", struct: "B" } }],
    },
    {
      struct: "D",
      params: [{ name: "c", attr: { kind: "struct", struct: "C" } }],
    },
  ];
};
const createMockStructsXYZ = (
  param: PrimitiveParam
): PluginStructSchemaArray[] => {
  return [
    {
      struct: "XYZ",
      params: [{ name: "value", attr: param }],
    },
    {
      struct: "X",
      params: [{ name: "abcd", attr: { kind: "struct", struct: "XYZ" } }],
    },
    {
      struct: "Y",
      params: [{ name: "y", attr: { kind: "struct", struct: "Y" } }],
    },
    {
      struct: "C",
      params: [{ name: "z", attr: { kind: "struct", struct: "Z" } }],
    },
  ];
};

interface TestCase {
  paramABCD: ScalaParam;
  paramXYZ: ScalaParam;
}
const runTestCase = ({ paramABCD, paramXYZ }: TestCase) => {
  describe(`${paramABCD.kind} + ${paramXYZ.kind}`, () => {
    const structsABCD = createMockStructsABCD(paramABCD);
    const structsXYZ = createMockStructsXYZ(paramXYZ);
    const structs = [...structsABCD, ...structsXYZ];
    test("", () => {
      expect(paramABCD.kind).not.toBe(paramXYZ.kind);
    });

    test(`ABCD:${paramABCD.kind}`, () => {
      const result: RRR = stst(structs, [paramABCD.kind]);
      const expected: RRR = {
        structNames: new Set(["ABCD"]),
        structNests: new Set(["A", "B", "C", "D"]),
        singleKinds: new Set([paramABCD.kind]),
        arrayKinds: new Set([`${paramABCD.kind}[]` as const]),
      };
      expect(result.structNames).toEqual(expected.structNames);
      expect(result.singleKinds).toEqual(expected.singleKinds);
      expect(result.arrayKinds).toEqual(expected.arrayKinds);
    });
    test(`XYZ:${paramXYZ.kind}`, () => {
      const result: RRR = stst(structs, [paramXYZ.kind]);
      const expected: RRR = {
        structNames: new Set(["XYZ"]),
        structNests: new Set(["X", "Y", "Z"]),
        singleKinds: new Set([paramXYZ.kind]),
        arrayKinds: new Set([`${paramXYZ.kind}[]` as const]),
      };
      expect(result.structNames).toEqual(expected.structNames);
      expect(result.singleKinds).toEqual(expected.singleKinds);
      expect(result.arrayKinds).toEqual(expected.arrayKinds);
    });
  });
};

const testCases: TestCase[] = [
  {
    paramABCD: { kind: "number", default: 0 },
    paramXYZ: { kind: "string", default: "efg" },
  },
  {
    paramABCD: { kind: "string", default: "abc" },
    paramXYZ: { kind: "boolean", default: false },
  },
  {
    paramABCD: { kind: "variable", default: 0 },
    paramXYZ: { kind: "armor", default: 1 },
  },

  {
    paramABCD: { kind: "switch", default: 0 },
    paramXYZ: { kind: "weapon", default: 1 },
  },
];

describe("filter6.nest", () => {
  testCases.forEach(runTestCase);
});
