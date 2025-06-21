import { describe, test, expect } from "vitest";
import type { JSONSchemaType } from "ajv";
import type { AnyParamSchema } from "./compie";
import {
  compilePrimitiveFiled,
  compilePrimitiveFiledWithXParam,
} from "./compie";
import type { KindOfSelect } from "./core/primitiveParams";
import type { JSONSchemaTypeWithRpgParam } from "./core/x-rpg-param";
import { compileSelectField, compileSelectFieldWithXparam } from "./string";

const data: KindOfSelect = {
  kind: "select",
  default: "option1",
  desc: "A select field",
  text: "Select Field",
  options: [
    { value: "option1", option: "Option 1" },
    { value: "option2", option: "Option 2" },
  ],
};

describe("Select field schema generation - Basic", () => {
  const expectedSchema: JSONSchemaType<string> = {
    type: "string",
    default: data.default,
    title: data.text,
    description: data.desc,
    enum: ["option1", "option2"],
  };
  describe("generates schema for KindOfSelect", () => {
    test("compileSelectField", () => {
      const schema: AnyParamSchema = compileSelectField(data);
      expect(schema).toEqual(expectedSchema);
    });
    test("via union dispatcher (compilePrimitiveFiled)", () => {
      const schema: AnyParamSchema = compilePrimitiveFiled(data);
      expect(schema).toEqual(expectedSchema);
    });
  });
});

describe("Select field schema generation -  with x-rpg-param", () => {
  const expectedSchema: JSONSchemaTypeWithRpgParam<string> = {
    type: "string",
    default: data.default,
    title: data.text,
    description: data.desc,
    enum: ["option1", "option2"],
    "x-rpg-param": {
      kind: "select",
      data: {},
    },
  };
  describe("generates schema for KindOfSelect with x-rpg-param", () => {
    test("compileSelectFieldWithXparam", () => {
      const schema: AnyParamSchema = compileSelectFieldWithXparam(data);
      expect(schema).toEqual(expectedSchema);
    });
    test("via union dispatcher (compilePrimitiveFiledWithXParam)", () => {
      const schema: AnyParamSchema = compilePrimitiveFiledWithXParam(data);
      expect(schema).toEqual(expectedSchema);
    });
  });
});
