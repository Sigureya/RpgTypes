import { test, expect, describe } from "vitest";
import type { PluginCommand, PluginParam } from "./parsePlugin";
import { parsePlugin } from "./parseV2";

const mockTexts: string[] = [
  "@param bool",
  "@type boolean",
  "@text autoBattle",
  "@text dummyText",
  "@default false",
  "@on enabled",
  "@off disabled",
  "@on dummyOn",
  "@off dummyOff",

  "@param bool",
  "@text duplicate",
  "@desc this item ignores the previous",
  "@type number",
  "@default 0",

  "@param num",
  "@type number",
  "@default 0",
  "@min 0",
  "@max 100",

  "@param numArray",
  "@type number[]",
  `@default ["1", "2", "3"]`,
  "",

  "@param enemy",
  "@type enemy",
  "@default 1",

  "@param troop",
  "@text first troop",
  "@type troop",
  "@default 1",

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

  "@command randomItem",
  "@text randomItem",
  "@desc random Item",
  "@arg items",
  "@type item[]",
  "@default []",
  "@arg message",
  "@type string",
  "@default getItem",
];

describe("parsePlugin", () => {
  const result = parsePlugin(mockTexts.join("\n"));
  test("should parse plugin annotations correctly", () => {
    expect(result.meta).toBeDefined();
  });
  test("should parse parameters correctly", () => {
    const expected: PluginParam[] = [
      {
        name: "bool",
        attr: {
          kind: "boolean",
          text: "autoBattle",
          default: false,
          on: "enabled",
          off: "disabled",
        },
      },
      {
        name: "num",
        attr: {
          kind: "number",
          default: 0,
          min: 0,
          max: 100,
        },
      },
      {
        name: "numArray",
        attr: {
          kind: "number[]",
          default: [1, 2, 3],
        },
      },
      {
        name: "enemy",
        attr: {
          kind: "enemy",
          default: 1,
        },
      },
      {
        name: "troop",
        attr: {
          kind: "troop",
          text: "first troop",
          default: 1,
        },
      },
    ];
    expect(result.params).toEqual(expected);
  });
  test("should parse commands correctly", () => {
    const expected: PluginCommand[] = [
      {
        command: "save",
        text: "writeSave",
        desc: "write Save File",
        args: [
          {
            name: "arg1",
            attr: {
              kind: "number",
              default: 123,
            },
          },
          {
            name: "arg2",
            attr: {
              kind: "string",
              default: "abc",
            },
          },
        ],
      },
      {
        command: "load",
        args: [
          {
            name: "arg1",
            attr: {
              text: "arg1 text",
              desc: "load Save File",
              kind: "number",
              default: 456,
            },
          },
          {
            name: "arg2",
            attr: {
              kind: "string",
              default: "abc",
            },
          },
        ],
      },
      {
        command: "randomItem",
        text: "randomItem",
        desc: "random Item",
        args: [
          {
            name: "items",
            attr: {
              kind: "item[]",
              default: [],
            },
          },
          {
            name: "message",
            attr: {
              kind: "string",
              default: "getItem",
            },
          },
        ],
      },
    ];
    expect(result.commands).toEqual(expected);
  });
});
