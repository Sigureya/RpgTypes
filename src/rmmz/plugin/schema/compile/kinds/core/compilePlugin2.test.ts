import { test, expect, describe } from "vitest";
import { compilePluginAsArray } from "./compilePluginToArray";
import { parsePlugin } from "./parse/parse";
import type { ParsedPlugin } from "./parse/types";
import type { PluginTokens } from "./parse/types/types";
import type {
  PluginCommandSchemaArray,
  PluginParam,
  PluginStructSchemaArray,
} from "./types";
const mockTexts: ReadonlyArray<string> = [
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

const mockInput: PluginTokens = {
  params: [
    {
      name: "bool",
      attr: {
        kind: "boolean",
        default: "false",
        text: "autoBattle",
        on: "enabled",
        off: "disabled",
      },
    },
    {
      name: "num",
      attr: {
        default: "0",
        kind: "number",
        min: "0",
        max: "100",
      },
    },
  ],
  commands: [
    {
      command: "save",
      text: "writeSave",
      desc: "write Save File",
      args: [
        {
          name: "arg1",
          attr: {
            default: "123",
            //            desc: "load Save File",
            kind: "number",
            //          text: "arg1 text",
          },
        },
        {
          attr: {
            default: "abc",
            kind: "string",
          },
          name: "arg2",
        },
      ],
    },
    {
      command: "load",
      args: [
        {
          attr: {
            default: "456",
            desc: "load Save File",
            kind: "number",
            text: "arg1 text",
          },
          name: "arg1",
        },
        {
          attr: {
            default: "abc",
            kind: "string",
          },
          name: "arg2",
        },
      ],
    },
  ],
  structs: [
    {
      name: "Person",
      params: [
        {
          name: "name",
          attr: { default: "bob", desc: "This is the name", kind: "string" },
        },
        {
          name: "age",
          attr: { default: "20", kind: "number" },
        },
      ],
    },
  ],
};

describe("", () => {
  test("", () => {
    const src = mockTexts.join("\n");
    const result: ParsedPlugin = parsePlugin(src);
    expect(result).toMatchObject(mockInput);
  });
});

describe.skip("parsePlugin", () => {
  const src = mockTexts.join("\n");

  const parsed: ParsedPlugin = parsePlugin(src);
  test("params", () => {
    const expected: PluginParam[] = [
      {
        name: "bool",
        attr: {
          kind: "boolean",
          default: false,
          text: "autoBattle",
          on: "enabled",
          off: "disabled",
        },
      },
      {
        name: "num",
        attr: {
          default: 0,
          kind: "number",
          max: 100,
          min: 0,
        },
      },
    ];
    const result = compilePluginAsArray(parsed);
    expect(result.params).toEqual(expected);
  });
  test("commands", () => {
    const expected: PluginCommandSchemaArray[] = [
      {
        command: "save",
        text: "writeSave",
        desc: "write Save File",
        args: [
          { name: "arg1", attr: { kind: "number", default: 123 } },
          { name: "arg2", attr: { kind: "string", default: "abc" } },
        ],
      },
      {
        command: "load",
        text: "arg1 text",
        desc: "load Save File",
        args: [
          {
            name: "arg1",
            attr: {
              kind: "number",
              default: 456,
              desc: "load Save File",
              text: "arg1 text",
            },
          },
          { name: "arg2", attr: { kind: "string", default: "abc" } },
        ],
      },
    ];
    const result = compilePluginAsArray(parsed);
    expect(result.commands).toEqual(expected);
  });
  test("structs", () => {
    const expected: PluginStructSchemaArray[] = [
      {
        struct: "Person",
        params: [
          {
            name: "name",
            attr: { kind: "string", default: "bob", desc: "This is the name" },
          },
          { name: "age", attr: { kind: "number", default: 20 } },
        ],
      },
    ];
    const result = compilePluginAsArray(parsed);
    expect(result.structs).toEqual(expected);
  });
});
