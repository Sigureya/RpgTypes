import { describe, test, expect } from "vitest";
import type {
  PluginStructSchemaArray,
  PrimitiveParam,
  ScalaParam,
} from "@RpgTypes/rmmz/plugin";
import { collectStructsByKinds } from "./collectStructs";
import type { StructCollection } from "./types";

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
      const result: StructCollection = collectStructsByKinds(structs, [
        paramABCD.kind,
      ]);
      const expected: StructCollection = {
        matchedStructs: new Set(["ABCD"]),
        nestedStructs: new Set(["A", "B", "C", "D"]),
        targetKinds: new Set([paramABCD.kind]),
        targetArrayKinds: new Set([`${paramABCD.kind}[]` as const]),
      };
      expect(result.matchedStructs).toEqual(expected.matchedStructs);
      expect(result.targetKinds).toEqual(expected.targetKinds);
      expect(result.targetArrayKinds).toEqual(expected.targetArrayKinds);
    });
    test(`XYZ:${paramXYZ.kind}`, () => {
      const result: StructCollection = collectStructsByKinds(structs, [
        paramXYZ.kind,
      ]);
      const expected: StructCollection = {
        matchedStructs: new Set(["XYZ"]),
        nestedStructs: new Set(["X", "Y", "Z"]),
        targetKinds: new Set([paramXYZ.kind]),
        targetArrayKinds: new Set([`${paramXYZ.kind}[]` as const]),
      };
      expect(result.matchedStructs).toEqual(expected.matchedStructs);
      expect(result.targetKinds).toEqual(expected.targetKinds);
      expect(result.targetArrayKinds).toEqual(expected.targetArrayKinds);
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
