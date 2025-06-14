import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import { makeSelectSchema } from "./select";
import type { RmmzParamCore_Select } from "./types";

describe("RmmzParam_Select Schema", () => {
  const ajv = new Ajv({ strict: false });
  const schema = makeSelectSchema();
  const validate = ajv.compile(schema);
  describe("valid cases", () => {
    test("should validate a valid select parameter with string options", () => {
      const mock: RmmzParamCore_Select<string> = {
        type: "select",
        default: "option1",
        options: [
          { value: "a", option: "option1" },
          { value: "b", option: "option2" },
        ],
      };
      expect(mock).toSatisfy(validate);
    });

    test("should validate a valid select parameter with number options", () => {
      const mock: RmmzParamCore_Select<number> = {
        type: "select",
        default: 1,
        options: [
          { value: 1, option: "1" },
          { value: 2, option: "2" },
        ],
      };
      expect(mock).toSatisfy(validate);
    });
    describe("error case", () => {
      test("should validate a valid select parameter with mixed options", () => {
        const mock: RmmzParamCore_Select<string | number> = {
          type: "select",
          default: "option1",
          options: [
            { value: 123, option: "number" },
            { value: "text", option: "string" },
          ],
        };
        expect(mock).not.toSatisfy(validate);
      });
      test("", () => {
        const mock: RmmzParamCore_Select<string | number> = {
          type: "select",
          default: "string",
          options: [
            { value: 123, option: "number" },
            { value: 456, option: "number" },
          ],
        };
        expect(mock).not.toSatisfy(validate);
      });
    });
  });
});
