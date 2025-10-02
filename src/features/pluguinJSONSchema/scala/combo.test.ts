import { describe, test, expect } from "vitest";
import type { ComboParam } from "@RpgTypes/rmmz/plugin/schema/compile";
import type { JSONSchemaType } from "ajv";
import {
  compilePrimitiveField,
  compilePrimitiveFieldWithXParam,
} from "../compileField";
import { compileComboField, compileComboFieldWithXparam } from "./combo";
import type { AnyParamSchema } from "./meta/anyParamSchema";
import type { JSONSchemaTypeWithRpgParam } from "./x-param/base/x-rpg-param";

const data: ComboParam = {
  kind: "combo",
  default: "defaultCombo",
  desc: "A combo field",
  text: "Combo Field",
  options: ["option1", "option2", "option3"],
};

describe("Combo field schema generation - Basic", () => {
  const expectedSchema: JSONSchemaType<string> = {
    type: "string",
    default: data.default,
    title: data.text,
    description: data.desc,
  };
  describe("generates schema for KindOfCombo", () => {
    test("compileComboField", () => {
      const schema: AnyParamSchema = compileComboField(data);
      expect(schema).toEqual(expectedSchema);
    });
    test("via union dispatcher (compilePrimitiveFiled)", () => {
      const schema: AnyParamSchema = compilePrimitiveField(data);
      expect(schema).toEqual(expectedSchema);
    });
  });
});

describe("Combo field schema generation - with x-rpg-param", () => {
  const expectedSchema: JSONSchemaTypeWithRpgParam<ComboParam> = {
    type: "string",
    default: data.default,
    title: data.text,
    description: data.desc,
    "x-rpg-param": {
      kind: "combo",
      data: {
        options: data.options,
      },
    },
  };
  describe("generates schema for KindOfCombo with x-rpg-param", () => {
    test("compileComboFieldWithXparam", () => {
      const schema: AnyParamSchema = compileComboFieldWithXparam(data);
      expect(schema).toEqual(expectedSchema);
    });
    test("via union dispatcher (compilePrimitiveFiledWithXParam)", () => {
      const schema: AnyParamSchema = compilePrimitiveFieldWithXParam(data);
      expect(schema).toEqual(expectedSchema);
    });
  });
});
