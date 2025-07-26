import { describe, expect, test } from "vitest";
import type { SourceIdentifier } from "@RpgTypes/libs";
import type { JSONSchemaType } from "ajv";
import type { X_RmmzParam } from "./core/paramBase/x-rpg-param";
import type { RpgDataIdParam, SystemDataIdParam } from "./core/primitiveParams";
import { lookupKind } from "./core/rpgData/lookup";
import { makeRpgIdField, makeRpgIdFieldWithXParam } from "./rpgDataKind";

interface TestCase {
  caseName: string;
  input: RpgDataIdParam | SystemDataIdParam;
  expected: JSONSchemaType<number>;
  expectedXParam: X_RmmzParam<SourceIdentifier>;
}

const testFn = ({ input, expected, caseName }: TestCase) => {
  describe(caseName, () => {
    test("makeIdField", () => {
      const result = makeRpgIdField(input);
      expect(result).toEqual(expected);
    });
    test("makeIdFieldWithXParam", () => {
      const result = makeRpgIdFieldWithXParam(input);
      expect(result).toMatchObject(expected);
    });
  });
};

const testCases: TestCase[] = [
  {
    caseName: "fullset",
    input: {
      kind: "item",
      default: 1,
      desc: "Test description",
      text: "Test text",
      parent: "Test parent",
    },
    expected: {
      type: "integer",
      title: "Test text",
      description: "Test description",
      default: 1,
    },
    expectedXParam: {
      kind: "item",
      parent: "Test parent",
      data: lookupKind("item"),
    },
  },
  {
    caseName: "minimal",
    input: {
      kind: "weapon",
      default: 0,
    },
    expected: {
      type: "integer",
      default: 0,
    },
    expectedXParam: {
      kind: "weapon",
      data: lookupKind("weapon"),
    },
  },
];

testCases.forEach(testFn);
