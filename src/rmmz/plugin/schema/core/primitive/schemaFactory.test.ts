import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import type { JSONSchemaType } from "ajv";
import { createAjv } from "./createAjv";
import type { RmmzParamCore_Number } from "./numbers";
import type { RmmzParamCore_Weapon } from "./rpgDataId";
import { makeDataIndexValueSchema, paramToNumberSchema } from "./schemaFactory";

describe("paramToNumberSchema", () => {
  describe("valid cases", () => {
    const mock: RmmzParamCore_Number = {
      type: "number",
      default: 0,
      digit: 2,
    };
    const schema = paramToNumberSchema(mock) satisfies JSONSchemaType<number>;
    const ajv: Ajv = createAjv();
    const validate = ajv.compile(schema);
    test("validates integer value", () => {
      expect(4).toSatisfy(validate);
    });
    test("validates float value with digit", () => {
      expect(3.14).toSatisfy(validate);
    });
    test("validates float value with digit", () => {
      expect(0.123).toSatisfy(validate);
    });
  });
});
describe("makeDataIndexValueSchema validation", () => {
  const mock: RmmzParamCore_Weapon = {
    type: "weapon",
    default: 15,
  };
  const schema = makeDataIndexValueSchema(mock);
  const ajv = new Ajv({ strict: false });
  const validate = ajv.compile(schema);
  test("should validate integer value", () => {
    expect(4).toSatisfy(validate);
  });
  test("should validate zero value", () => {
    expect(0).toSatisfy(validate);
  });
  test("should not validate float value", () => {
    expect(3.14).not.toSatisfy(validate);
  });
  test("should not validate negative value", () => {
    expect(-1).not.toSatisfy(validate);
  });
});
