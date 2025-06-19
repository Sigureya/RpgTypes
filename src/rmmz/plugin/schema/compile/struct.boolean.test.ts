import { describe, test, expect } from "vitest";
import { Ajv, type JSONSchemaType } from "ajv";
import type { PluginTitles } from "./core/kinds/compileOption";
import type { PluginStruct } from "./core/kinds/plugin";
import { compilePluginStruct } from "./struct";

interface MockBoolean {
  bool: boolean;
}
const titles: PluginTitles = {
  moduleName: "moduleName",
  author: "author",
};

describe("compilePluginStruct - boolean", () => {
  describe("fullset", () => {
    const mockBoolStructFullset = {
      structName: "Bool",
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
    } as const satisfies PluginStruct<MockBoolean>;
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
    test("schema", () => {
      expect(resultBool.schema).toEqual(expectedBoolSchema);
    });
    describe("logs", () => {
      test("log data", () => {
        expect(resultBool.logs[0].data).toBe(mockBoolStructFullset.params.bool);
      });
      test("log path", () => {
        expect(resultBool.logs[0].path).toBe("moduleName.Bool.bool");
      });
    });
    describe("ajv validation", () => {
      const ajv = new Ajv({ strict: true });
      const validate = ajv.compile(resultBool.schema);
      test("", () => {
        expect({ bool: true } satisfies MockBoolean).toSatisfy(validate);
      });
      test("", () => {
        expect({ bool: false } satisfies MockBoolean).toSatisfy(validate);
      });
      test("invalid value", () => {
        expect({ bool: "true" }).not.toSatisfy(validate);
      });
      test("invalid type", () => {
        expect({ bool: 1 }).not.toSatisfy(validate);
      });
    });
  });
});
