import { test, expect, describe } from "vitest";
import { compilePluginAsArray } from "./compilePluginToArray";
import type { PluginTokens } from "./parse/types/types";
import type {
  PluginCommandSchemaArray,
  PluginSchemaArray,
  PluginStructSchemaArray,
} from "./types";

describe("parsePlugin", () => {
  test("params", () => {
    const input: PluginTokens = {
      commands: [],
      structs: [],
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
    };

    const expected: PluginSchemaArray = {
      commands: [],
      structs: [],
      params: [
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
      ],
    };
    const result = compilePluginAsArray(input);
    expect(result).toEqual(expected);
  });
  test("commands", () => {
    const input: PluginTokens = {
      params: [],
      structs: [],
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
                desc: "write Save File arg1",
                kind: "number",
                text: "arg1 text",
              },
            },
            {
              attr: { default: "abc", kind: "string" },
              name: "arg2",
            },
          ],
        },
        {
          command: "load",
          desc: "load Save File",

          args: [
            {
              name: "arg1",
              attr: {
                default: "456",
                desc: "load Save File",
                kind: "number",
                text: "arg1 text",
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
      ],
    };
    const result = compilePluginAsArray(input);
    const expectedSvaeCommand: PluginCommandSchemaArray = {
      command: "save",
      text: "writeSave",
      desc: "write Save File",
      args: [
        {
          name: "arg1",
          attr: {
            kind: "number",
            default: 123,
            text: "arg1 text",
            desc: "write Save File arg1",
          },
        },
        { name: "arg2", attr: { kind: "string", default: "abc" } },
      ],
    };
    expect(result.commands[0]).toEqual(expectedSvaeCommand);
    const expectedLoadCommand: PluginCommandSchemaArray = {
      command: "load",
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
    };
    expect(result.commands[1]).toEqual(expectedLoadCommand);
  });
  test("structs", () => {
    const input: PluginTokens = {
      params: [],
      commands: [],
      structs: [
        {
          name: "Person",
          params: [
            {
              name: "name",
              attr: {
                default: "bob",
                desc: "This is the name",
                kind: "string",
              },
            },
            {
              name: "age",
              attr: { default: "20", kind: "number" },
            },
          ],
        },
      ],
    };
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
    const result = compilePluginAsArray(input);
    expect(result.structs).toEqual(expected);
  });
});
