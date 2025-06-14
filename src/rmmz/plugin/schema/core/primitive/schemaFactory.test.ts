import { describe, test, expect } from "vitest";
import type Ajv from "ajv";
import type { JSONSchemaType } from "ajv";
import { createAjv } from "./createAjv";
import type { RmmzParamCore_Number } from "./numbers";
import { paramToNumberSchema } from "./schemaFactory";

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
