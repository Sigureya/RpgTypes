import { describe, test, expect } from "vitest";
import type { JSONSchemaType } from "ajv";
import type { PluginStructType } from "./kinds/core/pluginEntryTypes";
import type { PluginMeta } from "./kinds/pluginMeta/compileOption";
import { compilePluginStruct } from "./struct";

interface StringTypes {
  select: string;
  file: string;
  combo: string;
  multiLIne: string;
  strList: string[];
  fileList: string[];
}
const titles: PluginMeta = {
  moduleName: "moduleName",
  author: "author",
};

describe("compilePluginStruct - string types", () => {
  const stringTypesStruct = {
    struct: "StringTypes",
    params: {
      select: {
        kind: "select",
        default: "option1",
        options: [
          { value: "val1", option: "Option 1" },
          { value: "val2", option: "Option 2" },
        ],
      },
      file: { kind: "file", dir: "img/pictures", default: "filename" },
      combo: {
        kind: "combo",
        default: "combo1",
        options: ["aaa", "bbb", "ccc"],
      },
      multiLIne: {
        kind: "multiline_string",
        default: "multiline\nstring",
      },
      strList: {
        kind: "string[]",
        default: ["str1", "str2", "str3"],
      },
      fileList: {
        kind: "file[]",
        dir: "img/pictures",
        default: ["file1.png", "file2.png"],
      },
    },
  } satisfies PluginStructType<StringTypes>;

  const expectedStringTypesSchema: JSONSchemaType<StringTypes> = {
    title: "StringTypes",
    type: "object",
    properties: {
      select: {
        type: "string",
        default: "option1",
        enum: ["val1", "val2"],
      },
      file: { type: "string", default: "filename" },
      combo: {
        type: "string",
        default: "combo1",
      },
      multiLIne: {
        type: "string",
        default: "multiline\nstring",
      },
      strList: {
        type: "array",
        items: { type: "string" },
        default: ["str1", "str2", "str3"],
      },
      fileList: {
        type: "array",

        items: { type: "string" },
        default: ["file1.png", "file2.png"],
      },
    },
    required: ["select", "file", "combo", "multiLIne", "strList", "fileList"],
    additionalProperties: false,
  };
  test("generates expected schema for all string-related fields", () => {
    const resultStringTypes = compilePluginStruct(
      titles,
      stringTypesStruct,
      {}
    );
    expect(resultStringTypes.schema).toEqual(expectedStringTypesSchema);
  });
});
