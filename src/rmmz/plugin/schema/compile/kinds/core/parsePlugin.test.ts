import { test, expect, describe } from "vitest";
import { parsePlugin } from "./parsePlugin";
import type { PluginCommandBody } from "./pluginJSONTypes";
import type { PrimitiveParam } from "./primitiveParams";

const mockTexts: string[] = [
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
];

describe("parsePlugin", () => {
  const result = parsePlugin(mockTexts.join("\n"));
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
      } satisfies PluginCommandBody,
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
      } satisfies PluginCommandBody,
    };
    expect(result.commands).toEqual(expected);
  });
});
