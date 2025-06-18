import { describe, test, expect } from "vitest";
import type { JSONSchemaType } from "ajv";
import { compilePluginStruct } from "./compile";
import type { PluginStruct } from "./kinds";
import type { PluginTitles } from "./kinds/compileOption";

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
    test("log data", () => {
      expect(resultBool.logs[0].data).toBe(mockBoolStructFullset.params.bool);
    });
    test("log path", () => {
      expect(resultBool.logs[0].path).toBe("moduleName.Bool.bool");
    });
  });
});
