import { describe, expect, test, vi } from "vitest";
import type {
  PluginSchema,
  AnyStringParam,
  PluginReplacePathData,
  PrimitiveParam,
} from "@sigureya/rmmz-plugin-schema";
import {
  createTextParamDictionary,
  createPluginParamDictionary,
} from "@sigureya/rmmz-plugin-schema";

type Plugin = Pick<PluginSchema, "schema" | "pluginName">;
const mockAnyParam: AnyStringParam = {
  kind: "any",
  default: "1,2,3",
};

describe("createTextParamDictionary", () => {
  describe("normal", () => {
    const schema: Plugin = {
      pluginName: "PluginA",
      schema: {
        commands: [
          {
            command: "TestCommand",
            args: [
              { name: "arg1", attr: { kind: "string", default: "" } },
              { name: "arg2", attr: { kind: "number", default: 0 } },
            ],
          },
        ],
        structs: [
          {
            struct: "Profile",
            params: [
              { name: "nickname", attr: { kind: "string", default: "" } },
              { name: "name", attr: { kind: "string", default: "" } },
              { name: "desc", attr: { kind: "string", default: "" } },
            ],
          },
        ],
        params: [
          { name: "title", attr: { kind: "string", default: "" } },
          { name: "names", attr: { kind: "string[]", default: [] } },
          { name: "anyParam", attr: mockAnyParam },
        ],
      },
    };
    test("collects only string and any params", () => {
      const anyFn = vi.fn((param: AnyStringParam) => param === mockAnyParam);
      const expected: PluginReplacePathData = {
        pluginName: "PluginA",
        paramsPath: [["title"], ["names", "[]"], ["anyParam"]],
        commands: [
          {
            commandName: "TestCommand",
            argsPath: [["arg1"]],
          },
        ],
      };
      const result = createTextParamDictionary(schema, anyFn);
      expect(result.commands).toEqual(expected.commands);
      expect(result.paramsPath).toEqual(expected.paramsPath);
      expect(anyFn).toHaveBeenCalledWith(mockAnyParam, "anyParam");
      expect(anyFn).toHaveBeenCalledTimes(1);
    });
  });
  describe("non text params", () => {
    const schema: Plugin = {
      pluginName: "PluginB",
      schema: {
        commands: [
          {
            command: "TestCommand",
            args: [
              { name: "arg1", attr: { kind: "number", default: 0 } },
              { name: "arg2", attr: { kind: "boolean", default: false } },
              {
                name: "arg3",
                attr: { kind: "file", default: "", dir: "pictures" },
              },
            ],
          },
        ],
        structs: [
          {
            struct: "vector2",
            params: [
              { name: "x", attr: { kind: "number", default: 0 } },
              { name: "y", attr: { kind: "number", default: 0 } },
            ],
          },
        ],
        params: [
          { name: "numberParam", attr: { kind: "number", default: 0 } },
          { name: "booleanParam", attr: { kind: "boolean", default: false } },
          {
            name: "fileParam",
            attr: { kind: "file", default: "", dir: "pictures" },
          },
          {
            name: "vectorParam",
            attr: {
              kind: "struct",
              struct: "vector2",
              default: { x: 0, y: 0 },
            },
          },
        ],
      },
    };
    test("returns empty paths when no string or any params are present", () => {
      const expected: PluginReplacePathData = {
        pluginName: "PluginB",
        paramsPath: [],
        commands: [],
      };
      const result = createTextParamDictionary(schema, () => {
        throw new Error("anyFn should not be called");
      });
      expect(result).toEqual(expected);
    });
    test("not called", () => {
      const anyFn = vi.fn(() => {
        throw new Error("anyFn should not be called");
      });
      createTextParamDictionary(schema, anyFn);
      expect(anyFn).not.toHaveBeenCalled();
    });
  });
  describe("any fn", () => {
    const schema: Plugin = {
      pluginName: "PluginAny",
      schema: {
        commands: [],
        structs: [],
        params: [
          { name: "anyParam1", attr: mockAnyParam },
          { name: "anyParam2", attr: mockAnyParam },
        ],
      },
    };
    test("filters any params based on the provided function", () => {
      const anyFn = vi.fn(
        (param: AnyStringParam, name: string) => name === "anyParam1",
      );
      const expected: PluginReplacePathData = {
        pluginName: "PluginAny",
        paramsPath: [["anyParam1"]],
        commands: [],
      };
      const result = createTextParamDictionary(schema, anyFn);
      expect(result).toEqual(expected);
      expect(anyFn).toHaveBeenCalledTimes(schema.schema.params.length);
      schema.schema.params.forEach((param) => {
        expect(anyFn).toHaveBeenCalledWith(param.attr, param.name);
      });
    });
    test("returns empty paramsPath if no any params pass the filter", () => {
      const anyFn = vi.fn(() => false);
      const expected: PluginReplacePathData = {
        pluginName: "PluginAny",
        paramsPath: [],
        commands: [],
      };
      const result = createTextParamDictionary(schema, anyFn);
      expect(result).toEqual(expected);
      expect(anyFn).toHaveBeenCalledTimes(schema.schema.params.length);
      schema.schema.params.forEach((param) => {
        expect(anyFn).toHaveBeenCalledWith(param.attr, param.name);
      });
    });
    test("returns all any params if all pass the filter", () => {
      const anyFn = vi.fn(() => true);
      const expected: PluginReplacePathData = {
        pluginName: "PluginAny",
        paramsPath: [["anyParam1"], ["anyParam2"]],
        commands: [],
      };
      const result = createTextParamDictionary(schema, anyFn);
      expect(result).toEqual(expected);
      expect(anyFn).toHaveBeenCalledTimes(schema.schema.params.length);
      schema.schema.params.forEach((param) => {
        expect(anyFn).toHaveBeenCalledWith(param.attr, param.name);
      });
    });
  });
  describe("any structs", () => {
    const schema: Plugin = {
      pluginName: "PluginStruct",
      schema: {
        structs: [
          {
            struct: "AnyStruct",
            params: [
              { name: "field1", attr: mockAnyParam },
              { name: "field2", attr: mockAnyParam },
            ],
          },
        ],
        params: [
          {
            name: "structParam",
            attr: { kind: "struct", struct: "AnyStruct", default: {} },
          },
          {
            name: "anyParam",
            attr: mockAnyParam,
          },
        ],
        commands: [
          {
            command: "anyCommand",
            args: [
              {
                name: "argStruct",
                attr: {
                  kind: "struct",
                  struct: "AnyStruct",
                  default: {},
                },
              },
              { name: "argAny", attr: { kind: "any", default: "" } },
            ],
          },
        ],
      },
    };
    describe("全部通すパターン", () => {
      const expected: PluginReplacePathData = {
        pluginName: "PluginStruct",
        paramsPath: [
          ["structParam", "field1"],
          ["structParam", "field2"],
          ["anyParam"],
        ],
        commands: [
          {
            commandName: "anyCommand",
            argsPath: [
              ["argStruct", "field1"],
              ["argStruct", "field2"],
              ["argAny"],
            ],
          },
        ],
      };
      test("判定関数が常にtrue", () => {
        const anyFn = vi.fn(() => true);
        const result: PluginReplacePathData = createTextParamDictionary(
          schema,
          anyFn,
        );
        expect(result).toEqual(expected);
        expect(anyFn).toHaveBeenCalledWith(mockAnyParam, "anyParam");
      });
      test("内部で使っている関数と同じ戻り値になる", () => {
        const result: PluginReplacePathData = createPluginParamDictionary(
          schema.pluginName,
          schema.schema,
        );
        expect(result).toEqual(expected);
      });
    });
    test("struct fields are included regardless of anyFn result", () => {
      const anyFn = vi.fn(() => false);
      const expected: PluginReplacePathData = {
        pluginName: "PluginStruct",
        paramsPath: [],
        commands: [],
      };
      const result = createTextParamDictionary(schema, anyFn);
      expect(result).toEqual(expected);
      expect(anyFn).toHaveBeenCalledWith(mockAnyParam, "anyParam");
    });
    test("struct fields are included regardless of anyFn result", () => {
      const anyFn = (attr: PrimitiveParam, name: string) => name === "field1";
      const expected: PluginReplacePathData = {
        pluginName: "PluginStruct",
        paramsPath: [["structParam", "field1"]],
        commands: [
          {
            commandName: "anyCommand",
            argsPath: [["argStruct", "field1"]],
          },
        ],
      };
      const result = createTextParamDictionary(schema, anyFn);
      expect(result.commands).toEqual(expected.commands);
      expect(result.paramsPath).toEqual(expected.paramsPath);
    });
    test("anyFn is applied only to top-level any params and command args, not struct fields", () => {
      const anyFn = (attr: PrimitiveParam, name: string) => name !== "field1";
      const expected: PluginReplacePathData = {
        pluginName: "PluginStruct",
        paramsPath: [["structParam", "field2"], ["anyParam"]],
        commands: [
          {
            commandName: "anyCommand",
            argsPath: [["argStruct", "field2"], ["argAny"]],
          },
        ],
      };
      const result = createTextParamDictionary(schema, anyFn);
      expect(result).toEqual(expected);
    });
  });
});
