import { describe, test, expect } from "vitest";
import type { JSONSchemaType } from "ajv";
import { compileBooleanField, compileBooleanFieldWithXParam } from "./boolean";
import {
  compilePrimitiveField,
  compilePrimitiveFieldWithXParam,
} from "./compileField";
import type { JSONSchemaTypeWithRpgParam } from "./core/paramBase/x-rpg-param";
import type { BooleanParam } from "./core/primitiveParams";
import type { AnyParamSchema } from "./pluginMeta/anyParamSchema";

const mockData: BooleanParam = {
  kind: "boolean",
  default: true,
  desc: "A boolean field",
  text: "Boolean Field",
  off: "disabled",
  on: "enabled",
};

describe("Boolean field schema generation - Basic", () => {
  const expectedSchema: JSONSchemaType<boolean> = {
    type: "boolean",
    default: mockData.default,
    title: mockData.text,
    description: mockData.desc,
  };
  describe("generates schema for KindOfBoolean", () => {
    test("compileBooleanField", () => {
      const schema: AnyParamSchema = compileBooleanField(mockData);
      expect(schema).toEqual(expectedSchema);
    });
    test("via union dispatcher (compilePrimitiveFiled)", () => {
      const schema: AnyParamSchema = compilePrimitiveField(mockData);
      expect(schema).toEqual(expectedSchema);
    });
  });
});

describe("Boolean field schema generation - with x-rpg-param", () => {
  const expectedSchema: JSONSchemaTypeWithRpgParam<BooleanParam> = {
    type: "boolean",
    default: mockData.default,
    title: mockData.text,
    description: mockData.desc,
    "x-rpg-param": {
      kind: "boolean",
      data: {
        off: mockData.off,
        on: mockData.on,
      },
    },
  };
  describe("generates schema for KindOfBoolean with x-rpg-param", () => {
    test("compileBooleanFieldWithXparam", () => {
      const schema: AnyParamSchema = compileBooleanFieldWithXParam(mockData);
      expect(schema).toEqual(expectedSchema);
    });
    test("via union dispatcher (compilePrimitiveFiledWithXParam)", () => {
      const schema: AnyParamSchema = compilePrimitiveFieldWithXParam(mockData);
      expect(schema).toEqual(expectedSchema);
    });
    test("", () => {
      const data: BooleanParam = {
        kind: "boolean",
        default: true,
        desc: undefined,
        text: undefined,
        off: undefined,
        on: undefined,
      };
      const expectedSchema: JSONSchemaTypeWithRpgParam<BooleanParam> = {
        type: "boolean",
        default: data.default,
        "x-rpg-param": {
          kind: "boolean",
          data: {},
        },
      };
      const schema: AnyParamSchema = compileBooleanFieldWithXParam(data);
      expect(schema).toEqual(expectedSchema);
    });
  });
});
