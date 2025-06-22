import { describe, expect, test } from "vitest";
import type { JSONSchemaType } from "ajv";
import type { SourceIdentifier } from "src/namedItemSource";
import type {
  KindOfRpgDataId,
  KindOfSystemDataId,
} from "./core/primitiveParams";
import { lookupKind } from "./core/rpgData/lookup";
import type { X_RmmzParamInput } from "./core/x-rpg-param";
import { makeIdField, makeIdFieldWithXParam } from "./rpgDataKind";

interface TestCase {
  caseName: string;
  input: KindOfRpgDataId | KindOfSystemDataId;
  expected: JSONSchemaType<number>;
  expectedXParam: X_RmmzParamInput<SourceIdentifier>;
}

const testFn = ({ input, expected, caseName }: TestCase) => {
  describe(caseName, () => {
    test("makeIdField", () => {
      const result = makeIdField(input);
      expect(result).toEqual(expected);
    });
    test("makeIdFieldWithXParam", () => {
      const result = makeIdFieldWithXParam(input);
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
