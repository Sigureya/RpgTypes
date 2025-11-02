import { test, expect, describe } from "vitest";
import { compilePluginToObject } from "./compilePlugin";
import type { PrimitiveParam } from "./params";
import type { PluginCommandBody, PluginStructBody } from "./pluginJSONTypes";

const mockTexts: string[] = [
  "/*:",

  "@param bool",
  "@type boolean",
  "@text autoBattle",
  "@default false",
  "@on enabled",
  "@off disabled",

  "@param num",
  "@type number",
  "@default 0",
  "@min 0",
  "@max 100",

  "@command save",
  "@text writeSave",
  "@desc write Save File",
  "@arg arg1",
  "@type number",
  "@default 123",
  "@arg arg2",
  "@type string",
  "@default abc",

  "@command load",
  "@arg arg1",
  "@text arg1 text",
  "@desc load Save File",
  "@type number",
  "* @default 456",
  "* @arg arg2",
  "* @type string",
  "* @default abc",
  "@help",
  "This is a mock plugin for testing.",
  "*/",
  `/*~struct~Person:`,

  "@param name",
  "@desc This is the name",
  "@type string",
  "@default bob",

  "@param age",
  "@type number",
  "@default 20",
  `*/`,
];

describe("parsePlugin", () => {
  const result = compilePluginToObject(mockTexts.join("\n"));
  test("should parse plugin annotations correctly", () => {
    expect(result.meta).toBeDefined();
  });
  test("should parse parameters correctly", () => {
    const expected: Record<string, PrimitiveParam> = {
      bool: {
        kind: "boolean",
        text: "autoBattle",
        default: false,
        on: "enabled",
        off: "disabled",
      },
      num: {
        kind: "number",
        default: 0,
        min: 0,
        max: 100,
      },
    };
    expect(result.params).toEqual(expected);
  });
  test("should parse commands correctly", () => {
    const expected: Record<string, PluginCommandBody> = {
      save: {
        text: "writeSave",
        desc: "write Save File",
        args: {
          arg1: {
            kind: "number",
            default: 123,
          },
          arg2: {
            kind: "string",
            default: "abc",
          },
        },
      },
      load: {
        args: {
          arg1: {
            text: "arg1 text",
            desc: "load Save File",
            kind: "number",
            default: 456,
          },
          arg2: { kind: "string", default: "abc" },
        },
      },
    };
    expect(result.commands).toEqual(expected);
  });
  test("should parse structs correctly", () => {
    const expected: Record<string, PluginStructBody> = {
      Person: {
        params: {
          name: {
            kind: "string",
            desc: "This is the name",
            default: "bob",
          },
          age: { kind: "number", default: 20 },
        },
      },
    };
    expect(result.structs).toEqual(expected);
  });
});
