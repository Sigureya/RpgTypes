import { describe, test, expect } from "vitest";
import type { JSONSchemaType } from "ajv";
import { withDefault, withTexts, compileArrayField } from "./basicMetaField";
import type { ArrayParamBase, ParamBase } from "./paramBase";

describe("withTexts", () => {
  test("should return an object with title and description if provided", () => {
    const kind: ParamBase = {
      kind: "mock",
      text: "Title",
      desc: "Description",
      parent: "parent",
    };
    const result = withTexts(kind);
    expect(result).toEqual({
      title: "Title",
      description: "Description",
    });
  });

  test("should return an empty object if no text or desc is provided", () => {
    const kind: ParamBase = {
      kind: "mock",
    };
    const result = withTexts(kind);
    expect(result).toEqual({});
  });
  test("should return only title if desc is not provided", () => {
    const kind: ParamBase = {
      kind: "mock",
      text: undefined,
      desc: undefined,
      parent: undefined,
    };
    const result = withTexts(kind);
    expect(result).toEqual({});
  });
});

describe("withDefault", () => {
  test("should return an object with default if value is defined", () => {
    const result = withDefault("defaultValue");
    expect(result).toEqual({ default: "defaultValue" });
  });

  test("should return an empty object if value is undefined", () => {
    const result = withDefault(undefined);
    expect(result).toEqual({});
  });
});

describe("compileArrayField", () => {
  const mockData: ArrayParamBase<string> = {
    kind: "string[]",
    default: ["item1", "item2"],
    text: "String Array Field",
    desc: "An array of strings",
    parent: "parentKind",
  };
  const itemSchema: JSONSchemaType<string> = {
    type: "string",
  };

  test("should compile array field schema with texts and default", () => {
    const expectedSchema: JSONSchemaType<string[]> = {
      type: "array",
      items: itemSchema,
      default: mockData.default,
      title: mockData.text,
      description: mockData.desc,
    };
    const result = compileArrayField(mockData, itemSchema);
    expect(result).toEqual(expectedSchema);
  });

  test("should compile array field schema without default", () => {
    const dataWithoutDefault: ArrayParamBase<string> = {
      kind: "string[]",
    };
    const expectedSchema: JSONSchemaType<string[]> = {
      type: "array",
      items: itemSchema,
    };
    const result = compileArrayField(dataWithoutDefault, itemSchema);
    expect(result).toEqual(expectedSchema);
  });
});
