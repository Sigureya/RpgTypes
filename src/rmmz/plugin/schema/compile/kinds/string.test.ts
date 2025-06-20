import { describe, test, expect } from "vitest";
import type { JSONSchemaType } from "ajv";
import type { AnyParamSchema } from "./compie";
import {
  compilePrimitiveFiled,
  compilePrimitiveFiledWithXParam,
} from "./compie";
import type { KindOfString } from "./core/primitiveParams";
import type { JSONSchemaTypeWithRpgParam } from "./core/x-rpg-param";
import { compileStringField, compileStringFieldWithXparam } from "./string";

describe("String field schema generation", () => {
  describe("Basic string field", () => {
    const data: KindOfString = {
      kind: "string",
      default: "defaultString",
      desc: "A string field",
      text: "String Field",
    };
    const expectedSchema: JSONSchemaType<string> = {
      type: "string",
      default: "defaultString",
      title: "String Field",
      description: "A string field",
    };
    describe("generates schema for KindOfString", () => {
      test("compileStringField", () => {
        const schema: AnyParamSchema = compileStringField(data);
        expect(schema).toEqual(expectedSchema);
      });
      test("via union dispatcher (compilePrimitiveFiled)", () => {
        const schema: AnyParamSchema = compilePrimitiveFiled(data);
        expect(schema).toEqual(expectedSchema);
      });
    });
  });
  describe("String field with x-rpg-param", () => {
    const data: KindOfString = {
      kind: "string",
      default: "defaultString",
      desc: "A string field with x-rpg-param",
      text: "String Field with Xparam",
    };
    const expectedSchema: JSONSchemaTypeWithRpgParam<string> = {
      type: "string",
      default: "defaultString",
      title: "String Field with Xparam",
      description: "A string field with x-rpg-param",
      "x-rpg-param": {
        kind: "string",
        data: {},
      },
    };
    describe("generates schema for KindOfString with x-rpg-param", () => {
      test("compileStringFieldWithXparam", () => {
        const schema = compileStringFieldWithXparam(data);
        expect(schema).toEqual(expectedSchema);
      });
      test("via union dispatcher (compilePrimitiveFiledWithXParam)", () => {
        const schema = compilePrimitiveFiledWithXParam(data);
        expect(schema).toEqual(expectedSchema);
      });
    });
  });
});
