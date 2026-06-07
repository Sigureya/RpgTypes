import { describe, expect, test } from "vitest";
import type { PluginSchemaArray } from "@sigureya/rmmz-plugin-schema";
import { filterPluginSchemaStringParams } from "@sigureya/rmmz-plugin-schema";
describe("filterPluginSchemaStringParams", () => {
  test("returns only string params", () => {
    const schema: PluginSchemaArray = {
      commands: [],
      params: [
        {
          name: "stringParam",
          attr: { kind: "string", default: "" },
        },
        {
          name: "stringArrayParam",
          attr: { kind: "string[]", default: [] },
        },
        {
          name: "comboParam",
          attr: { kind: "combo", default: "", options: ["a", "b"] },
        },
        {
          name: "anyStringParam",
          attr: { kind: "any", default: "" },
        },
      ],
      structs: [],
    };
    const result = filterPluginSchemaStringParams(schema);
    expect(result).toEqual(schema);
  });
  test("structs", () => {
    const schema: PluginSchemaArray = {
      commands: [],
      params: [
        {
          name: "structParam",
          attr: { kind: "struct", struct: "TestStruct" },
        },
      ],
      structs: [
        {
          struct: "TestStruct",
          params: [
            {
              name: "stringParam",
              attr: { kind: "string", default: "" },
            },
          ],
        },
      ],
    };
    const result = filterPluginSchemaStringParams(schema);
    expect(result).toEqual(schema);
  });
  test("filters out non-string params", () => {
    const schema: PluginSchemaArray = {
      commands: [],
      structs: [],
      params: [
        {
          name: "numberParam",
          attr: { kind: "number", default: 0 },
        },
        {
          name: "booleanParam",
          attr: { kind: "boolean", default: false },
        },
        {
          name: "fileParam",
          attr: { kind: "file", default: "", dir: "img/picutres" },
        },
      ],
    };
    const result = filterPluginSchemaStringParams(schema);
    expect(result).toEqual({
      commands: [],
      structs: [],
      params: [],
    });
  });
});
