import { describe, test, expect } from "vitest";
import type { JSONSchemaType } from "ajv";
import {
  compilePrimitiveField,
  compilePrimitiveFieldWithXParam,
} from "./compileField";
import type { JSONSchemaTypeWithRpgParam } from "./core/paramBase/x-rpg-param";
import type { NumberParam, NumberArrayParam } from "./core/primitiveParams";
import {
  compileNumberArrayField,
  compileNumberArrayFieldWithXParam,
  compileNumberField,
  compileNumberFieldWithXparam,
} from "./numbers";
import type { AnyParamSchema } from "./pluginMeta/anyParamSchema";

describe("Number field schema generation", () => {
  describe("Basic number field", () => {
    const data: NumberParam = {
      kind: "number",
      default: 42,
      desc: "A number field",
      text: "Number Field",
      parent: "parentStruct",
      decimals: 0,
    };
    const expectedSchema: JSONSchemaType<number> = {
      type: "integer",
      default: 42,
      title: "Number Field",
      description: "A number field",
    };
    describe("generates schema for KindOfNumber", () => {
      test("compileNumberField", () => {
        const schema: AnyParamSchema = compileNumberField(data);
        expect(schema).toEqual(expectedSchema);
      });
      test("via union dispatcher (compilePrimitiveFiled)", () => {
        const schema: AnyParamSchema = compilePrimitiveField(data);
        expect(schema).toEqual(expectedSchema);
      });
    });
  });

  describe("Number array field", () => {
    const data: NumberArrayParam = {
      kind: "number[]",
      default: [1, 2, 3],
      parent: "parentStruct",
      desc: "An array of numbers",
      text: "Number Array Field",
      decimals: 0,
    };
    const expectedSchema: JSONSchemaType<number[]> = {
      type: "array",
      items: { type: "integer" },
      default: [1, 2, 3],
      title: "Number Array Field",
      description: "An array of numbers",
    };
    describe("generates schema for KindOfNumberArray", () => {
      test("compileNumberArrayField", () => {
        const schema: AnyParamSchema = compileNumberArrayField(data);
        expect(schema).toEqual(expectedSchema);
      });
      test("via union dispatcher (compilePrimitiveFiled)", () => {
        const schema: AnyParamSchema = compilePrimitiveField(data);
        expect(schema).toEqual(expectedSchema);
      });
    });
  });

  describe("Number field with x-rpg-param extension", () => {
    const data: NumberParam = {
      kind: "number",
      default: 42,
      desc: "A number field with x-rpg-param",
      text: "Number Field with Xparam",
      decimals: 0,
    };
    const expectedXParam: JSONSchemaTypeWithRpgParam<NumberParam> = {
      type: "integer",
      default: 42,
      title: "Number Field with Xparam",
      description: "A number field with x-rpg-param",
      "x-rpg-param": {
        kind: "number",
        data: { decimals: 0 } satisfies Partial<NumberParam>,
      },
    };
    describe("generates schema with x-rpg-param for KindOfNumber", () => {
      test("compileNumberFieldWithXparam", () => {
        const schema: AnyParamSchema = compileNumberFieldWithXparam(data);
        expect(schema).toEqual(expectedXParam);
      });
      test("via union dispatcher (compilePrimitiveFiledWithXParam)", () => {
        const schema: AnyParamSchema = compilePrimitiveFieldWithXParam(data);
        expect(schema).toEqual(expectedXParam);
      });
    });
  });

  describe("Number array field with x-rpg-param extension", () => {
    const data: NumberArrayParam = {
      kind: "number[]",
      parent: "parentStruct",
      default: [1, 2, 3],
      desc: "An array of numbers with x-rpg-param",
      text: "Number Array Field with Xparam",
      decimals: 0,
    };
    const expectedXParam: JSONSchemaTypeWithRpgParam<NumberArrayParam> = {
      type: "array",
      items: { type: "integer" },
      default: [1, 2, 3],
      title: "Number Array Field with Xparam",
      description: "An array of numbers with x-rpg-param",
      "x-rpg-param": {
        kind: "number[]",
        parent: "parentStruct",
        data: { decimals: 0 } satisfies Partial<NumberArrayParam>,
      },
    };
    describe("generates schema with x-rpg-param for KindOfNumberArray", () => {
      test("compileNumberArrayFieldWithXParam", () => {
        const schema: AnyParamSchema = compileNumberArrayFieldWithXParam(data);
        expect(schema).toEqual(expectedXParam);
      });
      test("via union dispatcher (compilePrimitiveFiledWithXParam)", () => {
        const schema: AnyParamSchema = compilePrimitiveFieldWithXParam(data);
        expect(schema).toEqual(expectedXParam);
      });
    });
  });
});
