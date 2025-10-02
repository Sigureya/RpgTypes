import { describe, test, expect } from "vitest";
import type { SelectParam } from "@RpgTypes/rmmz/plugin/schema/compile";
import type { JSONSchemaType } from "ajv";
import {
  compilePrimitiveField,
  compilePrimitiveFieldWithXParam,
} from "../compileField";
import type { AnyParamSchema } from "./meta/anyParamSchema";
import { compileSelectField, compileSelectFieldWithXparam } from "./select";
import type { JSONSchemaTypeWithRpgParam } from "./x-param/base/x-rpg-param";

const data = {
  kind: "select",
  default: "option1",
  desc: "A select field",
  text: "Select Field",
  options: [
    { value: "value1", option: "Option 1" },
    { value: "value2", option: "Option 2" },
  ],
} as const satisfies SelectParam;

describe("Select field schema generation - Basic", () => {
  const expectedSchema: JSONSchemaType<string> = {
    type: "string",
    default: data.default,
    title: data.text,
    description: data.desc,
    enum: ["value1", "value2"],
  };
  describe("generates schema for KindOfSelect", () => {
    test("compileSelectField", () => {
      const schema: AnyParamSchema = compileSelectField(data);
      expect(schema).toEqual(expectedSchema);
    });
    test("via union dispatcher (compilePrimitiveFiled)", () => {
      const schema: AnyParamSchema = compilePrimitiveField(data);
      expect(schema).toEqual(expectedSchema);
    });
  });
});

describe("Select field schema generation -  with x-rpg-param", () => {
  const expectedSchema: JSONSchemaTypeWithRpgParam<SelectParam> = {
    type: "string",
    default: data.default,
    title: data.text,
    description: data.desc,
    enum: ["value1", "value2"],
    "x-rpg-param": {
      kind: "select",
      data: {
        options: data.options,
      },
    },
  };
  describe("generates schema for KindOfSelect with x-rpg-param", () => {
    test("compileSelectFieldWithXparam", () => {
      const schema: AnyParamSchema = compileSelectFieldWithXparam(data);
      expect(schema).toEqual(expectedSchema);
    });
    test("via union dispatcher (compilePrimitiveFiledWithXParam)", () => {
      const schema: AnyParamSchema = compilePrimitiveFieldWithXParam(data);
      expect(schema).toEqual(expectedSchema);
    });
  });
});
