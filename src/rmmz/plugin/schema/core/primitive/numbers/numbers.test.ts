import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import {
  metaSchemaNumberRmmzParam,
  paramToNumberSchema,
  rmmzSchemaNumberParam,
} from "./numbers";
import type { RmmzParamCore_Number } from "./types";
describe("", () => {
  const ajv = new Ajv({ strict: true });
  const xxx = rmmzSchemaNumberParam();
  const validate = ajv.compile(xxx);
  describe("valid cases", () => {
    test("validates number parameter with default 0", () => {
      const mock: RmmzParamCore_Number = {
        type: "number",
        default: 0,
        digit: 0,
      };
      expect(mock).toSatisfy(validate);
    });

    test("validates number parameter with digit 2", () => {
      const mock: RmmzParamCore_Number = {
        type: "number",
        default: 0.01,
        digit: 2,
      };
      expect(mock).toSatisfy(validate);
    });

    test("validates number parameter with min and max", () => {
      const mock: RmmzParamCore_Number = {
        type: "number",
        default: 5,
        min: 0,
        max: 10,
      };
      expect(mock).toSatisfy(validate);
    });
  });
});

describe("paramToNumberSchema", () => {
  describe("valid cases", () => {
    const mock: RmmzParamCore_Number = {
      type: "number",
      default: 0,
      digit: 2,
    };
    const schema = paramToNumberSchema(mock);
    const ajv = new Ajv({
      strict: true,
      // Add custom keyword for RMMZ parameters
      keywords: [
        {
          keyword: "x-rmmzParam",
          metaSchema: metaSchemaNumberRmmzParam(),
        },
      ],
    });
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
