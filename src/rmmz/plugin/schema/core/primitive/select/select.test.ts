import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import { makeSelectSchema } from "./select";
import type { RmmzParamCore_Select } from "./types";

describe("RmmzParam_Select JSON Schema Validation", () => {
  const ajv = new Ajv({ strict: true });
  const schema = makeSelectSchema();
  const validate = ajv.compile(schema);
  describe("valid cases", () => {
    test("validates select parameter with string options", () => {
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

    test("validates select parameter with number options", () => {
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
    test("validates select parameter with empty number options", () => {
      const mock: RmmzParamCore_Select<number> = {
        type: "select",
        default: 1,
        options: [],
      };
      expect(mock).toSatisfy(validate);
    });
    test("validates select parameter with empty string options", () => {
      const mock: RmmzParamCore_Select<string> = {
        type: "select",
        default: "text",
        options: [],
      };
      expect(mock).toSatisfy(validate);
    });
    describe("invalid cases", () => {
      test("rejects mixed string and number option values (default is string)", () => {
        const mock: RmmzParamCore_Select<string | number> = {
          type: "select",
          default: "text",
          options: [
            { value: 123, option: "number" },
            { value: "text", option: "string" },
          ],
        };
        expect(mock).not.toSatisfy(validate);
      });
      test("rejects mixed string and number option values (default is number)", () => {
        const mock: RmmzParamCore_Select<string | number> = {
          type: "select",
          default: 123,
          options: [
            { value: 123, option: "number" },
            { value: "text", option: "string" },
          ],
        };
        expect(mock).not.toSatisfy(validate);
      });

      test("rejects all number option values with string default", () => {
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
      test("rejects all string option values with number default", () => {
        const mock: RmmzParamCore_Select<string | number> = {
          type: "select",
          default: 5,
          options: [{ value: "5", option: "number" }],
        };
        expect(mock).not.toSatisfy(validate);
      });
    });
  });
});
