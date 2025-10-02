import { describe, test, expect } from "vitest";
import type { PluginStructType } from "@RpgTypes/rmmz/plugin/schema/compile/kinds/core/pluginEntryTypes";
import { Ajv, type JSONSchemaType } from "ajv";
import type { PluginMeta } from "./meta/compileOption";
import { compilePluginStruct } from "./struct";

interface MockBoolean {
  bool: boolean;
}
const titles: PluginMeta = {
  moduleName: "moduleName",
  author: "author",
};

describe("compilePluginStruct - boolean", () => {
  describe("fullset", () => {
    const mockBoolStructFullset = {
      struct: "Bool",
      params: {
        bool: {
          kind: "boolean",
          default: false,
          desc: "bool desc",
          text: "bool text",
          off: "off",
          on: "on",
        },
      },
    } as const satisfies PluginStructType<MockBoolean>;
    const expectedBoolSchema = {
      title: "Bool",
      type: "object",
      properties: {
        bool: {
          type: "boolean",
          default: false,
          title: "bool text",
          description: "bool desc",
        },
      },
      required: ["bool"],
      additionalProperties: false,
    } satisfies JSONSchemaType<MockBoolean>;
    const resultBool = compilePluginStruct(titles, mockBoolStructFullset, {});
    test("generates correct schema for boolean field", () => {
      expect(resultBool.schema).toEqual(expectedBoolSchema);
    });
    describe("logs", () => {
      test("logs correct data for boolean field", () => {
        expect(resultBool.logs[0].data).toBe(mockBoolStructFullset.params.bool);
      });
      test("logs correct path for boolean field", () => {
        expect(resultBool.logs[0].path).toBe("moduleName.Bool.bool");
      });
    });
    describe("ajv validation", () => {
      const ajv = new Ajv({ strict: true, code: { source: false } });
      const validate = ajv.compile(resultBool.schema);
      test("validates true value", () => {
        expect({ bool: true } satisfies MockBoolean).toSatisfy(validate);
      });
      test("validates false value", () => {
        expect({ bool: false } satisfies MockBoolean).toSatisfy(validate);
      });
      test("rejects invalid string value", () => {
        expect({ bool: "true" }).not.toSatisfy(validate);
      });
      test("rejects invalid number value", () => {
        expect({ bool: 1 }).not.toSatisfy(validate);
      });
    });
  });
});
