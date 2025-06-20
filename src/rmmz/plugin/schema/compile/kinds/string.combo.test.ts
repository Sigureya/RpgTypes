import { describe, test, expect } from "vitest";
import type { JSONSchemaType } from "ajv";
import type { AnyParamSchema } from "./compie";
import {
  compilePrimitiveFiled,
  compilePrimitiveFiledWithXParam,
} from "./compie";
import type { KindOfCombo } from "./core/primitiveParams";
import type { JSONSchemaTypeWithRpgParam } from "./core/x-rpg-param";
import { compileComboField, compileComboFieldWithXparam } from "./string";

describe("Combo field schema generation", () => {
  describe("Basic", () => {
    const data: KindOfCombo = {
      kind: "combo",
      default: "defaultCombo",
      desc: "A combo field",
      text: "Combo Field",
      options: ["option1", "option2", "option3"],
    };
    const expectedSchema: JSONSchemaType<string> = {
      type: "string",
      default: "defaultCombo",
      title: "Combo Field",
      description: "A combo field",
    };
    describe("generates schema for KindOfCombo", () => {
      test("compileComboField", () => {
        const schema: AnyParamSchema = compileComboField(data);
        expect(schema).toEqual(expectedSchema);
      });
      test("via union dispatcher (compilePrimitiveFiled)", () => {
        const schema: AnyParamSchema = compilePrimitiveFiled(data);
        expect(schema).toEqual(expectedSchema);
      });
    });
  });
  describe("with x-rpg-param", () => {
    const data: KindOfCombo = {
      kind: "combo",
      default: "defaultCombo",
      desc: "A combo field with x-rpg-param",
      text: "Combo Field with Xparam",
      options: ["option1", "option2", "option3"],
    };
    const expectedSchema: JSONSchemaTypeWithRpgParam<string> = {
      type: "string",
      default: "defaultCombo",
      title: "Combo Field with Xparam",
      description: "A combo field with x-rpg-param",
      "x-rpg-param": {
        kind: "combo",
        data: {},
      },
    };
    describe("generates schema for KindOfCombo with x-rpg-param", () => {
      test("compileComboFieldWithXparam", () => {
        const schema: AnyParamSchema = compileComboFieldWithXparam(data);
        expect(schema).toEqual(expectedSchema);
      });
      test("via union dispatcher (compilePrimitiveFiledWithXParam)", () => {
        const schema: AnyParamSchema = compilePrimitiveFiledWithXParam(data);
        expect(schema).toEqual(expectedSchema);
      });
    });
  });
});
