import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import { rmmzSchemaNumberParam } from "./numbers";
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
