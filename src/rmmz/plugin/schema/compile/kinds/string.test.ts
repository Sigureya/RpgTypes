import { describe, test, expect } from "vitest";
import type { JSONSchemaType } from "ajv";
import {
  compilePrimitiveField,
  compilePrimitiveFieldWithXParam,
} from "./compileField";
import type { JSONSchemaTypeWithRpgParam } from "./core/paramBase/x-rpg-param";
import type { StringParam } from "./core/primitiveParams";
import type { AnyParamSchema } from "./pluginMeta/anyParamSchema";
import { compileStringField, compileStringFieldWithXparam } from "./string";

const mockData: StringParam = {
  kind: "string",
  default: "defaultString",
  desc: "A string field",
  text: "String Field",
};

describe("String field schema generation - Basic", () => {
  const expectedSchema: JSONSchemaType<string> = {
    type: "string",
    default: mockData.default,
    title: mockData.text,
    description: mockData.desc,
  };
  describe("generates schema for KindOfString", () => {
    test("compileStringField", () => {
      const schema: AnyParamSchema = compileStringField(mockData);
      expect(schema).toEqual(expectedSchema);
    });
    test("via union dispatcher (compilePrimitiveFiled)", () => {
      const schema: AnyParamSchema = compilePrimitiveField(mockData);
      expect(schema).toEqual(expectedSchema);
    });
  });
});
describe("String field schema generation - with x-rpg-param", () => {
  const expectedSchema: JSONSchemaTypeWithRpgParam<typeof mockData> = {
    type: "string",
    default: mockData.default,
    title: mockData.text,
    description: mockData.desc,
    "x-rpg-param": {
      kind: "string",
      data: {},
    },
  };
  describe("generates schema for KindOfString with x-rpg-param", () => {
    test("compileStringFieldWithXparam", () => {
      const schema = compileStringFieldWithXparam(mockData);
      expect(schema).toEqual(expectedSchema);
    });
    test("via union dispatcher (compilePrimitiveFiledWithXParam)", () => {
      const schema = compilePrimitiveFieldWithXParam(mockData);
      expect(schema).toEqual(expectedSchema);
    });
  });
});
